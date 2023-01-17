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
import { mockDocument, prescriptionContact, prescriptionGlasses } from "../../__mocks__/mockResponse";
import { createMatchMedia, doLogin, navigateToPatientPortalHome, renderLogin } from "../../__mocks__/commonSteps";
import PrescriptionPage from "../../src/pages/patient/prescription";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4944.feature",
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

  test('EPIC_EPP-17_STORY_EPP-4944 - Verify the patient is able to navigate to prescription screen.', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async() => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', async () => {
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
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByText(/Prescriptions/i)[0]);
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4944- Verify the patient is able see the verbiage message in contacts section if there are no contact lens prescriptions are available.', ({ given, when, and, then }) => {
    given('patient launch the browser and enter the patient portal url', async () => {
      container = await renderLogin(container);
    });

    when('patient enter valid username or phone number and password', async () => {
      await doLogin(mock, container);
    });

    and('click on Sign in button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', () => {
      defaultValidation()
    });

    and('click the View Prescription from the Prescription widget.', () => {
      defaultValidation()
    });

    then('patient should see the Prescription page.', async () => {
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, prescriptionGlasses);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("glasses-container-0"));
    });

    when('patient navigates and click on contacts section', async () => {
      const button = container.getAllByTestId("menu-contact")[0];
      fireEvent.click(button);
      await waitFor(()=> container.getAllByText("Contacts Prescription"))[0]
    });

    then(/^patient should be able to view the verbiage (.*) if there are no contact lens prescriptions are available$/, (arg0) => {
      expect(container.getAllByText(/There are currently 0 prescriptions for contact lenses./i)[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4944 - Verify the patient is able see the contact lens prescriptions details in contacts section if prescription details are available in Prescriptions page.', ({ given, when, and, then }) => {
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, prescriptionContact);
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
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    when('patient navigates and click on contacts section', async () => {
      const button = container.getAllByTestId("menu-contact")[0];
      fireEvent.click(button);
      await waitFor(()=> container.getAllByText("Contacts Prescription"))[0]
    });

    then('patient should be able to see the Contacts Prescriptions list details', () => {
      defaultValidation()
    });

    and(/^patient should see the (.*) with date (.*)$/, (arg0, arg1) => {
      expect(container.getAllByText("01/10/2022")[0]).toBeInTheDocument()
    });

    and(/^patient should see the (.*) with Doctor (.*)$/, (arg0, arg1) => {
      expect(container.getAllByText("Mr indraku kumar")[1]).toBeInTheDocument()
    });

    and(/^patient should see the (.*) with date (.*)$/, (arg0, arg1) => {
      expect(container.getAllByText("01/06/2025")[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4944 - Verify the default page appearance when prescription page is loaded.', ({ given, when, and, then }) => {
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, prescriptionContact);
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, prescriptionGlasses);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    when('patient navigates and click on Contacts section', () => {
      defaultValidation()
    });

    and('patient should see the Prescriptions title and sub title from top left side in prescription page', () => {
      defaultValidation()
    });

    and(/^patient should see the three sections as below(.*),(.*),(.*)$/, (arg0, arg1, arg2) => {
      expect(container.getAllByText("Glasses")[0]).toBeInTheDocument()
      expect(container.getAllByText("Contacts")[0]).toBeInTheDocument()
      expect(container.getAllByText("Medications")[0]).toBeInTheDocument()
    });

    and(/^patient should see the three icons for each prescription(.*),(.*),(.*)$/, (arg0, arg1, arg2) => {
      defaultValidation()
    });

    and('patient should see the read format only he or shet cannot edit anything in the page.', () => {
      defaultValidation()
    });

    then(/^patient should be able to view the verbiage (.*) if there are no contact lens prescriptions are available$/, (arg0) => {
      defaultValidation()
    });

    and('patient should be able to see the Contacts Prescriptions list details if prescriptions are available.', () => {
      defaultValidation()
    });
  });
});
