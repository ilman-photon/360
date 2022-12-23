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
  renderShareModal,
} from "../../__mocks__/commonSteps";
import store from "../../src/store/store";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";
import HealthRecord from "../../src/pages/patient/health-record";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7258.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  const renderHealthRecord = async (mockResponse, status = 200) => {
    //TODO: Remove
    mock.reset();
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = userData.patientId;
    mock
      .onGet(`/ecp/patient/phr/patientchart/${patientId}`)
      .reply(status, mockResponse);

    act(() => {
      container = render(HealthRecord.getLayout(<HealthRecord />, store));
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
  test("EPIC_EPP-42_STORY_EPP-7258 - Verify user should be able to view share options on each document of Health care", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", () => {});

    and("user lands on the Dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should be able to view Document navigation menu", () => {
      expect(container.getByText(/Documents/i)).toBeInTheDocument();
    });

    when("user click on Document navigation menu", () => {
      const documentMenu = container.getByText(/Documents/i);
      fireEvent.click(documentMenu);
    });

    and("user click on Health record sub menu", async () => {
      await waitFor(() => container.getAllByText(/Health Record/i));
      const healthRecordMenu = container.getAllByText(/Health Record/i);
      fireEvent.click(healthRecordMenu[0]);
    });

    then(
      "user should be able to view share options on each document of Health care",
      () => {
        const shareIcon = container.getAllByTestId("shared-icon");
        act(() => {
          fireEvent.click(shareIcon[0]);
        });
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7258 - Verify User should see the pop-up to share their care plan document", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", () => {});

    and("user lands on the Dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should be able to view Document navigation menu", () => {
      expect(container.getByText(/Documents/i)).toBeInTheDocument();
    });

    when("user click on Document navigation menu", () => {
      const documentMenu = container.getByText(/Documents/i);
      fireEvent.click(documentMenu);
    });

    and("user click on Health record sub menu", async () => {
      await waitFor(() => container.getAllByText(/Health Record/i));
      const healthRecordMenu = container.getAllByText(/Health Record/i);
      fireEvent.click(healthRecordMenu[0]);
    });

    then(
      "user should be able to view share options on each document of Health care",
      async () => {
        await waitFor(() => container.getAllByTestId("shared-icon"));
      }
    );

    when("user click on share icon button", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "User should see the pop-up to share their care plan document",
      async () => {
        container = await renderShareModal();
      }
    );
  });
});
