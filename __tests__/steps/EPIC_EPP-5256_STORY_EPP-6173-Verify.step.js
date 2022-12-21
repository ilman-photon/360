import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import DocumentPage, {
  getServerSideProps,
} from "../../src/pages/patient/document/index";
import IntakeFormPage from "../../src/pages/patient/intake-form";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import { dummyFormDocument } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6173.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach( () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
    mock
      .onPut(`/ecp/patients/forms/editformContent`)
      .reply(200, {});
  });

  afterEach( () => {
    mock.reset()
  });

  const launchBrowser = () => {
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };
  
  const navigateToIntakeFormPage = async () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
    act(() => {
      container.rerender(
        <Provider store={store}>
          {IntakeFormPage.getLayout(<IntakeFormPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Insurance Communication/i));
  };

  const navigateToDocumentPage = async (
    titlePage = "Consent to Use and Disclosure"
  ) => {
    const contex = {
      query: { title: titlePage },
    };
    const serverProps = await getServerSideProps(contex);
    act(() => {
      container = renderWithProviders(
        DocumentPage.getLayout(<DocumentPage {...serverProps.props} />)
      );
    });
    await waitFor(() => container.getByText("Back to Intake Forms"));
    const backtoIntakeFormLink = container.getByText("Back to Intake Forms");
    expect(backtoIntakeFormLink).toBeInTheDocument();
  };
  
  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the list of open forms which can be filled out online', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', async () => {
      clickLogin()
      await navigateToIntakeFormPage()
    });

    and('click the Documents menu.', () => {
      const documents = container.getByText("Documents");
      expect(documents).toBeInTheDocument();
      fireEvent.click(documents)
    });

    then('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Insurance Communication/i);
      expect(insurance).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the contents of the form if we click any form', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', async () => {
      clickLogin()
      await navigateToIntakeFormPage()
    });

    and('click the Documents menu.', () => {
      const documents = container.getByText("Documents");
      expect(documents).toBeInTheDocument();
      fireEvent.click(documents)
    });

    and('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Insurance Communication/i);
      expect(insurance).toBeInTheDocument();
    });

    and('click any form to view', async () => {
      const insurance = container.getByText(/Insurance Communication/i);
      fireEvent.click(insurance)

      await navigateToDocumentPage()
    });

    then('Patient should see the contents of the form.', () => {
      const sign = container.getAllByText(/Signature of Patient, Parent or Legally/i)[0];
      expect(sign).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the below mentioned fields in the form which can be filled by the patient', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
    });

    and('click the Documents menu.', async() => {
      await navigateToIntakeFormPage()
    });

    and('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Insurance Communication/i);
      expect(insurance).toBeInTheDocument();
    });

    and('select any form', async () => {
      const insurance = container.getAllByText(/Insurance Communication/i)[0];
      fireEvent.click(insurance)

      await navigateToDocumentPage("Insurance Communication")
    });

    then('patient should see the below mentioned fields', () => {
      const text = container.getAllByText(/Insurance Communication/i)
      expect(text).toBeTruthy()
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the mentioned fields are prepopulated in the form', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
    });

    and('click the Documents menu.', async() => {
      await navigateToIntakeFormPage()
    });

    and('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Contact Lens/i);
      expect(insurance).toBeInTheDocument();
    });

    and('select any form', async () => {
      const insurance = container.getByText(/Contact Lens/i);
      fireEvent.click(insurance)

      await navigateToDocumentPage("Contact Lens Prescription Release")
    });

    then('patient should see the below mentioned fields with Prepopulated values.', () => {
      const sign = container.getAllByText(/Patient Signature/i)[0];
      expect(sign).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to e-Sign the form option is available.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
    });

    and('click the Documents menu.', async () => {
      await navigateToIntakeFormPage()
    });

    and('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Contact Lens/i);
      expect(insurance).toBeInTheDocument();
    });

    and('select any form', async () => {
      const insurance = container.getByText(/Contact Lens/i);
      fireEvent.click(insurance)

      await navigateToDocumentPage("Contact Lens Prescription Release")
    });

    and('the patient should see the e-Sign option.', () => {
      const sign = container.getByTestId("sign-btn");
      expect(sign).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6173-To verify whether the patient is able to download the form \'ECP Notice of Privacy Practices\' and view offline.', ({ given, when, and }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
    });

    and('click the Documents menu.', async() => {
      await navigateToIntakeFormPage()
    });

    and('Patient should see the list of forms.', () => {
      const insurance = container.getByText(/Notice of Privacy Policies/i);
      expect(insurance).toBeInTheDocument();
    });

    and('select any form', async () => {
      const insurance = container.getByText(/Notice of Privacy Policies/i);
      fireEvent.click(insurance)

      await navigateToDocumentPage("Notice of Privacy Policies")
    });

    and('click the download of \'ECP Notice of Privacy Practices\' and view in offline.', () => {
      const insurance = container.getAllByText(/Notice of Privacy Policies/i)[0];
      fireEvent.click(insurance)
    });
  });
});
