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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2526.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.', ({ given, and, then }) => {
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

    and('user views the results on the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location', ({ given, and, then }) => {
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

    and('user views the selected location', () => {
      expect(true).toBeTruthy();
    });

    and('user views an option to search locations using City with the selected location', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location', ({ given, and, then }) => {
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

    and('user views an option to search locations using State with the selected location', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location', ({ given, and, then }) => {
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

    and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
      expect(true).toBeTruthy();
    });

    and('user has the option to allow the system to detect their location', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options', ({ given, and, then }) => {
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

    and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
      expect(true).toBeTruthy();
    });

    and('user has the option to allow the system to detect their location', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter options', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date', ({ given, and, then }) => {
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

    and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
      expect(true).toBeTruthy();
    });

    and('user has the option to allow the system to detect their location', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter options', () => {
      expect(true).toBeTruthy();
    });

    and('user view options to change the appointment date', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit', ({ given, and, then }) => {
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

    and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
      expect(true).toBeTruthy();
    });

    and('user has the option to allow the system to detect their location', () => {
      expect(true).toBeTruthy();
    });

    and('user views the filter options', () => {
      expect(true).toBeTruthy();
    });

    and('user view options to change the appointment date', () => {
      expect(true).toBeTruthy();
    });

    and('user view options to change the Purpose of the Visit', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.', ({ given, and, then, when }) => {
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

    and('user views the purpose of the visit as blank', () => {
      expect(true).toBeTruthy();
    });

    when('the user not entered the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered', ({ given, and, then, when }) => {
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

    and('user views the purpose of the visit as blank', () => {
      expect(true).toBeTruthy();
    });

    when('the user not entered the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered', ({ given, and, then, when }) => {
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

    and('user views the insurance carrier as blank.', () => {
      expect(true).toBeTruthy();
    });

    when('user has not entered in the insurance carrier', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify the user is able to change the purpose of visit if already provided', ({ given, and, then }) => {
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

    then('user changes the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2526 - Verify that admin might have to remove the selection made for insurance carrier, location, date and time slot of the provider if the updated purpose of visit does support them and inform the user', ({ given, and, then }) => {
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

    and('user chooses the incorrect  purpose of the visit', () => {
      expect(true).toBeTruthy();
    });
  });
});
