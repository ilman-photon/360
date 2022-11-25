import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-250.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Email" field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Date of Birth" field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the message  "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Mobile number" field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled and Preferred mode as Email', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    then(/^user should selects "(.*)" as Email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should get below notification message in Email', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled and Preferred mode as Email', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see default "(.*)" as Mobile Number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user change the "(.*)" from Mobile Number to Email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled and Preferred mode as Mobile Number', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see default "(.*)" as Mobile Number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)" below the "(.*)" CTA$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should get below notification message in Mobile Number', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Email id when email id is provided but Mobile number not provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(true).toBeTruthy();
    });

    then('user should see Username field autopopulate with email id', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Mobile number when mobile number is provided but email not provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(true).toBeTruthy();
    });

    then('user should see Username field autopopulate with Mobile number', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Email id when both email id and Mobile number provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(true).toBeTruthy();
    });

    then('user should see Username field autopopulate with email id', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when password requirement not met in "Password" field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(true).toBeTruthy();
    });

    and('user enter password which does not meet the password requirement', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the field "Preferred mode of communication" preselected with option "Both"', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user mouse over to field "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the field "(.*)" preselected the option "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to Mobile Number or Both when Email is provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the field "(.*)" selected with option "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and('user change the preferred mode to either Mobile number or Both', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see field "(.*)" selected with either "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the field "(.*)" selected with option "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and('user change the preferred mode to either Email or Both', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see field "(.*)" selected with either "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to "Email" or "Mobile number" when Both Mobile number and Email provided', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the field "(.*)" selected with option "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and('user change the preferred mode to either Email or Mobile number', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see field "(.*)" selected with either "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen page load within 3 seconds', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" patient portal url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" when internet service unavaliable$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen page load when internet service unavailable', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" patient portal url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" when internet service unavaliable$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen page load when ECP Application service unavailable', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" patient portal url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" when ECP Application service unavailable$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to validate whether Dev tools displayed when clicks on "F12" button', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" patient portal url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user (.*) the (.*) button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('user should validate whether the Dev Tools are Displayed', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if all mandatory fields are consisting astrerisk symbol', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" patient portal url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    when(/^user mouse over to the field  (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    then('user should see the asterisk symbol in all  mandatory fields', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^userr lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the verbiage "(.*)" below the "(.*)" CTA$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account by providing details in all mandatory field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^userr lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)" below the "(.*)" CTA$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
      expect(true).toBeTruthy();
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should get below notification message in either Email or mobile number based on prefer mode', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "First Name" field not filled', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the Don't have an account verbiage along with "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following fields(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Last Name" field not filled', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following field (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Date of Birth"" field not filled', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*) , (.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled and Preferred mode as Mobile Number', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see default "(.*)" as Email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user change the "(.*)" from Email to Mobile number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Last name" field', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should able to view the Don"(.*)" verbiage along with "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should view the verbiage "(.*)" below the "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see verbiage "(.*)"Login" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter numeric or special character in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)" under "(.*)" field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });
});
