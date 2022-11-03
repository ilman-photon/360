import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import constants, { TEST_ID } from "../../src/utils/constants";
import { act } from "react-dom/test-utils";
import mediaQuery from "css-mediaquery";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";
import { renderLogin } from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1588.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

const MOCK_APPOINTMENT = {
  appointmentList: [
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Paul Wagner Md",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Dr. Sonha Nguyen",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
  ],
};

const MOCK_PRESCRIPTION = {
  prescriptions: {
    glasses: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
    ],
    contacts: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
    ],
    medications: [
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
    ],
  },
};

const MOCK_SUGESTION = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};

const MOCK_SUGGESTION_DATA = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};

const navigateToPatientPortalHome = async () => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  Cookies.result = "true";
  const expectedResult = {
    ResponseCode: 2005,
    ResponseType: "success",
  };
  const domain = window.location.origin;
  mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
  mock
    .onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`)
    .reply(200, MOCK_SUGESTION);
  mock
    .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllAppointment`)
    .reply(200, MOCK_APPOINTMENT);
  mock
    .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`)
    .reply(200, MOCK_PRESCRIPTION);

  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  Cookies.result = false;
  act(() => {
    container = render(
      <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
    );
  });
  await waitFor(() => container.getByLabelText(/Appointments/i));
};

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  const navigateToPatientPortalHome = async () => {
    cleanup()
    let container;
    const element = document.createElement("div");
    const mock = new MockAdapter(axios);
    Cookies.result = "true";
    const expectedResult = {
      ResponseCode: 2005,
      ResponseType: "success",
    };
    const domain = window.location.origin;
    mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
    mock
      .onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`)
      .reply(200, MOCK_SUGESTION);
    mock
      .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllAppointment`)
      .reply(200, MOCK_APPOINTMENT);
    mock
      .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`)
      .reply(200, MOCK_PRESCRIPTION);

    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = false;
    act(() => {
      container = render(
        <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
      );
    });
    await waitFor(() => container.getByLabelText(/Appointments/i));
  };

  test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect city name', ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    const element = document.createElement("div");
    given("user launch the Patient Portal URL", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("a user provides a valid Email or Phone Number and password", () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and("user clicks on the Login button", () => {
      const loginButton = container.getByTestId(TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginButton);
    });

    then("user navigates to the Patient Portal home page", () => {
      navigateToPatientPortalHome();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      window.matchMedia = createMatchMedia("1920px");
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGGESTION_DATA);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
      await waitFor(() => {
        container.queryAllByText(/City, state/i)[0];
      });
    });

    and("enter the incorrect city name", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      fireEvent.change(locationField, { target: { value: "999999" } });
      expect("999999").toEqual(locationField.value);
    });

    and("click on Search", () => {
      const searchBtn = container.getByTestId(
        constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn
      );
      expect(searchBtn).toBeTruthy();
      fireEvent.click(searchBtn);
    });

    then(
      "user should see the error message No results found. Please try again with a different search criteria.",
      async () => {
        setTimeout(async () => {
          await waitFor(() => {
            container.getByText(/ No results found./i);
            expect(
              container.getByText(/ No results found./i)
            ).toBeInTheDocument();
          });
        }, 1000);
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect zip code', ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when("a user provides a valid Email or Phone Number and password", () => {
      defaultValidation();
    });

    and("user clicks on the Login button", async () => {
      container = await renderLogin()
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      const domain = window.location.origin;
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
      await waitFor(() => {
        container.queryAllByText(/City, state/i)[0];
      });
    });

    and("enter the incorrect Zipcode", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      fireEvent.change(locationField, { target: { value: "999999" } });
      expect("999999").toEqual(locationField.value);
    });

    and("click on Search", () => {
      const searchBtn = container.getByTestId(
        constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn
      );
      expect(searchBtn).toBeTruthy();
      fireEvent.click(searchBtn);
    });

    then(
      "user should see the error message No results found. Please try again with a different search criteria.",
      () => {
        setTimeout(async () => {
          await waitFor(() => {
            container.getByText(/ No results found./i);
            expect(
              container.getByText(/ No results found./i)
            ).toBeInTheDocument();
          });
        }, 1000);
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect state name', ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when("a user provides a valid Email or Phone Number and password", () => {
      defaultValidation();
    });

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      const domain = window.location.origin;
      window = Object.assign(window, { innerWidth: 700 });

      global.navigator.geolocation = mockGeolocation;
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      waitFor(() => {
        container.getByLabelText(/Schedule an eye exam/i);
      });
    });

    and("enter the incorrect State name", async () => {
      const locationField = container.queryAllByText(/City, state/i)[0];
      await act(() => {
        fireEvent.click(locationField);
      });
      waitFor(function () {
        container.getByLabelText(/Cancel/i);
        const locationField = container.queryAllByText(/City, state/i)[0];
        fireEvent.change(locationField, { target: { value: "Texas" } });
        fireEvent.submit(input);
      });
    });

    and("click on Search", () => {
      const searchBtn = container.getByTestId(
        constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn
      );
      expect(searchBtn).toBeTruthy();
      fireEvent.click(searchBtn);
    });

    then(
      "the user should see the error message No results found. Please try again with a different search criteria.",
      () => {
        setTimeout(async () => {
          await waitFor(() => {
            container.getByText(/ No results found./i);
            expect(
              container.getByText(/ No results found./i)
            ).toBeInTheDocument();
          });
        }, 1000);
      }
    );
  });
});
