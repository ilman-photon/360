import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import DocumentPage, {
  getServerSideProps,
} from "../../src/pages/patient/document/index";
import IntakeFormPage from "../../src/pages/patient/intake-form";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import {
  createMatchMedia,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import ScheduleAppointmentConfirmationPage from "../../src/pages/patient/schedule-appointment-confirmation";
import { dummyFormDocument } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6180.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach( () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
    mock
      .onPut(`/ecp/patients/forms/editformContent`)
      .reply(200, {});
  });

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const navigateToScheduleAppointmentConfirmationPage = async () => {
    act(() => {
      container = renderWithProviders(
        <ScheduleAppointmentConfirmationPage />
      );
    });
    await waitFor(() => container.getByText("You’re Scheduled!"));
    const text = container.getByText("You’re Scheduled!");
    expect(text).toBeInTheDocument();
  };

  const navigateToIntakeFormPage = async () => {
    act(() => {
      container.rerender(
        <Provider store={store}>
          {IntakeFormPage.getLayout(<IntakeFormPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Insurance Communication/i));
  };

  const seeErrorMessage = () => {
    setTimeout(() => {
      const inputFieldError = container.getByLabelText(
        /This field is required/i
      );
      expect(inputFieldError).toBeTruthy();
      expect(/This field is required/i).toEqual(inputFieldError.textContent);
    }, 500);
  };

  test('EPIC_EPP-5256_STORY_EPP-6180 - Verify User should redirect to fill out forms online', ({ given, and, then, when }) => {
    given('user already created an Appointment', () => {
      defaultValidation()
    });

    and('user should see Appointment Confirmation overlay', async () => {
      await navigateToScheduleAppointmentConfirmationPage()
    });

    then('user should see Fill forms button', () => {
      // complete-form-btn
      const form = container.getByTestId("complete-form-btn")
      expect(form).toBeInTheDocument();
    });

    when('user click on Fill forms', () => {
      const form = container.getByTestId("complete-form-btn")
      expect(form).toBeInTheDocument();
      fireEvent.click(form)
    });

    then('user should lands on to fill out forms online', async () => {
      await navigateToIntakeFormPage()
    });
  });

});
