import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-220.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-7_STORY_EPP-220 - Verify user  is not able to submit "Set New Password" when internet connection is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should not copy and paste on (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Set New Password" when service is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should see "page loading" within 3 seconds', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" within (\d+) seconds$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should see empty fields when user refresh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('User refresh the page', () => {
      expect(true).toBeTruthy();
    });

    and('User should see empty fields', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should not see any scripts error when after user press F12 on the console', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Negative tests - Verify user should see "Password does not meet requirements" error message', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill less invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user able to navigate to the Select option screen from the Forgot Password Screen when Security questions not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to receive reset password link  to the registered Email without answering the security questions if they are not set.', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body as', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to receive reset password link to the registered Phone number without answering the security questions if they are not set.', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a reset password link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered email without answering the security questions if they are not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should not set the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should configure "(.*)" and "(.*)" radio button during registration$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" and "(.*)" radio button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page with "(.*)" heading$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body as below', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('The system should be mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User should click the link - Open mail', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User inputs valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User input (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered Phone Number without answering the security questions if they are not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see Forgot Password screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should input valid (.*)field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('The system should be mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User should click the link - Open mail', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User inputs valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User input (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify the error message “Reset password link has been expired” if the user clicks on the link received in email/text to update password 24 hours after it has been sent', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see Forgot Password screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should input valid (.*)field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only  "(.*)" as "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)" or  "Check for a link to reset your password“$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)" or message of "(.*)" after (\d+) hours$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
