import { fireEvent, render, act } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-216.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = render(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

const landOnPatientPortalScreen = () => {
  const title = container.getByText("formTitle");
  expect("formTitle").toEqual(title.textContent);
}

defineFeature(feature, (test) => {
  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp()
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen()
    });

    and("user clicks on 'Forgot Password' link", () => {

    });

    and(/^user should enter valid (.*)$/, (arg0) => {});

    and(/^user clicks on "(.*)" button$/, (arg0) => {});

    then(/^user should see "(.*)" screen$/, (arg0) => {});

    and(
      /^user should see "(.*)" button \(if security questions is set or not\)$/,
      (arg0) => {}
    );

    and(/^user should see "(.*)" button$/, (arg0) => {});

    and(/^user should see "(.*)" button$/, (arg0) => {});

    when(/^user click on "(.*)" button$/, (arg0) => {});

    then("user should see One-time link page", () => {});

    and(/^user should see "(.*)" text$/, (arg0) => {});

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {}
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {}
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {});

    then(/^user should see heading "(.*)"$/, (arg0) => {});

    and(/^user should see text "(.*)"$/, (arg0) => {});

    and(/^user should see message "(.*)"$/, (arg0) => {});

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {});

    and("user should receive a magic link mail", () => {});

    and(
      /^user should see the mail with Email Subject as "(.*)"$/,
      (arg0) => {}
    );

    and(/^user should see mail message body as "(.*)"$/, (arg0) => {});

    when("user click on a magic link", () => {});

    then("user should successfully be logged in", () => {});

    and("user should see Home/Dashboard page", () => {});
  });
});
