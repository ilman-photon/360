import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import SetPasswordPage, { getServerSideProps } from "../../../src/pages/patient/set-password";

describe("Set Password", () => {
  let container;
  beforeEach(async () => {
    const contex = {
      query: {
        username: "smith1@photon.com"
      },
    };
    getServerSideProps(contex);
    container = render(
      <Provider store={store}>
        {SetPasswordPage.getLayout(<SetPasswordPage />)}
      </Provider>
    );
    await waitFor(() => {
      container.getByText(/Set Password/i)
    })
  });
  test("renders forgot password", () => {
    expect(container).toMatchSnapshot();
  });

  test("check valid email", () => {
    setTimeout(() => {
      const title = container.getByText(/title/i);
      expect("title").toEqual(title.textContent);
    }, 500);
  });

  test("click reset password", async () => {
    // setTimeout(() => {
    await waitFor(() => {
      container.getByText(/Set Password/i)
    })
    //const password = container.getById(/password/i);
    const password = container.container.querySelector('#password')
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");

    // const confirmPassword = container.getById(
    //   /confirmPassword/i
    // );
    const confirmPassword = container.container.querySelector('#confirmPassword')
    fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
    expect(confirmPassword.value).toEqual("user123@A");
    // }, 500);

    const submitbutton = container.getByRole("button", {name: /Create Account/i})
    fireEvent.click(submitbutton)
  });
});
