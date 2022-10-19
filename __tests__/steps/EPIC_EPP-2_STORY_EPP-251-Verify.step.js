import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { TRUE } from "sass";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-251.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  const mock = new MockAdapter(axios);
  test('EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link after submit the registration details.', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link through Email', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link through Mobile number', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify the error message when user Enter the wrong Email id', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify the error message when user Enter the wrong Mobile Number', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify if user able to Register the account when the "Mobile number" field not filled', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify the error message if user not able to access the activation link through Email', ({ }) => {

  });

  test('EPIC_EPP-2_STORY_EPP-251 - Verify the error message if user not able to access the activation link through Mobile Number', ({ }) => {

  });

  test('Verify if user able to receive the link after submit the registration details.', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('user is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('user lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should see registration screen', () => {
      defaultValidation()
    });

    then('user should see the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),"<Mobile number">$/, (arg0, arg1, arg2, arg3) => {
      defaultValidation()
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    and('user should see the ‘Register’ CTA', () => {
      defaultValidation()
    });

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      defaultValidation()
    });

    then('user receives activation link to either Email or to phone number', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to receive the link through Email', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('user is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('user lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should see registration screen', () => {
      defaultValidation()
    });

    then('user should see the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the email option', () => {
      defaultValidation()
    });

    and('user to provide His/Her Email id', () => {
      defaultValidation()
    });

    then('user receive a activation link to the given Email id', () => {
      defaultValidation()
    });

    and('user login to email', () => {
      defaultValidation()
    });

    and('user check for the mail receipt with the link', () => {
      defaultValidation()
    });

    and('user click on the link and it redirect to the ECP Page to set Username and Password.', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to receive the link through Mobile number', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('User is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('User lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should be able to view registration screen', () => {
      defaultValidation()
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select"(.*)"or"(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the Mobil number option', () => {
      defaultValidation()
    });

    and('user to provide His/Her Mobile number', () => {
      defaultValidation()
    });

    then('user receive a activation link to the given Mobile number', () => {
      defaultValidation()
    });

    and('user check the text message in phone', () => {
      defaultValidation()
    });

    and('user open the message & click on the link and it redirect to the ECP Page to set Username and Password.', () => {
      defaultValidation()
    });
  });

  test('Verify the error message when user Enter the wrong Email id', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('user is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('user lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should be able to view registration screen', () => {
      defaultValidation()
    });

    then('user should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the email option', () => {
      defaultValidation()
    });

    and('user enters wrong Email id', () => {
      defaultValidation()
    });

    then('user should not  receive a activation link to the actual  Email id', () => {
      defaultValidation()
    });

    and('user to recheck and enter the correct Email id', () => {
      defaultValidation()
    });
  });

  test('Verify the error message when user Enter the wrong Mobile Number', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('User is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('User lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should be able to view registration screen', () => {
      defaultValidation()
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select"(.*)"or"(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the email option', () => {
      defaultValidation()
    });

    and('user enters wrong Mobile Number', () => {
      defaultValidation()
    });

    then('user should not receive a activation link to the actual Mobile number', () => {
      defaultValidation()
    });

    and('user to recheck and enter the correct mobile Number', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to Register the account when the "Mobile number" field not filled', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('User is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('User lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should be able to view registration screen', () => {
      defaultValidation()
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select"(.*)"or"(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the email option', () => {
      defaultValidation()
    });

    and(/^user not filled "(.*)" field$/, (arg0) => {
      defaultValidation()
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and(/^user to recheck and enter the field "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('Verify the error message if user not able to access the activation link through Email', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('user is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('user lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should see registration screen', () => {
      defaultValidation()
    });

    then('user should see the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the email option', () => {
      defaultValidation()
    });

    and('user to provide His/Her Email id', () => {
      defaultValidation()
    });

    then('user receive a activation link to the given Email id', () => {
      defaultValidation()
    });

    and('user login to email', () => {
      defaultValidation()
    });

    and('user check for the mail receipt with the link', () => {
      defaultValidation()
    });

    and('user click on the link', () => {
      defaultValidation()
    });

    then(/^user should see "(.*)" if link is not working$/, (arg0) => {
      defaultValidation()
    });
  });

  test('Verify the error message if user not able to access the activation link through Mobile Number', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('User is in “Patient Login” screen', () => {
      defaultValidation()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      defaultValidation()
    });

    then('User lands onto “Registration” screen', () => {
      defaultValidation()
    });

    and('user should be able to view registration screen', () => {
      defaultValidation()
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the field  "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    then(/^user have a option to select"(.*)"or"(.*)"$/, (arg0, arg1) => {
      defaultValidation()
    });

    when('user select the Mobil number option', () => {
      defaultValidation()
    });

    and('user to provide His/Her Mobile number', () => {
      defaultValidation()
    });

    then('user receive a activation link to the given mobile number', () => {
      defaultValidation()
    });

    and('user check the text message in phone', () => {
      defaultValidation()
    });

    and('user open the message & click on the link', () => {
      defaultValidation()
    });

    then(/^user should see "(.*)" if link is not working$/, (arg0) => {
      defaultValidation()
    });
  });
});
