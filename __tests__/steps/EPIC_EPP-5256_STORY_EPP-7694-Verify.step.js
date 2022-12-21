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
import {
  createMatchMedia,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import { dummyFormDocument } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-7694.feature"
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

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const launchBrowser = () => {
    mock
      .onGet(`https://api.ipify.org?format=json`)
      .reply(200, { ip: "10.10.10.10" });
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const enterValidUsername = () => {
    const usernameField = container.getByLabelText("emailUserLabel");
    const passwordField = container.getByLabelText("passwordLabel");
    fireEvent.change(usernameField, {
      target: { value: "wrongUserName@email.cc" },
    });
    fireEvent.change(passwordField, { target: { value: "validPassword" } });
    expect(usernameField.value).not.toEqual("validUsername@email.cc");
    expect(passwordField.value).toEqual("validPassword");
  };

  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
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

  const navigateToIntakeFormPage = async () => {
    act(() => {
      container.rerender(
        <Provider store={store}>
          {IntakeFormPage.getLayout(<IntakeFormPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Insurance Communication/i));
  };

  const seeErrorMessage = () => {
    setTimeout(() => {
      const inputFieldError = container.getByLabelText(
        /This field is required/i
      );
      expect(inputFieldError).toBeTruthy();
      expect(/This field is required/i).toEqual(inputFieldError.textContent);
    }, 500);
  };


  test('EPIC_EPP-5256_STORY_EPP-7694- Verify User should be able to see the download the form to the user’s local system/ device', ({ given, and, when, then }) => {
    given('User is logged into the portal', () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    and('User lands on the dashboard screen', () => {
      clickLogin();
    });

    and('User views the ‘Intake Forms\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
      defaultValidation()
    });

    when('User clicks on the ‘Intake Forms’ option', () => {
      defaultValidation()
    });

    then('User lands on the screen to view the list of forms that can be filled online', async () => {
      await navigateToIntakeFormPage()
    });

    and('User should be able to view the list of forms and its details', () => {
      defaultValidation()
    });

    when('User clicks on the Submitted forms tab', async () => {
      const tab = container.getByTestId("submitted-forms-intake")
      fireEvent.click(tab)
      await waitFor(() => container.getByTestId("submit-form-container"));
    });

    then('User should be able to view the list of submitted forms i.e name of each form listed', () => {
      expect(container.getByTestId("submit-form-container")).toBeInTheDocument()
    });

    and(/^User should be able to view only the latest submitted form of those (\d+) forms that have been filled online$/, (arg0) => {
      defaultValidation()
    });

    and('User should be able to view the last submitted date for each of the submitted form', () => {
      defaultValidation()
    });

    and('User should be able to view the option to download each submitted form', () => {
      const tab = container.getByTestId("download-button-left-0")
      fireEvent.click(tab)
    });

    when('User clicks on download option', () => {
      const tab = container.getByTestId("download-button-left-0")
      fireEvent.click(tab)
    });

    then('User should be able to see the download the form to the user’s local system/ device', () => {
      defaultValidation()
    });
  });
});
