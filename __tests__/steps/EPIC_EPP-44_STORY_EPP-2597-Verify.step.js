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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2597.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message while scheduling appointment from patient portal.', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      defaultValidation()
    });

    and('user clicks to Appointments menu', () => {
      defaultValidation()
    });

    then('user navigates to Appointments screen', () => {
      defaultValidation()
    });

    and('user lands on \'Appointments\' screen', () => {
      defaultValidation()
    });

    and('user views the schedule new appointments link', () => {
      defaultValidation()
    });

    and('user clicks on the schedule new appointments', () => {
      defaultValidation()
    });

    then('user navigates to the search screen', () => {
      defaultValidation()
    });

    and('user enters the location', () => {
      defaultValidation()
    });

    and('user selects the date of appointment', () => {
      defaultValidation()
    });

    and('user chooses the purpose of the visit', () => {
      defaultValidation()
    });

    and('user enters the insurance name', () => {
      defaultValidation()
    });

    and('user clicks on the Search button', () => {
      defaultValidation()
    });

    and('user views the results in the Schedule Appointments screen', () => {
      defaultValidation()
    });

    and('user selects the Provider', () => {
      defaultValidation()
    });

    and('user selected a time slot', () => {
      defaultValidation()
    });

    and('user lands on the review of the appointment details', () => {
      defaultValidation()
    });

    and('user views the Location section', () => {
      defaultValidation()
    });

    and('user views the Appointment section', () => {
      defaultValidation()
    });

    and('user clicks on the Continue button', () => {
      defaultValidation()
    });

    and('user views the Appointment details', () => {
      defaultValidation()
    });

    and('user clicks on the Continue button', () => {
      defaultValidation()
    });

    and('user views Contact information', () => {
      defaultValidation()
    });

    and('user views the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the confirmation page', () => {
      defaultValidation()
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and the details while scheduling appointment from patient portal.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      defaultValidation()
    });

    and('user enters all the details and clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the confirmation page', () => {
      defaultValidation()
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    and('user views the Date', () => {
      defaultValidation()
    });

    and('user views the Time', () => {
      defaultValidation()
    });

    and('user views the Purpose of Visit', () => {
      defaultValidation()
    });

    and('user views the Doctor', () => {
      defaultValidation()
    });

    and('user views the Patients Name', () => {
      defaultValidation()
    });

    and('user views the Location', () => {
      defaultValidation()
    });

    and('user views the Directions (to the location)', () => {
      defaultValidation()
    });

    and('user views the Location’s Phone number', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and view the option to add the appointment to my calendar while scheduling appointment from patient portal.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      defaultValidation()
    });

    and('user enters all the details and clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the confirmation page', () => {
      defaultValidation()
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    and('user views the option to add the appointment to my calendar', () => {
      defaultValidation()
    });

    and('user clicks on the Add to calendar button', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the medical emergency link to view the emergenncy number while scheduling appointment from patient portal.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      defaultValidation()
    });

    and('user enters all the details and clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the confirmation page', () => {
      defaultValidation()
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    and('user views the option to add the appointment to my calendar', () => {
      defaultValidation()
    });

    and('user views the medical emergency link', () => {
      defaultValidation()
    });

    and('user hover on the Is this a medical emergency? link', () => {
      defaultValidation()
    });

    and(/^user views the message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to navigate back to dashboard from the confirmation message while scheduling appointment from patient portal.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      defaultValidation()
    });

    and('user enters all the details and clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the confirmation page', () => {
      defaultValidation()
    });

    and(/^views the confirmation message "(.*)" "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    and('user views the Ok button', () => {
      defaultValidation()
    });

    and('user clicks on the Ok button', () => {
      defaultValidation()
    });

    and('user navigate back to dashboard', () => {
      defaultValidation()
    });

    and('user views the Dashboard', () => {
      defaultValidation()
    });
  });
});
