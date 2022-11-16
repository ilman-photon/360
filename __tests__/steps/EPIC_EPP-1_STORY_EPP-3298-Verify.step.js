import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import { Provider } from "react-redux";
import HomePage from "../../src/pages/patient";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-3298.feature"
);

defineFeature(feature, (test) => {
  let container, mock;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    cleanup();
  });
  test('EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the following details as part of each upcoming test or procedure', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    when('User clicks on the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should be able to view the following details as below:', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the latest list of tests and procedures that are scheduled in the widget', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    when('User clicks on the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the latest list of tests and procedures that are scheduled in the widget', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking the widget will get navigated to the screen with upcoming tests and procedures', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    when('User clicks on the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking any particular test or procedure will get navigated to that particular test or procedure in the screen with upcoming test sand procedures', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    when('User clicks on the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    when('User on clicking any particular appointment', () => {
      defaultValidation();
    });

    then('User should navigated particular appointment in the screen with upcoming appointments', () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-1_STORY_EPP-3298 - Verify User should be able to swipe through to view other upcoming tests and procedures', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    when('User clicks on the widget with upcoming test or procedure', () => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    when('User on clicking any particular appointment', () => {
      defaultValidation();
    });

    and('User should be able to swipe through to view other upcoming appointments', () => {
      defaultValidation();
    });
  });

});
