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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1558.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment.", ({
    given,
    and,
    then,
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

    and("user view options to change the Purpose of the Visit", () => {
      defaultValidation();
    });

    and("user selects the option to change the purpose of the visit", () => {
      defaultValidation();
    });

    and("user changes the purpose of the visit", () => {
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
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment and user view options to change the Purpose of the Visit", ({
    given,
    and,
    then,
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

    and("user not select the purpose of the visit", () => {
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

    and("user view options to change the Purpose of the Visit", () => {
      defaultValidation();
    });

    and("user selects the option to change the purpose of the visit", () => {
      defaultValidation();
    });

    and("user views the purpose of the visit as blank", () => {
      defaultValidation();
    });

    and("user selects the purpose of the visit", () => {
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
  });

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment. and the user views the purpose of visit as blank when the user not entered", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1558 - Verify user able to  change the 'Purpose of Visit' while reviewing the appointment to remove the existing Purpose of Visit.", ({
    given,
    and,
    then,
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

    and("user view options to change the Purpose of the Visit", () => {
      defaultValidation();
    });

    and("user not select the purpose of the visit", () => {
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
  });
});
