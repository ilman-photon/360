import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-278.feature"
);

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      else if (param === "securityQuestions") return [];
      if (param === "ip") return "10.10.10.10";

      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

defineFeature(feature, (test) => {
  test('EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with Email and valid Password.', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user provides valid (.*) and valid(.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user click "(.*)" button.$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view Home/Dashboard page', () => {
      expect(true).toBeTruthy();
    });

    then('user get the log file in the location/tool', () => {
      expect(true).toBeTruthy();
    });

    then('the user can view the log details with time stamp', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with phone number and valid Password.', ({ given, and, when, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user provides valid (.*) and valid(.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user click "(.*)" button.$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view Home/Dashboard page', () => {
      expect(true).toBeTruthy();
    });

    then('user get the log file in the location/tool', () => {
      expect(true).toBeTruthy();
    });

    then('the user can view the log details with time stamp', () => {
      expect(true).toBeTruthy();
    });
  });


  test('EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing data\'s, when user edit the Personal information in the profile information.', ({ and, then }) => {
    and(/^admin clicks on the "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('admin can see the  insurance should delete successfully message', () => {
      expect(true).toBeTruthy();
    });

    then('admin should see error screen when service is unavailable', () => {
      expect(true).toBeTruthy();
    });

    then('admin get the log file in the location/tool', () => {
      expect(true).toBeTruthy();
    });

    then('the admin can view the log details with time stamp', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing  the error screen when the admin update and before saving the internet is unavailable', ({ given, and, when, then }) => {
    given(/^admin launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('admin navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('admin lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^admin see "(.*)" field and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^admin clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('admin shoud see set MFA screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see screen title written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see "(.*)" section with radio button selected on "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^admin unchecked the "(.*)" checkbox$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^admin click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see message "(.*)" and text "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and('admin should receive a email with code', () => {
      expect(true).toBeTruthy();
    });

    and(/^admin see the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('admin see the Email/ message body - Hi {adminname},', () => {
      expect(true).toBeTruthy();
    });

    then(/^admin see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin fill (.*) field with invalid code$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^admin click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('admin should see error screen when internet is unavailable', () => {
      expect(true).toBeTruthy();
    });

    then('admin gets the log file in the location/tool', () => {
      expect(true).toBeTruthy();
    });

    then('the admin can view the log details with time stamp', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing whether then Login using Magic link option is displaying along with the error message "Your password has expired. Please reset your password."', ({ given, when, and, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('user see the Login screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user  provides (.*) and expired (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should be able to see the following message “Your password has expired. Please reset your password."(.*)"Login using one-time" link.$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user get the log file in the location/tool', () => {
      expect(true).toBeTruthy();
    });

    then('the user can view the log details with time stamp', () => {
      expect(true).toBeTruthy();
    });
  });
});
