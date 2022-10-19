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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1559.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the City as new location.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the Zipcode as a new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment  and user enter the state as new location.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the State as a new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the Zipcode as new location.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the City as a new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid City as new location and user gets the error message.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the invalid City as a new location", () => {
      defaultValidation();
    });

    and(
      "user get the error message as Please enter the valid location to continue.",
      () => {}
    );

    then("user enter the new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid State as new location and user gets the error message.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the invalid State as a new location", () => {
      defaultValidation();
    });

    and(
      "user get the error message as Please enter the valid location to continue.",
      () => {}
    );

    then("user enter the new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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

  test("EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid Zipcode as new location and user gets the error message.", ({
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

    and("user clicks on the edit link in the location", () => {
      defaultValidation();
    });

    and("user view options to change the location", () => {
      defaultValidation();
    });

    and("user enters the invalid Zipcode as a new location", () => {
      defaultValidation();
    });

    and(
      "user get the error message as Please enter the valid location to continue.",
      () => {}
    );

    then("user enter the new location", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
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
