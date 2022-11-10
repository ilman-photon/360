import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderLogin,
  renderForgotPassword,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
} from "../../__mocks__/mockResponse";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1762.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });

  test("EPIC_EPP-44_STORY_EPP-1762 -  Verify that user is able to enter the registered email or phone number", ({
    given,
    then,
  }) => {
    given("user launch the Patient Site url", () => {
      defaultValidation();
    });

    then("user lands to Patient Login screen", async () => {
      container = await renderLogin()
    });

    then("user clicks on  Already have an appointment? Sync your appointment information",
      () => {
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      });

    then("user lands on that screen to enter email or phone number", async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    then("user provides their already registered email or phone number", () => {
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's email or phone number in 'Already have an appointment? Sync your appointment information' screen", ({
    given,
    and,
    then,
  }) => {
    given("user launch the patient portal url", () => {
      defaultValidation();
    });

    and("user is in login screen", async () => {
      container = await renderLogin()
    });

    then("user clicks on  Already have an appointment? Sync your appointment information",
      () => {
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      });

    then("user lands on that screen to enter email or phone number", async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    then("user provides their already registered email or phone number", () => {
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    and("user click on submit button", async () => {
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

    then(
      "user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”",
      () => { }
    );

    and(
      "user should give the option to redirect to Patient Login screen",
      () => { }
    );

    and("user lands on to Patient Login screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's email in 'Already have an appointment? Sync your appointment information' screen", ({
    given,
    and,
    then,
  }) => {
    given("user launch the patient portal url", () => {
      defaultValidation();
    });

    and("user is in login screen", async () => {
      container = await renderLogin()
    });

    then("user clicks on  Already have an appointment? Sync your appointment information",
      () => {
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      });

    then("user lands on that screen to enter email", () => {
      defaultValidation();
    });

    then("user provides their already registered email", () => {
      defaultValidation();
    });

    and("user click on submit button", async () => {
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

    then(
      "user should see the message Existing user You are already a registered user. Please login to the application using your username and password.",
      () => { }
    );

    and(
      "user should give the option to redirect to patient login screen",
      () => { }
    );

    and("user lands on to patient login screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's phone number in 'Already have an appointment? Sync your appointment information' screen", ({
    given,
    and,
    then,
  }) => {
    given("user launch the patient portal url", () => {
      defaultValidation();
    });

    and("user is in login screen", async () => {
      container = await renderLogin()
    });

    then("user clicks on  Already have an appointment? Sync your appointment information",
      () => {
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      });

    then("user lands on that screen to enter phone number", () => {
      defaultValidation();
    });

    then("user provides their already registered phone number", () => {
      defaultValidation();
    });

    and("user click on submit button", async () => {
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

    then(
      "user should see the message Existing user You are already a registered user. Please login to the application using your username and password.",
      () => { }
    );

    and(
      "user should give the option to redirect to patient login screen",
      () => { }
    );

    and("user lands on to patient login screen", () => {
      defaultValidation();
    });
  });
});
