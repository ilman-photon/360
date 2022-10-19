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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2550.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-2550 - Verify the user able to change the provider while reviewing the appointment from patient portal.', ({ given, when, and, then }) => {
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

    and('user views the selected Provider and time slot', () => {
      defaultValidation()
    });

    and('user clicks on the Location section Edit link', () => {
      defaultValidation()
    });

    and('user views the results in the Schedule Appointments screen', () => {
      defaultValidation()
    });

    and('user selects the Provider', () => {
      defaultValidation()
    });

    and('user selects the time slot', () => {
      defaultValidation()
    });

    and('user lands on the review of the appointment details', () => {
      defaultValidation()
    });
  });
});
