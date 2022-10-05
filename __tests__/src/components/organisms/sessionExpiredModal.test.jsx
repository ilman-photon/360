import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SessionExpiredModal from "../../../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";
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
    container = render(<SessionExpiredModal showModal={true} />);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("render component", () => {
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });
  it("render component expired true", () => {
    container = render(
      <SessionExpiredModal showModal={true} isExpired={true} />
    );
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });
  it("render component expired true", () => {
    container = render(
      <SessionExpiredModal showModal={false} isExpired={true} />
    );
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });
  it("render component show modal false", () => {
    container = render(<SessionExpiredModal showModal={false} />);
    expect(container.getByText("Session Timeout")).toBeInTheDocument();
  });
  it("click log off", () => {
    const logOffBtn = container.getByTestId("session-logoff-btn");
    fireEvent.click(logOffBtn);
  });
  it("click log in", () => {
    const logInBtn = container.getByTestId("session-stay-btn");
    fireEvent.click(logInBtn);
  });
});
