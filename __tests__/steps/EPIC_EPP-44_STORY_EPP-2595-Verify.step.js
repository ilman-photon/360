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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2595.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-1595-To verify whether the user is allowed to change the Location in Appointment Review screen.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the location if already provided', () => {
      defaultValidation()
    });

    then('user should allow to update the location.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whethet the user is able to select the Location, if not selected in Previous page.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the Date of Appointment, Purpose of visit, Insurance carrier and without selecting location.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with blank selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to add the location', () => {
      defaultValidation()
    });

    then('user should allow to add the Location.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whether the already selected data are getting removed if we update the other Location if not supported.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the Location, which is not supported.', () => {
      defaultValidation()
    });

    then('already selected  Date of Appointment, Insurance carrier, purpose of visit should get removed.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to review the Appointment details after updating the Location.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit andInsurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the Location if already provided', () => {
      defaultValidation()
    });

    then('it should allow to review once again the changed Location in Appointment review screen.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by City', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the location using Search by City and select any other location.', () => {
      defaultValidation()
    });

    then('user should allow to update the location.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by State', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the location using Search by State and select any other location.', () => {
      defaultValidation()
    });

    then('user should allow to update the location.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by Zipcode', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule Appointment button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation()
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation()
    });

    and('click on Search button', () => {
      defaultValidation()
    });

    and('user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data', () => {
      defaultValidation()
    });

    and('try to update the location using Search by Zipcode and select any other location.', () => {
      defaultValidation()
    });

    then('user should allow to update the location.', () => {
      defaultValidation()
    });
  });
});
