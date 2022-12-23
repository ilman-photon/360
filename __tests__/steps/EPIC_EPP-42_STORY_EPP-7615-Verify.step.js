import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  createMatchMedia,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7615.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  test("EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the following error message “Incorrect code! Please try again.” for the first 3 times", ({}) => {});
  test("EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.”", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient records to the external user’s email or phone number",
      () => {}
    );

    and("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and(
      "User should be able to see health record/ prescription/ care plan document widget in dashboard",
      () => {}
    );

    then(
      "User clicks on the option to share their health record/ prescription/ care plan document",
      () => {}
    );

    and(
      "User views the pop-up to share their health record/ prescription/ care plan documen",
      () => {}
    );

    when(
      "User enters the required details and clicks on the option to share",
      () => {}
    );

    then(
      "User should receive an email message with the following content (ECP to provide content)",
      (table) => {}
    );

    when("User clicks on the link on the email/ text message", () => {});

    then("User should see a secure link (patient portal link)", () => {});

    when(
      /^External user enters the incorrect access code. more than (\d+) times$/,
      (arg0) => {}
    );

    then(
      "External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.”",
      () => {}
    );
  });
});
