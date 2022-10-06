import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import CreateAccountPage from "../../../src/pages/patient/auth/create-account";
import { TEST_ID } from "../../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Register", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(async () => {
    container = render(
      <Provider store={store}>
        {CreateAccountPage.getLayout(<CreateAccountPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText(/User Registration/i));
  });

  test("check valid email", () => {
    mock
      .onPost("/ecp/patient/userregistration")
      .reply(200, { responseCode: 1000 });
    const title = container.getByText(/User Registration/i);
    const firstname = container.getByLabelText(/First Name/i);
    const lastname = container.getByLabelText(/Last Name/i);
    const dob = container.getByTestId(TEST_ID.REGISTER_TEST_ID.dateofbirth);
    const email = container.getAllByLabelText(/Email/i)[0];
    const mobileNumber = container.getByLabelText(/Mobile Number/i);
    const password = container.getAllByLabelText(/Password/i)[0];
    fireEvent.change(firstname, { target: { value: "userA" } });
    fireEvent.change(lastname, { target: { value: "testing" } });
    fireEvent.change(dob, { target: { value: "12-12-1991" } });
    fireEvent.change(email, { target: { value: "user123@mail.com" } });
    fireEvent.change(mobileNumber, { target: { value: "1234567890" } });
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(container).toMatchSnapshot();
    expect(lastname.value).toEqual("testing");
    expect(dob.value).toEqual("12/12/1991");
    expect("User Registration").toEqual(title.textContent);
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
  });

  test("click reset password", () => {
    const password = container.getAllByLabelText(/Password/i)[0];
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");
  });
});
