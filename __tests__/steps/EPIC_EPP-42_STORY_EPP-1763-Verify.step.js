import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  renderShareModal,
} from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import store from "../../src/store/store";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-1763.feature"
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

  test("EPIC_EPP-42_STORY_EPP-1763- Verify User should see the pop-up to share their health record", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is logged in the portal", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    and(
      "User navigates to Health records screen/ User lands on Health record widget in dashboard",
      async () => {
        await renderHealthRecord(medicalRecordMockData, 200);
      }
    );

    and(
      "User lands on the Health records screen/ User lands on the Health record widget in dashboard",
      async () => {
        await waitFor(() => container.getAllByText(/Health Record/i));
      }
    );

    when("User clicks on the option to share", async () => {
      const shareBtn = container.getAllByTestId("shared-icon");
      await waitFor(() => fireEvent.click(shareBtn[0]));
    });

    then(
      "User should see the pop-up to share their health record",
      async () => {
        container = await renderShareModal();
      }
    );
  });
});
