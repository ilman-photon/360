import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import ProfileInformationPage from "../../src/pages/patient/account/profile-info";
import DocumentsPage from "../../src/pages/patient/account/documents/index";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import { mockDocument, prescriptionContact, prescriptionGlasses, prescriptionMedication } from "../../__mocks__/mockResponse";
import { createMatchMedia, doLogin, navigateToPatientPortalHome, renderLogin } from "../../__mocks__/commonSteps";
import PrescriptionPage from "../../src/pages/patient/prescription";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4940.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  const mockRouter = {
    back: jest.fn(),
    query: { type: "intake-forms" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/account/documents",
  };
  beforeEach(async () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
    
    const categoryId = "Intake-Forms";
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    const mockData = { ...mockDocument };
    mockData.entities.push(mockDocument.entities[0]);
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`
      )
      .reply(200, mockData);

    useRouter.mockReturnValue(mockRouter);
  });

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const renderMedication = async ()=>{
    const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, prescriptionMedication);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, {});
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("medication-active-container-0"));
  }

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able navigates to medication prescriptions section', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page', async () => {
      await renderMedication()
    });

    and('patient should navigates to medication prescriptions', () => {
      expect( container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able see the medication prescriptions latest in  first row', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async() => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page', async() => {
      await renderMedication()
    });

    and('patient should navigates to medication prescriptions', () => {
      expect( container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the medication prescriptions latest  in first row', () => {
      expect( container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able view active medication prescriptions based on the expires date in future', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page', async () => {
      await renderMedication()
    });

    and('patient should navigates to medication prescriptions when patient should see the medication prescriptions latest  first', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    then('patient should see the active medication prescriptions on top', () => {
      defaultValidation()
    });

    and('patien should see the based on expires date in future', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able view past medication prescriptions based on the expires on date', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page', async () => {
      await renderMedication()
    });

    and('patient should navigates to medication prescriptions', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    when('patient should see the medication prescriptions latest  first', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    then('patient should see the past  medication prescriptions below the active', () => {
      defaultValidation()
    });

    and('patient should see past prescriptions based on expires on date', () => {
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if  when medications prescription page appearence with default details', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
      expect(container.getAllByTestId("FileDownloadOutlinedIcon")[1]).toBeInTheDocument()
      expect(container.getAllByTestId("LocalPrintshopOutlinedIcon")[1]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription Download and Print CTA icons for  each prescription', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient able to view medication prescription Download and Print CTA icons for  each prescription', () => {
      expect(container.getAllByTestId("FileDownloadOutlinedIcon")[1]).toBeInTheDocument()
      expect(container.getAllByTestId("LocalPrintshopOutlinedIcon")[1]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription click on Download to download icons for  each prescription as PDF file', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient able to view medication prescription Download and Print CTA icons for each prescription as PDF file', () => {
      expect(container.getAllByTestId("FileDownloadOutlinedIcon")[1]).toBeInTheDocument()
      expect(container.getAllByTestId("LocalPrintshopOutlinedIcon")[1]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription click on print icon to print the prescription', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async() => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async() => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async() => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async() => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient  click on print icon to print the prescription', () => {
      expect(container.getAllByTestId("FileDownloadOutlinedIcon")[1]).toBeInTheDocument()
      expect(container.getAllByTestId("LocalPrintshopOutlinedIcon")[1]).toBeInTheDocument()
      const button = container.getAllByTestId("LocalPrintshopOutlinedIcon")[1]
      fireEvent.click(button)
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view CTA request or cancel refill medication prescription', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {

    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient  should view CTA  medication prescription request or cancel refill', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to see the Filter icon right options selected and able to remove the selected filter options medication prescription', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient  should see CTA Filter icon right on the corner dropdown', () => {
      const button = container.getAllByText(/Filters/i)[0]
      fireEvent.click(button)
    });

    and('patient have option to select prescription section', () => {
      defaultValidation()
    });

    and('patient have the option to remove the selected filter medication prescription', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to see the Filter icon right options selected the medication prescription', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then('patient should see the Prescription page.', async () => {
      await renderMedication()
    });

    when('patient navigates and click on Medications section', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      expect(container.getByTestId("medication-active-container-0")).toBeInTheDocument()
    });

    and('patient should see the three sections', () => {
      defaultValidation()
    });

    then(/^patient should see the Active medications and past medications with the details <Prescription Type \(eg. Medication\),(.*),(.*),(.*),(.*)(.*)$/, (arg0, arg1, arg2, arg3, arg4) => {
      expect(container.getAllByText(/D-Penamine 200 mg tablet/i)[0]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument()
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument()
      expect(container.getAllByText("Provider ClarksonEyeCare")[1]).toBeInTheDocument()
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument()
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument()
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument()
      expect(container.getAllByText(/Take twice a day/i)[0]).toBeInTheDocument()
    });

    and('patient  should see CTA Filter icon right on the corner dropdown', () => {
      const button = container.getAllByText(/Filters/i)[0]
      fireEvent.click(button)
    });

    and('patient have option to select prescription section', () => {
      defaultValidation()
    });
  });
});
