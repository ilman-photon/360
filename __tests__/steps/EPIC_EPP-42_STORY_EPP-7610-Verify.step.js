import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import EnterAccessCode from "../../src/components/molecules/ShareMyPage/EnterAccessCode";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7610.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  afterEach(() => {
    cleanup();
  });
  test("EPIC_EPP-42_STORY_EPP-7610- Verify External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User (Patient) has shared the patient records to the external user’s email or phone number", () => {
      expect(true).toBeTruthy();
    });

    and("External user received a secure link (patient portal link) with the email/ text message", () => {
      expect(true).toBeTruthy();
    });

    and("External user should receive another email/ text message with the access code", () => {
      expect(true).toBeTruthy();
    });

    when("External user clicks on the secure link received via email or phone number", () => {
      expect(true).toBeTruthy();
    });

    then("External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”", () => {
      container = render(<EnterAccessCode />);
      const redirectMessage = container.getByText("infoEnterAccessCode")
      expect(redirectMessage).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to enter the access code code", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User (Patient) has shared the patient records to the external user’s email or phone number", () => {
      expect(true).toBeTruthy();
    });

    and("External user received a secure link (patient portal link) with the email/ text message", () => {
      expect(true).toBeTruthy();
    });

    and("External user should receive another email/ text message with the access code", () => {
      expect(true).toBeTruthy();
    });

    when("External user clicks on the secure link received via email or phone number", () => {
      expect(true).toBeTruthy();
    });

    then("External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”", () => {
      container = render(<EnterAccessCode />);
      const redirectMessage = container.getByText("infoEnterAccessCode")
      expect(redirectMessage).toBeInTheDocument();
    });

    and("External user should see the option to enter the access code code", () => {
      const accessCode = container.getByText("accessCode")
      expect(accessCode).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to resend the access code", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User (Patient) has shared the patient records to the external user’s email or phone number", () => {
      expect(true).toBeTruthy();
    });

    and("External user received a secure link (patient portal link) with the email/ text message", () => {
      expect(true).toBeTruthy();
    });

    and("External user should receive another email/ text message with the access code", () => {
      expect(true).toBeTruthy();
    });

    when("External user clicks on the secure link received via email or phone number", () => {
      expect(true).toBeTruthy();
    });

    then("External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”", () => {
      container = render(<EnterAccessCode />);
      const redirectMessage = container.getByText("infoEnterAccessCode")
      expect(redirectMessage).toBeInTheDocument();
    });

    and("External user should see the option to enter the access code code", () => {
      const accessCode = container.getByText("accessCode")
      expect(accessCode).toBeInTheDocument();
    });

    and("External user should see the option to resend the access code", () => {
      const resendCodeBtn = container.getByText("resendCodeBtn")
      expect(resendCodeBtn).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to submit the access code", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User (Patient) has shared the patient records to the external user’s email or phone number", () => {
      expect(true).toBeTruthy();
    });

    and("External user received a secure link (patient portal link) with the email/ text message", () => {
      expect(true).toBeTruthy();
    });

    and("External user should receive another email/ text message with the access code", () => {
      expect(true).toBeTruthy();
    });

    when("External user clicks on the secure link received via email or phone number", () => {
      expect(true).toBeTruthy();
    });

    then("External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”", () => {
      container = render(<EnterAccessCode />);
      const redirectMessage = container.getByText("infoEnterAccessCode")
      expect(redirectMessage).toBeInTheDocument();
    });

    and("External user should see the option to enter the access code code", () => {
      const accessCode = container.getByText("accessCode")
      expect(accessCode).toBeInTheDocument();
    });

    and("External user should see the option to resend the access code", () => {
      const resendCodeBtn = container.getByText("resendCodeBtn")
      expect(resendCodeBtn).toBeInTheDocument();
    });

    and("External user should see the option to submit the access code", () => {
      const submitBtn = container.getByText("submitBtn")
      expect(submitBtn).toBeInTheDocument();
    });
  });
});
