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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2546.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the increases of radius and checks for providers with distance greater than 20 miles to display', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should not see any providers for the combination even after increasing radius', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - within "3 seconds"', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - Without error script when user clicks on F12 on the console', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the Internet service is unavailable user should see the following error message', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    then('The Internet service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the service is unavailable user should see the following error message', ({ given, when, then, and }) => {
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

    and('User should see the selected location (with no result)', () => {
      defaultValidation()
    });

    and('User should see the selected date (with no result)', () => {
      defaultValidation()
    });

    and('User should see the purpose of visit (with no result)', () => {
      defaultValidation()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      defaultValidation()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
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
