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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1542.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  test('Verify if user clicks \'Schedule your Eye Exam\' CTA from Marketing site', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    then('User lands on to the screen', () => {
      defaultValidation()
    });

    and('user view and search  the location', () => {
      defaultValidation()
    });

    when('user view  the date of appointment', () => {
      defaultValidation()
    });

    and('user view the purpose of visit dropdown field', () => {
      defaultValidation()
    });

    then('user view  Insurance field', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to select the ‘Purpose of Visit’', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    then('User lands on to the screen', () => {
      defaultValidation()
    });

    and('user view and search  the location', () => {
      defaultValidation()
    });

    when('user select  the date of appointment', () => {
      defaultValidation()
    });

    and(/^user view the"(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then('user select the Purpose of Visit in dropdown field', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to select the ‘Purpose of Visit’which is a optional field', ({ given, when, then, and }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when('user clicks on the “Schedule your Eye Exam” button', () => {
      defaultValidation()
    });

    then('User lands on to the screen', () => {
      defaultValidation()
    });

    and('user view and search  the location', () => {
      defaultValidation()
    });

    when('user select  the date of appointment', () => {
      defaultValidation()
    });

    and('user view the purpose of visit field', () => {
      defaultValidation()
    });

    then(/^user able to select the "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and('user view optional label under ‘Purpose of Visit’field', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view   click \'Schedule your Eye Exam\' CTA from Marketing site', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to select the ‘Purpose of Visit’', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view optional label under ‘Purpose of Visit’field', ({ }) => {

  });
});
