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
});
