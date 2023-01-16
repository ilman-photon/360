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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6177.feature",
  {
    tagFilter: "@included and not @excluded",
  }
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

  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field when open e-form Authorization to Disclose Information about my Care", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
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
      const consentToTreatment = container.getByText(
        /Consent to Treatment of a Minor/i
      );
      fireEvent.click(consentToTreatment);
    });

    then("user should see field that open to edit", async () => {
      await navigateToDocumentPage(
        "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable"
      );
      const text = container.getAllByText(
        /Consent to Treatment of a Minor When/i
      )[0];
      expect(text).toBeInTheDocument();
    });

    and("user fill on that field below", (table) => {
      const name = container
        .getByTestId("emergency-name-field")
        .querySelector("input");
      const name2 = container
        .getAllByTestId("emergency-name2-field")[0]
        .querySelector("input");

      const phone = container
        .getByTestId("emergency1-number-field")
        .querySelector("input");
      const phone2 = container
        .getAllByTestId("emergency2-number-field")[0]
        .querySelector("input");

      fireEvent.change(name, { target: { value: "Test1" } });
      expect(name.value).toEqual("Test1");

      fireEvent.change(name2, { target: { value: "Test1" } });
      expect(name2.value).toEqual("Test1");

      fireEvent.change(phone, { target: { value: "123" } });
      expect(phone.value).toEqual("(123) ");

      fireEvent.change(phone2, { target: { value: "12345" } });
      expect(phone2.value).toEqual("(123) 45");
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field when open e-form Consent to Treat Minor", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
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
      const consentToTreatment = container.getByText(
        /Consent to Treatment of a Minor/i
      );
      fireEvent.click(consentToTreatment);
    });

    then("user should see field that open to edit", async () => {
      await navigateToDocumentPage(
        "Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable"
      );
      const text = container.getAllByText(
        /Consent to Treatment of a Minor When/i
      )[0];
      expect(text).toBeInTheDocument();
    });

    and("user fill on that field below", (table) => {
      const text = container
        .getAllByTestId("guardian-field")[0]
        .querySelector("input");

      fireEvent.change(text, { target: { value: "Test Input" } });
      expect(text.value).toEqual("Test Input");
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field  when open e-form Consent Form_Update 04.2022", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
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
      const consentToUse = container.getAllByText(
        /Consent to Use and Disclosure/i
      )[0];
      fireEvent.click(consentToUse);
    });

    then("user should see field that open to edit", async () => {
      await navigateToDocumentPage("Consent to Use and Disclosure");
      const text = container.getByText(/Consent to Use and/i);
      expect(text).toBeInTheDocument();
    });

    and("user fill on that field below", (table) => {
      const text = container
        .getByTestId("agent-name-field")
        .querySelector("input");

      fireEvent.change(text, { target: { value: "Test Input" } });
      expect(text.value).toEqual("Test Input");

      const saveBtn = container.getByTestId("document-save-btn");
      fireEvent.click(saveBtn);
    });
  });

  test("EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field  when open e-form Consent Form_Update 04.2022_V3", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
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
      const consentToUse = container.getAllByText(
        /Consent to Use and Disclosure/i
      )[0];
      fireEvent.click(consentToUse);
    });

    then("user should see field that open to edit", async () => {
      await navigateToDocumentPage("Consent to Use and Disclosure");
      const text = container.getByText(/Consent to Use and/i);
      expect(text).toBeInTheDocument();
    });

    and("user fill on that field below", (table) => {
      const text = container
        .getByTestId("signCommunicationRelationship-input")
        .querySelector("input");
      const text2 = container
        .getByTestId("signOptionalRelationship-input")
        .querySelector("input");

      fireEvent.change(text, { target: { value: "Test Input" } });
      expect(text.value).toEqual("Test Input");

      fireEvent.change(text2, { target: { value: "Test Input" } });
      expect(text2.value).toEqual("Test Input");

      const saveBtn = container.getByTestId("document-save-btn");
      fireEvent.click(saveBtn);
    });
  });
});
