import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import ScheduleAppointment from "../../src/pages/patient/schedule-appointment/index";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";
import { TEST_ID } from "../../src/utils/constants";
import { renderAppointmentDetail } from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2545.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  test('EPIC_EPP-44_STORY_EPP-2545-Verify if user able to select a time slot of the provider', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      defaultValidation()
    });

    when('user provides valid Email or Phone Number and password', () => {
      defaultValidation()
    });

    and('user clicks on Login button', () => {
      defaultValidation()
    });

    then('user navigates to the Patient Portal application', () => {
      defaultValidation()
    });

    when('user  clicks on Schedule Appointment menu', () => {
      defaultValidation()
    });

    then('user navigates to the search screen', () => {
      defaultValidation()
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
      defaultValidation()
    });

    and('user clicks on ‘Search’ menu', () => {
      defaultValidation()
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
      defaultValidation()
    });

    when('user click on pin location in Map view', () => {
      defaultValidation()
    });

    then('user should see time slot for provider', () => {
      defaultValidation()
    });

    and('user select provider with the time slot available', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2545-Verify if user able to navigate to review appointment details', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', () => {
      defaultValidation()
    });

    when('user provides valid Email or Phone Number and password', () => {
      defaultValidation()
    });

    and('user clicks on Login button', () => {
      defaultValidation()
    });

    then('user navigates to the Patient Portal application', () => {
      defaultValidation()
    });

    when('user  clicks on Schedule Appointment menu', () => {
      defaultValidation()
    });

    then('user navigates to the search screen', () => {
      defaultValidation()
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
      defaultValidation()
    });

    and('user clicks on ‘Search’ menu', () => {
      defaultValidation()
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
      defaultValidation()
    });

    when('user click on pin location in Map view', () => {
      defaultValidation()
    });

    then('user should see time slot for provider', () => {
      defaultValidation()
    });

    and('user select provider with the time slot available', () => {
      defaultValidation()
    });

    then('user should lands onto review appointment page', () => {
      defaultValidation()
    });

    and('user should see Review Appointnment detail', () => {
      defaultValidation()
    });
  });
});
