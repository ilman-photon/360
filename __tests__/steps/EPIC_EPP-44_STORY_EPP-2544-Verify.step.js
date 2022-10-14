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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2544.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  beforeEach(() => {
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
  });

  afterEach(() => {
    mock.reset();
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see a pin in Map view', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see the doctor’s name with image and address of the location', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see the available time slots of that provider for the date of appointment selected', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to swipe/ navigate through different providers if they are the same location in the map', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to select a time-slot listed there to schedule the appointment', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - within 3 seconds', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - Without error script when user clicks on F12 on the console', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the internet service is unavailable user should see the following error message', ({  }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the service is unavailable user should see the following error message', ({  }) => {

  });
});
