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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2569.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit -1 (Need to confirm)', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email ID', () => {
      defaultValidation()
    });

    and('enter the Mobile number', (arg0) => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('it should not display the error message for mobile', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is allowing the Maximum limit (Need to confirm)', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email ID', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('it should not display the error message for mobile', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the many special characters inbetween the Mobile number.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email ID', () => {
      defaultValidation()
    });

    and('enter many special characters inbetween Mobile number', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('it should display the error message Incorrect mobile number', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the Alphabets inbetween the Mobile number.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email ID', () => {
      defaultValidation()
    });

    and('enter the alphabet inbetween Mobile number', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('it should display the error message Incorrect mobile number', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Preferred mode of communication Both is selected as default.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    then('verify whether the Preferred mode of communication is selected Both as default.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email field is asking for mandatory when user select the Preferred mode of communication = Email.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Email', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('Email should ask for the mandatory.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number field is asking for mandatory when user select the Preferred mode of communication = Phone.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Phone', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('Mobile number should ask for the mandatory.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is asking for mandatory, when user enters the Email ID and set the preferred mode = Email for the first time and change the Preferred mode of communication =Phone', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email', () => {
      defaultValidation()
    });

    and('without entering the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Email', () => {
      defaultValidation()
    });

    and('change the Preferred mode of communication = Phone', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('mandatory error message should display for the Mobile number field.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is asking for mandatory, when user enters the Mobile number and set the preferred mode = Phone for the first time and change the Preferred mode of communication =Email', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email', () => {
      defaultValidation()
    });

    and('without entering the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Email', () => {
      defaultValidation()
    });

    and('change the Preferred mode of communication = Phone', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('mandatory error message should display for the Mobile number field.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is receiving properly, when Preferred mode of communication is selected as Email', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Email', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('Email should trigger to the email.(Need to confirm)', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Message alert is receiving properly, when Preferred mode of communication is selected as Phone', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Phone', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('Message should trigger to the Mobile number.(Need to confirm)', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the back buton is navigating to back', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Email', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    and('click the back button.', () => {
      defaultValidation()
    });

    then('user should navigate to previous page.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying in the Guest user basic details page after choosing the Myself option.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    then('user should see the fields such as First name, Last name, Date of birth, Email, Mobile number, Preferred mode of communication', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Progress bar is displaying for the stages of Appointment', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication = Phone', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('user should see the Progress bar with Location,  Review, Appointment details, Contact Info, Confirm', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the user is able to view the following details along with option to update them.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('select the Preferred mode of communication =Email', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('user is able to edit the Location, Date and Time, Insurance carrier, Purpose of visit.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email and Mobile number fields are asking for mandatory when both Email and Mobile number is left as blank.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('without entering the Email and Mobile number', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('error message Email ID or Mobile number is required should display for both Email & Mobile number fields.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Incorrect email format is displaying for the below mentioned Invaild Email IDs', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the mentioned Email ID', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('error message Incorrect email format should get displayed.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the numbers', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('enter the First name with numbers, click the Continue', () => {
      defaultValidation()
    });

    then('Guest user should see the error message Invalid Format.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the Special characters', ({ }) => {

  });


  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 1 character length.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the First name with (\d+) character, click the Continue$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 51 characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the First name with (\d+) characters, click the Continue$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 2 characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the First name with valid (\d+) characters, click the Continue$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should not see any error message for First name', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 50 characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the First name with valid (\d+) characters, click the Continue$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should not see any error message for First name', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is displaying the Mandatory error message.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('without entering the Last name, click the Continue', () => {
      defaultValidation()
    });

    then('it should display the error message This field is required.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the numbers', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the Last name with numbers, click the Continue', () => {
      defaultValidation()
    });

    then('Guest user should see the error message Invalid Format.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the Special characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the Last name with Special characters, click the Continue', () => {
      defaultValidation()
    });

    then('Guest user should see the error message Invalid Format.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 1 character', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the Last name with (\d+) character, click the Continue$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 51 characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the Last name with (\d+) characters, click the Continue.$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('VEPIC_EPP-44_STORY_EPP-1569-erify whether the Last name is allowing the valid 2 characters', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and(/^enter the Last name with valid Minimum (\d+) characters length, click the Continue.$/, (arg0) => {
      defaultValidation()
    });

    then('Guest user should not see any error message for Last name', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is allowing the valid 50 characters length', ({ }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of Birth is displaying the Mandatory error message.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('without entering the Date of birth, click the Continue', () => {
      defaultValidation()
    });

    then('it should display the error message This field is required.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Invalid date of birth is displaying for invalid Date of birth DD/MM/YYYY', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name', () => {
      defaultValidation()
    });

    and('enter the invalid Date of Birth.', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('Guest user should see the error message Invalid date of birth', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is displaying as per the given date format MM/DD/YYYY.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name', () => {
      defaultValidation()
    });

    and('enter the invalid Date of Birth format.', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('Guest user should see the correct Date of Birth format.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the future date is not allowing in the Date of Birth field.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the future Date of birth.', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing more than Maximum age limit.(Need to confirm)', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the Date of birth more than maximum age limit.', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing less than Minimum age limit.(Need to confirm)', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the Date of birth less than minimum age limit.', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is accepting valid Date of Birth', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('Guest user should not see any error message for Date of birth.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Email when Mobile number is filled.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('without entering the Email and enter the Mobile number', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('error message should not display for Email field.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Mobile number when Email is filled.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('without entering the Mobile number and enter the Email', () => {
      defaultValidation()
    });

    and('click Continue button.', () => {
      defaultValidation()
    });

    then('error message should not display for Mobile number field.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit +1 (Need to confirm)', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('Guest user should see the Guest Access screen.', () => {
      defaultValidation()
    });

    and('enter the First name, Last name.', () => {
      defaultValidation()
    });

    and('enter the valid Date of birth', () => {
      defaultValidation()
    });

    and('enter the Email ID', () => {
      defaultValidation()
    });

    and('enter the Mobile number', () => {
      defaultValidation()
    });

    and('click the Continue button.', () => {
      defaultValidation()
    });

    then('it should display the appropriate error message.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying if the user select the Myself in Provide Information page.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    then('user should see the below mentioned fields', (table) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the Continue as a Guest option is displaying after user select the Myself option', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    then('user should see the Continue as Guest button.', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is displaying the Mandatory error message.', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user select the Purpose of Visit, Location and Date & Time with provider.', () => {
      defaultValidation()
    });

    and('user review the appointments.', () => {
      defaultValidation()
    });

    and('select the Appointment for Myself.', () => {
      defaultValidation()
    });

    and('click the Continue as a Guest button.', () => {
      defaultValidation()
    });

    and('without entering the First name, click the Continue', () => {
      defaultValidation()
    });

    then('it should display the error message This field is required.', () => {
      defaultValidation()
    });
  });
});
