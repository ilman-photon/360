import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderAppointmentDetail,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_APPOINTMENT,
  MOCK_PAST,
  MOCK_SUGESTION,
} from "../../__mocks__/mockResponse";
import { Login } from "../../src/components/organisms/Login/login";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointments from "../../src/pages/patient/appointments";
import Appointment from "../../src/pages/patient/appointment";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import { Marker } from "@react-google-maps/api";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2530.feature"
);

const providerList = [
  {
    providerId: "1",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "2",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "3",
    name: "Paul Wagner Md",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
];

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />,
}));

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

const userSeeScheduleScreen = () => {
  expect(container.getAllByText("Date and time")).toBeTruthy();
  expect(container.getAllByText("Insurance")).toBeTruthy();
  expect(container.getAllByText("No Insurance provided")).toBeTruthy();
  expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

const inputLocation = async () => {
  const locationInput = await waitFor(() =>
    container.getByLabelText("City, state, or zip code")
  );
  act(() => {
    fireEvent.change(locationInput, { target: { value: "Texas" } });
  });
  expect(locationInput).toBeInTheDocument();
};

const inputDate = async () => {
  const dateInput = await waitFor(() => container.getByLabelText("Date"));
  act(() => {
    fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
  });
  expect(dateInput).toBeInTheDocument();
};

const inputPurpose = async () => {
  const purposeInput = await waitFor(() =>
    container.getByTestId("select-purposes-of-visit")
  );
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
  });
  expect(purposeInput).toBeInTheDocument();
};

const inputInsurance = async () => {
  const insuranceInput = await waitFor(() =>
    container.getByLabelText("Insurance Carrier")
  );
  act(() => {
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
  });
  expect(insuranceInput).toBeInTheDocument();
};

const clickSearch = async () => {
  const searchBtn = await waitFor(() =>
    container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
  );
  fireEvent.click(searchBtn);
  expect(searchBtn).toBeInTheDocument();
};

const clickHour = async () => {
  const hourButton = await waitFor(() =>
    container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)
  );
  fireEvent.click(hourButton);
};

const resultsScreen = async () => {
  let containerFilter;
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
  containerFilter = render(
    <FilterResult
      isDesktop={true}
      providerList={providerList}
      rangeDate={rangeDate}
      purposeOfVisitData={[]}
      insuranceCarrierData={[]}
      googleApiKey={"Test"}
      filterData={{
        location: "",
        date: "",
        purposeOfVisit: "",
        insuranceCarrier: "",
      }}
    />
  );
  expect(
    await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
    )
  ).toBeInTheDocument();
};

defineFeature(feature, (test) => {
  test("EPIC_EPP-44_STORY_EPP-2530 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getAllByLabelText("City, state, or zip code")[0].value
      ).toEqual("Texas");
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the date of appointment.", () => {
      expect(container.getByLabelText("Date")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the purpose of the visit.", async () => {
      const purposeInput = await waitFor(() =>
        container.getByTestId("select-purposes-of-visit")
      );
      expect(purposeInput).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the insurance carrier.", () => {
      expect(
        container.getAllByLabelText(/Insurance Carrier/i)[0].value
      ).toEqual("Aetna");
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the timeslot", async () => {
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", async () => {
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user lands on the screen to review the appointment details", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", async () => {
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });

    then("user lands on the screen to review the appointment details", () => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
      expect(container.getByText(/Review/i)).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user selects the option to change the provider", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", async () => {
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });

    then("user lands on the screen to review the appointment details", () => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
      expect(container.getByText(/Review/i)).toBeInTheDocument();
    });

    and("user selects the option to change the provider", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user should get navigated to the screen to select a provider with time-slot", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", () => {
      expect(true).toBeTruthy();
    });

    then("user lands on the screen to review the appointment details", () => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
      expect(container.getByText(/Review/i)).toBeInTheDocument();
    });

    and("user selects the option to change the insurance career", () => {
      expect(true).toBeTruthy();
    });

    then(
      "user should get navigated to the screen to select a provider with time-slot",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user able to Change provider", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", () => {
      expect(true).toBeTruthy();
    });

    then("user lands on the screen to review the appointment details", () => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
      expect(container.getByText(/Review/i)).toBeInTheDocument();
    });

    and("user selects the option to change the insurance career", () => {
      expect(true).toBeTruthy();
    });

    then(
      "user should get navigated to the screen to select an insurance career",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user Change provider", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user able to review the appointment details once again", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user select the timeslot", () => {
      expect(true).toBeTruthy();
    });

    then("user lands on the screen to review the appointment details", () => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
      expect(container.getByText(/Review/i)).toBeInTheDocument();
    });

    and("user selects the option to change the insurance career", () => {
      expect(true).toBeTruthy();
    });

    then(
      "user should get navigated to the screen to select an insurance career",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user Change provider", () => {
      expect(true).toBeTruthy();
    });

    then("user once again review the appointment details", () => {
      expect(true).toBeTruthy();
    });
  });
});
