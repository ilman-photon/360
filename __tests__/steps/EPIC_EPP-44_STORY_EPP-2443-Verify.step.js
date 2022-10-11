import { act, fireEvent, render, waitFor } from "@testing-library/react";
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
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2443.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
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

  test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be navigated to "Schedule Appointment" screen with the selected data', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      defaultValidation();
    });

    and("User should see the selected location along with the provider", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should navigated to review the appointment details", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      defaultValidation();
    });

    and("User should see the selected location along with the provider", () => {
      defaultValidation();
    });

    and("User should see the selected Date and Time of the appointment", () => {
      defaultValidation();
    });

    and("User should see the selected purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("User should see the selected Insurance Career (if provided)", () => {
      defaultValidation();
    });

    and(
      "User should see a progress bar to identify with scheduling the appointment",
      () => {
        defaultValidation();
      }
    );

    and("User should see an option to go back to the previous screen", () => {
      defaultValidation();
    });

    and("User should see an option to schedule the appointment", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds", ({}) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      defaultValidation();
    });

    and("User should see the selected location along with the provider", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider - Without error script when user clicks on F12 on the console", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      defaultValidation();
    });

    and("User should see the selected location along with the provider", () => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the internet service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      defaultValidation();
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      defaultValidation();
    });

    when("User selects a time slot of the provider", () => {
      defaultValidation();
    });

    then("The service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });
});
