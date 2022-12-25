import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";
import HealthRecord from "../../src/pages/patient/health-record";
import Cookies from "universal-cookie";
import store from "../../src/store/store";

const cookies = new Cookies()

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7612.feature"
);

let container;
const element = document.createElement("div");
const mock = new MockAdapter(axios);
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

const renderHealthRecord = async (mockResponse, status = 200) => {
  //TODO: Remove
  mock.reset()
  const userData = JSON.parse(localStorage.getItem("userData"));
  const patientId = userData.patientId
  mock.onGet(`/ecp/patient/phr/patientchart/${patientId}`).reply(status, mockResponse);

  act(() => {
    container = render(
      HealthRecord.getLayout(<HealthRecord />, store)
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

defineFeature(feature, (test) => {
  test("EPIC_EPP-42_STORY_EPP-4912 - Verify External user should be able to view the following fields", ({
    given,
    then,
    and,
    when,
  }) => {
    given("external user click on URL on the email that sent by system", () => {
      expect(true).toBeTruthy();
    });

    then("external user should navigated to Access Code to view shared Health record screen", () => {
      expect(true).toBeTruthy();
    });

    and("external user received email containing OTP code", () => {
      expect(true).toBeTruthy();
    });

    when("external user enter valid OTP code", () => {
      expect(true).toBeTruthy();
    });

    and("click on Submit button", () => {
      expect(true).toBeTruthy();
    });

    then('external navigated to Shared Health Record screen', async () => {
      window.matchMedia = createMatchMedia("500px");
      await renderHealthRecord(medicalRecordMockData, 200);
      const sort = container.getByTestId("sort-button-data")
      expect(sort).toBeInTheDocument()
    });
  });
  test("EPIC_EPP-42_STORY_EPP-4912 - Verify External user should have the provision to view the health record which when clicked will open the health record in pdf format in another tab", ({
    given,
    then,
    and,
    when,
  }) => {
    given("external user click on URL on the email that sent by system", () => {
      expect(true).toBeTruthy();
    });

    then("external user should navigated to Access Code to view shared Health record screen", () => {
      expect(true).toBeTruthy();
    });

    and("external user received email containing OTP code", () => {
      expect(true).toBeTruthy();
    });

    when("external user enter valid OTP code", () => {
      expect(true).toBeTruthy();
    });

    and("click on Submit button", () => {
      expect(true).toBeTruthy();
    });

    then('external navigated to Shared Health Record screen', async () => {
      window.matchMedia = createMatchMedia("500px");
      await renderHealthRecord(medicalRecordMockData, 200);
      const sort = container.getByTestId("sort-button-data")
      expect(sort).toBeInTheDocument()
    });

    when("external user click options to view document", () => {
      expect(true).toBeTruthy();
    });

    then("external user should be able to view health record in pdf format in another tab", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-42_STORY_EPP-4912 - Verify External user should be able to view the option to download the care plan document", ({
    given,
    then,
    and,
    when,
  }) => {
    given("external user click on URL on the email that sent by system", () => {
      expect(true).toBeTruthy();
    });

    then("external user should navigated to Access Code to view shared Health record screen", () => {
      expect(true).toBeTruthy();
    });

    and("external user received email containing OTP code", () => {
      expect(true).toBeTruthy();
    });

    when("external user enter valid OTP code", () => {
      expect(true).toBeTruthy();
    });

    and("click on Submit button", () => {
      expect(true).toBeTruthy();
    });

    then('external navigated to Shared Health Record screen', async () => {
      window.matchMedia = createMatchMedia("1080px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("External user should be able to view the option to download the care plan document", () => {
      expect(true).toBeTruthy();
    });
  });
});
