import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";

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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1579.feature"
);

defineFeature(feature, (test) => {
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-44_STORY_EPP-1579 - Verify user able to view inline error message if invalid Email or Phone number to Sync eye exam is  entered", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {});

    and("user clicks on the Schedule your Eye Exam button", () => {});

    and("user click on Continue as a Guest option", () => {});

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      () => {}
    );

    then("user should see the Email or Phone number", () => {});

    and(/^user provides invalid (.*)$/, (arg0) => {});

    and("user should click on submit", () => {});

    then(
      "user should see error message Invalid Email or Phone number",
      () => {}
    );
  });
});
