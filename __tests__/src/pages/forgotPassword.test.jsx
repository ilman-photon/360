import { render, waitFor, fireEvent } from "@testing-library/react";
import ForgotPassword from "../../../src/pages/patient/forgot-password";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Forgot Password", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <ForgotPassword />
      </Provider>
    );
  });
  test("renders forgot password", () => {
    expect(container).toMatchSnapshot();
  });

  test("check valid email", () => {
    setTimeout(() => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    }, 500);
  });

  test("click reset password", () => {
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
    setTimeout(() => {
      const button = container.getByText("resetPasswordText");
      fireEvent.click(button);
    }, 500);
  });
});
