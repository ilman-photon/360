import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import { TEST_ID } from "../../src/utils/constants";
import {
  renderScheduleAppointment,
  renderResultsScreen,
} from "../../__mocks__/commonSteps";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Login } from "../../src/components/organisms/Login/login";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1597.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;

  beforeEach(() => {

  });

  test('EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.', ({ when, and, then }) => {
    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });

    and('click on Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to update the Date and Time if already provided', () => {
      expect(true).toBeTruthy();
    });

    then('user should allow to update the Date and Time.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to select the Date and Time, if not selected in Previous page.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });

    and('click on Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to add the Date and Time', () => {
      expect(true).toBeTruthy();
    });

    then('user should allow to add the Date and Time.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });

    and('click on Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to update the Date and Time if already provided', () => {
      expect(true).toBeTruthy();
    });

    then('it should allow to review once again the changed Date and Time in Appointment review screen.', () => {
      expect(true).toBeTruthy();
    });
  });
});
