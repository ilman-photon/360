import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import ForgotPasswordPage from "../../../src/pages/patient/forgot-password";
import constants from "../../../src/utils/constants";

describe("Forgot Password", () => {
  let container;
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  beforeEach(() => {
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
  test("click answer questions", selectOptions);

  test("click answer questions back to login", async () => {
    await selectOptions();
    const button = container.getByTestId(FORGOT_TEST_ID.loginLink);
    fireEvent.click(button);
  });

  test("answer questions continue", async () => {
    selectOptions();
    const Q1 = container.getByLabelText(/usernamePlaceHolder/i);
    fireEvent.change(Q1, { target: { value: "user1@gmail.com" } });
  });
});
