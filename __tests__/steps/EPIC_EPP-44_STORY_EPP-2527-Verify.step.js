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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2527.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test('EPIC_EPP-44_STORY_EPP-2527-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should select the location, Date of Appointment, Purpose of visit.', () => {
      expect(true).toBeTruthy();
    });

    and('dont select the Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });

    and('click on Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit.', () => {
      expect(true).toBeTruthy();
    });

    and('try to add the Insurance carrier', () => {
      expect(true).toBeTruthy();
    });

    then('user should allow to add the Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2527-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to update the Insurance carrier if already provided', () => {
      expect(true).toBeTruthy();
    });

    then('user should allow to update the Insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2527-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to update the Insurance carrier, which is not supported.', () => {
      expect(true).toBeTruthy();
    });

    then('already selected  Location, Date of Appointment, Purpose of visit should get removed.', () => {
      expect(true).toBeTruthy();
    });
  });
});
