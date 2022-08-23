import { act, render, renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import HomePage from "../../../src/pages/patient";
import Cookies from "universal-cookie";
import { useIdleTimer } from "react-idle-timer";
import * as util from "../../setup/util";
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
    await waitFor(() =>
      container.getByLabelText(/Eyecare Provider name with logo/i)
    );
    await util.sleep(200);
    await waitFor(() =>
      container.getByText(/Your session is about to time-out./i)
    );
    expect(
      container.getByText(/Your session is about to time-out./i)
    ).toBeInTheDocument();

    fireEvent.click(container.getByTestId("session-logoff-btn"));
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
    await waitFor(() =>
      container.getByLabelText(/Eyecare Provider name with logo/i)
    );
    await util.sleep(200);
    await waitFor(() =>
      container.getByText(/Your session is about to time-out./i)
    );
    expect(
      container.getByText(/Your session is about to time-out./i)
    ).toBeInTheDocument();

    fireEvent.click(container.getByTestId("session-stay-btn"));
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
    await waitFor(() =>
      container.getByLabelText(/Eyecare Provider name with logo/i)
    );
    await util.sleep(1000);
    expect(
      container.getByLabelText(/Eyecare Provider name with logo/i)
    ).toBeInTheDocument();
    jest.resetAllMocks();
  });
});
