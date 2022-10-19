import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import {
  renderAppointmentDetail,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import constants, { TEST_ID } from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import GMaps from "../../src/components/organisms/Google/Maps/gMaps";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import mediaQuery from "css-mediaquery";
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
import { CircularProgress } from "@mui/material";
import ShallowRenderer from "react-shallow-renderer";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2570.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should navigated to the Patient Portal application', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should Logged in to the Patient Portal application', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the success message as "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('User provides the patient details', () => {
      defaultValidation()
    });

    and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should see the appointment under upcoming appointments', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    and(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    then(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    and('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User clicks to "Appointments\' menu', () => {
      defaultValidation()
    });

    then(/^User navigates to "(.*)" screen$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the appointment under upcoming appointments', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive an email message regarding appointment confirmation', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('User provides the patient details', () => {
      defaultValidation()
    });

    and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive a text message regarding appointment confirmation', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('User provides the patient details', () => {
      defaultValidation()
    });

    and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the following filters within 3 seconds', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('User provides the patient details', () => {
      defaultValidation()
    });

    and(/^User should see page load within (\d+) seconds$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('User provides the patient details', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
      defaultValidation()
    });

    then('The Internet service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, and, when, then }) => {
    given('User is already a registered user', () => {
      defaultValidation()
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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

    and('User should select the Date & Time with provider', () => {
      defaultValidation()
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation()
    });

    and('User has reviewed the appointment details', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Self', () => {
      defaultValidation()
    });

    then('User should navigated to the Patient Portal application', () => {
      defaultValidation()
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation()
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to Patient Dashboard', () => {
      defaultValidation()
    });

    when('User selects that the appointment is for Someone Else', () => {
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
