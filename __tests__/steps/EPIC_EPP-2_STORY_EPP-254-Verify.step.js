import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-254.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-254- Verify if registered user able to register again with Email id', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again with Mobile number', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
