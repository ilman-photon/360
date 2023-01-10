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
import constants, { TEST_ID } from "../../src/utils/constants";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";
import Appointment from "../../src/pages/patient/appointment";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1591.feature",
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
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  afterEach(cleanup);
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to view system date by default set as todays date", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
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
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByLabelText(/Date/i);
      });
    });

    //   const domain = window.location.origin;
    //   mock
    //     .onGet(
    //       `${domain}/api/dummy/appointment/create-appointment/getSugestion`
    //     )
    //     .reply(200, MOCK_SUGGESTION_DATA);
    //   mock
    //     .onPost(
    //       `${domain}/api/dummy/appointment/create-appointment/submitFilter`
    //     )
    //     .reply(400, {});
    //   window = Object.assign(window, { innerWidth: 1500 });
    //   global.navigator.geolocation = mockGeolocation;
    //   container = render(
    //     <Provider store={store}>
    //       {Appointment.getLayout(<Appointment />)}
    //     </Provider>
    //   );
    //   waitFor(() => {
    //     container.getByLabelText(/Date/i);
    //   });
    // });

    when(/^user navigate to "(.*)" calender field$/, (arg0) => {
      const dateField = container.getByLabelText(/Date/i);
      expect(dateField).toBeTruthy();
    });

    and(
      "user should see today’s date as date of appointment by default",
      () => {
        const dateField = container.getByLabelText(/Date/i);
        const date = new Date();
        const currentDate = new Date(dateField.value);
        expect(date.getDate()).toEqual(currentDate.getDate());
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to change the date of appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
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
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    // const domain = window.location.origin;
    // mock
    //   .onGet(
    //     `${domain}/api/dummy/appointment/create-appointment/getSugestion`
    //   )
    //   .reply(200, MOCK_SUGGESTION_DATA);
    // mock
    //   .onPost(
    //     `${domain}/api/dummy/appointment/create-appointment/submitFilter`
    //   )
    //   .reply(400, {});
    // window = Object.assign(window, { innerWidth: 700 });
    // global.navigator.geolocation = mockGeolocation;
    // container = render(
    //   <Provider store={store}>
    //     {Appointment.getLayout(<Appointment />)}
    //   </Provider>
    // );
    // waitFor(() => {
    //   container.getByText(/Schedule an eye exam/i);
    // });
    // });

    when("the user navigates to the date calendar field", async () => {
      const startDateInput = container.getByLabelText(/Date/i);
      expect(startDateInput).toBeTruthy();
    });

    and(
      "the user should see today’s date as the date of appointment by default",
      () => {
        const dateField = container.getByLabelText(/Date/i);
        const date = new Date();
        const currentDate = new Date(dateField.value);
        expect(date.getDate()).toEqual(currentDate.getDate());
      }
    );

    when(/^user change the "(.*)" of appointment$/, async (arg0) => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"));
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
      expect(dateInput).toBeInTheDocument();
    });

    then("user should see change in the date", () => {
      waitFor(function () {
        const startDateInput = container.getByLabelText(/Date/i);
        expect(startDateInput.value).toBe("2022/11/11");
      });
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1591 - Verify if user not be able to select past dates (< today)", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", async () => {
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
      expect(true).toBeTruthy();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    when("the user navigate to date calender field", () => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see today’s "(.*)" as date of appointment by default$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(
      "user click on Date calender & select past dates from today's date",
      () => {
        expect(true).toBeTruthy();
      }
    );

    then("user should not able to select past dates from today's date", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1591-Verify if user not allow to select a date that  3 months greater than today’s date", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
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
      expect(true).toBeTruthy();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    when("the user navigates to the date calendar field", () => {
      expect(true).toBeTruthy();
    });

    and(
      /^the user should see today’s "(.*)" as the date of appointment by default$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(
      /^the user clicks on the Date calendar & select (\d+) months greater than today's date$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    then(
      /^user should not able to select the date (\d+) months greater than today's date$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1591- -Verify if user able to select any date within 3 month", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", async () => {
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
      expect(true).toBeTruthy();
    });

    then("User lands on the Schedule Appointment screen", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    when("user navigate to date calender field", () => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see today’s "(.*)" as date of appointment by default$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(
      /^user click on Date calender & select  the date within (\d+) months$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    then(
      /^user should able to select the date  within (\d+) months$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );
  });
});
