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
import MessagingPage from "../src/pages/patient/messaging";
import * as AppointmentPage from "../src/pages/patient/appointment/index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from "css-mediaquery";
import FilterResult from "../src/components/molecules/FilterResult/filterResult";
import Appointments from "../src/pages/patient/appointments";
import ScheduleAppointment from "../src/pages/patient/schedule-appointment/index";
import HomePage, { getStaticProps } from "../src/pages/patient";
import Cookies from "universal-cookie";
import App from "../src/pages/_app";
import CreateAccountPage from "../src/pages/patient/auth/create-account";

import { renderWithProviders } from "../__tests__/src/utils/test-util";
import ShareModal from "../src/components/organisms/ShareModal/shareModal";
import { setOpenModal } from "../src/store/share";
import {
  mockAppointmentTypes,
  mockInsurance,
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
  submitFilter,
  upcomingResponse,
  educationMaterials,
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
  await waitFor(() => container.getAllByLabelText(/usernamePlaceHolder/i));
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

export async function renderScheduleAppointment(mock) {
  let container;
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  window.matchMedia = createMatchMedia("1920px");

  mock
    .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
    .reply(200, mockAppointmentTypes);
  mock
    .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
    .reply(200, mockInsurance);
  mock
    .onPut("/ecp/appointments/available-slot?searchText=Texas")
    .reply(200, submitFilter);
  const Appointment = AppointmentPage.default;
  const server = await AppointmentPage.getStaticProps();
  act(() => {
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });
  await waitFor(() => container.getByText("Purpose of Visit"));
  expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  return { ...container, mock };
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

export async function renderAppointments() {
  let container;

  act(() => {
    container = render(
      <Provider store={store}>
        {Appointments.getLayout(<Appointments />)}
      </Provider>
    );
  });
  await waitFor(() => {
    container.getAllByText(/Upcoming Appointments/i);
  });

  return container;
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

export async function navigateToPatientPortalHome(
  mockInstance,
  existingContainer
) {
  const mock = mockInstance || new MockAdapter(axios);
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
  mock
    .onGet(
      `/ecp/patient/getPatientDocumentByCategory/${userData?.patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=EducationMaterials))`
    )
    .reply(200, educationMaterials);

  let container = existingContainer || null;
  const props = await getStaticProps();
  act(() => {
    container = render(
      <Provider store={store}>
        {HomePage.getLayout(<HomePage {...props} />)}
      </Provider>
    );
  });
  await waitFor(() => container.getAllByText(/Prescriptions/i));
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
  const usernameField = container.getByLabelText(/emailUserLabel/i);
  const passwordField = container.getByLabelText(/passwordLabel/i);
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
    fireEvent.change(purposeInput, { target: { value: "Clinical_Diagnosis" } });
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

const mockMessagingReal = {
  "count": 1,
  "entities": [
      {
          "unRead": true, // hardcoded unread msg
          "subject": " reverse new P2p capture receiver",
          "bodyNote": "patient to patient body",
          "digitalAssets": [
              {
                  "name": "Work From Office Guidelines22.pdf",
                  "_id": "ddaaba8f-4730-4b60-b87d-1d23905fa6e4"
              }
          ],
          "messageStatus": "SENT",
          "priority": "HIGH",
          "deliveryDate": "Wed Nov 02 2022 03:06 AM",
          "messageReceipients": [
              {
                  "isNew": false,
                  "isDeleted": false,
                  "isStar": false,
                  "recipientType": "SENDER",
                  "senderPatientId": "cdd6587b-b7af-4ef4-848d-214b957b9699"
              },
              {
                  "isNew": true,
                  "isDeleted": false,
                  "isStar": false,
                  "recipientType": "TO",
                  "senderPatientId": "cdd6587b-b7af-4ef4-848d-214b957b9699"
              }
          ],
          "senderIsPatient": true,
          "senderIsProvider": false,
          "senderPatientId": "cdd6587b-b7af-4ef4-848d-214b957b9699",
          "receiverIsPatient": true,
          "receiverPatientId": "cdd6587b-b7af-4ef4-848d-214b957b9699",
          "status": "CREATED",
          "_id": "3a1bf90e-c0f0-47a6-9ea8-89efc125ff02",
          "_version": "14a6bfbc-e6c0-47e6-aef2-e8e6dfa4d545",
          "_created": "Dec 12, 2022, 8:06:36 AM",
          "_updated": "Dec 12, 2022, 8:06:36 AM",
          "_createdBy": {
              "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
              "_links": {
                  "self": {
                      "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
                  }
              }
          }
      }
  ],
  "_links": {
      "self": {
          "href": "/message-task?pageNo=0&pageSize=10"
      }
  }
}

const mockViewMessageById = {
  "subject": "Provider to Patient",
  "bodyNote": "Provider to Patient Msg",
  "digitalAssets": [
    {
      "name": "Work From Office Guidelines22.pdf",
      "_id": "ddaaba8f-4730-4b60-b87d-1d23905fa6e4"
    }
  ],
  "messageStatus": "SENT",
  "priority": "HIGH",
  "deliveryDate": "Wed Nov 02 2022 03:19 AM",
  "messageReceipients": [
    {
      "isNew": false,
      "isDeleted": false,
      "isStar": false,
      "recipientUid": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
      "employee": {
        "firstName": "SHULTZ M",
        "lastName": "SABRINA",
        "_id": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
        "designation": "Dr"
      },
      "recipientType": "SENDER"
    },
    {
      "isNew": true,
      "isDeleted": false,
      "isStar": false,
      "recipientType": "TO",
      "senderProviderId": "816260b9-9bb6-4552-aaef-ba037378861c"
    }
  ],
  "senderIsPatient": false,
  "senderIsProvider": false,
  "sentBy": {
    "designation": "Dr",
    "firstName": "SHULTZ M",
    "lastName": "SABRINA",
    "_id": "833da4c6-dc6a-4a7b-9413-51431a599f2d"
  },
  "sources": [],
  "senderProviderId": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
  "receiverIsPatient": false,
  "status": "CREATED",
  "_id": "be072f9f-da68-456c-a6bd-9a1f8e8a5d3d",
  "_version": "0eff64c5-9071-4df6-9e71-ccd35f4dbae4",
  "_created": "Nov 21, 2022, 8:19:28 AM",
  "_updated": "Nov 21, 2022, 8:19:28 AM",
  "_createdBy": {
    "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
    "_links": {
      "self": {
        "href": "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1"
      }
    }
  }
}

export async function renderMessagePage(mockInstance) {
  let container;
  const domain = window.location.origin;
  const mock = mockInstance || new MockAdapter(axios);
  const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
  mock
    .onGet(`/ecp/messages/getInbox?search.query=((messageReceipients.recipientType=eq=TO)(messageStatus=eq=SENT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`)
    .reply(200, mockMessagingReal);
  mock
    .onGet(`/ecp/messages/getOutbox?search.query=((messageReceipients.recipientType=eq=SENDER)(messageStatus=eq=SENT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`)
    .reply(200, mockMessagingReal);
  mock
    .onGet(`/ecp/messages/getInbox?search.query=((messageReceipients.recipientType=eq=TO)(messageStatus=eq=DRAFT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`)
    .reply(200, mockMessagingReal);
  mock
    .onGet(`${domain}/api/dummy/messaging/getProviderList`)
    .reply(200, providerList);
  mock
    .onGet(`/ecp/messages/viewMessageById/be072f9f-da68-456c-a6bd-9a1f8e8a5d3d?sessionUserId=${patientId}`)
    .reply(200, mockViewMessageById);
  mock.onGet('/');

  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <MessagingPage />
      </Provider>
    );
  });
  await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
  expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();

  await waitFor(() => container.getByTestId("inbox-tab"));

  const inboxTab = container.getByTestId("inbox-tab");
  expect(inboxTab).toBeInTheDocument();
  expect(container.getByTestId("inbox-tab")).toBeInTheDocument();
  expect(container.getByTestId("sent-tab")).toBeInTheDocument();
  expect(container.getByTestId("draft-tab")).toBeInTheDocument();
  expect(container.getByTestId("deleted-tab")).toBeInTheDocument();

  await waitFor(() => {
    container.getByTestId("message-content-view");
  });

  await waitFor(() => {
    container.getByTestId("message-list-container");
  });

  await waitFor(() => container.getByText("newMessage"));

  const newMessageButton = container.getByRole("button", {
    name: /newMessage/i,
  });
  expect(newMessageButton).toBeInTheDocument();

  return container;
}

export async function renderShareModal() {
  let container;

  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <ShareModal />
      </Provider>
    );
  });
  store.dispatch(setOpenModal(true));

  const securityInfo = container.getByText(
    /Securely Transmit Your Information/i
  );
  expect(securityInfo).toBeInTheDocument();
  await waitFor(() => container.getByText(/Share my/i));
  expect(container.getByText(/Share my/i)).toBeInTheDocument();

  return container;
}

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
