import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
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
} from "../../__mocks__/commonSteps";
import constants from "../../src/utils/constants";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import ScheduleAppointment from "../../src/pages/patient/schedule-appointment/index";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2549.feature"
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

  test("EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to change the 'Insurance carrier' while reviewing the appointment from patient portal.", ({
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

      expect(
        container.getByText(/Schedule New Appointment/i).textContent
      ).toEqual("Schedule New Appointment");
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

    and("user views the Appointment details section", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Edit link", async () => {
      const editLink = await waitFor(() => container.getAllByText(/edit/i)[0]);
      fireEvent.click(editLink);
    });

    and("user views the Purpose of the Visit", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
      inputPurpose();
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
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
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
  });

  test("EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to add the 'Insurance carrier' while reviewing the appointment from patient portal.", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "user clicks on the schedule new appointments and land on search screen",
      async () => {
        container = await renderAppointments(mock);
        fireEvent.click(container.getByText(/Schedule New Appointment/i));
      }
    );

    and(
      "user not enters insurance name and click on the seach button",
      async () => {
        cleanup();
        container = await renderScheduleAppointment(mock);
        const insuranceInput = await waitFor(() =>
          container.getByLabelText("Insurance Carrier")
        );
        act(() => {
          fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
        });
        clickSearch();
      }
    );

    and(
      "user selects the time slot and review the appoiment details",
      async () => {
        const hourButton = await waitFor(
          () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
        );
        fireEvent.click(hourButton);
      }
    );

    and("user views the Appointment details section", async () => {
      cleanup();
      container = await appointmentDetailScreen();
    });

    and("user clicks on the Edit link", async () => {
      const editLink = await waitFor(() => container.getAllByText(/edit/i)[0]);
      fireEvent.click(editLink);
    });

    and("user views the Purpose of the Visit", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
      inputPurpose();
    });

    and("user enters the insurance name", async () => {
      const insuranceInput = await waitFor(() =>
        container.getByLabelText("Insurance Carrier")
      );
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and("user clicks on the Continue button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen(container);
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
  });

  test("EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to Remove the 'Insurance carrier' while reviewing the appointment from patient portal.", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "user clicks on the schedule new appointments and land on search screen",
      async () => {
        container = await renderAppointments(mock);
        fireEvent.click(container.getByText(/Schedule New Appointment/i));
      }
    );

    and(
      "user enters insurance name and click on the seach button",
      async () => {
        cleanup();
        container = await renderScheduleAppointment(mock);
        const insuranceInput = await waitFor(() =>
          container.getByLabelText("Insurance Carrier")
        );
        act(() => {
          fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
        });
        clickSearch(container);
      }
    );

    and(
      "user selects the time slot and review the appoiment details",
      async () => {
        renderResultsScreen(container);
        expect(
          container.getByText("3 In-network providers")
        ).toBeInTheDocument();
        const hourButton = await waitFor(
          () => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)[0]
        );
        fireEvent.click(hourButton);
      }
    );

    and("user views the Appointment details section", async () => {
      cleanup();
      container = await appointmentDetailScreen();
    });

    and("user clicks on the Edit link", async () => {
      const editLink = await waitFor(() => container.getAllByText(/edit/i)[0]);
      fireEvent.click(editLink);
    });

    and("user views the Purpose of the Visit", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
      inputPurpose(container);
      expect(container.getAllByText(/Purpose of Visit/i)).toBeTruthy();
    });

    and("user remove the insurance name", async () => {
      const insuranceInput = await waitFor(() =>
        container.getByLabelText("Insurance Carrier")
      );
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "" } });
      });
    });

    and("user clicks on the continue button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen(container);
    });

    and("user selected a time slot", async () => {
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
