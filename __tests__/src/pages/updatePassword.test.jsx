import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import UpdatePasswordPage from "../../../src/pages/patient/update-password";

describe("Update Password", () => {
    let container;
    beforeEach(() => {
        container = render(
            <Provider store={store}>
              <UpdatePasswordPage />
            </Provider>
          );
    });
  test("renders forgot password", () => {
    expect(container).toMatchSnapshot()
  });

  test("check valid email",  () => {
    setTimeout(() => {
        const title = container.getByText(/title/i);
        expect("title").toEqual(title.textContent);
    }, 500);
    
  });

  test("click reset password", () => {
    setTimeout(() => {
        const password = container.getByLabelText(/passwordPlaceHolder/i);
        fireEvent.change(password, { target: { value: "user123@A" } });
        expect(password.value).toEqual("user123@A");

        const confirmPassword = container.getByLabelText(
         /confirmPasswordPlaceHolder/i
        );
        fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
        expect(confirmPassword.value).toEqual("user123@A");
    }, 500);
  });
});
