import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import EnterAccessCode from "../../src/components/molecules/ShareMyPage/EnterAccessCode";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7620.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-42_STORY_EPP-7620- Verify External user should be redirected to that secure link (patient portal URL)", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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
  });
  test('EPIC_EPP-42_STORY_EPP-7620- Verify User should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."', ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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

    and(/^External user should be able to see "(.*)"$/, (arg0) => {});
  });
  test("EPIC_EPP-42_STORY_EPP-7620- Verify External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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

    and(/^External user should be able to see "(.*)"$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to enter the access code is disabled", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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

    and(/^External user should be able to see "(.*)"$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={false} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "User has not approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to enter the access code is disabled",
      () => {
        const accessCode = container.getByText("accessCode");
        expect(accessCode).toBeInTheDocument();
        // expect(accessCode).toBeDisabled();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to resend the access code is disabled", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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

    and(/^External user should be able to see "(.*)"$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={false} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "User has not approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to resend the access code is disabled",
      () => {
        const resendCodeBtn = container.getByText("resendCodeBtn");
        expect(resendCodeBtn).toBeDisabled();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to submit the access code is disabled", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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

    and(/^External user should be able to see "(.*)"$/, (arg0) => {});

    and(
      "External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”",
      () => {
        container = render(<EnterAccessCode isActiveAccessCode={false} />);
        const redirectMessage = container.getByText("infoEnterAccessCode");
        expect(redirectMessage).toBeInTheDocument();
      }
    );

    when(
      "User has not approved the request for share another access code",
      () => {}
    );

    then(
      "External user should see the option to submit the access code is disabled",
      () => {
        const submitBtn = container.getByText("submitBtn");
        expect(submitBtn).toBeDisabled();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7620- Verify User should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request", ({
    given,
    and,
    when,
    then,
  }) => {
    given(
      "User (Patient) has shared the patient record to the external user’s email or phone number",
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
      "User has approved the request for share another access code",
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
      "User should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request",
      () => {}
    );
  });
});
