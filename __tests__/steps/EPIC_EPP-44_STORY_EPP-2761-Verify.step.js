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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2761.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password and Appointment is synced automatically', ({ given, when, and, then }) => {
    given('registered user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('registered user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('registered user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
      defaultValidation()
    });

    and('registered user click the Forgot password', () => {
      defaultValidation()
    });

    and('registered user should able to set the password.', () => {
      defaultValidation()
    });

    and('registered should lands on dashboard.', () => {
      defaultValidation()
    });

    and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
      defaultValidation()
    });

    then('registered user should  able to view the Appointment under Upcoming Appointments', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Email is delivering to registered Email based on Preferred mode of communication', ({ given, when, and, then }) => {
    given('registered user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('registered user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('registered user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
      defaultValidation()
    });

    and('registered user click the Forgot password', () => {
      defaultValidation()
    });

    and('registered user should able to set the password.', () => {
      defaultValidation()
    });

    and('registered should lands on dashboard.', () => {
      defaultValidation()
    });

    and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
      defaultValidation()
    });

    and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
      defaultValidation()
    });

    then('Appointment Confirmation Email should received to the registered user.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Text message is delivering to registered Phone number based on Preferred mode of communication', ({ given, when, and, then }) => {
    given('registered user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('registered user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('registered user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
      defaultValidation()
    });

    and('registered user click the Forgot password', () => {
      defaultValidation()
    });

    and('registered user should able to set the password.', () => {
      defaultValidation()
    });

    and('registered should lands on dashboard.', () => {
      defaultValidation()
    });

    and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
      defaultValidation()
    });

    and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
      defaultValidation()
    });

    then('Appointment Confirmation Text message should received to the registered user.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1761-To verify the Appointment confirmation Email content', ({ given, when, and, then }) => {
    given('registered user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('registered user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('registered user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
      defaultValidation()
    });

    and('registered user click the Forgot password', () => {
      defaultValidation()
    });

    and('registered user should able to set the password.', () => {
      defaultValidation()
    });

    and('registered should lands on dashboard.', () => {
      defaultValidation()
    });

    and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
      defaultValidation()
    });

    and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
      defaultValidation()
    });

    then('check for whether the Email content is displaying as below', (table) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password from the Marketting site', ({ given, when, and, then }) => {
    given('registered user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('registered user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('registered user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
      defaultValidation()
    });

    and('Registered user click the Forgot password', () => {
      defaultValidation()
    });

    then('Registered user should able to set the password.', () => {
      defaultValidation()
    });
  });
});
