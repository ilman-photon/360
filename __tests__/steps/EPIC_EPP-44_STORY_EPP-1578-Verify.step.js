import { fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  defaultValidation,
  renderLogin,
  renderForgotPassword,
} from "../../__mocks__/commonSteps";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1578.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
  });

  test("EPIC_EPP-44_STORY_EPP-1578 - Verify user able to view enter Email or Phone Number to Sync Appointment Information", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user click on Continue as a Guest option", () => {
      defaultValidation();
    });

    when("user click on Already have an appointment? Sync your appointment information button", async () => {
      container = await renderLogin()
      const syncButton = container.getByText("syncYourAppointmentInformation");
      fireEvent.click(syncButton);
    });

    then("user should see the Email or Phone number", async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    and("user should see submit", async () => {
      container.rerender(
        <ForgotPassword isAppointment={true} />
      );
      expect(
        await waitFor(() =>
          container.getByText(/syncButton/i)
        )
      ).toBeInTheDocument();
      const syncButton = container.getByText(/syncButton/i);
      fireEvent.click(syncButton);
    });

    when('user provides "<Email or Phone Number"', () => {
      defaultValidation();
    });

    and("user click on submit", () => {
      defaultValidation();
    });

    then(
      "user should see the Email or Phone Number synced with appointment",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1578 -Verify user able to view inline error message if Email or Phone Number is not entered", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user click on Continue as a Guest option", () => {
      defaultValidation();
    });

    when("user click on Already have an appointment? Sync your appointment information button", async () => {
      container = await renderLogin()
      const syncButton = container.getByText("syncYourAppointmentInformation");
      fireEvent.click(syncButton);
    });

    then("user should see the Email or Phone number", async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    and("user should see submit", async () => {
      container.rerender(
        <ForgotPassword isAppointment={true} />
      );
      expect(
        await waitFor(() =>
          container.getByText(/syncButton/i)
        )
      ).toBeInTheDocument();
      const syncButton = container.getByText(/syncButton/i);
      fireEvent.click(syncButton);
    });

    when('user provides "<Email or Phone Number"', () => {
      defaultValidation();
    });

    and("user click on submit", () => {
      defaultValidation();
    });

    then(
      "user should see the Email or Phone Number synced with appointment",
      () => { }
    );
  });
});
