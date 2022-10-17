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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1578.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1578 - Verify user able to view enter Email or Phone Number to Sync Appointment Information", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user click on Continue as a Guest option", () => {
      defaultValidation();
    });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      () => {}
    );

    then("user should see the Email or Phone number", () => {
      defaultValidation();
    });

    and("user should see submit", () => {
      defaultValidation();
    });

    when('user provides "<Email or Phone Number"', () => {
      defaultValidation();
    });

    and("user click on submit", () => {
      defaultValidation();
    });

    then(
      "user should see the Email or Phone Number synced with appointment",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1578 -Verify user able to view inline error message if Email or Phone Number is not entered", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user click on Continue as a Guest option", () => {
      defaultValidation();
    });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      () => {}
    );

    then("user should see the Email or Phone number", () => {
      defaultValidation();
    });

    and("user should see submit", () => {
      defaultValidation();
    });

    when('user provides "<Email or Phone Number"', () => {
      defaultValidation();
    });

    and("user click on submit", () => {
      defaultValidation();
    });

    then(
      "user should see the Email or Phone Number synced with appointment",
      () => {}
    );
  });
});
