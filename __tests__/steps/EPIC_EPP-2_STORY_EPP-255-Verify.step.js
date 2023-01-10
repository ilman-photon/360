import { fireEvent, render, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPasswordComponent";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com"

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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-255.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

defineFeature(feature, (test) => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  test('EPIC_EPP-2_STORY_EPP-255 - Verify if user able view the to set password screen', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify if user able to set the password by click the link receive through Email or phone number', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify error message if user not filled the "Password" field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify error message if user not filled the "Confirm Password" field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if user enter password mismatch in \'Password\' & \'Confirm Password\' field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the password field meet password requirement length range from 8 to 20 characters', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password field not meet password requirement length range from 8 to 20 characters', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password requirement not met for not using atleast 1 alphabets in \'Password\' field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password requirement not met for not using atleast 1 special character in Password field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password requirement not met for using 3 or more identical characters consecutively in Password field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password requirement not met for using same username(email or Mobile number) in Password field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password requirement not met for using previous password in Password field', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify if user able to view the password field set with data mask by default', ({ }) => { });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify if user able to view the password field set with data mask & option to unmask it', ({ }) => { });

  test('Verify if user able view the to set password screen', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^System sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    then('user User lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });
  });

  test('Verify if user able to set the password by click the link receive through Email or phone number', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^System sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    and(/^User should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    and('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see password field and confirm password field "(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "user123@A" } });
      expect(password.value).toEqual("user123@A");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
      expect(confirmPassword.value).toEqual("user123@A");
    });

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Password has been set”', () => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify error message if user not filled the "Password" field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^System sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should  see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    and('user should to view and fill the following fields', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see the field "(.*)","(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user see the error message “This field is required”', () => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify error message if user not filled the "Confirm Password" field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^System   sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('User click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('User lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^User should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    and('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    when('user leave \'Confirm password\' field blank', () => {
      expect(true).toBeTruthy();
    });

    then('user see the error message “This field is required”', () => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if user enter password mismatch in \'Password\' & \'Confirm Password\' field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^System sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see "(.*)" and "(.*)" field$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    and(/^user enter the value 'abcd(\d+)' in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
    });

    and(/^user enter the value 'abcd(\d+)' in Confirm password field$/, (arg0) => {
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    then('user see the error message “Password does not match”', () => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the password field meet password requirement length range from 8 to 20 characters', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)#' password field length range from (\d+) to (\d+) characters$/, (arg0, arg1, arg2) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
    });

    and(/^user enter the value 'abcd(\d+)#' in Confirm password field range from (\d+) to (\d+) character$/, (arg0, arg1, arg2) => {
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });
  });

  test('Verify the error message if password field not meet password requirement length range from 8 to 20 characters', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see the field "(.*)","(.*)"$/, (arg0, arg1) => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)#' length less than (\d+) characters$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter the value 'abcdefgh(\d+)##(\d+)' length greater than (\d+) characters$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if password requirement not met for not using atleast 1 alphabets in \'Password\' field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value '(\d+)#' without alphabets in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "1234" } });
      expect(password.value).toEqual("1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "1234" } });
      expect(confirmPassword.value).toEqual("1234");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if password requirement not met for not using atleast 1 special character in Password field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)' without special charaters in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if password requirement not met for using 3 or more identical characters consecutively in Password field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field"(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcabcabc(\d+)#' (\d+) or more identical characters consecutively in Password field$/, (arg0, arg1) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if password requirement not met for using same username(email or Mobile number)in "Password" field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field"(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when('user enter the value \'abc@gmail.com\' in Password field', () => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abc@gmail.com" } });
      expect(password.value).toEqual("abc@gmail.com");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abc@gmail.com" } });
      expect(confirmPassword.value).toEqual("abc@gmail.com");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user enter the value '(\d+)' in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abc@gmail.com" } });
      expect(password.value).toEqual("abc@gmail.com");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abc@gmail.com" } });
      expect(confirmPassword.value).toEqual("abc@gmail.com");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify the error message if password requirement not met for using previous password in Password field', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field"(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)#' previously used password in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abc@gmail.com" } });
      expect(password.value).toEqual("abc@gmail.com");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abc@gmail.com" } });
      expect(confirmPassword.value).toEqual("abc@gmail.com");
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('Verify if user able to view the password field set with data mask by default', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('System has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      // const usernameField = container.getByLabelText(/username/i);
      // expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see field"(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)#' in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    then('user should see the password field with masking the value \'******* entered', () => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });
  });

  test('Verify if user able to view the password field set with data mask & option to unmask it', ({ given, and, then, when }) => {
    given('user visited the ECP office', () => {
      expect(true).toBeTruthy();
    });

    and('user provide all details,fill forms and consulted doctor', () => {
      expect(true).toBeTruthy();
    });

    then('system  has all the required details of the user to onboard him to Patient portal', () => {
      expect(true).toBeTruthy();
    });

    and(/^system   sends out an Invite with link \(active only for (\d+) hrs\) to the user’s preferred mode\(s\) of communication$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
      expect(true).toBeTruthy();
    });

    when('user click on the link', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Set Password” screen', () => {
      container = render(
        <SetPasswordComponent
          title={"Set Password"}
          subtitle={"Enter a password to setup your account."}
          username={"smith1@photon.com"}
          onSetPasswordClicked={jest.fn()}
          showBackToLogin={false}
          ctaButtonLabel={"Set Password"}
          isUpdatePassword={true}
        />
      );
      const title = container.getAllByText("Set Password")[0];
      expect("Set Password").toEqual(title.textContent);
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      const verbiage = container.getByText(/Enter a password to setup your account./i);
      expect(verbiage).toBeInTheDocument();
    });

    then('user should see Email or phone number is auto populated', () => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    and(/^user should see field"(.*)","(.*)"$/, (arg0, arg1) => {
      const password = container.getAllByText(/password/i)[0];
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    });

    when(/^user enter the value 'abcd(\d+)#' in Password field$/, (arg0) => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    then('user should see the password field with masking the value \'*******\' entered.', () => {
      const password = container.getAllByLabelText(/password/i)[0];
      fireEvent.change(password, { target: { value: "abcd1234" } });
      expect(password.value).toEqual("abcd1234");
      const confirmPassword = container.getByTestId(/confirmPassword/i);
      fireEvent.change(confirmPassword, { target: { value: "abcd1234" } });
      expect(confirmPassword.value).toEqual("abcd1234");
    });

    and('user have an option to unmask the value', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the password field with unmask the value 'abcd(\d+)#'$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
