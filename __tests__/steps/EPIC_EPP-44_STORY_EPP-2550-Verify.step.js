import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  defaultValidation,
  doLogin,
  renderLogin,
  renderAppointments,
  renderScheduleAppointment,
  inputLocation,
  inputPurpose,
  clickSearch,
  renderResultsScreen,
  renderAppointmentDetail,
} from "../../__mocks__/commonSteps";
import constants from "../../src/utils/constants";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import ScheduleAppointment from "../../src/pages/patient/schedule-appointment/index";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2550.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  const appointmentDetailScreen = () => {
    let container;
    act(() => {
      container = render(
        <Provider store={store}>
          {ScheduleAppointment.getLayout(<ScheduleAppointment />)}
        </Provider>
      );
    });
    return container;
  };

  test("EPIC_EPP-44_STORY_EPP-2550 - Verify the user able to change the provider while reviewing the appointment from patient portal.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user clicks to Appointments menu", () => {
      defaultValidation();
    });

    then("user navigates to Appointments screen", async () => {
      container = await renderAppointments(mock);
    });

    and("user lands on 'Appointments' screen", async () => {
      await waitFor(() => {
        container.getAllByText(/Appointments/i);
      });
    });

    and("user views the schedule new appointments link", async () => {
      await waitFor(() => {
        container.getByText(/Schedule New Appointment/i);
      });
    });

    and("user clicks on the schedule new appointments", () => {
      fireEvent.click(container.getByText(/Schedule New Appointment/i));
    });

    then("user navigates to the search screen", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    and("user enters the location", () => {
      inputLocation(container);
    });

    and("user selects the date of appointment", async () => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"));
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose(container);
    });

    and("user enters the insurance name", async () => {
      const insuranceInput = await waitFor(() =>
        container.getByLabelText("Insurance Carrier")
      );
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen(container);
    });

    and("user selects the Provider", async () => {
      const insuranceInput = await waitFor(
        () => container.getAllByLabelText("Insurance Carrier")[0]
      );
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
      clickSearch();
    });

    and("user selected a time slot", async () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });

    and("user lands on the review of the appointment details", async () => {
      cleanup();
      container = await appointmentDetailScreen();
    });

    and("user views the Location section", () => {
      expect(container.getAllByText(/location/i)[0]).toBeInTheDocument();
    });

    and("user views the selected Provider and time slot", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Location section Edit link", async () => {
      const editLink = await waitFor(() => container.getAllByText(/edit/i)[1]);
      fireEvent.click(editLink);
    });

    and(
      "user views the results in the Schedule Appointments screen",
      async () => {
        cleanup();
        container = await renderScheduleAppointment(mock);
      }
    );

    and("user selects the Provider", async () => {
      const insuranceInput = await waitFor(() =>
        container.getByLabelText("Insurance Carrier")
      );
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
      clickSearch();
      renderResultsScreen(container);
    });

    and("user selects the time slot", async () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      const hourButton = await waitFor(
        () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
      );
      fireEvent.click(hourButton);
    });

    and("user lands on the review of the appointment details", async () => {
      cleanup();
      container = await appointmentDetailScreen();
    });
  });
});
