import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import CreateAccountPage from "../../../src/pages/patient/auth/create-account";
import { TEST_ID } from "../../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { mockUserData } from "../../../__mocks__/mockResponse";

describe("Register", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(async () => {
    mock.onPost(`/ecp/patient/userregistration`).reply(200, {
      ResponseCode: 3000,
      ResponseType: "success",
    });
    mock.onPost(`/ecp/patient/login`).reply(200, {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    });
    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    });
    const userData = JSON.parse(localStorage.getItem("userData"));
    mock
      .onGet(`/ecp/patient/getPatient/${userData?.patientId}`)
      .reply(200, mockUserData);
    container = render(
      <Provider store={store}>
        {CreateAccountPage.getLayout(<CreateAccountPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText(/User Registration/i));
  });

  const registrationFillInput = async (
    emailVal = "",
    phone = "",
    year = "1991"
  ) => {
    const title = container.getByText(/User Registration/i);
    const firstname = container.getByLabelText(/First Name/i);
    const lastname = container.getByLabelText(/Last Name/i);
    await waitFor(() => container.getByLabelText("Double tap to Choose date"));
    fireEvent.click(container.getByLabelText("Double tap to Choose date"));
    await waitFor(() =>
      container.getByLabelText("calendar view is open, switch to year view")
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText(year));
    fireEvent.click(container.getByText(year));
    await waitFor(() => container.getByText("8"));
    fireEvent.click(container.getByText("8"));
    const email = container.getAllByLabelText(/Email/i)[0];
    const mobileNumber = container.getByLabelText(/Mobile Number/i);
    const password = container.getAllByLabelText(/Password/i)[0];
    fireEvent.change(firstname, { target: { value: "userA" } });
    fireEvent.change(lastname, { target: { value: "testing" } });
    fireEvent.change(email, { target: { value: emailVal } });
    fireEvent.change(mobileNumber, { target: { value: phone } });
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(lastname.value).toEqual("testing");
    expect("User Registration").toEqual(title.textContent);
  };

  test("check valid email", async () => {
    await registrationFillInput("user123@mail.com");
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
  });

  test("check valid phone", async () => {
    await registrationFillInput("", "1234567890");
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
  });

  test("check no valid preferred", async () => {
    await registrationFillInput("", "");
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
  });

  /* test("validate password Req", async () => {
    const password = container.getAllByLabelText(/Password/i)[0];
    fireEvent.change(password, { target: { value: "A" } });
    await waitFor(() => container.getAllByTestId("CheckCircleRoundedIcon"));
    expect(container.getAllByTestId("CheckCircleRoundedIcon").length).toEqual(
      1
    );
    fireEvent.change(password, { target: { value: "Admin@" } });
    await waitFor(() => container.getAllByTestId("CheckCircleRoundedIcon"));
    expect(container.getAllByTestId("CheckCircleRoundedIcon").length).toEqual(
      2
    );
    fireEvent.change(password, { target: { value: "Admin@123" } });
    await waitFor(() => container.getAllByTestId("CheckCircleRoundedIcon"));
    expect(container.getAllByTestId("CheckCircleRoundedIcon").length).toEqual(
      3
    );
  }); */

  test("Validate error service", async () => {
    mock.onPost(`/ecp/patient/userregistration`).reply(400, {
      ResponseCode: 3000,
      ResponseType: "failure",
    });
    await registrationFillInput("user123@mail.com", "1234567890");
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
    mock.onPost(`/ecp/patient/userregistration`).reply(404, {
      ResponseCode: 3002,
      ResponseType: "failure",
    });
    fireEvent.click(
      container.getByTestId(TEST_ID.REGISTER_TEST_ID.registerbtn)
    );
  });

  test("Validate wrong dob", async () => {
    await registrationFillInput("user123@mail.com", "1234567890", "2000");
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
