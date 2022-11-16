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
  "./__tests__/feature/Patient Portal/Sprint2/EPP-254.feature"
);

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
  test('EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “User Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see user registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(/^user should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
      expect(mobilenumber).toBeInTheDocument();
      expect(dateofbirth).toBeInTheDocument();
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
    });

    and('user should see the ‘Register’ CTA', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      expect(registerBtn).toBeInTheDocument();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      const termNCon = container.getByText(/By registering, you accept to our Terms & Conditions and Privacy Policy/i)
      expect(termNCon).toBeInTheDocument();
    });

    and('user click on \'Register\' button', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      fireEvent.click(registerBtn);
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

    and('user is in “Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “User Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see user registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
      expect(mobilenumber).toBeInTheDocument();
      expect(dateofbirth).toBeInTheDocument();
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
      expect(mobilenumber).toBeInTheDocument();
      expect(dateofbirth).toBeInTheDocument();
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    and('user should see the ‘Register’ CTA', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      expect(registerBtn).toBeInTheDocument();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      const termNCon = container.getByText(/By registering, you accept to our Terms & Conditions and Privacy Policy/i)
      expect(termNCon).toBeInTheDocument();
    });

    and('user click on \'Register\' button', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      fireEvent.click(registerBtn);
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

    and('user is in “Login” screen', async () => {
      container = await renderLogin()
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      const createAccBtn = container.getByTestId("createaccount")
      fireEvent.click(createAccBtn)
    });

    then('user lands onto “User Registration” screen', async () => {
      cleanup()
      container = await landOnCreateAccountPage()
    });

    and('user should see user registration screen', () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
      expect(mobilenumber).toBeInTheDocument();
      expect(dateofbirth).toBeInTheDocument();
      expect(firstNameField).toBeInTheDocument();
      expect(lastNameField).toBeInTheDocument();
      expect(emailField).toBeInTheDocument();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      const firstNameField = container.getByText(/First Name/i)
      const lastNameField = container.getByText(/Last Name/i)
      const emailField = container.getByTestId("email")
      const dateofbirth = container.getByTestId("dateofbirth")
      const mobilenumber = container.getByTestId("mobilenumber")
    });

    and('user should see the ‘Register’ CTA', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      expect(registerBtn).toBeInTheDocument();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      const termNCon = container.getByText(/By registering, you accept to our Terms & Conditions and Privacy Policy/i)
      expect(termNCon).toBeInTheDocument();
    });

    and('user click on \'Register\' button', async () => {
      const registerBtn = await container.getByTestId("registerBtn")
      fireEvent.click(registerBtn);
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
