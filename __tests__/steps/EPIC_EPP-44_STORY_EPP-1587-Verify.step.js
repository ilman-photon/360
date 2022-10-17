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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1587.feature"
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
  test("EPIC_EPP-44_STORY_EPP-1587- Verify whether the system is automatically taking the current location if enabled.", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1587- Verify whether the user is able to search the location using City", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("Enter a city name and clicks on search button", () => {
      defaultValidation();
    });

    then("the user should see the list of locations based on City.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using State", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("Enter a state name and clicks on the search button", () => {
      defaultValidation();
    });

    then(
      "the user should see the list of locations based upon State.",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using Zipcode", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("Enter a valid zip code and clicks on the search button", () => {
      defaultValidation();
    });

    then("the user  see the list of locations based upon Zipcode.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is having the option to detect their location.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    when("the user clicks on use my current location link", () => {
      defaultValidation();
    });

    then("the user sees the current location", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to select the searched location", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
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

  test("EPIC_EPP-44_STORY_EPP-1587- Verify user able to see the below mentioned functionality on Schedule appointment page.  Search for location Date of appointment Purpose of visit Insurance...", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      () => {}
    );

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    then(
      "user should see the location, date of appointment, Purpose of the visit, Insurance name",
      () => {}
    );
  });
});
