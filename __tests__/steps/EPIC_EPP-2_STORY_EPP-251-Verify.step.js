import { fireEvent, render, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { TRUE } from "sass";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { mockAppointmentTypes, mockInsurance, submitFilter } from "../../__mocks__/mockResponse";
import { TEST_ID } from "../../src/utils/constants";
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  provideFilters,
  renderLogin,
  renderScheduleAppointment,
  landOnCreateAccountPage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-251.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID, APPOINTMENT_TEST_ID } = TEST_ID;
  afterEach(() => {
    cleanup()
    mock.reset();
  });

  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
    window.matchMedia = createMatchMedia("1920px");
    global.navigator.geolocation = mockGeolocation;
  });
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('user should see the following fields', (table) => {
      const requiredFields = container.getByText(/Required Fields/i)
      expect(requiredFields).toBeInTheDocument();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),"<Mobile number">$/, (arg0, arg1, arg2, arg3) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    and('user should see the ‘Register’ CTA', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      expect(registerBtn).toBeInTheDocument();
    });

    and(/^user click on "(.*)" CTA$/, async (arg0) => {
      const registerBtn = await container.getByTestId("registerBtn")
      fireEvent.click(registerBtn)
    });

    then('user receives activation link to either Email or to phone number', () => {
      defaultValidation()
    });
  });

  test('Verify if user able to receive the link through Email', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      defaultValidation()
    });

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('user should see the following fields', (table) => {
      const requiredFields = container.getByText(/Required Fields/i)
      expect(requiredFields).toBeInTheDocument();
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    when('user select the email option', () => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    and('user to provide His/Her Email id', () => {
      const emailField = container.getByTestId("email")
      expect(emailField).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should be able to view registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    then(/^user have a option to select"(.*)"or"(.*)"$/, (arg0, arg1) => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    when('user select the Mobil number option', () => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    and('user to provide His/Her Mobile number', () => {
      const mobilenumberField = container.getByTestId("mobilenumber")
      expect(mobilenumberField).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should be able to view registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('user should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    when('user select the email option', () => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
    });

    and('user enters wrong Email id', () => {
      const emailField = container.getByTestId("email")
      expect(emailField).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should be able to view registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should be able to view registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('user should see the following fields', (table) => {
      const requiredFields = container.getByText(/Required Fields/i)
      expect(requiredFields).toBeInTheDocument();
    });

    when(/^user provide the details to the flield  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    then(/^user have a option to select "(.*)" or "(.*)"$/, (arg0, arg1) => {
      const prefferredMode = container.getByText(/Preferred mode of Communication/i)
      expect(prefferredMode).toBeInTheDocument();
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

    and('user is in “Patient Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ CTA in “Patient Login” screen', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should be able to view registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then('User should be able to view the following fields', (table) => {
      defaultValidation()
    });

    when(/^user provide the details to the field  "(.*)"$/, (arg0) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
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
