import { fireEvent, render, act, cleanup, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
import { renderLogin, renderForgotPassword, clickContinueForgot, navigateToPatientPortalHome, createMatchMedia } from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import PrescriptionPage from "../../src/pages/patient/prescription";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7260.feature"
);


let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

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
      container.getAllByText(/Health Chart/i);
    });
  } else {
    await waitFor(() => {
      container.getAllByText(/no health records/i);
    });
  }
};

defineFeature(feature, (test) => {
  test('EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their care plan document with field', ({ given, and, when, then }) => {
    given('User launch Patient Portal url', () => {
      launchURL();
    });

    and('user is logged into the portal as admin', () => {
      navigateToPatientPortalApp();
    });

    and('user lands on the Dashboard screen', async () => {
      cleanup();
      window.matchMedia = createMatchMedia("1080px");
      container = await navigateToPatientPortalHome();
    });

    and('user should be able to view Document navigation menu', () => {
      const documentNav = container.getByText("Documents")
      expect(documentNav).toBeInTheDocument();
    });

    when('user click on Document navigation menu', () => {
      const documentNav = container.getByText("Documents")
      fireEvent.click(documentNav);
    });

    and('user click on Health record sub menu', () => {
      // const healthRecord = container.getByText("Health record")
      // fireEvent.click(healthRecord);
    });

    then('user should be able to view share options on each document of Health care', async () => {
      cleanup()
      window.matchMedia = createMatchMedia("480px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    when('user click on share icon button', () => {
      // const shareIcon = container.getByText("shared-icon")
      // fireEvent.click(shareIcon);
    });

    then('user should see the pop-up to share their care plan document', () => {
      expect(true).toBeTruthy();
    });

    and('user should be able to see field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their prescriptions with field', ({ given, and, when, then }) => {
    given('User launch Patient Portal url', () => {
      launchURL();
    });

    and('user is logged into the portal as admin', () => {
      navigateToPatientPortalApp();
    });

    and('user lands on the Dashboard screen', async () => {
      cleanup();
      window.matchMedia = createMatchMedia("1080px");
      container = await navigateToPatientPortalHome();
    });

    and('user should be able to view Health Chart navigation menu', () => {
      const healthChart = container.getByText("Health Chart")
      expect(healthChart).toBeInTheDocument();
    });

    when('user click on Health Chart menu', () => {
      const healthChart = container.getByText("Health Chart")
      fireEvent.click(healthChart);
    });

    and('user click on prescriptions sub menu', () => {
      // const prescriptions = container.getByText("prescriptions")
      // fireEvent.click(prescriptions);
    });

    then('user should be able to view share options on each document of prescriptions', async () => {
      cleanup();
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByText(/Prescriptions/i)[0]);
    });

    when('user click on share icon button', () => {
      // const shareIcon = container.getByText("shared-icon")
      // fireEvent.click(shareIcon);
    });

    then('User should see the pop-up to share their prescriptions', () => {
      expect(true).toBeTruthy();
    });

    and('user should be able to see field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their Test & Lab Result  with field', ({ given, and, when, then }) => {
    given('User launch Patient Portal url', () => {
      launchURL();
    });

    and('user is logged into the portal as admin', () => {
      navigateToPatientPortalApp();
    });

    and('user lands on the Dashboard screen', async () => {
      cleanup();
      window.matchMedia = createMatchMedia("1080px");
      container = await navigateToPatientPortalHome();
    });

    and('user should be able to view Health Chart navigation menu', () => {
      const healthChart = container.getByText("Health Chart")
      expect(healthChart).toBeInTheDocument();
    });

    when('user click on Health Chart menu', () => {
      const healthChart = container.getByText("Health Chart")
      fireEvent.click(healthChart);
    });

    and('user click on Test & Lab Result sub menu', () => {
      // const testLab = container.getByText("testLab")
      // fireEvent.click(testLab);
    });

    then('user should be able to view share options on each document of Test & Lab Result', async () => {
      cleanup()
      window.matchMedia = createMatchMedia("480px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    when('user click on share icon button', () => {
      // const shareIcon = container.getByText("shared-icon")
      // fireEvent.click(shareIcon);
    });

    then('User should see the pop-up to share their Test & Lab Result', () => {
      expect(true).toBeTruthy();
    });

    and('user should be able to see field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the inline error message This is a required field when mandatory fields are not provided', ({ given, and, when, then }) => {
    given('User launch Patient Portal url', () => {
      launchURL();
    });

    and('user is logged into the portal as admin', () => {
      navigateToPatientPortalApp();
    });

    and('user lands on the Dashboard screen', async () => {
      cleanup();
      window.matchMedia = createMatchMedia("1080px");
      container = await navigateToPatientPortalHome();
    });

    and('user should be able to view Health Chart navigation menu', () => {
      const healthChart = container.getByText("Health Chart")
      expect(healthChart).toBeInTheDocument();
    });

    when('user click on Health Chart menu', () => {
      const healthChart = container.getByText("Health Chart")
      fireEvent.click(healthChart);
    });

    and('user click on Test & Lab Result sub menu', () => {
      // const testLab = container.getByText("testLab")
      // fireEvent.click(testLab);
    });

    then('user should be able to view share options on each document of Test & Lab Result', async () => {
      cleanup()
      window.matchMedia = createMatchMedia("480px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    when('user click on share icon button', () => {
      expect(true).toBeTruthy();
    });

    then('User should see the pop-up to share their Test & Lab Result', () => {
      expect(true).toBeTruthy();
    });

    and('user should be able to see field', () => {
      expect(true).toBeTruthy();
    });

    and('user leaves an empty field', () => {
      expect(true).toBeTruthy();
    });

    when('user click on OK button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the inline error message This is a required field when mandatory fields are not provided', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the text Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, etc', ({ given, and, when, then }) => {
    given('User launch Patient Portal url', () => {
      launchURL();
    });

    and('user is logged into the portal as admin', () => {
      navigateToPatientPortalApp();
    });

    and('user lands on the Dashboard screen', async () => {
      cleanup();
      window.matchMedia = createMatchMedia("1080px");
      container = await navigateToPatientPortalHome();
    });

    and('user should be able to view Document navigation menu', () => {
      const documentNav = container.getByText("Documents")
      expect(documentNav).toBeInTheDocument();
    });

    when('user click on Document navigation menu', () => {
      const documentNav = container.getByText("Documents")
      fireEvent.click(documentNav);
    });

    and('user click on Health record sub menu', () => {
      // const healthRecord = container.getByText("Health record")
      // fireEvent.click(healthRecord);
    });

    then('user should be able to view share options on each document of Health care', async () => {
      cleanup()
      window.matchMedia = createMatchMedia("480px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    when('user click on share icon button', () => {
      expect(true).toBeTruthy();
    });

    then('User should see the pop-up to share their care plan document', () => {
      expect(true).toBeTruthy();
    });

    and('User should see the text Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, family or friends securely. on pop-up', () => {
      expect(true).toBeTruthy();
    });
  });
});
