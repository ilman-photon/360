import { render, fireEvent, within, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentCard from "../../../../src/components/molecules/Dashboard/appointmentCard";

describe("AppointmentCard Components", () => {
  let container;
  it("AppointmentCard render", async () => {
    const appointmentData = [{
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "John",
        position: "",
        address: "",
        rating: "5",
        phoneNumber: "",
        image: "",
      },
      patientInfo: {
        name: `John Herman`,
        firstname: `John`,
        lastname: `Herman`,
        dob: `1990-11-12`,
      },
      appointmentInfo: {
        appointmentType: `Comprehensive`,
        date: `2022-10-10`,
        insuranceCarrier: [],
        state: ``,
      },
      year: `2022`,
    }];
    container = render(
      <AppointmentCard
        appointmentData={appointmentData}
        OnClickCancel={jest.fn()}
        onViewAppointment={jest.fn()}
        onClickReschedule={jest.fn()}
      />
    )
    const viewLinkBtn = container.getByText('View Appointments')
    fireEvent.click(viewLinkBtn)
    expect(await container.getByText('John')).toBeInTheDocument();
  });

  it("AppointmentCard render", async () => {
    cleanup()
    const appointmentData = [{
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "John",
        position: "Alabama",
        address: "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
        rating: "5",
        phoneNumber: "857299998",
        distance: "10 mi",
        image: "http://image-url/",
        from: "2022-07-18",
        to: "2022-07-23",
        location: { latitude: 32.751204, longitude: -117.1641166 },
      },
      patientInfo: {
        name: `John Herman`,
        firstname: `John`,
        lastname: `Herman`,
        dob: `1990-11-12`,
      },
      appointmentInfo: {
        appointmentType: `Eye Exam`,
        date: `2022-10-10`,
        insuranceCarrier: [],
        state: ``,
      },
      year: `2022`,
    }];
    container = render(
      <AppointmentCard
        appointmentData={appointmentData}
        OnClickCancel={jest.fn()}
        onViewAppointment={jest.fn()}
        onClickReschedule={jest.fn()}
      />
    )
    const telBtn = container.getByText('857299998')
    fireEvent.click(telBtn)
    expect(await container.getByText('John')).toBeInTheDocument();
  });
});
