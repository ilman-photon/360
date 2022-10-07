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
  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see a pin in Map view', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see the doctor’s name with image and address of the location', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should see the available time slots of that provider for the date of appointment selected', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to swipe/ navigate through different providers if they are the same location in the map', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to select a time-slot listed there to schedule the appointment', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });

    when('User selects a time-slot listed there to schedule the appointment', () => {
      defaultValidation()
    });

    then('User see the list of provider with time slots in map view from patient portal.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - within 3 seconds', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });

    when('User selects a time-slot listed there to schedule the appointment', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then('User see the list of provider with time slots in map view from patient portal', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - Without error script when user clicks on F12 on the console', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });

    when('User selects a time-slot listed there to schedule the appointment', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then('User see the list of provider with time slots in map view from patient portal', () => {
      defaultValidation()
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the internet service is unavailable user should see the following error message', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });

    when('User selects a time-slot listed there to schedule the appointment', () => {
      defaultValidation()
    });

    then('The Internet service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the service is unavailable user should see the following error message', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation()
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', () => {
      defaultValidation()
    });

    and('User should fill the location', () => {
      defaultValidation()
    });

    and('User should select the date of appointment', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User should fill the insurance name', () => {
      defaultValidation()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', () => {
      defaultValidation()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the selected location', () => {
      defaultValidation()
    });

    and('User should see the selected date', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (if provided)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (if provided)', () => {
      defaultValidation()
    });

    and('User should see a time slot of the provider', () => {
      defaultValidation()
    });

    when('User selects a time slot of the provider', () => {
      defaultValidation()
    });

    then('User should navigated to review the appointment details', () => {
      defaultValidation()
    });

    and('User should see the selected location along with the provider', () => {
      defaultValidation()
    });

    and('User should see a pin in Map view', () => {
      defaultValidation()
    });

    when('User clicks on any pin in Map view', () => {
      defaultValidation()
    });

    then('User should see the doctor’s name with image', () => {
      defaultValidation()
    });

    and('User should see the address of the doctor\'s location', () => {
      defaultValidation()
    });

    and('User should see the available time slots of that provider for the date of appointment selected', () => {
      defaultValidation()
    });

    and('User should be able to swipe/ navigate through different providers if they are the same location in the map', () => {
      defaultValidation()
    });

    when('User selects a time-slot listed there to schedule the appointment', () => {
      defaultValidation()
    });

    then('The service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });
});
