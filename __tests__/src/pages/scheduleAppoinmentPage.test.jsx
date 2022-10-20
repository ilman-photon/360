import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentPage, {
  getServerSideProps,
} from "../../../src/pages/patient/schedule-appointment";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  appointmentInfo,
  mockAppointmentCreationData,
  mockUserData,
  providerInfoObj,
} from "../../../__mocks__/mockResponse";
import { createMatchMedia } from "../../../__mocks__/commonSteps";
import { editAppointmentScheduleData } from "../../../src/store/appointment";
import { useDispatch } from "react-redux";
import store from "../../../src/store/store";
import { TEST_ID } from "../../../src/utils/constants";
import { fireEvent } from "@storybook/testing-library";

describe("App", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    const userData = JSON.parse(localStorage.getItem("userData"));
    mock
      .onGet(`/ecp/patient/getPatient/${userData?.patientId}`)
      .reply(200, mockUserData);
    mock.onPost(`/ecp/patient/userregistration`).reply(200, {
      ResponseCode: 3000,
      ResponseType: "success",
    });
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(200, {
      ecpPatientId: userData?.patientId,
    });
    mock
      .onPost(`/ecp/appointments/savedetails`)
      .reply(200, mockAppointmentCreationData);
    store.dispatch(
      editAppointmentScheduleData({
        key: "appointmentInfo",
        value: { ...appointmentInfo },
      })
    );

    store.dispatch(
      editAppointmentScheduleData({
        key: "providerInfo",
        value: { ...providerInfoObj },
      })
    );
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 8, 1));
  });

  const setTextFieldValue = (container, id, value) => {
    const field = container.queryAllByLabelText(id)[0];
    fireEvent.change(field, { target: { value: value } });
    expect(field.value).toEqual(value);
  };

  const formMySelfFill = async (container) => {
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_GUEST_TEST_ID.firstname)
    );
    setTextFieldValue(container, "First Name", "TestFirstName");
    setTextFieldValue(container, "Last Name", "TestLastName");
    setTextFieldValue(container, "Email", "patient1@gmail.com");
    setTextFieldValue(container, "Mobile Number", "(123) 123-1234");
    await waitFor(() => container.getByLabelText("Double tap to Choose date"));
    fireEvent.click(container.getByLabelText("Double tap to Choose date"));
    await waitFor(() =>
      container.getByLabelText("calendar view is open, switch to year view")
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText("1991"));
    fireEvent.click(container.getByText("1991"));
    await waitFor(() => container.getByText("8"));
    fireEvent.click(container.getByText("8"));
    setTextFieldValue(container, "passwordLabel", "Admin@123");
  };

  const fillForm = async (container, formName = "myself") => {
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.step2Button)
    );
    fireEvent.click(
      container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.step2Button)
    );
    await waitFor(() => container.getByText(formName));
    fireEvent.click(container.getByText(formName));
    await waitFor(() => container.getByText("continue"));
    fireEvent.click(container.getByText("continue"));
    await formMySelfFill(container);
  };

  it("Create appointment no login desktop", async () => {
    window.matchMedia = createMatchMedia("1920px");
    const container = render(<App Component={ScheduleAppointmentPage} />);
    expect(container.getByText("Dr Steve Adam")).toBeInTheDocument();
    await fillForm(container);
    await waitFor(() => container.getByText("scheduleAppoinment"));
    fireEvent.click(container.getByText("scheduleAppoinment"));
  });

  it("Create appointment no login mobile", async () => {
    window.matchMedia = createMatchMedia("700px");
    const props = getServerSideProps({});
    const container = render(<App Component={ScheduleAppointmentPage} />);
    expect(container.getByText("Dr Steve Adam")).toBeInTheDocument();
    await fillForm(container);
    await waitFor(() => container.getByText("scheduleAppoinment"));
    fireEvent.click(container.getByText("scheduleAppoinment"));
  });

  it("Create appointment no login mobile > click sign in", async () => {
    window.matchMedia = createMatchMedia("700px");
    const props = getServerSideProps({});
    const container = render(<App Component={ScheduleAppointmentPage} />);
    expect(container.getByText("Dr Steve Adam")).toBeInTheDocument();
    await fillForm(container);
    await waitFor(() => container.getByText("signIn"));
    fireEvent.click(container.getByText("signIn"));
  });
});
