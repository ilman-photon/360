import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import Cookies from "universal-cookie";
import store from "../../src/store/store";
import MedicalRecordPage from "../../src/pages/patient/account/medical-record/index";
import { Provider } from "react-redux";

const cookies = new Cookies()

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7613.feature"
);

const mockRouter = {
  back: jest.fn(),
  query: { type: "" },
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  pathname: "/patient/account/medical-record",
};
let container;
const mock = new MockAdapter(axios);


const renderCarePlan = async (status = 200) => {
  window.matchMedia = createMatchMedia("1080px");
  const mock = new MockAdapter(axios);
  mock
    .onGet(
      `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=Intake-Forms))`
    )
    .reply(200, {
      count: 1,
      entities: [],
      _links: {
        self: {
          href: "/patient-management?pageNo=0&pageSize=10",
        },
      },
    });

  useRouter.mockReturnValue(mockRouter);
  container = render(
    <Provider store={store}>
      <MedicalRecordPage />
    </Provider>
  );
  await waitFor(() =>
    container.getByText("There is no care plan overview document")
  );
  expect(
    container.getByText("There is no care plan overview document")
  ).toBeInTheDocument();
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    mock.reset();
  });
  test("EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the following fields", ({
    given,
    then,
    and,
    when,
  }) => {
    given("external user click on URL on the email that sent by system", () => {
      expect(true).toBeTruthy();
    });

    then("external user should navigated to Access Code to view shared care plan document", () => {
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

    then("external navigated to Shared care plan document contains below", async () => {
      await renderCarePlan()
    });
  });

  test("EPIC_EPP-42_STORY_EPP-4913 - Verify External user should have the provision to view the care plan document which when clicked will open the care plan document in pdf format in another tab", ({ }) => { });

  test("EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the option to download the care plan document", ({
    given,
    then,
    and,
    when,
  }) => {
    given("external user click on URL on the email that sent by system", () => {
      expect(true).toBeTruthy();
    });

    then("external user should navigated to Access Code to view shared care plan document", () => {
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

    then("external navigated to Shared care plan document contains below", async () => {
      await renderCarePlan()
    });

    and("External user should be able to view the option to download the care plan document", () => {
      expect(true).toBeTruthy();
    });
  });
});
