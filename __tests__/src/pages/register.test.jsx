import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import CreateAccountPage from "../../../src/pages/patient/auth/create-account";

describe("Register", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        {CreateAccountPage.getLayout(<CreateAccountPage />)}
      </Provider>
    );
  });

  test("check valid email", () => {
    setTimeout(() => {
      const title = container.getByText(/title/i);
      expect("title").toEqual(title.textContent);
    }, 500);
  });

  test("click reset password", () => {
    setTimeout(() => {
      const password = container.getByLabelText(/password/i);
      fireEvent.change(password, { target: { value: "user123@A" } });
      expect(password.value).toEqual("user123@A");
    }, 500);
  });
});
