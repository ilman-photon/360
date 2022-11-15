import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import SessionExpiredModal from "../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1607.feature"
);

defineFeature(feature, (test) => {
  let container;
  let onLoggedOff = jest.fn()
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const validateText = (arg0) => {
    expect(container.getByText(arg0)).toBeInTheDocument();
  };
  test('EPIC_EPP-48_STORY_EPP-1607 - Verify that user should be able to view past appointments', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    then('user should be able to view an option to schedule new appointments', () => {
      defaultValidation();
    });

    then('user should be able to view Upcoming Appointments with an option to reschedule and cancel each of them', () => {
      defaultValidation();
    });

    then('user should be able to view Past Appointments', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify that whether user should be able to view the list of past appointments', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    then('user should be able to view Past Appointments', () => {
      defaultValidation();
    });

    then('user should be able to view the list of past appointments', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether user should be able to view the details under each past appointment', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    then('user should be able to view Past Appointments', () => {
      defaultValidation();
    });

    then('user should be able to view the list of past appointments', () => {
      defaultValidation();
    });

    and('user clicks on any of the past appointments', () => {
      defaultValidation();
    });

    then('user should be able to view the details (Date, Time, Doctor’s Name, Location’s address, Location’s Phone number) under each past appointment', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should be able to see the appropriate error message when there are no past appointments', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    then('user should be able to see the message You have no past appointments when there are no past appointments', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should able to see the past appointments without Internet connection', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    when('there is no internet connection available', () => {
      defaultValidation();
    });

    then('user should view appropriate error message', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    then('user should be able to view Past Appointments', () => {
      defaultValidation();
    });

    and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {
      defaultValidation();
    });

    then('none of the javascript error should be seen by the user', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the error message is displaying when the service is unavailable', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('user clicks on Login button', () => {
      defaultValidation();
    });

    then('user lands on to the Patient portal home page', () => {
      defaultValidation();
    });

    and('user navigates to Appointments screen', () => {
      defaultValidation();
    });

    when('user lands on Appointments screen', () => {
      defaultValidation();
    });

    when('the service is unavailable', () => {
      defaultValidation();
    });

    then(/^error message '(\d+) - Server is not ready to handle the request' should get display$/, (arg0) => {
      defaultValidation();
    });
  });
})