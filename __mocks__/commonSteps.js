import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../src/pages/patient/login";
import "@testing-library/jest-dom";
import store from "../src/store/store";
import { TEST_ID } from "../src/utils/constants";
import ForgotPasswordPage from "../src/pages/patient/forgot-password";

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
    container = render(
      <Provider store={store}>{Login.getLayout(<Login />)}</Provider>
    );
  });
  await waitFor(() => container.getByTestId(TEST_ID.LOGIN_TEST_ID.loginBtn));
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
  await waitFor(() => container.getByLabelText(/usernamePlaceHolder/i));
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
