import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import EnterAccessCode from "../../src/components/molecules/ShareMyPage/EnterAccessCode";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7623.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-42_STORY_EPP-7623- Verify user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "user (Patient) has shared the patient record to the external user’s email or phone number",
      () => {}
    );

    and(
      "External user should receive an email/ text message with the following content",
      () => {}
    );

    and(
      "External user has already accessed the patient records once using the access code",
      () => {}
    );

    when(
      "External user clicks on the secure link received via email/ text message",
      () => {}
    );

    then(
      "External user should be redirected to that secure link (patient portal URL)",
      () => {}
    );

    and(/^External user should be able to see ""(.*)""$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={true} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "user has approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to submit the access code is enabled",
      () => {
        const submitBtn = container.getByText("submitBtn");
        expect(submitBtn).not.toBeDisabled();
      }
    );

    and(
      "user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request",
      () => {}
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on approve option on email/ text message", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "user (Patient) has shared the patient record to the external user’s email or phone number",
      () => {}
    );

    and(
      "External user should receive an email/ text message with the following content",
      () => {}
    );

    and(
      "External user has already accessed the patient records once using the access code",
      () => {}
    );

    when(
      "External user clicks on the secure link received via email/ text message",
      () => {}
    );

    then(
      "External user should be redirected to that secure link (patient portal URL)",
      () => {}
    );

    and(/^External user should be able to see ""(.*)""$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={true} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "user has approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to submit the access code is enabled",
      () => {
        const accessCode = container.getByText("accessCode");
        expect(accessCode).toBeInTheDocument();
        expect(accessCode).not.toBeDisabled();
      }
    );

    and(
      "user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request",
      () => {}
    );

    and(
      "user should be able to click on approve option on email/ text message",
      () => {}
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on deny option on email/ text message", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "user (Patient) has shared the patient record to the external user’s email or phone number",
      () => {}
    );

    and(
      "External user should receive an email/ text message with the following content",
      () => {}
    );

    and(
      "External user has already accessed the patient records once using the access code",
      () => {}
    );

    when(
      "External user clicks on the secure link received via email/ text message",
      () => {}
    );

    then(
      "External user should be redirected to that secure link (patient portal URL)",
      () => {}
    );

    and(/^External user should be able to see ""(.*)""$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={true} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "user has approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to submit the access code is enabled",
      () => {
        const submitBtn = container.getByText("submitBtn");
        expect(submitBtn).not.toBeDisabled();
      }
    );

    and(
      "user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request",
      () => {}
    );

    and(
      "user should be able to click on deny option on email/ text message",
      () => {}
    );
  });
});
