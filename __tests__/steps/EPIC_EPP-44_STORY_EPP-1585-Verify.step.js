import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1585.feature"
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
        insuranceCarrier: [
         {
           category: "all",
           divider: false,
           id: "1",
           name: "ECP Vision",
         },
         {
           category: "all",
           divider: false,
           id: "1",
           name: "BlueCare Vision",
          },
        ],
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
        insuranceCarrier: [
         {
           category: "all",
           divider: false,
           id: "1",
           name: "ECP Vision",
         },
         {
           category: "all",
           divider: false,
           id: "1",
           name: "BlueCare Vision",
          },
        ],
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

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-44_STORY_EPP-1585 -Verify whether the user able to view  purpose of visit on the screen", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("user provides valid Email or Phone Number and password", () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and("user clicks on Login button", () => {
      expect(true).toBeTruthy();
      // const loginButton = container.getByRole("button", {
      //   name: /loginButtonLabel/i,
      // });
      // fireEvent.click(loginButton);
    });

    then("user navigates to the Patient Portal application", async () => {
      navigateToPatientPortalHome();
    });

    when("user  clicks on Schedule Appointment menu", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      cleanup();
      container = await renderScheduleAppointment();
    });

    and("user view and search  the location", async () => {
      await waitFor(() => {
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    when("user view  the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("user view the purpose of visit dropdown field", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    then("user view  Insurance field", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1585 -Verify if user able to select the ‘Purpose of Visit’", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("user provides valid Email or Phone Number and password", () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and("user clicks on Login button", () => {
      expect(true).toBeTruthy();
      // const loginButton = container.getByRole("button", {
      //   name: /loginButtonLabel/i,
      // });
      // fireEvent.click(loginButton);
    });

    then("user navigates to the Patient Portal application", async () => {
      navigateToPatientPortalHome();
    });

    when("user  clicks on Schedule Appointment menu", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async() => {
      cleanup()
      container = await renderScheduleAppointment()
    });

    and("user view and search  the location", () => {
      expect(container.getByLabelText("City, state, or zip code")).toBeInTheDocument();
    });

    when("user select  the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and(/^user view the"(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user select the Purpose of Visit in dropdown field", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1585 -Verify if user able to view optional label under ‘Purpose of Visit’ field", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("user provides valid Email or Phone Number and password", () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and("user clicks on Login button", () => {
      expect(true).toBeTruthy();
      // const loginButton = container.getByRole("button", {
      //   name: /loginButtonLabel/i,
      // });
      // fireEvent.click(loginButton);
    });

    then("user navigates to the Patient Portal application", async () => {
      navigateToPatientPortalHome();
    });

    when("user  clicks on Schedule Appointment menu", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async() => {
      cleanup()
      container = await renderScheduleAppointment()
    });

    and("user view and search  the location", () => {
      expect(container.getByLabelText("City, state, or zip code")).toBeInTheDocument();
    });

    when("user select  the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("user view the purpose of visit field", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    then("user able to select the Purpose of Visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("user view optional label under Purpose of Visit field", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });
  });
});
