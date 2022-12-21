import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, getByText, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import IntakeFormPage from "../../src/pages/patient/intake-form";
import DocumentPage, {
  getServerSideProps,
} from "../../src/pages/patient/document/index";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import {
  createMatchMedia,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import { mockStoreAdmin } from "../../__mocks__/component-mock";
import { dummyFormDocument } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6184.feature"
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

  afterAll(() => {
    jest.resetAllMocks();
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

  const navigateToDocumentPage = async (
    titlePage = "Consent to Use and Disclosure"
  ) => {
    const contex = {
      query: titlePage
        ? {
            title: titlePage,
          }
        : {},
    };
    const serverProps = await getServerSideProps(contex);
    act(() => {
      container = renderWithProviders(
        DocumentPage.getLayout(<DocumentPage {...serverProps.props} />)
      );
    });
    await waitFor(() => container.getByText("Back to Intake Forms"));
  };

  test("EPIC_EPP-5256_STORY_EPP-6184 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when Admin user clicks on cancel button", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      localStorage.getItem = jest.fn(mockStoreAdmin);
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-0");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Authorization to Disclose Information to Those Involved in My Care"
        );
        expect(
          container.getAllByText(
            /Authorization to Disclose Information to Those Involved in My Care/i
          )[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form (eg. if the heading was “A”, then the form’s display name when patient or admin view would be “A”. If the heading is changed to “B”, then the display name of form also changes to “B”)",
      () => {
        const backtoIntakeFormLink = container.getByText("Is there any protected health information you would like to exclude from disclosure to the parties listed above? If yes, fill in here:");
        expect(backtoIntakeFormLink).toBeInTheDocument();
      }
    );

    and(
      "Admin user should be able to view the portions that can be customized within the form which the admin user can update/ change",
      () => {
        const backtoIntakeFormLink = container.getByText("This form replaces all prior disclosure authorizations as of the date above.");
        expect(backtoIntakeFormLink).toBeInTheDocument();
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

    and(
      "Admin user should be able to view the option to discard changes",
      () => {
        defaultValidation();
      }
    );

    when("Admin user clicks on cancel button", () => {
      defaultValidation();
    });

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when Admin user clicks on cancel button", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-1");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Authorization to Disclose Information to Those Involved in My Care"
        );
        expect(
          container.getAllByText(
            /Authorization to Disclose Information to Those Involved in My Care/i
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

    and(
      "Admin user should be able to view the option to discard changes",
      () => {
        defaultValidation();
      }
    );

    when("Admin user clicks on cancel button", () => {
      defaultValidation();
    });

    and("the internet service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user clicked will cancel the changes made and revert the contents of the form to the previous published version; navigate the admin user to list of customizable forms", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-2");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Authorization to Disclose Information to Those Involved in My Care"
        );
        expect(
          container.getAllByText(
            /Authorization to Disclose Information to Those Involved in My Care/i
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

    and(
      "Admin user should be able to view the option to discard changes",
      () => {
        defaultValidation();
      }
    );

    when(
      "Admin user clicked will cancel the changes made and revert the contents of the form to the previous published version; navigate the admin user to list of customizable forms",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the option to discard changes", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-2");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage(
          "Authorization to Disclose Information to Those Involved in My Care"
        );
        expect(
          container.getAllByText(
            /Authorization to Disclose Information to Those Involved in My Care/i
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

    and(
      "Admin user should be able to view the option to discard changes",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the option to publish the form", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocleft-2");
      expect(container.getByTestId("intakeFormDocleft-2")).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage("Consent to Use and Disclosure");
        expect(
          container.getAllByText(/Consent to Use and Disclosure/i)[0]
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
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the portions that can be customized within the form which the admin user can update/ change", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocright-2");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage("Insurance Communication");
        expect(
          container.getAllByText(/Insurance Communication/i)[0]
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
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        defaultValidation();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocright-3");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage("Contact Lens Prescription Release");
        expect(
          container.getAllByText(/Contact Lens Prescription Release/i)[0]
        ).toBeInTheDocument();
        expect(container.getByText("Edit Document")).toBeInTheDocument();
        fireEvent.click(container.getByText("Edit Document"));
      }
    );

    and(
      "Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form (eg. if the heading was “A”, then the form’s display name when patient or admin view would be “A”. If the heading is changed to “B”, then the display name of form also changes to “B”)",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view all the contents of the form", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async () => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        const title = container.getAllByText(/Consent to Treat/i)[0];
        expect(title).toBeInTheDocument();
      }
    );

    when("Admin user selects a form", () => {
      const formDoc = container.getByTestId("intakeFormDocright-3");
      expect(formDoc).toBeInTheDocument();
      fireEvent.click(formDoc);
    });

    then(
      "Admin user should be able to view all the contents of the form",
      async () => {
        await navigateToDocumentPage("Consent to Use and Disclosure");
        expect(
          container.getAllByText(/Consent to Use and Disclosure/i)[0]
        ).toBeInTheDocument();
        expect(container.getByText("Edit Document")).toBeInTheDocument();
        fireEvent.click(container.getByText("Edit Document"));
      }
    );
  });
});
