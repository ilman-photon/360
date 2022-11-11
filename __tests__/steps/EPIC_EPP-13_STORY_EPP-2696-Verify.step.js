import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import HomePage from "../../src/pages/patient";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";
import Appointment from "../../src/pages/patient/appointment";
import { Login } from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2696.feature"
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
  const response = await getServerSideProps({
    req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
    res: jest.fn(),
  });
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
  expect(response).toEqual({
    redirect: {
      destination: "/patient/login",
      permanent: false,
    },
  });
};

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  afterEach(cleanup);
  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the patient is able to view my upcoming Test & Procedure', ({ }) => {

  });

  test('Verify whether the patient is able to view my upcoming Test & Procedure.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('patient should see the Upcoming Test and Procedures.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the date of procedure is displaying correctly in the Date column.', ({ }) => {

  });

  test('Verify whether the date of procedure is displaying correctly in the Date column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Date of procedure is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Time of procedure is displaying correctly in the Time column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Time of procedure is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Patient\'s Name is displaying correctly in the Patient\'s Name column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Patient\'s Name is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Doctor\'s Name is displaying correctly in the Doctor\'s Name column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Doctor\'s Name is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Location\'s address is displaying correctly in the Location\'s address column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Location\'s address is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Location\'s Phone number is displaying correctly in the Location\'s address column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Location\'s Phone number is displaying correctly.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Direction\'s button is navigating to the Map screen', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    and('click the Direction button.', () => {
      defaultValidation()
    });

    then('patient should see the map of the location.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the Test or Procedure is displaying correctly in the Test/Procedure column', ({ }) => {

  });

  test('Verify whether the Test or Procedure is displaying correctly in the Test/Procedure column.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the Test or Procedure is displaying correctly in the Test', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696- Verify whether the message You have no upcoming tests and procedures is displaying when there is no Test or Procedure for the patient.', ({ }) => {

  });

  test('Verify whether the message You have no upcoming tests and procedures is displaying when there is no Test or Procedure for the patient.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('don\'t schedule any Test or Procedure.', () => {
      defaultValidation()
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('patient should see the message You have no upcoming tests and procedures.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-13_STORY_EPP-2696 -  Verify whether the patient is able to see the below mentioned details in Upcoming Test & Procedure page.', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    and('clicks  on login button.', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    and('navigate to upcoming Test and Procedure page.', () => {
      defaultValidation()
    });

    then('verify whether the below mentioned details are displaying.', (table) => {
      defaultValidation()
    });
  });
});
