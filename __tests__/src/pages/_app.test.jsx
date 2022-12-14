import {
  act,
  render,
  renderHook,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import HomePage from "../../../src/pages/patient";
import Cookies from "universal-cookie";
import { useIdleTimer } from "react-idle-timer";
import * as util from "../../../__mocks__/util";
import { fireEvent } from "@storybook/testing-library";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import { setGenericErrorMessage } from "../../../src/store";
import {
  TEMP_DATA_CONTACTS,
  TEMP_DATA_GLASSES,
  TEMP_DATA_MEDICATION,
} from "../../../__mocks__/mockResponse";

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

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(key) {
      return MockCookies.result[key];
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

describe("App", () => {
  let props, container;
  const headerText = /Clarkson Eyecare logo/i;
  const idleTimer = () => {
    return renderHook(() => useIdleTimer(props));
  };
  const mock = new MockAdapter(axios);
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };

  beforeEach(() => {
    props = {
      timeout: undefined,
      promptTimeout: undefined,
      element: undefined,
      events: undefined,
      timers: undefined,
      immediateEvents: undefined,
      onPrompt: undefined,
      onActive: undefined,
      onAction: undefined,
      onMessage: undefined,
      debounce: undefined,
      throttle: undefined,
      eventsThrottle: undefined,
      startOnMount: undefined,
      startManually: undefined,
      stopOnIdle: undefined,
      capture: undefined,
      passive: undefined,
      crossTab: undefined,
      name: undefined,
      syncTimers: undefined,
      leaderElection: undefined,
    };

    mock
      .onGet(`/api/dummy/appointment/create-appointment/getSugestion`)
      .reply(200, MOCK_SUGGESTION_DATA);
    mock
      .onGet(
        `/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, MOCK_APPOINTMENT);
    mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`)
      .reply(200, TEMP_DATA_MEDICATION);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, TEMP_DATA_CONTACTS);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, TEMP_DATA_GLASSES);
    global.navigator.geolocation = mockGeolocation;
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders App unchanged", () => {
    const { container } = render(<App Component={HomePage} />);
    
  });

  it("renders App login and session log off", async () => {
    Cookies.result = { IdleTimeOut: 200, authorized: true, mfa: "123" };
    props.idleTimer = 200;
    props.promptTimeout = 2000;
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    await util.sleep(200);
    await waitFor(
      () => container.getByText(/Your session is about to time-out./i)[0]
    );
    expect(
      container.getByText(/Your session is about to time-out./i)
    ).toBeInTheDocument();
    act(() => {
      fireEvent.click(container.getByTestId("session-logoff-btn"));
    });
    jest.resetAllMocks();
  });

  it("renders App login and session extend", async () => {
    Cookies.result = { IdleTimeOut: 200, authorized: true, mfa: "123" };
    props.idleTimer = 200;
    props.promptTimeout = 2000;
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    await waitFor(() =>
      container.getByText(/Your session is about to time-out./i)
    );
    expect(
      container.getByText(/Your session is about to time-out./i)
    ).toBeInTheDocument();

    act(() => {
      fireEvent.click(container.getByTestId("session-stay-btn"));
    });
    jest.resetAllMocks();
  });

  it("renders App login and session interval", async () => {
    Cookies.result = { IdleTimeOut: 1000, authorized: true, mfa: "123" };
    props.idleTimer = 1000;
    props.isPrompted = jest.fn().mockReturnValue(true);
    props.promptTimeout = 2000;
    const { result } = idleTimer();
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    await util.sleep(1000);
    expect(container.getByLabelText(headerText)).toBeInTheDocument();
    jest.resetAllMocks();
  });

  test("hook should detect online state then offline state", async () => {
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    let goOffline = new window.Event("offline");
    act(() => {
      window.dispatchEvent(goOffline);
    });
    await waitFor(() => container.getByText(/No Internet Connection/i));
    const text = container.getByText(/No Internet Connection/i);
    expect(text).toBeInTheDocument();
    await util.sleep(2100);
    act(() => {
      goOffline = new window.Event("online");
      window.dispatchEvent(goOffline);
    });
    await waitForElementToBeRemoved(() =>
      container.getByText(/No Internet Connection/i)
    );
    expect(text).not.toBeInTheDocument();
  });

  it("renders App login and session interval", async () => {
    act(() => {
      container = render(
        <Provider store={store}>
          <App Component={HomePage} />
        </Provider>
      );
    });
    store.dispatch(setGenericErrorMessage("Please try again after sometime."));
    setTimeout(() => {
      expect(container.getByText("Something Went Wrong")).toBeInTheDocument();
      const okBtn = container.getByTestId("generic-ok-btn");
      fireEvent.click(okBtn);
    }, 1000);
  });
});
