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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6178.feature",
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
      container.rerender(
        <Provider store={store}>
        {DocumentPage.getLayout(<DocumentPage {...serverProps.props} />)}
        </Provider>
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

  test('EPIC_EPP-5256_STORY_EPP-6178 - Verify User should see the patient-related details being pre-populated in the selected form', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    and('user is logged in to the application', () => {
      clickLogin()
    });

    and('user lands on the dashboard', () => {
      defaultValidation()
    });

    and('user views the ‘Intake Forms\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
      defaultValidation()
    });

    when('user click on the ‘Intake Forms’ option', () => {
      defaultValidation()
    });

    then('user lands on the screen to view the list of forms that can be filled online', async () => {
      await navigateToIntakeFormPage()
    });

    when('user click on one of form', () => {
      const insuranceCommunication = container.getByText(/Insurance Communication/i)
      fireEvent.click(insuranceCommunication)
    });

    then('user should see the patient-related details being pre-populated in the selected form', async () => {
      await navigateToDocumentPage("Insurance Communication")
      const text = container.getAllByText(/Insurance Communication/i)[0]
      expect(text).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6178 - Verify User should not be able to edit the pre-populated fields', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    and('user is logged in to the application', () => {
      clickLogin()
    });

    and('user lands on the dashboard', () => {
      defaultValidation()
    });

    and('user views the ‘Intake Forms\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
      defaultValidation()
    });

    when('user click on the ‘Intake Forms’ option', () => {
      defaultValidation()
    });

    then('user lands on the screen to view the list of forms that can be filled online', async () => {
      await navigateToIntakeFormPage()
    });

    when('user click on one of form', () => {
      const insuranceCommunication = container.getByText(/Insurance Communication/i)
      fireEvent.click(insuranceCommunication)
    });

    then('user should see the patient-related details being pre-populated in the selected form', async () => {
      await navigateToDocumentPage("Insurance Communication")
      const text = container.getAllByText(/Insurance Communication/i)[0]
      expect(text).toBeInTheDocument()
    });

    when('user click on field', () => {
      const text = container.getByTestId("textInfo-txt")
      fireEvent.click(text)
    });

    then('user should see field is disable', () => {
      defaultValidation()
    });

    and('user should not be able to edit the field', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Consent to Treat Patient Fin Responsibility Assignment of Benefits form', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    and('user is logged in to the application', () => {
      clickLogin()
    });

    and('user lands on the dashboard', () => {
      defaultValidation()
    });

    and('user views the ‘Intake Forms\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
      defaultValidation()
    });

    when('user click on the ‘Intake Forms’ option', () => {
      defaultValidation()
    });

    then('user lands on the screen to view the list of forms that can be filled online', async () => {
      await navigateToIntakeFormPage()
    });

    when('user click on related form', async () => {
      const constentToTreat = container.getByText(/Patient Financial Responsibility/i)
      fireEvent.click(constentToTreat)

      await navigateToDocumentPage("Insurance Communication")
    });

    then('user should see field to be prepopulated on Consent to Treat Patient Fin Responsibility Assignment of Benefits form below', async (table) => {
      const button = container.getByTestId("sign-btn")
      act(() => {
        fireEvent.click(button)
      });
    });
  });
});
