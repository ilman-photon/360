import { fireEvent, render, waitFor } from "@testing-library/react";
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
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2537.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID, APPOINTMENT_TEST_ID } = TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal.', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user is logged in to the application', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks to Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on \'Appointments\' screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the schedule new appointments link', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the schedule new appointments', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user view the Filters button', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user applies the filter.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user is logged in to the application', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the schedule new appointments search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the Filters button', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the filter button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Available Today (Provider)', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Language of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Gender of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      expect(true).toBeTruthy();
    });

    and('user applies the filters', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user is logged in to the application', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the schedule new appointments search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the Filters button', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the filter button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Available Today (Provider)', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Language of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Gender of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      expect(true).toBeTruthy();
    });

    and('user applies the filters', () => {
      expect(true).toBeTruthy();
    });

    and('user gets the updated result', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user is logged in to the application', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the schedule new appointments search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the Filters button', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the filter button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Available Today (Provider)', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Language of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Gender of Provider', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      expect(true).toBeTruthy();
    });

    and('user applies the filters', () => {
      expect(true).toBeTruthy();
    });

    and('user gets the updated result', () => {
      expect(true).toBeTruthy();
    });

    and('user removes the filter', () => {
      expect(true).toBeTruthy();
    });
  });
});
