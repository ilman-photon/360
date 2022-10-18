import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import UpdatePasswordPage from "../../../src/pages/patient/update-password";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Update Password", () => {
  const mock = new MockAdapter(axios);
  const mockRouter = {
    back: jest.fn(),
    query: { username: "patient1@gmail.com" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/update-password",
  };

  let container;
  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
    container = render(
      <Provider store={store}>
        {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
      </Provider>
    );
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("check valid email", async () => {
    await waitFor(() => container.getByText(/title/i));
    const title = container.getByText(/title/i);
    expect("title").toEqual(title.textContent);
    const backLogin = container.getAllByRole("link", {
      name: /backButtonLink/i,
    })[0];
    fireEvent.click(backLogin);
  });

  test("check no valid email", async () => {
    cleanup();
    useRouter.mockReturnValue({});
    container = render(
      <Provider store={store}>
        {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText(/title/i));
    const title = container.getByText(/title/i);
    expect("title").toEqual(title.textContent);
  });

  test("click reset password success", async () => {
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/updatepassword`).reply(200, expectedResult);
    await waitFor(() => container.getAllByLabelText(/passwordPlaceHolder/i)[0]);
    const password = container.getAllByLabelText(/passwordPlaceHolder/i)[0];
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");

    const confirmPassword = container.getByLabelText(
      /confirmPasswordPlaceHolder/i
    );
    fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
    expect(confirmPassword.value).toEqual("user123@A");

    const updateBtn = container.getByRole("button", {
      name: /ctaButtonLabel/i,
    });
    fireEvent.click(updateBtn);
    await waitFor(() => container.getByTestId("submission-message"));
    const backLogin = container.getAllByRole("button", {
      label: /backButtonLink/i,
    })[0];
    fireEvent.click(backLogin);
  });

  test("click reset password failed", async () => {
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "failure",
    };
    mock.onPost(`/ecp/patient/updatepassword`).reply(404, expectedResult);
    await waitFor(() => container.getAllByLabelText(/passwordPlaceHolder/i)[0]);
    const password = container.getAllByLabelText(/passwordPlaceHolder/i)[0];
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");

    const confirmPassword = container.getByLabelText(
      /confirmPasswordPlaceHolder/i
    );
    fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
    expect(confirmPassword.value).toEqual("user123@A");
    const updateBtn = container.getByRole("button", {
      name: /ctaButtonLabel/i,
    });
    fireEvent.click(updateBtn);
    const backLogin = container.getAllByRole("button", {
      label: /backButtonLink/i,
    })[0];
    fireEvent.click(backLogin);
  });

  test("click reset password invalid", async () => {
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "failure",
    };
    mock.onPost(`/ecp/patient/updatepassword`).reply(404, expectedResult);
    await waitFor(() => container.getAllByLabelText(/passwordPlaceHolder/i)[0]);
    const password = container.getAllByLabelText(/passwordPlaceHolder/i)[0];
    fireEvent.change(password, { target: { value: "user1234" } });
    expect(password.value).toEqual("user1234");

    const confirmPassword = container.getByLabelText(
      /confirmPasswordPlaceHolder/i
    );
    fireEvent.change(confirmPassword, { target: { value: "user123" } });
    expect(confirmPassword.value).toEqual("user123");
    const updateBtn = container.getByRole("button", {
      name: /ctaButtonLabel/i,
    });
    fireEvent.click(updateBtn);
  });
});
