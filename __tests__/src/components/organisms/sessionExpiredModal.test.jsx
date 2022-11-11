import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SessionExpiredModal from "../../../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";
import Cookies from "universal-cookie";

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

describe("SessionExpiredModal Components", () => {
  let container;
  beforeEach(() => {
    Cookies.result = { IdleTimeOut: 200, authorized: true, mfa: "123" };
    container = render(<SessionExpiredModal />);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
  it("render component", async () => {
    await waitFor(() =>{
      container.getByText("Session Timeout")}
    );
  });

  it("render component expired true", async () => {
    await waitFor(() =>{
      container.getByText("Session Timeout")
    });
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });

  it("render component show modal false", async () => {
    await waitFor(() =>{
      container.getByText("Session Timeout")
    });
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });

  it("click log off", async () => {
    await waitFor(() =>{
      container.getByTestId("session-logoff-btn")
    });
    const logOffBtn = container.getByTestId("session-logoff-btn");
    fireEvent.click(logOffBtn);
  });
});
