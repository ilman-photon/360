import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Appointment, {
  getStaticProps,
} from "../../../src/pages/patient/appointment";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from "css-mediaquery";
import { act } from "react-dom/test-utils";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../../__mocks__/mockResponse";
import { TEST_ID } from "../../../src/utils/constants";
import { createMatchMedia } from "../../../__mocks__/commonSteps";
import { useRouter } from "next/router";
import { setFilterData } from "../../../src/store/appointment";

const useGeolocated = jest.spyOn(require("react-geolocated"), "useGeolocated");

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: ({ onClick, children, onLoad }) => {
    children[0]?.props.onClick();
    onLoad();
    return <div data-testid="gmaps-mock" onClick />;
  },
  Marker: ({ onClick }) => {
    return <div />;
  },
  MarkerF: ({ onClick }) => {
    return <div />;
  },
  InfoWindowF: ({ onClick }) => {
    return <div />;
  },
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("App", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };
    useRouter.mockReturnValue({
      query: {
        reschedule: false,
      },
      push: jest.fn(),
    });

    useGeolocated.mockReturnValue({
      coords: { latitude: "123", longitude: "456" },
      isGeolocationEnabled: true,
    });
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Kabupaten Bogor")
      .reply(200, submitFilter);
    mock.onGet("/api/dummy/notification").reply(200, []);
    mock
      .onGet(
        "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true"
      )
      .reply(200, {});
    window.matchMedia = createMatchMedia("1920px");
    global.navigator.geolocation = mockGeolocation;

    window.google = {
      maps: {
        DistanceMatrixService: jest.fn().mockReturnValue({
          getDistanceMatrix: (_, callback) => {
            callback(
              {
                originAddresses: ["1"],
                rows: [
                  {
                    elements: [
                      {
                        distance: {
                          text: "001",
                        },
                        duration: {
                          text: "0022",
                        },
                      },
                    ],
                  },
                ],
              },
              "OK"
            );
          },
        }),
        LatLngBounds: jest.fn().mockReturnValue({ extend: jest.fn() }),
        UnitSystem: {
          METRIC: "",
        },
      },
    };
    const server = await getStaticProps();
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment {...server.props} />)}
      </Provider>
    );
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders App unchanged", async () => {
    await waitFor(() => {
      container.getAllByText(/City, state, or zip code/i);
    });
    expect(
      container.getByText(/City, state, or zip code/i)
    ).toBeInTheDocument();
  });

  it("on render mobile view", async () => {
    window.matchMedia = createMatchMedia("700px");
    const server = await getStaticProps();
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment {...server.props} />)}
        </Provider>
      );
    });
    await waitFor(() => container.getAllByText(/Schedule an eye exam/i));
    expect(
      container.getAllByText(/Schedule an eye exam/i)[0]
    ).toBeInTheDocument();

    const locationField = container.getAllByText(/City, state, or zip/i)[1];
    fireEvent.change(locationField, { value: "Texas" });
    fireEvent.click(locationField);
    await waitFor(() => container.getByText(/Cancel/i));
    const cancelButton = container.getByText(/Cancel/i);
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const dateField = container.getAllByText(/Date/i)[1];
    fireEvent.click(dateField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const pusposeField = container.getAllByText(/Purpose of Visit/i)[1];
    fireEvent.click(pusposeField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const insuranceField = container.getAllByText(/Insurance Carrier/i)[1];
    fireEvent.click(insuranceField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const Searchbutton = container.getAllByTestId(
      TEST_ID.APPOINTMENT_TEST_ID.searchbtn
    )[0];
    fireEvent.click(Searchbutton);

    await waitFor(() => {
      container.getByText(/is required/i);
      expect(container.getByText(/is required/i)).toBeInTheDocument();
    });
  }, 30000);

  it("on render tablet view", async () => {
    await waitFor(() => container.getAllByTestId("gmaps-mock"));
    expect(container.getAllByTestId("gmaps-mock")[0]).toBeInTheDocument();
  });

  const flowSubmitFilter = async () => {
    const autocomplete = container.getByTestId(
      TEST_ID.APPOINTMENT_TEST_ID.locationInput
    );
    const input = within(autocomplete).getByRole("combobox", { hidden: true });
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "Use" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    await waitFor(() => container.getByDisplayValue("Kabupaten Bogor"));
    act(() => {
      fireEvent.click(
        container.getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)[0]
      );
    });
    await waitFor(() =>
      container.getAllByTestId("appointment_provider_profile_name")
    );
    await waitFor(() =>
      container.getAllByLabelText("Navigate to next week option")
    );
    fireEvent.click(
      container.getAllByLabelText("Navigate to next week option")[0]
    );
    await waitFor(() =>
      container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
    );
    fireEvent.click(
      container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
    );
  };

  it("on Submit filter", flowSubmitFilter, 20000);
  it("on Submit filter on tablet", async () => {
    window.matchMedia = createMatchMedia("1420px");
    cleanup();
    const server = await getStaticProps();
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment {...server.props} />)}
        </Provider>
      );
    });
    await flowSubmitFilter();
    // fireEvent.click(container.getAllByRole("tab")[1]);
    // await waitFor(() => container.getAllByTestId("gmaps-mock"));
  }, 20000);

  it("on Submit filter on mobile", async () => {
    window.matchMedia = createMatchMedia("700px");
    cleanup();
    const server = await getStaticProps();
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment {...server.props} />)}
        </Provider>
      );
    });
    fireEvent.click(container.getAllByTestId("open-filter-modal")[0]);
    await waitFor(() => container.getAllByTestId("dialogModal"));
    const autocomplete = container.getAllByTestId("dialogModal")[0];
    const input = within(autocomplete).getAllByRole("textbox")[0];
    fireEvent.change(input, { target: { value: "Kabupaten Bogor" } });
    fireEvent.keyDown(autocomplete, { key: "Enter" });

    act(() => {
      fireEvent.click(
        container.getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)[0]
      );
    });
    await waitFor(() =>
      container.getAllByTestId(
        TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.timeslotButton
      )
    );
  }, 20000);

  it("Handle filterSuggestionData purposeOfVisit", async () => {
    const server = await getStaticProps();
    await waitFor(() =>
      useRouter.mockReturnValue({
        query: {
          reschedule: true,
        },
      })
    );

    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment {...server.props} />)}
        </Provider>
      );
    });
    await waitFor(() =>
      container.getAllByLabelText("Navigate to next week option")
    );
  }, 20000);

  it("Is Loaded use effect", async () => {
    cleanup();
    window.google = {
      maps: {
        DistanceMatrixService: jest.fn().mockReturnValue({
          getDistanceMatrix: (_, callback) => {
            callback(_, "YES");
          },
        }),
        LatLngBounds: jest.fn().mockReturnValue({ extend: jest.fn() }),
        UnitSystem: {
          METRIC: "",
        },
      },
    };
    const server = await getStaticProps();
    await waitFor(() =>
      useRouter.mockReturnValue({
        query: {
          reschedule: true,
        },
      })
    );
    store.dispatch(setFilterData({ location: "Kabupaten Bogor" }));
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment {...server.props} />)}
        </Provider>
      );
    });
    await waitFor(() =>
      container.getAllByLabelText("Navigate to next week option")
    );
  });
});
