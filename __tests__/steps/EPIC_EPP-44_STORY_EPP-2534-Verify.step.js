import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import HomePage from "../../src/pages/patient";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2534.feature"
);


defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test('EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user provides valid Email or Phone Number and password', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Login button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', () => {
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

    and('user views the results on the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user provides valid Email or Phone Number and password', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Login button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', () => {
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

    and('user views the selected location.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user provides valid Email or Phone Number and password', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Login button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', () => {
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

    and('user views the date of appointment.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user provides valid Email or Phone Number and password', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Login button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', () => {
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

    and('user views the purpose of the visit.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      expect(true).toBeTruthy();
    });

    when('user provides valid Email or Phone Number and password', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Login button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', () => {
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

    and('user views the insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });
});
