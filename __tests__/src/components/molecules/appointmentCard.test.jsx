import { render, fireEvent, within, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentCard from "../../../../src/components/molecules/Dashboard/appointmentCard";

describe("AppointmentCard Components", () => {
  let container;

  const spyWindowOpen = jest.spyOn(window, "open");
  spyWindowOpen.mockImplementation(jest.fn()).mockReturnValue({
    focus: jest.fn(),
    print: jest.fn(),
    document: {
      write: jest.fn(),
      head: {
        appendChild: jest.fn(),
      },
      close: jest.fn(),
    },
  });

  it("AppointmentCard render", async () => {
    const appointmentData = [{
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "John",
        position: "",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
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
        appointmentTypeCategory: "OPH",
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
        appointmentTypeCategory: "OPT",
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
    const getDirectionsBtn = container.getByText('Get Directions')
    const viewAppointmentLink = container.getByText('View Appointments')
    fireEvent.keyDown(viewAppointmentLink, { key: "Enter" });
    fireEvent.keyDown(viewAppointmentLink, { key: "ArrowDown" });
    fireEvent.keyDown(telBtn, { key: "Enter" });
    fireEvent.keyDown(telBtn, { key: "ArrowDown" });
    fireEvent.click(telBtn)
    fireEvent.click(getDirectionsBtn)
    expect(await container.getByText('John')).toBeInTheDocument();
  });

  it("AppointmentCard render without data", async () => {
    cleanup()
    container = render(
      <AppointmentCard appointmentData={[]} />
    )
    expect(await container.getByText('View Appointments')).toBeInTheDocument();
  });
});
