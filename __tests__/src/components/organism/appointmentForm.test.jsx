import {
  render,
  fireEvent,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentForm, {
  isDOB,
} from "../../../../src/components/organisms/ScheduleAppointment/appointmentForm";
import constants from "../../../../src/utils/constants";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

describe("Appointment form", () => {
  let container;

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");

    container = render(
      <AppointmentForm
        isForMyself={true}
        formMessage={{ current: { scrollIntoView: jest.fn } }}
      />
    );
  });

  it("Appointment form render", async () => {
    expect(container.getByText(/selfTitle/i)).toBeInTheDocument();
  });

  it("Appointment form fill data email", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const firstName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.firstname)
    ).getByRole("textbox");
    const lastName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.lastname)
    ).getByRole("textbox");
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const buttonSubmit = container.getByText(/scheduleAppoinment/i);
    const radioPhone = container.getAllByTestId(/phoneradio/i);

    await waitFor(() => fireEvent.click(radioPhone[0]));
    fireEvent.change(email, { target: { value: "" } });
    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill data email 2", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const buttonSubmit = container.getByText(/scheduleAppoinment/i);
    const emailPhone = container.getAllByTestId(/emailradio/i);

    await waitFor(() => fireEvent.click(emailPhone[0]));
    fireEvent.change(email, { target: { value: "" } });
    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill data email 3", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const buttonSubmit = container.getByText(/scheduleAppoinment/i);
    const bothRadio = container.getAllByTestId(/bothradio/i);

    await waitFor(() => fireEvent.click(bothRadio[0]));
    fireEvent.change(email, { target: { value: "unit@gmail.com" } });
    fireEvent.change(mobileNumber, { target: { value: "" } });

    await waitFor(() => fireEvent.click(buttonSubmit));
  });
  it("Appointment form fill data email 4", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const buttonSubmit = container.getByText(/scheduleAppoinment/i);
    const bothRadio = container.getAllByTestId(/bothradio/i);

    await waitFor(() => fireEvent.click(bothRadio[0]));
    fireEvent.change(email, { target: { value: "" } });
    fireEvent.change(mobileNumber, { target: { value: "" } });

    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const firstName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.firstname)
    ).getByRole("textbox");
    const lastName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.lastname)
    ).getByRole("textbox");
    const buttonSubmit = container.getByText(/scheduleAppoinment/i);
    const radioPhone = container.getAllByTestId(/phoneradio/i);

    await waitFor(() => fireEvent.click(radioPhone[0]));
    fireEvent.change(firstName, {
      target: { value: "Unit Testing Photon Indonesia" },
    });
    fireEvent.change(lastName, {
      target: { value: "Unit Testing Photon Indonesia" },
    });
    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill", async () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2022-11-30T00:00:00.000Z"));
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const firstName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.firstname)
    ).getByRole("textbox");
    const lastName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.lastname)
    ).getByRole("textbox");
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const dateBirth = container.getByTestId(
      SCHEDULE_GUEST_TEST_ID.dateofbirth
    ).firstChild;
    const radioBoth = container.getAllByTestId(/bothradio/i);

    await waitFor(() => fireEvent.click(radioBoth[0]));

    const buttonSubmit = container.getByTestId("scheduleAppoinment");
    await waitFor(() => fireEvent.click(dateBirth));
    await waitFor(() =>
      fireEvent.change(dateBirth, {
        target: { value: "10/12/2022" },
      })
    );
    const dialogPopup = container.getAllByRole(/dialog/i);

    const button1 = within(dialogPopup[0]).getAllByText(/25/i);
    const buttonOk = within(dialogPopup[0]).getByText(/OK/i);
    const password = container.container.querySelector("#password");

    await waitFor(() => fireEvent.click(button1[0]));

    await waitFor(() => fireEvent.click(buttonOk));

    fireEvent.change(firstName, {
      target: { value: "Unit" },
    });
    fireEvent.change(lastName, {
      target: { value: "Testing" },
    });
    fireEvent.change(email, {
      target: { value: "testing@mail.com" },
    });
    fireEvent.change(mobileNumber, {
      target: { value: "(628) 112-2121" },
    });
    fireEvent.change(password, {
      target: { value: "Admin@123" },
    });

    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill Error", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const firstName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.firstname)
    ).getByRole("textbox");
    const lastName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.lastname)
    ).getByRole("textbox");
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const dateBirth = container.getByTestId(
      SCHEDULE_GUEST_TEST_ID.dateofbirth
    ).firstChild;
    const radioBoth = container.getAllByTestId(/bothradio/i);

    await waitFor(() => fireEvent.click(radioBoth[0]));

    const buttonSubmit = container.getByTestId("scheduleAppoinment");
    await waitFor(() => fireEvent.click(dateBirth));
    await waitFor(() =>
      fireEvent.change(dateBirth, {
        target: { value: "10/12/2022" },
      })
    );
    const dialogPopup = container.getAllByRole(/dialog/i);

    const button1 = within(dialogPopup[0]).getAllByText(/25/i);
    const buttonOk = within(dialogPopup[0]).getByText(/OK/i);
    const password = container.container.querySelector("#password");

    await waitFor(() => fireEvent.click(button1[0]));

    await waitFor(() => fireEvent.click(buttonOk));

    fireEvent.change(firstName, {
      target: { value: "Unit 001" },
    });
    fireEvent.change(lastName, {
      target: { value: "Testing 001" },
    });
    fireEvent.change(email, {
      target: { value: "testing@mail.com" },
    });
    fireEvent.change(mobileNumber, {
      target: { value: "(628) 112-2121" },
    });
    fireEvent.change(password, {
      target: { value: "Admin@" },
    });

    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("Appointment form fill Error", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const firstName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.firstname)
    ).getByRole("textbox");
    const lastName = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.lastname)
    ).getByRole("textbox");
    const email = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.email)
    ).getByRole("textbox");
    const mobileNumber = within(
      container.getByTestId(SCHEDULE_GUEST_TEST_ID.mobilenumber)
    ).getByRole("textbox");
    const dateBirth = container.getByTestId(
      SCHEDULE_GUEST_TEST_ID.dateofbirth
    ).firstChild;
    const radioBoth = container.getAllByTestId(/bothradio/i);

    await waitFor(() => fireEvent.click(radioBoth[0]));

    const buttonSubmit = container.getByTestId("scheduleAppoinment");
    await waitFor(() => fireEvent.click(dateBirth));
    await waitFor(() =>
      fireEvent.change(dateBirth, {
        target: { value: "10/12/2022" },
      })
    );
    const dialogPopup = container.getAllByRole(/dialog/i);

    const button1 = within(dialogPopup[0]).getAllByText(/25/i);
    const buttonOk = within(dialogPopup[0]).getByText(/OK/i);
    const password = container.container.querySelector("#password");

    await waitFor(() => fireEvent.click(button1[0]));

    await waitFor(() => fireEvent.click(buttonOk));

    fireEvent.change(firstName, {
      target: { value: "Unit 001" },
    });
    fireEvent.change(lastName, {
      target: { value: "Testing 001" },
    });
    fireEvent.change(email, {
      target: { value: "testing@mail.com" },
    });
    fireEvent.change(mobileNumber, {
      target: { value: "(628) 112-2121" },
    });
    fireEvent.change(password, {
      target: { value: "0" },
    });

    await waitFor(() => fireEvent.click(buttonSubmit));
  });

  it("isDOB date testing", async () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2025-12-01T00:00:01.000Z"));
    const mocDateYears = new Date("1700-12-01T00:00:01.000Z");
    expect(isDOB(mocDateYears)).toBeFalsy();
    const mocDateMonth = new Date("2023-12-01T00:00:01.000Z");
    expect(isDOB(mocDateMonth)).toBeTruthy();
    const mocDateMonthElse = new Date("2025-10-01T00:00:01.000Z");
    expect(isDOB(mocDateMonthElse)).toBeTruthy();
  });

  it("isDOB date testing2", async () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2024-12-01T00:00:01.000Z"));
    const mocDateMonthElse = new Date("2025-01-01T00:00:01.000Z");
    expect(isDOB(mocDateMonthElse)).toBeTruthy();
  });

  it("Signin click ", async () => {
    const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
    const buttonSign = container.getByTestId(SCHEDULE_GUEST_TEST_ID.signInlink);
    fireEvent.click(buttonSign);
  });

  it("My Self is false ", async () => {
    container = render(<AppointmentForm isForMyself={false} />);
  });

  it("My Self is false mobile", async () => {
    window.matchMedia = createMatchMedia("700px");
    container = render(<AppointmentForm isForMyself={false} />);
  });

  it("Render Mobile ", async () => {
    window.matchMedia = createMatchMedia("700px");
    container = render(<AppointmentForm isForMyself={true} />);
  });
});
