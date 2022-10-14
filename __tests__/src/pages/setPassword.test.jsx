import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import SetPasswordPage, {
  getServerSideProps,
} from "../../../src/pages/patient/set-password";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { sleep } from "../../../__mocks__/util";

describe("Set Password", () => {
  let container;
  const mock = new MockAdapter(axios);
  const renderSetPassword = async (email = "") => {
    const contex = {
      query: email
        ? {
            username: email,
          }
        : {},
    };
    const serverProps = await getServerSideProps(contex);
    container = render(
      <Provider store={store}>
        {SetPasswordPage.getLayout(<SetPasswordPage {...serverProps.props} />)}
      </Provider>
    );
    await waitFor(() => container.getByText(/Set Password/i));
  };
  beforeEach(async () => {
    mock
      .onPost("/ecp/patient/registrationsetpassword")
      .reply(200, { responseCode: 1000 });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("check no valid email", async () => {
    await renderSetPassword();
    const title = container.getByText(/Set Password/i);
    expect("Set Password").toEqual(title.textContent);
  });

  test("check valid phonenumber", async () => {
    await renderSetPassword("1234567890");
    const title = container.getByText(/Set Password/i);
    expect("Set Password").toEqual(title.textContent);
  });

  test("check valid email", async () => {
    await renderSetPassword("smith1@photon.com");
    const title = container.getByText(/Set Password/i);
    expect("Set Password").toEqual(title.textContent);
  });

  test("click reset password success", async () => {
    await renderSetPassword("smith1@photon.com");
    await waitFor(() => container.getByText(/Set Password/i));
    const password = container.container.querySelector("#password");
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");
    const confirmPassword =
      container.container.querySelector("#confirmPassword");
    fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
    expect(confirmPassword.value).toEqual("user123@A");

    const submitbutton = container.getByRole("button", {
      name: /Create Account/i,
    });
    fireEvent.click(submitbutton);
    await sleep(4000);
    await waitFor(() => container.getByText(/Back to Login/i));
    fireEvent.click(container.getByText(/Back to Login/i));
  }, 10000);

  test("click reset password failed", async () => {
    mock
      .onPost("/ecp/patient/registrationsetpassword")
      .reply(401, { ResponseCode: 3002 });
    await renderSetPassword("smith1@photon.com");
    await waitFor(() => container.getByText(/Set Password/i));
    const password = container.container.querySelector("#password");
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");
    const confirmPassword =
      container.container.querySelector("#confirmPassword");
    fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
    expect(confirmPassword.value).toEqual("user123@A");

    const submitbutton = container.getByRole("button", {
      name: /Create Account/i,
    });
    fireEvent.click(submitbutton);
    await waitFor(() => container.getByTestId("submission-message"));
    await waitFor(() => container.getByText(/Back to home/i));
    expect(container.getByText(/Back to home/i)).toBeInTheDocument();
  });

  test("click reset password failed invalid length", async () => {
    mock
      .onPost("/ecp/patient/registrationsetpassword")
      .reply(401, { ResponseCode: 3002 });
    await renderSetPassword("smith1@photon.com");
    await waitFor(() => container.getByText(/Set Password/i));
    const password = container.container.querySelector("#password");
    fireEvent.change(password, { target: { value: "user123" } });
    expect(password.value).toEqual("user123");
    const confirmPassword =
      container.container.querySelector("#confirmPassword");
    fireEvent.change(confirmPassword, { target: { value: "user123" } });
    expect(confirmPassword.value).toEqual("user123");

    const submitbutton = container.getByRole("button", {
      name: /Create Account/i,
    });
    fireEvent.click(submitbutton);
    await waitFor(() => container.getByText(/Back to home/i));
    expect(container.getByText(/Back to home/i)).toBeInTheDocument();
  });

  test("click reset password failed contain whitespace", async () => {
    mock
      .onPost("/ecp/patient/registrationsetpassword")
      .reply(401, { ResponseCode: 3002 });
    await renderSetPassword("smith1@photon.com");
    await waitFor(() => container.getByText(/Set Password/i));
    const password = container.container.querySelector("#password");
    fireEvent.change(password, { target: { value: "user12345" } });
    expect(password.value).toEqual("user12345");
    const confirmPassword =
      container.container.querySelector("#confirmPassword");
    fireEvent.change(confirmPassword, { target: { value: "user12345 " } });
    expect(confirmPassword.value).toEqual("user12345 ");

    const submitbutton = container.getByRole("button", {
      name: /Create Account/i,
    });
    fireEvent.click(submitbutton);
    await waitFor(() => container.getByText(/Back to home/i));
    expect(container.getByText(/Back to home/i)).toBeInTheDocument();
  });
});
