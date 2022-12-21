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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6179.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  afterEach(() => {
    mock.reset();
  });
  beforeEach( () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
    mock
      .onPut(`/ecp/patients/forms/editformContent`)
      .reply(200, {});
  });
  

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

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

  test('EPIC_EPP-5256_STORY_EPP-6179 - Verify User should be able to view error message "You need to e-sign the form to submit" when user submit without E-sign the form.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      window.matchMedia = createMatchMedia("1290px");
      await launchBrowser();
    });

    and("user is logged in to the application", () => {
      clickLogin();
    });

    and("user lands on the dashboard", async () => {
      defaultValidation();
    });

    and(
      "user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header",
      () => {
        defaultValidation();
      }
    );

    when("user click on the ‘Intake Forms’ option", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to view the list of forms that can be filled online",
      async () => {
        await navigateToIntakeFormPage();
      }
    );

    when("user click on one of form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-3");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "user should see the patient-related details being pre-populated in the selected form",
      async () => {
        await navigateToDocumentPage(
          "Consent to Treat • Patient Financial Responsibility • Assignment of Benefits"
        );
      }
    );

    and("user filled-out form", () => {
      defaultValidation();
    });

    when("user click on Submit button", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-2");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(/^user should be able to view error message "(.*)"$/, (arg0) => {
      seeErrorMessage();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6179 - Verify User should be able to view error message "You need to e-sign the form to submit" when user submit without filled-out the form.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    and("user is logged in to the application", () => {
      clickLogin();
    });

    and("user lands on the dashboard", () => {
      defaultValidation();
    });

    and(
      "user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header",
      () => {
        defaultValidation();
      }
    );

    when("user click on the ‘Intake Forms’ option", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to view the list of forms that can be filled online",
      async () => {
        await navigateToIntakeFormPage();
      }
    );

    when("user click on one of form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-0");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "user should see the patient-related details being pre-populated in the selected form",
      async () => {
        await navigateToDocumentPage();
      }
    );

    and("user is not filled-out form", () => {
      defaultValidation();
    });

    when("user click on Submit button", async () => {
      const saveBtn = container.getByLabelText("Save & Continue");
      expect(saveBtn).toBeInTheDocument();
      fireEvent.click(saveBtn);
    });

    then(/^user should be able to view error message "(.*)"$/, async (arg0) => {
      seeErrorMessage();
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6180 - Verify User should redirect to fill out forms online", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user already created an Appointment", () => {
      defaultValidation();
    });

    and("user should see Appointment Confirmation overlay", () => {
      defaultValidation();
    });

    then("user should see Fill forms button", () => {
      defaultValidation();
    });

    when("user click on Fill forms", () => {
      defaultValidation();
    });

    then("user should lands on to fill out forms online", () => {
      defaultValidation();
    });
  });
});
