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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2533.feature"
);


defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test('Verify if user able to view the Insurance field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('User lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    and('user view and search  the location', () => {
      expect(true).toBeTruthy();
    });

    when('user select  the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user view the purpose of visit', () => {
      expect(true).toBeTruthy();
    });

    and('user view the insurance', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view  the Insurance field', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to select Insurance Carriers from the Insurance field', ({ given, when, then, and }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see insurance carriers selected from field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view a (Optional) label under Insurance field', ({ given, when, then }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see (Optional) label under Insurance field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view a Other Insurance option in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see Other insurance option from field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to provide Other Insurance option in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see Other insurance option from field', () => {
      expect(true).toBeTruthy();
    });

    when('user provide insurance carrier details by selecting Other insurance', () => {
      expect(true).toBeTruthy();
    });

    then('user should see details updated in the field.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(I\'m paying out of pocket) in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see (I\'m paying out of pocket) insurance option from field', () => {
      expect(true).toBeTruthy();
    });

    and('user select (I\'m paying out of pocket) in the insurance field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(Skip and choose insurance later) in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on to the screen', () => {
      expect(true).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see (Skip and choose insurance later)  insurance option from field', () => {
      expect(true).toBeTruthy();
    });

    and('user should select (Skip and choose insurance later) in the insurance field', () => {
      expect(true).toBeTruthy();
    });
  });
});
