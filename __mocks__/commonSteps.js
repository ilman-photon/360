import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../src/pages/patient/login";
import "@testing-library/jest-dom";
import store from "../src/store/store";
import { TEST_ID } from "../src/utils/constants";
import ForgotPasswordPage from "../src/pages/patient/forgot-password";
import Appointment from "../src/pages/patient/appointment/index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from "css-mediaquery";
import FilterResult from "../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointment from "../src/pages/patient/schedule-appointment/index";
import HomePage, { getStaticProps } from "../src/pages/patient";
import Cookies from "universal-cookie";
import App from "../src/pages/_app";
import CreateAccountPage from "../src/pages/patient/auth/create-account";
import { renderWithProviders } from "../__tests__/src/utils/test-util";
import {
  TEMP_DATA_CONTACTS,
  TEMP_DATA_GLASSES,
  TEMP_DATA_MEDICATION,
} from "./component-mock";
import {
  mockAppointmentTypes,
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
  submitFilter,
  upcomingResponse,
} from "./mockResponse";
jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

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

const mock = new MockAdapter(axios);

export function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}
export async function renderLogin() {
  let container;
  act(() => {
    container = renderWithProviders(<Login />);
  });
  await waitFor(() => container.getAllByTestId(TEST_ID.LOGIN_TEST_ID.loginBtn));
  return container;
}
export async function renderForgotPassword() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
      </Provider>
    );
  });
  await waitFor(() => container.getByLabelText(/usernamePlaceHolder/i));
  return container;
}
export async function clickContinueForgot(container, mock) {
  const expectedResult = {
    ResponseCode: 1000,
    ResponseType: "success",
    SecurityQuestions: [
      {
        "Where did you go the first time you flew on a plane?": "America",
        "Who is your all-time favorite movie character": "Peter",
        "In what city or town did your parents meet?": "Berlin",
      },
    ],

    PreferredComunication: "Both",
  };
  mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
  act(() => {
    const button = container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn);
    fireEvent.click(button);
  });
  await waitFor(() => container.getByText("or"));
  return container;
}

export async function renderScheduleAppointment() {
  let container;
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });
  await waitFor(() => container.getByText("Purpose of Visit"));
  expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  return container;
}

export async function renderResultsScreen() {
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
  let container;
  container = render(
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
      container.getByTestId(TEST_ID.APPOINTMENT_TEST_ID.FILTER_RESULT.container)
    )
  ).toBeInTheDocument();
}

export async function renderAppointmentDetail() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointment.getLayout(<ScheduleAppointment />)}
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

export async function navigateToPatientPortalHome() {
  const mock = new MockAdapter(axios);
  mock.reset();
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  Cookies.result = "true";
  mock
    .onPut("/ecp/appointments/available-slot?searchText=Texas")
    .reply(200, submitFilter);
  mock
    .onGet(`/ecp/appointments/appointment-types`)
    .reply(200, mockAppointmentTypes);
  const userData = JSON.parse(localStorage.getItem("userData"));
  mock
    .onGet(new RegExp(`/ecp/appointments/${userData?.patientId}/upcoming`))
    .reply(200, upcomingResponse);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}`)
    .reply(200, prescriptionMedication);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}/getGlassesData`)
    .reply(200, prescriptionGlasses);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}/getContactsData`)
    .reply(200, prescriptionContact);

  let container;
  const props = await getStaticProps();
  act(() => {
    container = render(
      <Provider store={store}>
        {HomePage.getLayout(<HomePage {...props} />)}
      </Provider>
    );
  });
  await waitFor(() => container.getAllByText(/Prescribed by/i));
  return { ...container, mock };
}

export async function landOnCreateAccountPage() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {CreateAccountPage.getLayout(<CreateAccountPage />)}
      </Provider>
    );
  });
  await waitFor(() =>
    container.getByTestId(TEST_ID.REGISTER_TEST_ID.firstname)
  );
  return container;
}

export async function doLogin(mock, container) {
  const expectedResult = {
    ResponseCode: 2000,
    ResponseType: "success",
    userType: "patient",
  };
  mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  const usernameField = container.getByLabelText("emailUserLabel");
  const passwordField = container.getByLabelText("passwordLabel");
  fireEvent.change(usernameField, {
    target: { value: "patient1@email.com" },
  });
  fireEvent.change(passwordField, { target: { value: "Admin@123" } });
  expect(usernameField.value).toEqual("patient1@email.com");
  expect(passwordField.value).toEqual("Admin@123");
}
export const provideFilters = (container) => {
  inputLocation(container);
  inputPurpose(container);
};

export const inputLocation = async (container) => {
  await waitFor(() => container.getByLabelText("City, state, or zip code"));
  const locationInput = container.getByLabelText("City, state, or zip code");
  act(() => {
    fireEvent.change(locationInput, { target: { value: "Texas" } });
  });
};

export const inputPurpose = async (container) => {
  await waitFor(() => container.getByTestId("select-purposes-of-visit"));
  const purposeInput = container.getByTestId("select-purposes-of-visit");
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
  });
};
export const clickSearch = async (container) => {
  await waitFor(() =>
    container.getByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
  );
  const searchBtn = container.getByTestId(
    TEST_ID.APPOINTMENT_TEST_ID.searchbtn
  );
  fireEvent.click(searchBtn);
};

export const defaultValidation = () => {
  expect(true).toBeTruthy();
};

export const expectPushRouter = (expectedPath) => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockReturnValue({
    back: jest.fn(),
    asPath: "/patient",
    push: (path) => {
      expect(path).toEqual(expectedPath);
    },
    query: { assetId: "6376481f-e317-4e44-a852-5e0395446140" },
    replace: jest.fn(),
    prefetch: jest.fn(),
  });
};
