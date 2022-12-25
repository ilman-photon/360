import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderShareModal,
} from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import App from "../../src/pages/_app";
import store from "../../src/store/store";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7616.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  const renderHealthRecord = async (mockResponse, status = 200) => {
    //TODO: Remove
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    mock
      .onGet(`/ecp/patient/phr/patientchart/${patientId}`)
      .reply(status, mockResponse);

    act(() => {
      container = render(
        HealthRecord.getLayout(<HealthRecord />, store) //
      );
    });

    if (status === 200) {
      await waitFor(() => {
        container.getAllByText(/Medical Record/i);
      });
    } else {
      await waitFor(() => {
        container.getAllByText(/no health records/i);
      });
    }
  };

  test("EPIC_EPP-42_STORY_EPP-7616- Verify External user should see the health records downloaded as a pdf file in their local system/ device", ({
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
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and(
      "User should be able to see health record/ prescription/ care plan document widget in dashboard",
      async () => {
        await waitFor(() => container.getAllByText(/Health Record/i));
      }
    );

    then(
      "User clicks on the option to share their health record/ prescription/ care plan document",
      async () => {
        const shareBtn = container.getAllByTestId("shared-icon");
        await waitFor(() => fireEvent.click(shareBtn[0]));
      }
    );

    and(
      "User views the pop-up to share their health record/ prescription/ care plan documen",
      async () => {
        container = await renderShareModal();
      }
    );

    when(
      "User enters the required details and clicks on the option to share",
      async () => {
        const sharedEmail = container
          .getByTestId("share-email")
          .querySelector("input");
        const shareButton = container.getByTestId(/share-btn/i);

        fireEvent.change(sharedEmail, { target: { value: "test@gmail.com" } });
        await fireEvent.click(shareButton);
      }
    );

    then(
      "User should receive an email message with the following content (ECP to provide content)",
      (table) => {}
    );

    when("User clicks on the link on the email/ text message", () => {});

    then("User should see a secure link (patient portal link)", () => {});
  });
});
