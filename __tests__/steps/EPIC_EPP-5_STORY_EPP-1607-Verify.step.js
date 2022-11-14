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

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    then('user should be able to view an option to schedule new appointments', () => {

    });

    then('user should be able to view Upcoming Appointments with an option to reschedule and cancel each of them', () => {

    });

    then('user should be able to view Past Appointments', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify that whether user should be able to view the list of past appointments', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    then('user should be able to view Past Appointments', () => {

    });

    then('user should be able to view the list of past appointments', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether user should be able to view the details under each past appointment', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    then('user should be able to view Past Appointments', () => {

    });

    then('user should be able to view the list of past appointments', () => {

    });

    and('user clicks on any of the past appointments', () => {

    });

    then('user should be able to view the details (Date, Time, Doctor’s Name, Location’s address, Location’s Phone number) under each past appointment', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should be able to see the appropriate error message when there are no past appointments', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    then('user should be able to see the message You have no past appointments when there are no past appointments', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should able to see the past appointments without Internet connection', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    when('there is no internet connection available', () => {

    });

    then('user should view appropriate error message', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    then('user should be able to view Past Appointments', () => {

    });

    and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {

    });

    then('none of the javascript error should be seen by the user', () => {

    });
  });

  test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the error message is displaying when the service is unavailable', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {

    });

    and('user clicks on Login button', () => {

    });

    then('user lands on to the Patient portal home page', () => {

    });

    and('user navigates to Appointments screen', () => {

    });

    when('user lands on Appointments screen', () => {

    });

    when('the service is unavailable', () => {

    });

    then(/^error message '(\d+) - Server is not ready to handle the request' should get display$/, (arg0) => {

    });
  });
})