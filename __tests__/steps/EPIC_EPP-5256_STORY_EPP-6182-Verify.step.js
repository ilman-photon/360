import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, getByText, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6182.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach(() => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
    mock.onPut(`/ecp/patients/forms/editformContent`).reply(200, {});
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

  test("EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user lands on the screen to view the list of forms that can be customized", ({
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
  });

  test("EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user views the list of 8 forms displayed one below the other", ({
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

    and(
      /^Admin user views the list of (\d+) forms displayed one below the other$/,
      (arg0) => {
        const formDoc0 = container.getByTestId("download-button-left-0");
        expect(formDoc0).toBeInTheDocument();
        const formDoc1 = container.getByTestId("download-button-left-1");
        expect(formDoc1).toBeInTheDocument();
        const formDoc2 = container.getByTestId("download-button-left-2");
        expect(formDoc2).toBeInTheDocument();
        const formDoc3 = container.getByTestId("download-button-left-3");
        expect(formDoc3).toBeInTheDocument();
        const formDoc4 = container.getByTestId("download-button-right-0");
        expect(formDoc4).toBeInTheDocument();
        const formDoc5 = container.getByTestId("download-button-right-1");
        expect(formDoc5).toBeInTheDocument();
        const formDoc6 = container.getByTestId("download-button-right-2");
        expect(formDoc6).toBeInTheDocument();
        const formDoc7 = container.getByTestId("download-button-right-3");
        expect(formDoc7).toBeInTheDocument();
        fireEvent.click(formDoc1);
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user should be able to select a form to customize", ({
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

    and(
      /^Admin user views the list of (\d+) forms displayed one below the other$/,
      (arg0) => {
        const formDoc0 = container.getByTestId("download-button-left-0");
        expect(formDoc0).toBeInTheDocument();
        const formDoc1 = container.getByTestId("download-button-left-1");
        expect(formDoc1).toBeInTheDocument();
        const formDoc2 = container.getByTestId("download-button-left-2");
        expect(formDoc2).toBeInTheDocument();
        const formDoc3 = container.getByTestId("download-button-left-3");
        expect(formDoc3).toBeInTheDocument();
        const formDoc4 = container.getByTestId("download-button-right-0");
        expect(formDoc4).toBeInTheDocument();
        const formDoc5 = container.getByTestId("download-button-right-1");
        expect(formDoc5).toBeInTheDocument();
        const formDoc6 = container.getByTestId("download-button-right-2");
        expect(formDoc6).toBeInTheDocument();
        const formDoc7 = container.getByTestId("download-button-right-3");
        expect(formDoc7).toBeInTheDocument();
        fireEvent.click(formDoc3);
      }
    );

    and("Admin user should be able to select a form to customize", async () => {
      await navigateToDocumentPage(
        "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable"
      );
      expect(
        container.getAllByText(
          /Consent to Treatment of a Minor When Parent/i
        )[0]
      ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user need not view this form “Consent to Treat Minor” here as there is no customization required for this form", ({
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

    and(
      /^Admin user views the list of (\d+) forms displayed one below the other$/,
      (arg0) => {
        const formDoc0 = container.getByTestId("download-button-left-0");
        expect(formDoc0).toBeInTheDocument();
        const formDoc1 = container.getByTestId("download-button-left-1");
        expect(formDoc1).toBeInTheDocument();
        const formDoc2 = container.getByTestId("download-button-left-2");
        expect(formDoc2).toBeInTheDocument();
        const formDoc3 = container.getByTestId("download-button-left-3");
        expect(formDoc3).toBeInTheDocument();
        const formDoc4 = container.getByTestId("download-button-right-0");
        expect(formDoc4).toBeInTheDocument();
        const formDoc5 = container.getByTestId("download-button-right-1");
        expect(formDoc5).toBeInTheDocument();
        const formDoc6 = container.getByTestId("download-button-right-2");
        expect(formDoc6).toBeInTheDocument();
        const formDoc7 = container.getByTestId("download-button-right-3");
        expect(formDoc7).toBeInTheDocument();
        fireEvent.click(formDoc4);
      }
    );

    and("Admin user should be able to select a form to customize", () => {
      const form2 = container.getByTestId("intakeFormDocleft-2");
      fireEvent.click(form2);
    });

    and(
      "Admin user need not view this form “Consent to Treat Minor” here as there is no customization required for this form",
      () => {
        defaultValidation();
      }
    );
  });
});
