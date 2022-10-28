import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import ForgotPasswordPage from "../../../src/pages/patient/forgot-password";
import constants, { TEST_ID } from "../../../src/utils/constants";
import {
  createMatchMedia,
  renderForgotPassword,
} from "../../../__mocks__/commonSteps";

describe("Forgot Password", () => {
  let container;
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  beforeEach(() => {
    useRouter.mockReturnValue({
      back: jest.fn(),
      asPath: "/patient/forgot-password",
      push: jest.fn(),
      replace: jest.fn(),
    });
    window.matchMedia = createMatchMedia("1290px");
    container = render(
      <Provider store={store}>
        {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
      </Provider>
    );
  });
  test("renders forgot password", () => {
    expect(container.getByTestId(FORGOT_TEST_ID.loginLink)).toBeInTheDocument();
    const button = container.getByTestId(FORGOT_TEST_ID.loginLink);
    fireEvent.click(button);
  });

  const emailFieldValidation = () => {
    const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
    fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
    expect(usernameField.value).toEqual("user1@gmail.com");
  };
  test("check valid email", emailFieldValidation);
  test("check valid email", () => {
    window.matchMedia = createMatchMedia("700px");
    emailFieldValidation();
  });

  const resetPassword = async () => {
    emailFieldValidation();
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
    const button = container.getByTestId(FORGOT_TEST_ID.continueBtn);
    fireEvent.click(button);
    await waitFor(() => container.getByText("or"));
    expect(container.getByText("or")).toBeInTheDocument();
  };
  test("click reset password", resetPassword);

  test("click answer onetimelink", async () => {
    emailFieldValidation();
    const expectedResultValidate = {
      ResponseCode: 1000,
      ResponseType: "success",
      SecurityQuestions: [],

      PreferredComunication: "Both",
    };
    mock.onPost(`/ecp/patient/validate`).reply(200, expectedResultValidate);
    const continueBtn = container.getByTestId(FORGOT_TEST_ID.continueBtn);
    fireEvent.click(continueBtn);
    await waitFor(() => container.getByText("or"));
    mock.reset();
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/onetimelink`).reply(200, expectedResult);
    const button = container.getByTestId(FORGOT_TEST_ID.oneTimeLink);
    fireEvent.click(button);
    await waitFor(() => container.getByText(`Mode of Communication`));
    fireEvent.click(container.getByDisplayValue("email"));
    fireEvent.click(container.getByTestId(FORGOT_TEST_ID.oneTimeLink));

    await waitFor(() => container.getByText(`successLabel`));
  });

  const selectOptions = async () => {
    await resetPassword();
    const button = container.getByTestId(FORGOT_TEST_ID.answerQuestions);
    fireEvent.click(button);
    await waitFor(() =>
      container.getByText(
        `Where did you go the first time you flew on a plane?`
      )
    );
  };
  test("click answer questions", async () => {
    await selectOptions();
  });

  test("click answer questions > reset password", async () => {
    emailFieldValidation();
    const expectedResultValidate = {
      ResponseCode: 1000,
      ResponseType: "success",
      SecurityQuestions: [],
      PreferredComunication: "none",
    };
    mock.onPost(`/ecp/patient/validate`).reply(200, expectedResultValidate);
    const continueBtn = container.getByTestId(FORGOT_TEST_ID.continueBtn);
    fireEvent.click(continueBtn);
    await waitFor(() => container.getByText("or"));
    mock.reset();
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "success",
      token: 1182,
    };
    mock.onPost(`/ecp/patient/onetimelink`).reply(200, expectedResult);
    const button = container.getByTestId(FORGOT_TEST_ID.oneTimeLink);
    fireEvent.click(button);
    await waitFor(() => container.getByTestId(FORGOT_TEST_ID.continueBtn));
    fireEvent.click(container.getByTestId(FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText("successSentLinkTitleOneTime"));
    fireEvent.click(container.getByTestId(FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText(`successLabel`));
    const expectedResultReset = {
      ResponseCode: 1000,
      ResponseType: "success",
      email: "smith1@photon.com",
    };
    mock
      .onPost(`/ecp/patient/resetPasswordLink`)
      .reply(200, expectedResultReset);
    fireEvent.click(container.getByTestId(FORGOT_TEST_ID.oneTimeLink));
  });

  test("click answer questions back to login", async () => {
    await selectOptions();
    const button = container.getByTestId(FORGOT_TEST_ID.loginLink);
    fireEvent.click(button);
  });

  test("answer questions continue", async () => {
    await selectOptions();
    const Q1 = container.getByLabelText(
      /Who is your all-time favorite movie character/i
    );
    fireEvent.change(Q1, { target: { value: "Upin" } });
    expect(Q1.value).toEqual("Upin");

    const Q2 = container.getByLabelText(
      /In what city or town did your parents meet?/i
    );
    fireEvent.change(Q2, { target: { value: "Jakarta" } });
    expect(Q2.value).toEqual("Jakarta");

    const Q3 = container.getByLabelText(
      /Where did you go the first time you flew on a plane?/i
    );

    mock.onPost(`/ecp/patient/securityquestions/validate`).reply(200, {
      ResponseCode: 2003,
      ResponseType: "failure",
    });
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText(`errorEmptyField`));

    fireEvent.change(Q3, { target: { value: "Bangka" } });
    expect(Q3.value).toEqual("Bangka");
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText(`errorIncorrectAnswer`));

    fireEvent.change(Q3, { target: { value: "Bangka Belitung" } });
    expect(Q3.value).toEqual("Bangka Belitung");

    mock.onPost(`/ecp/patient/securityquestions/validate`).reply(200, {
      ResponseCode: 2004,
      ResponseType: "failure",
    });
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText(`errorAccountLockTitle`));

    mock.onPost(`/ecp/patient/securityquestions/validate`).reply(200, {
      ResponseCode: 2000,
      ResponseType: "success",
    });
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
  });

  const renderSyncAppointment = async () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
      asPath: "/patient/sync",
      push: jest.fn(),
      replace: jest.fn(),
    });
    cleanup();
    container = render(
      <Provider store={store}>
        {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
      </Provider>
    );
    await waitFor(() => container.getByLabelText(/syncButton/i));
  };

  test("Sync Email Appointment failed validate", async () => {
    await renderSyncAppointment();
    const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
    fireEvent.change(usernameField, {
      target: { value: "patient1@gmail.com" },
    });
    expect(usernameField.value).toEqual("patient1@gmail.com");
    const expectedResult = {
      ResponseCode: 1001,
      ResponseType: "failure",
    };
    mock.onPost(`/ecp/patient/validate`).reply(404, expectedResult);

    expect(
      container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn)
    ).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
  });

  test("renders Sync phoneNumber", async () => {
    window.matchMedia = createMatchMedia("700px");
    await renderSyncAppointment();
    expect(
      container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn)
    ).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText("errorEmptyField"));
    const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
    fireEvent.change(usernameField, { target: { value: "12345" } });
    expect(usernameField.value).toEqual("12345");
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    await waitFor(() => container.getByText("syncErrorTitle"));
    fireEvent.change(usernameField, { target: { value: "12345678" } });
    expect(usernameField.value).toEqual("12345678");
    const button = container.getByTestId(FORGOT_TEST_ID.loginLink);
    fireEvent.click(button);
  });

  test("renders Sync and validate account", async () => {
    mock.onPost(`/ecp/patient/getPatientType`).reply(200, {
      patientType: "G",
    });
    mock.onPost(`/ecp/communication/sendLink`).reply(200, {});
    await renderSyncAppointment();
    expect(
      container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn)
    ).toBeInTheDocument();
    const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
    fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
    expect(usernameField.value).toEqual("user1@gmail.com");
    fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn));
    // await waitFor(() => container.getByTestId(`submission-message`));
  });
});
