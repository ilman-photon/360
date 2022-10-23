import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import { renderLogin, renderForgotPassword } from "../../__mocks__/commonSteps";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

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

    when('user click on Already have an appointment? Sync your appointment information button', async () => {
      container = await renderLogin()
      const syncButton = container.getByText("syncYourAppointmentInformation");
      fireEvent.click(syncButton);
    });

    then('user should see the Email or Phone number', async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    and(/^user provides wrong format (.*)$/, async (arg0) => {
      const userField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(userField, { target: { value: "wrongUser" } });
      expect(userField.value).toEqual("wrongUser");
    });

    and('user should click on submit', async () => {
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

    then('user should see error message Incorrect email or phone number format', () => {
      expect(true).toBeTruthy()
    });
  });
});
