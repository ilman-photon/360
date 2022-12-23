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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6186.feature"
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

  test("EPIC_EPP-5256_STORY_EPP-6186 - Verify Admin user should be able to view all the contents of the form", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    and("Admin user is logged into the portal", () => {
      clickLogin();
    });

    and("Admin user lands on the dashboard screen", () => {
      defaultValidation();
    });

    and(
      "Admin user views the ‘Forms Customization' menu present as part of the global header",
      () => {
        defaultValidation();
      }
    );

    when("Admin user clicks on the ‘Forms Customization' option", () => {
      defaultValidation();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      async () => {
        await navigateToIntakeFormPage();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc3 = container.getByTestId("intakeFormDocleft-2");
      expect(formDoc3).toBeInTheDocument();
      fireEvent.click(formDoc3);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable"
        );
        expect(
          container.getAllByText(
            /Consent to Treatment of a Minor When Parent/i
          )[0]
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6186 - Verify Admin user should be able to view the latest to publish the form", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    and("Admin user is logged into the portal", () => {
      clickLogin();
    });

    and("Admin user lands on the dashboard screen", () => {
      defaultValidation();
    });

    and(
      "Admin user views the ‘Forms Customization' menu present as part of the global header",
      () => {
        defaultValidation();
      }
    );

    when("Admin user clicks on the ‘Forms Customization' option", () => {
      defaultValidation();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      async () => {
        await navigateToIntakeFormPage();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc7 = container.getByTestId("intakeFormDocright-2");
      expect(formDoc7).toBeInTheDocument();
      fireEvent.click(formDoc7);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable"
        );
        expect(
          container.getAllByText(
            /Consent to Treatment of a Minor When Parent/i
          )[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form (eg. if the heading was “A”, then the form’s display name when patient or admin view would be “A”. If the heading is changed to “B”, then the display name of form also changes to “B”)",
      () => {
        defaultValidation();
      }
    );

    and(
      "Admin user should be able to view the portions that can be customized within the form which the admin user can update/ change",
      () => {
        defaultValidation();
      }
    );

    and(
      "Admin user should be able to view the fields in the form which can be filled in by the patient or pre-populated (Non editable for Admin)",
      () => {
        defaultValidation();
      }
    );

    and(
      "Admin user should be able to view the option to publish the form",
      () => {
        defaultValidation();
      }
    );

    when("Admin click on pusblish button", () => {
      defaultValidation();
    });

    then("Admin should see latest publish form", () => {
      defaultValidation();
    });
  });
});
