import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import UpdatePasswordPage from "../../../src/pages/patient/update-password";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import ShareConfirmationPage from "../../../src/pages/patient/share-confirmation";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("ShareConfirmationPage", () => {
  const mock = new MockAdapter(axios);
  const mockRouter = {
    back: jest.fn(),
    query: { 
      username: "patient1@gmail.com", 
      patientUsername: "patient2@gmail.com",
      token: "12345",
      documentId: "test-document",
      documentType: "medication"
    },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/update-password",
    asPath: "/patient/update-password?username=patient1@gmail.com",
  };

  let container;
  beforeEach(() => {
    mock.onPost(`/ecp/patient/share/share-page/validation`).reply(200, {
      "responseCode": 5010,
      "responseType": "Mail is successfully sent to patient to accept/deny the request",
    });
    useRouter.mockReturnValue(mockRouter);
    container = render(
      <Provider store={store}>
        <ShareConfirmationPage />
      </Provider>
    );
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("render", async () => {
    await waitFor(() => container.getByText(/shareMyPageTitle/i));
    const title = container.getByText(/shareMyPageTitle/i);
    expect(title).toBeInTheDocument()
  });

  test("input code", async () => {
    mock.onPost(`/ecp/patient/share/share-confirmation/verifyAccessCode`).reply(200, {
      "responseCode": 5003,
      "responseType": "You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one."
    });
    await waitFor(() => container.getByTestId("access-code-input"));
    const codeInput = container.getByTestId("access-code-input").querySelector("input");
    fireEvent.change(codeInput, { target: { value: "606060" } });
    const buttonCode = container.getByTestId("submit-code-button");
    fireEvent.click(buttonCode)
  });

  test("input code error", async () => {
    mock.onPost(`/ecp/patient/share/share-confirmation/verifyAccessCode`).reply(500, {
      "responseCode": 1000,
      "responseType": "Error"
    });
    await waitFor(() => container.getByTestId("access-code-input"));
    const codeInput = container.getByTestId("access-code-input").querySelector("input");
    fireEvent.change(codeInput, { target: { value: "606060" } });
    const buttonCode = container.getByTestId("submit-code-button");
    fireEvent.click(buttonCode)
  });

  test("input code error", async () => {
    mock.onPost(`/ecp/patient/share/share-confirmation/verifyAccessCode`).reply(500, {
      "responseCode": 5003,
      "responseType": "Error"
    });
    await waitFor(() => container.getByTestId("access-code-input"));
    const codeInput = container.getByTestId("access-code-input").querySelector("input");
    fireEvent.change(codeInput, { target: { value: "606060" } });
    const buttonCode = container.getByTestId("submit-code-button");
    fireEvent.click(buttonCode)
  });

  test("resend code", async () => {
    mock.onPost(`/ecp/patient/share/share-confirmation/resendAccessCode`).reply(200, {
      "responseCode": 5003,
      "responseType": "You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one."
    });
    await waitFor(() => container.getByTestId("resend-code-button"));
    const buttonCode = container.getByTestId("resend-code-button");
    fireEvent.click(buttonCode)
  });

  test("resend code error", async () => {
    mock.onPost(`/ecp/patient/share/share-confirmation/resendAccessCode`).reply(500, {
      "responseCode": 5009,
      "responseType": "Error"
    });
    await waitFor(() => container.getByTestId("resend-code-button"));
    const buttonCode = container.getByTestId("resend-code-button");
    fireEvent.click(buttonCode)
  });
});
