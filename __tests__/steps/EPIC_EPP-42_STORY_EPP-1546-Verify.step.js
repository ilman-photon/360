import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import App from "next/app";

const cookies = new Cookies()

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-1546.feature",
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  
  const renderHealthRecord = async (mockResponse, status = 200) => {
    //TODO: Remove
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066"
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
  
  afterEach(() => {
   cleanup()
   mock.reset();
  });

  beforeEach(() => {});

  test('EPIC_EPP-42_STORY_EPP-1546- Verify User should be able to click on the option to share their health record', ({ given, when, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      defaultValidation()
    });

    and('User navigates to Health records screen/ User lands on Health record widget in dashboard', async() => {
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and('User lands on the Health records screen/ User lands on the Health record widget in dashboard', () => {
      defaultValidation()
    });

    and('User should see the option to share their health record', () => {
      const shareButton = container.getByTestId("shared-icon")
      expect(shareButton).toBeInTheDocument()
    });

    and('User should be able to click on the option to share their health record', () => {
      const shareButton = container.getByTestId("shared-icon")
      fireEvent.click(shareButton)
    });
  });
});
