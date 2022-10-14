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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1575.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest.", ({
    given,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      defaultValidation();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
    });

    and("user chooses the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      defaultValidation();
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

    and("user reviewed and clicks on the continue button", () => {
      defaultValidation();
    });

    and("user view the Whos is this exam for? screen", () => {
      defaultValidation();
    });

    and("user click on the Self button", () => {
      defaultValidation();
    });

    and("user redirects to the login screen", () => {
      defaultValidation();
    });

    and("user clicks on the continue as guest", () => {
      defaultValidation();
    });

    and("user navigated to the guest user page", () => {
      defaultValidation();
    });

    and(
      "user clicks on the Already have an appointment? Sync your appointment information button",
      () => {
        defaultValidation();
      }
    );

    and("user enter the Email", () => {
      defaultValidation();
    });

    and("user clicks the 'Continue' button.", () => {
      defaultValidation();
    });

    and("user recieve the email link", () => {
      defaultValidation();
    });

    and("user Set password using email link", () => {
      defaultValidation();
    });

    and("user naviigated to Dash board screen", () => {
      defaultValidation();
    });

    and("user clicks on the Appointment synced button", () => {
      defaultValidation();
    });

    and(
      "user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit..", ({
    given,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      defaultValidation();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
    });

    and("user not selecting the purpose of visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      defaultValidation();
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

    and("user reviewed and clicks on the continue button", () => {
      defaultValidation();
    });

    and("user view the Whos is this exam for? screen", () => {
      defaultValidation();
    });

    and("user click on the Self button", () => {
      defaultValidation();
    });

    and("user redirects to the login screen", () => {
      defaultValidation();
    });

    and("user clicks on the continue as guest", () => {
      defaultValidation();
    });

    and("user navigated to the guest user page", () => {
      defaultValidation();
    });

    and(
      "user clicks on the Already have an appointment? Sync your appointment information button",
      () => {
        defaultValidation();
      }
    );

    and("user enter the Email", () => {
      defaultValidation();
    });

    and("user clicks the 'Continue' button.", () => {
      defaultValidation();
    });

    and("user recieve the email link", () => {
      defaultValidation();
    });

    and("user Set password using email link", () => {
      defaultValidation();
    });

    and("user naviigated to Dash board screen", () => {
      defaultValidation();
    });

    and("user clicks on the Appointment synced button", () => {
      defaultValidation();
    });

    and(
      "user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the insurance name.", ({
    given,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      defaultValidation();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
    });

    and("user chooses the purpose of the visit", () => {
      defaultValidation();
    });

    and("user not entering the insurance name", () => {
      defaultValidation();
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

    and("user reviewed and clicks on the continue button", () => {
      defaultValidation();
    });

    and("user view the Whos is this exam for? screen", () => {
      defaultValidation();
    });

    and("user click on the Self button", () => {
      defaultValidation();
    });

    and("user redirects to the login screen", () => {
      defaultValidation();
    });

    and("user clicks on the continue as guest", () => {
      defaultValidation();
    });

    and("user navigated to the guest user page", () => {
      defaultValidation();
    });

    and(
      "user clicks on the Already have an appointment? Sync your appointment information button",
      () => {
        defaultValidation();
      }
    );

    and("user enter the Email", () => {
      defaultValidation();
    });

    and("user clicks the 'Continue' button.", () => {
      defaultValidation();
    });

    and("user recieve the email link", () => {
      defaultValidation();
    });

    and("user Set password using email link", () => {
      defaultValidation();
    });

    and("user naviigated to Dash board screen", () => {
      defaultValidation();
    });

    and("user clicks on the Appointment synced button", () => {
      defaultValidation();
    });

    and(
      "user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit and insurance name.", ({
    given,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      defaultValidation();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      defaultValidation();
    });

    and("user not selecting the purpose of visit", () => {
      defaultValidation();
    });

    and("user not entering the insurance name", () => {
      defaultValidation();
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

    and("user reviewed and clicks on the continue button", () => {
      defaultValidation();
    });

    and("user view the Whos is this exam for? screen", () => {
      defaultValidation();
    });

    and("user click on the Self button", () => {
      defaultValidation();
    });

    and("user redirects to the login screen", () => {
      defaultValidation();
    });

    and("user clicks on the continue as guest", () => {
      defaultValidation();
    });

    and("user navigated to the guest user page", () => {
      defaultValidation();
    });

    and(
      "user clicks on the Already have an appointment? Sync your appointment information button",
      () => {
        defaultValidation();
      }
    );

    and("user enter the Email", () => {
      defaultValidation();
    });

    and("user clicks the 'Continue' button.", () => {
      defaultValidation();
    });

    and("user recieve the email link", () => {
      defaultValidation();
    });

    and("user Set password using email link", () => {
      defaultValidation();
    });

    and("user naviigated to Dash board screen", () => {
      defaultValidation();
    });

    and("user clicks on the Appointment synced button", () => {
      defaultValidation();
    });

    and(
      "user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'",
      () => {
        defaultValidation();
      }
    );
  });
});
