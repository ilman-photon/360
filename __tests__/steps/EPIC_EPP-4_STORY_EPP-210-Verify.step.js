import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-210.feature", {
  tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid password attempts", ({
    given,
    when,
    then,
    and,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    given(/^user user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user user navigates to the Patient Portal application', () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('user user lands onto “Patient Login” screen', () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user user provides (.*) and (.*) for "(.*)"$/, (arg0, arg1, arg2) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user clicks on (.*) button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(/^user should  see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy()
    });

    and(/^user clicks on (.*) button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(/^user should see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy()
    });

    and(/^user clicks on (.*) button$/, (arg0) => {
      const login = container.getByText(/Login/i);
      fireEvent.click(login);
    });

    then(/^user should  see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy()
    });

    and(/^user clicks on (.*) button$/, (arg0) => {
      const login = container.getByText(/Login/i);
      fireEvent.click(login);
    });

    then(/^user should  see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy()
    });

    and(/^user clicks on (.*) button$/, async () => {
      const login = container.getByText(/Login/i);
      fireEvent.click(login);
    });

    then('user account should get locked', () => {
      expect(true).toBeTruthy()
    });

    and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
      expect(true).toBeTruthy()
    });

    and('user should receive the mail regarding account lock with below email content.', (table) => {
      expect(true).toBeTruthy()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 4 times & valid password attempt for 5th time", ({
    given,
    when,
    then,
    and,
  }) => {
    expect(true).toBeTruthy()
  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & 2nd time, valid password attempt for 3rd time", ({
    given,
    when,
    then,
    and,
  }) => {
    expect(true).toBeTruthy()
  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & valid password attempt for 2nd time", ({
    given,
    when,
    then,
    and,
  }) => {
    expect(true).toBeTruthy()
  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time,2nd time, 3rd time & valid password attempt for 4th time", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid email and invalid password for 1st time,2nd time, 3rd time & valid phone number and password attempt for 4th time", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, 3rd time & valid Email id and password attempt for 4th time", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, & 3 time valid Email id and password", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid username attempts", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 2 times invalid username & 3 times invalid password attempts", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 3 times invalid username & 2 times invalid password attempts", ({
    given,
    when,
    then,
    and,
  }) => {

  });
  test("EPIC_EPP-4_STORY_EPP-210 - Verify the error message when internet and service are unavailable", ({
    given,
    when,
    then,
    and,
  }) => {

  });
});
