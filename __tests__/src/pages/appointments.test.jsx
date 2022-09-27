import Appointments from "../../../src/pages/patient/appointments";
import "@testing-library/jest-dom";
import { act, render, waitFor } from "@testing-library/react";
import App from "next/app";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

describe("Render Appointment", () => {
  let container;
  const mock = new MockAdapter(axios);
  const userData = {
    appointmentList: [
      {
        appointmentId: "1",
        providerInfo: {
          providerId: "1",
          name: "Paul Wagner Md",
          position: "Scripps Eyecare",
          address: {
            addressLine1: "51 West 51st Street",
            addressLine2: "Floor 3, Suite 320 Midtown",
            city: "Florida",
            state: "FR",
            zipcode: "54231",
          },
          rating: "5",
          phoneNumber: "8572999989",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-07-18",
          to: "2022-07-23",
          location: {
            latitude: 32.751204,
            longitude: -117.1641166,
          },
        },
        patientInfo: {
          name: "Rebecca Chan",
          firstname: "Rebecca",
          lastname: "Chan",
          dob: "12/12/2022",
          phoneNumber: "1234567890",
        },
        appointmentInfo: {
          appointmentType: "Eye Exam",
          date: "Thu, 12 Jan 2023 04:30:00 EST",
          insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        },
      },
      {
        appointmentId: "1",
        providerInfo: {
          providerId: "1",
          name: "Dr. Sonha Nguyen",
          position: "Scripps Eyecare",
          address: {
            addressLine1: "51 West 51st Street",
            addressLine2: "Floor 3, Suite 320 Midtown",
            city: "Florida",
            state: "FR",
            zipcode: "54231",
          },
          rating: "5",
          phoneNumber: "8572999989",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-07-18",
          to: "2022-07-23",
          location: {
            latitude: 32.751204,
            longitude: -117.1641166,
          },
        },
        patientInfo: {
          name: "Rebecca Chan",
          firstname: "Rebecca",
          lastname: "Chan",
          dob: "12/12/2022",
          phoneNumber: "1234567890",
        },
        appointmentInfo: {
          appointmentType: "Eye Exam",
          date: "Thu, 12 Jan 2023 04:30:00 EST",
          insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        },
      },
    ],
  };
  beforeEach(async () => {
    Cookies.result = { authorized: true };
    mock
      .onGet(
        `${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, userData);
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getAllByText(userData.appointmentList[0].patientInfo.name);
    });
  });

  afterAll(() => {
    // mock.reset();
  });

  test("is Appointment page render", async () => {
    expect(
      container.getAllByText(userData.appointmentList[0].patientInfo.name)[0]
    ).toBeInTheDocument();
  });
});
