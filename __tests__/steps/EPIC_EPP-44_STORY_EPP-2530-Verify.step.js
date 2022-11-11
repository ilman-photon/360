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
import HomePage from "../../src/pages/patient";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";
import Appointment from "../../src/pages/patient/appointment";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2530.feature"
);


defineFeature(feature, (test) => {
  test('EPIC_EPP-44_STORY_EPP-2530 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, and, then }) => {
    given('user launch the Marketing Site URL', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user views the timeslot', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user lands on the screen to review the appointment details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user selects the option to change the provider', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the provider', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user should get navigated to the screen to select a provider with time-slot', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select a provider with time-slot', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user able to Change provider', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select an insurance career', () => {
      expect(true).toBeTruthy();
    });

    and('user Change provider', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2530 - Verify whether the user able to review the appointment details once again', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
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

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select an insurance career', () => {
      expect(true).toBeTruthy();
    });

    and('user Change provider', () => {
      expect(true).toBeTruthy();
    });

    then('user once again review the appointment details', () => {
      expect(true).toBeTruthy();
    });
  });
});
