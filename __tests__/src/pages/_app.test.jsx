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
}

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
    watchPosition: jest.fn()
  };

  mock.onGet(`/api/dummy/appointment/create-appointment/getSugestion`).reply(200, MOCK_SUGGESTION_DATA);
  global.navigator.geolocation = mockGeolocation;
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
  });

  it("renders App unchanged", () => {
    const { container } = render(<App Component={HomePage} />);
    expect(container).toMatchSnapshot();
  });

  it("renders App login and session log off", async () => {
    Cookies.result = { IdleTimeOut: 200, authorized: true, mfa: "123" };
    props.idleTimer = 200;
    props.promptTimeout = 2000;
    const { result } = idleTimer();
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    await util.sleep(200);
    await waitFor(() =>
      container.getByText(/Your session is about to time-out./i)
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
    const { result } = idleTimer();
    act(() => {
      container = render(<App Component={HomePage} />);
    });
    await waitFor(() => container.getByLabelText(headerText));
    await util.sleep(200);
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
    console.log("TAE: ", store)
    act(() => {
      container = render(
        <Provider store={store}>
          <App Component={HomePage} />
        </Provider>);
    });
    store.dispatch(setGenericErrorMessage("Please try again after sometime."))
    setTimeout(() => {
      expect(container.getByText("Something Went Wrong")).toBeInTheDocument()
      const okBtn = container.getByTestId("generic-ok-btn")
      fireEvent.click(okBtn)
    }, 1000);
  });
});
