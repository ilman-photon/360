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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1544.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the Schedule your Eye Exam button in market site is navigating to the Appointment schedule page.", ({
    given,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user should see the Appointment schedule page", async () => {
      await renderAppointmentDetail();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the system is automatically taking the current location if enabled.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    then(
      "user should see the current location as default, if location is enabled.",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the user is able to search the location using City", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and("search the location using City option", () => {
      defaultValidation();
    });

    then("user should see the list of locations based upon City.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using State", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and("search the location using State option.", () => {
      defaultValidation();
    });

    then("user should see the list of locations based upon State.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using Zipcode", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and("search the location using Zipcode option.", () => {
      defaultValidation();
    });

    then("user should see the list of locations based upon Zipcode.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to select the searched location", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and("enter the City name", () => {
      defaultValidation();
    });

    and("click on Search.", () => {
      defaultValidation();
    });

    and("user will see the location based upon city name.", () => {
      defaultValidation();
    });

    then("user should allow to select any listed location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify user able to see the mentioned functionality on Schedule appointment page.", ({
    given,
    when,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and(
      "user should see the location, date of appointment, Purpose of the visit, Insurance name",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is having the option to detect their location.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      await renderAppointmentDetail();
    });

    and("click the option such as 'Locate me'.", () => {
      defaultValidation();
    });

    then("user present location should be displayed.", () => {
      defaultValidation();
    });
  });
});
