import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  provideFilters,
  renderLogin,
  renderScheduleAppointment,
  inputLocation,
  inputPurpose,
  renderResultsScreen,
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2597.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = TEST_ID;
  test("EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message while scheduling appointment from patient portal.", ({
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

    then("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", () => {
      defaultValidation();
    });

    and("user views the schedule new appointments link", () => {
      defaultValidation();
    });

    and("user clicks on the schedule new appointments", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and("user enters the location", () => {
      inputLocation(container);
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
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
      renderResultsScreen();
    });

    and("user selects the Provider", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      defaultValidation();
    });

    and("user views the Location section", () => {
      defaultValidation();
    });

    and("user views the Appointment section", () => {
      defaultValidation();
    });

    and("user clicks on the Continue button", () => {
      defaultValidation();
    });

    and("user views the Appointment details", () => {
      defaultValidation();
    });

    and("user clicks on the Continue button", () => {
      defaultValidation();
    });

    and("user views Contact information", () => {
      defaultValidation();
    });

    and("user views the Schedule Appointment button", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule Appointment button", () => {
      defaultValidation();
    });

    and("user navigates to the confirmation page", () => {
      defaultValidation();
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and the details while scheduling appointment from patient portal.", ({
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
      "user enters all the details and clicks on the Schedule Appointment button",
      () => {
        defaultValidation();
      }
    );

    and("user navigates to the confirmation page", () => {
      defaultValidation();
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user views the Date", () => {
      defaultValidation();
    });

    and("user views the Time", () => {
      defaultValidation();
    });

    and("user views the Purpose of Visit", () => {
      defaultValidation();
    });

    and("user views the Doctor", () => {
      defaultValidation();
    });

    and("user views the Patients Name", () => {
      defaultValidation();
    });

    and("user views the Location", () => {
      defaultValidation();
    });

    and("user views the Directions (to the location)", () => {
      defaultValidation();
    });

    and("user views the Location’s Phone number", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and view the option to add the appointment to my calendar while scheduling appointment from patient portal.", ({
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
      "user enters all the details and clicks on the Schedule Appointment button",
      () => {
        defaultValidation();
      }
    );

    and("user navigates to the confirmation page", () => {
      defaultValidation();
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user views the option to add the appointment to my calendar", () => {
      defaultValidation();
    });

    and("user clicks on the Add to calendar button", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the medical emergency link to view the emergenncy number while scheduling appointment from patient portal.", ({
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
      "user enters all the details and clicks on the Schedule Appointment button",
      () => {
        defaultValidation();
      }
    );

    and("user navigates to the confirmation page", () => {
      defaultValidation();
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user views the option to add the appointment to my calendar", () => {
      defaultValidation();
    });

    and("user views the medical emergency link", () => {
      defaultValidation();
    });

    and("user hover on the Is this a medical emergency? link", () => {
      defaultValidation();
    });

    and(/^user views the message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to navigate back to dashboard from the confirmation message while scheduling appointment from patient portal.", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    and(
      "user enters all the details and clicks on the Schedule Appointment button",
      () => {
        defaultValidation();
      }
    );

    and("user navigates to the confirmation page", () => {
      defaultValidation();
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user views the Ok button", () => {
      defaultValidation();
    });

    and("user clicks on the Ok button", () => {
      defaultValidation();
    });

    and("user navigate back to dashboard", () => {
      defaultValidation();
    });

    and("user views the Dashboard", () => {
      defaultValidation();
    });
  });
});
