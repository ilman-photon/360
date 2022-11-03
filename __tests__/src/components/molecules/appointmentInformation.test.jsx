import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentInformation from "../../../../src/components/molecules/AppointmentInformation/appointmentInformation";

describe("Appointment Information Components", () => {
  let container;
  const data = {
    providerInfo: {
      image: "https://picsum.photos/200/300",
      name: "test",
      position: "poss",
      address: {
        addressLine1: "addressLine1",
        addressLine2: "addressLine2",
        city: "city",
        state: "state",
        zipcode: "zipcode",
      },
      phoneNumber: "0990",
    },
    patientInfo: {
      name: "patient test",
    },
    appointmentInfo: {
      insuranceCarrier: ["test1"],
    },
  };
  beforeEach(() => {
    container = render(<AppointmentInformation data={data} />);
  });

  it("Appointment Information render", async () => {
    expect(container.getByText(/patient test/i)).toBeInTheDocument();
  });

  it("Appointment No Address", async () => {
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: "",
          },
        }}
      />
    );
    expect(container.getAllByText(/0990/i)[0]).toBeInTheDocument();
  });

  it("Appointment some address {}", async () => {
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            image: "https://picsum.photos/200/300",
            name: "test",
            address: {},
            phoneNumber: "0990",
          },
        }}
      />
    );
    expect(container.getAllByText(/0990/i)[0]).toBeInTheDocument();
  });

  it("Appointment some address null", async () => {
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: {
              ...data.providerInfo.address,
              addressLine1: "",
            },
          },
        }}
      />
    );
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: {
              ...data.providerInfo.address,
              addressLine2: "",
            },
          },
        }}
      />
    );
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: {
              ...data.providerInfo.address,
              state: "",
            },
          },
        }}
      />
    );
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: {
              ...data.providerInfo.address,
              zipcode: "",
            },
          },
        }}
      />
    );
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          providerInfo: {
            ...data.providerInfo,
            address: {
              ...data.providerInfo.address,
              city: "",
            },
          },
        }}
      />
    );
    expect(container.getAllByText(/0990/i)[0]).toBeInTheDocument();
  });

  it("Appointment some address {}", async () => {
    container = render(
      <AppointmentInformation
        data={{
          ...data,
          appointmentInfo: {
            insuranceCarrier: [],
          },
        }}
      />
    );
    expect(container.getAllByText(/0990/i)[0]).toBeInTheDocument();
  });
});
