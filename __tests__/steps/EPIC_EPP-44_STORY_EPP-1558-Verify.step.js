import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderAppointmentDetail,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_APPOINTMENT,
  MOCK_PAST,
} from "../../__mocks__/mockResponse";
import { Login } from "../../src/components/organisms/Login/login";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointments from "../../src/pages/patient/appointments";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1558.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const userSeeScheduleScreen = () => {
  expect(container.getAllByText("Date and time")).toBeTruthy();
  expect(container.getAllByText("Insurance")).toBeTruthy();
  expect(container.getAllByText("No Insurance provided")).toBeTruthy();
  expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

// const seeTimeSlot = async () => {
//   const timeSlots = await waitFor(() =>
//     container.getAllByTestId(
//       TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.infoWindow.timeslot
//     )
//   );
//   expect(timeSlots[0]).toBeInTheDocument();
// };

// const selectTimeSlot = async () => {
//   const timeSlots = await waitFor(() =>
//     container.getAllByTestId(
//       TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.infoWindow.timeslot
//     )
//   );
//   fireEvent.click(timeSlots[0]);
// };

defineFeature(feature, (test) => {
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user chooses the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });

    and("user view options to change the Purpose of the Visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user selects the option to change the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user changes the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment and user view options to change the Purpose of the Visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user not select the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });

    and("user view options to change the Purpose of the Visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user selects the option to change the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user views the purpose of the visit as blank", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user selects the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment. and the user views the purpose of visit as blank when the user not entered", ({ }) => { });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to  change the 'Purpose of Visit' while reviewing the appointment to remove the existing Purpose of Visit.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user chooses the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });

    and("user view options to change the Purpose of the Visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user not select the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });
  });
});
