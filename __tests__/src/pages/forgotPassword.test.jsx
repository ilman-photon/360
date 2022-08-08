import { render, waitFor, fireEvent } from "@testing-library/react";
import ForgotPassword from "../../../src/pages/patient/forgot-password";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("Forgot Password", () => {
    let container;
    beforeEach(() => {
        container = render(
            <Provider store={store}>
              <ForgotPassword />
            </Provider>
          );
    });
  test("renders forgot password", () => {
    expect(container).toMatchSnapshot()
  });

  test("check valid email",  () => {
    setTimeout(() => {
        const usernameField = container.getByLabelText(/usernamePlaceHolder/i)
        fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
        expect(usernameField.value).toEqual("user1@gmail.com");
    }, 500);
    
  });

  test("click reset password", () => {
    setTimeout(() => {
        const button = container.getByText("resetPasswordText")
        fireEvent.click(button);
    }, 500);
  });
});
