import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1580.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test('EPIC_EPP-44_STORY_EPP-1580 - Verify user able to view inline error message if wrong format Email or Phone number to Sync eye exam is  entered', ({ given, and, when, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy()
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy()
    });

    and('user click on Continue as a Guest option', () => {
      expect(true).toBeTruthy()
    });

    when('user click on Already have an appointment? Sync your appointment information button', () => {
      expect(true).toBeTruthy()
    });

    then('user should see the Email or Phone number', () => {
      expect(true).toBeTruthy()
    });

    and(/^user provides wrong format (.*)$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user should click on submit', () => {
      expect(true).toBeTruthy()
    });

    then('user should see error message Incorrect email or phone number format', () => {
      expect(true).toBeTruthy()
    });
  });
});
