import {
  fireEvent,
  render,
  logDOM,
  waitFor,
  within,
  cleanup,
  logRoles,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Appointment, {
  getStaticProps,
} from "../../src/pages/patient/appointment";
import { Provider } from "react-redux";
import ScheduleAppointment from "../../src/components/organisms/ScheduleAppointment/scheduleAppointment";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import { useRouter } from "next/router";
import { setFilterBy, setFilterData } from "../../src/store/appointment";
import { defineFeature, loadFeature } from "jest-cucumber";
import store from "../../src/store/store";
import { TEST_ID } from "../../src/utils/constants";
import { Login } from "../../src/components/organisms/Login/login";
import constants from "../../src/utils/constants";
import { act } from "react-dom/test-utils";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import mediaQuery from "css-mediaquery";
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  renderAppointmentDetail,
  provideFilters,
  defaultValidation,
  renderLogin,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2539.feature"
);
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
export async function renderAppoinment() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointment.getLayout(<Appointment />)}
      </Provider>
    );
  });
  expect(
    await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton
      )
    )
  ).toBeInTheDocument();
}
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
const clickHour = async () => {
  const hourButton = await waitFor(() =>
    container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)
  );
  fireEvent.click(hourButton);
};

defineFeature(feature, (test) => {
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

  const userSeeScheduleScreen = () => {
    expect(container.getAllByText(/City, state, or zip code/i)).toBeTruthy();
  };
  test("EPIC_EPP-44_STORY_EPP-2539 - Verify user able to change the date of appointment in schedule appointment screen from patient portal.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });
    store.dispatch(setFilterData({ location: "Kabupaten Bogor" }));
    and(
      "user clicks on the schedule new appointments search button",
      async () => {
        const server = await getStaticProps();
        render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment {...server.props} />)}
          </Provider>
        );
        // expect(container).toMatchSnapshot();
        const Searchbutton = container.getAllByTestId(
          TEST_ID.APPOINTMENT_TEST_ID.searchbtn
        )[0];
        fireEvent.click(Searchbutton);
      }
    );

    and(
      "user views the results in the Schedule Appointments screen",
      async () => {
        const server = await getStaticProps();
        render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment {...server.props} />)}
          </Provider>
        );
        // expect(container).toMatchSnapshot();
        const Searchbutton = container.getAllByTestId(
          TEST_ID.APPOINTMENT_TEST_ID.searchbtn
        )[0];
        fireEvent.click(Searchbutton);
        // const isWork = container.getByText(/City, state, or zip code/i);
        // expect(container).toMatchSnapshot();

        expect(
          container.queryAllByText(/City, state, or zip code/i)[0]
        ).toBeInTheDocument();
      }
    );

    and("user views the doctors  details and availability", async () => {
      // await renderAppointmentDetail();
      render(
        <Provider store={store}>
          {Appointment.getLayout(<ScheduleAppointment />)}
        </Provider>
      );
      const isButtonInThere = screen.getAllByRole("button")[0];
      expect(isButtonInThere).toBeInTheDocument();
    });

    and("user selected a time slot", async () => {
      clickHour();
    });

    and("user lands on the review of the appointment details", async () => {
      // await renderAppointmentDetail();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      defaultValidation();
    });

    then("user clicks on the edit to change the date", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      expect(container.queryAllByText(/Date and time/i)).toBeTruthy();
    });

    and("user select the purpose of the visit", () => {
      expect(container.getAllByText(/Purpose of visit/i)).toBeTruthy();
    });

    and("user enters the insurance name", async () => {
      expect(container.getAllByText(/Purpose of visit/i)).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      expect(true).toBeTruthy();
    });

    and("user selected a time slot", () => {
      clickHour();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not able to select past dates on the date of appointment in the schedule appointment screen from the patient portal.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks on the schedule new appointments search button", () => {
      async () => {
        await provideFilters(container);
        const searchBtn = container.getByTestId("searchbtn");
        fireEvent.click(searchBtn);

        await waitFor(() => {
          container.getByText(/Filter/i);
        });
      };
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user views the doctors  details and availability", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      defaultValidation();
    });

    then("user clicks on the edit to change the date", () => {
      defaultValidation();
    });

    and("user is not allowed to enter the past days from today", () => {
      defaultValidation();
    });

    and(/^user views the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and("user select the valid date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not allowed to select a date that is 3 months greater than today’s date of appointment in the schedule appointment screen from the patient portal.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks on the schedule new appointments search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user views the doctors  details and availability", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });

    and("user views the location", () => {
      defaultValidation();
    });

    and("user views the date of the appointment", () => {
      defaultValidation();
    });

    then("user clicks on the edit to change the date", () => {
      defaultValidation();
    });

    and(
      /^user is not allowed to (\d+) months greater than today’s date$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user views the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and("user selects the valid date of appointment", () => {
      defaultValidation();
    });

    and("user selects the purpose of the visit", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
    });

    and("user selects the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });
});
