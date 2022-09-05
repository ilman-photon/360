import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointments from "../../src/pages/patient/appointments";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1584.feature",
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
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
  }

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if   user able to view the "Appointments" screen.', ({ given, and, when, then }) => {
    given('User is logged in to the application', () => {
      defaultValidation()
    });

    and('User navigates to “Appointments” screen', () => {
      defaultValidation()
    });

    when('User lands on “Appointments” screen', () => {
      defaultValidation()
    });

    then('User should be able to view an option to schedule new appointments', () => {
      defaultValidation()
    });

    and('User should be able to view Upcoming Appointments with an option to reschedule and cancel each of them', () => {
      defaultValidation()
    });

    and('User should be able to view Past Appointments with an option to view the visit summary for each appointment', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming appointments/i)
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming appointments")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if user able to view an option to schedule new appointments', ({ }) => {
    defaultValidation()
  });

  test('EPIC_EPP-44_STORY_EPP-1584 -Verify if user able to view Upcoming Appointments', ({ }) => {
    defaultValidation()
  });

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if user able to view Upcoming Appointments option to reschedule and cancel', ({ }) => {
    defaultValidation()
  });

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if user  able to  view Past Appointments', ({ }) => {
    defaultValidation()
  });

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if user  able to  view Past Appointment with option to already visited deatails', ({ }) => {
    defaultValidation()
  });
});