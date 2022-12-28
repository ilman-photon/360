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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2404.feature"
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

defineFeature(feature, (test) => {
  beforeEach(() => {

  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment."', ({
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

    and("user views the results on the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => { }
    );
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City with the selected location",
      () => { }
    );
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using State with the selected location",
      () => { }
    );
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using  Zipcode with the selected location",
      () => { }
    );
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => { }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => { }
    );
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => { }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => { }
    );

    and("user views the filter options", () => {
      defaultValidation();
    });
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => { }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => { }
    );

    and("user views the filter options", () => {
      defaultValidation();
    });

    and("user view options to change the appointment date", () => {
      defaultValidation();
    });
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => { }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => { }
    );

    and("user views the filter options", () => {
      defaultValidation();
    });

    and("user view options to change the appointment date", () => {
      defaultValidation();
    });

    and("user view options to change the Purpose of the Visit", () => {
      defaultValidation();
    });
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance."', ({
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

    and("user views the selected location.", () => {
      defaultValidation();
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => { }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => { }
    );

    and("user views the filter options", () => {
      defaultValidation();
    });

    and("user view options to change the appointment date", () => {
      defaultValidation();
    });

    and("user view options to change the Purpose of the Visit", () => {
      defaultValidation();
    });

    and("user view options to change the insurance.", () => {
      defaultValidation();
    });
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered."', ({
    given,
    and,
    then,
    when,
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

    and("user views the purpose of the visit as blank", () => {
      defaultValidation();
    });

    when("the user not entered the purpose of the visit", () => {
      defaultValidation();
    });
  });

  test('"EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered."', ({
    given,
    and,
    then,
    when,
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

    and("user views the insurance carrier as blank.", () => {
      defaultValidation();
    });

    when("user has not entered in the insurance carrier", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment. and the user views the purpose of visit as blank when the user not entered", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit.", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view Doctor Name and click it", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view Doctor Name and click it and Verify Doctors Biography", ({ }) => {
    defaultValidation();
  });
});
