import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentForm from "../../../../src/components/organisms/ScheduleAppointment/appointmentForm";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = render(<AppointmentForm isForMyself={true} />);
  });

  it("Set value to all field", async () => {
  //   const field1 = container.getByLabelText("First Name");
  //   fireEvent.change(field1, { target: { value: "firstName" } });
  //   expect(field1.value).toEqual("firstName");

  //   const field2 = container.getByLabelText("Last Name");
  //   fireEvent.change(field2, { target: { value: "lastName" } });
  //   expect(field2.value).toEqual("lastName");

  //   const field3 = container.getByLabelText("Mobile Number");
  //   fireEvent.change(field3, { target: { value: "1234" } });
  //   expect(field3.value).toEqual("(123) 4");

  //   const field4 = container.getByRole("textbox", { name: "Email" });
  //   fireEvent.change(field4, { target: { value: "mail@valid.com" } });
  //   expect(field4.value).toEqual("mail@valid.com");

  //   expect(container.getByText("Date of Birth")).toBeInTheDocument();
  //   expect(container.getByText("optional")).toBeInTheDocument();
  //   expect(container.getByText("passwordInfo")).toBeInTheDocument();
  //   expect(container.getByLabelText("passwordLabel")).toBeInTheDocument();
  // });

  // it("Set Invalid value to all field and see error message", async () => {
  //   const field1 = container.getByLabelText("First Name");
  //   fireEvent.change(field1, { target: { value: "a" } });

  //   const field2 = container.getByLabelText("Last Name");
  //   fireEvent.change(field2, { target: { value: "3%" } });

  //   const field3 = container.getByLabelText("Mobile Number");
  //   fireEvent.change(field3, { target: { value: "alphabet" } });

  //   const field4 = container.getByRole("textbox", { name: "Email" });
  //   fireEvent.change(field4, { target: { value: "email@invalid" } });

  //   const saveButton = container.getByRole("button", {
  //     name: "scheduleAppoinment",
  //   });
  //   fireEvent.click(saveButton);

  //   await waitFor(() =>
  //     container.getByText("First Name should be greater than 2 characters")
  //   );

  //   expect(
  //     container.getByText("First Name should be greater than 2 characters")
  //   ).toBeInTheDocument();

  //   expect(
  //     container.getByText("Incorrect Last Name format")
  //   ).toBeInTheDocument();

    // expect(container.getByText("Incorrect email format")).toBeInTheDocument();

    // expect(
    //   container.getByText("Incorrect mobile number format")
    // ).toBeInTheDocument();

    // fireEvent.change(field1, { target: { value: "1$" } });
    // fireEvent.change(field2, { target: { value: "b" } });

    // fireEvent.click(saveButton);

    // await waitFor(() => container.getByText("Incorrect First Name format"));

    // expect(
    //   container.getByText("Last Name should be greater than 2 characters")
    // ).toBeInTheDocument();
  });

  it("Set mandatory field empty and see error message", async () => {
    // const field1 = container.getByLabelText("First Name");
    // fireEvent.change(field1, { target: { value: "" } });

    // const field2 = container.getByLabelText("Last Name");
    // fireEvent.change(field2, { target: { value: "" } });

    // const field3 = container.getByLabelText("Mobile Number");
    // fireEvent.change(field3, { target: { value: "" } });

    // const field4 = container.getByRole("textbox", { name: "Email" });
    // fireEvent.change(field4, { target: { value: "" } });

    // const saveButton = container.getByRole("button", {
    //   name: "scheduleAppoinment",
    // });
    // fireEvent.click(saveButton);

    // await waitFor(() => container.getAllByText("thisFieldRequired"));
    // expect(container.getAllByText("thisFieldRequired")[0]).toBeInTheDocument();

    // expect(
    //   container.getAllByText("Email ID or Mobile Number is required")[0]
    // ).toBeInTheDocument();
  });
});
