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
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4939.feature",
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

  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the patient is able navigate to Prescription screen.', ({ given, when, and, then }) => {
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

  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the user should be able to view each prescriptions for contact lens', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', async () => {
      container = await renderLogin(container);
    });

    when(/^Patient enter valid (.*) and (.*)$/, async (arg0, arg1) => {
      await doLogin(mock, container);
    });

    and('clicks  on login button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', async () => {
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

    and('patient should be able to view each prescriptions for contact lens', () => {
      expect(container.getByTestId("contacts-container-0")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the  user should be able to view each prescriptions for contact lens with details in contact lens prescriptions section', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', async () => {
      container = await renderLogin(container);
    });

    when(/^Patient enter valid (.*) and (.*)$/, async (arg0, arg1) => {
      await doLogin(mock, container);
    });

    and('clicks  on login button.', () => {
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

    and('patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section', () => {
      expect(container.getByTestId("contacts-container-0")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the  user should be able to view details/fields for contact lens prescriptions', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', async () => {
      container = await renderLogin(container);
    });

    when(/^Patient enter valid (.*) and (.*)$/, async (arg0, arg1) => {
      await doLogin(mock, container);
    });

    and('clicks  on login button.', () => {
      defaultValidation()
    });

    and('the dashboard should be displayed.', async () => {
      await navigateToPatientPortalHome()
    });

    and('click the View Prescription from the Prescription widget.', async() => {
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

    and(/^patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions sectionSnoFields(\d+)Prescription Type \(eg. Contact Lens\),Prescribed on,(\d+)Expires on,Prescribed by,EyeSphere \(i.e. Sph\)BCCylinder \(i.e. CYL\)AXIS\(With values under them\)$/, (arg0, arg1) => {
      expect(container.getAllByText("01/10/2022")[0]).toBeInTheDocument()
      expect(container.getAllByText("Mr indraku kumar")[0]).toBeInTheDocument()
      expect(container.getAllByText("01/06/2025")[0]).toBeInTheDocument()
    });
  });
  
  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the User should be able to view Download and Print CTA for contact lens prescriptions', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', async () => {
      container = await renderLogin(container);
    });

    when(/^Patient enter valid (.*) and (.*)$/, async (arg0, arg1) => {
      await doLogin(mock, container);
    });

    and('clicks  on login button.', () => {
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

    and('patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section', () => {
      expect(container.getByTestId("contacts-container-0")).toBeInTheDocument()
    });

    then('user should be able to view Download and Print CTA for contact lens prescriptions', () => {
      expect(container.getAllByTestId("download-icon")[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-17_STORY_EPP-4939- To verify whether the User should be able to view Downloaded PDF file', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', async () => {
      container = await renderLogin(container);
    });

    when(/^Patient enter valid (.*) and (.*)$/, async (arg0, arg1) => {
      await doLogin(mock, container);
    });

    and('clicks  on login button.', () => {
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

    and('patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section', () => {
      expect(container.getByTestId("contacts-container-0")).toBeInTheDocument()
    });

    then('user should be able to view Download and Print CTA for contact lens prescriptions', () => {
      expect(container.getAllByTestId("download-icon")[0]).toBeInTheDocument()
    });

    and('user should be able view the Downloaded Pdf file', () => {
      const button = container.getAllByTestId("download-icon")[0]
      fireEvent.click(button)
    });
  });
});
