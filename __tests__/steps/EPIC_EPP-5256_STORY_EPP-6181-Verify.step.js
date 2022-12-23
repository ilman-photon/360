import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6181.feature"
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

  test("EPIC_EPP-5256_STORY_EPP-6181 - Verify Admin user should be able to click on the ‘Forms Customization' option", ({
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

    when("Admin user clicks on the ‘Forms Customization' option", async() => {
      await navigateToIntakeFormPage();
    });

    then(
      "Admin user lands on the screen to view the list of forms that can be customized",
      () => {
        const formDoc = container.getByTestId("intakeFormDocright-1");
        expect(formDoc).toBeInTheDocument();
        fireEvent.click(formDoc);
      }
    );
  });

  test("EPIC_EPP-5256_STORY_EPP-6181 - Verify Admin user lands on the screen to view the list of forms that can be customized", ({
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

    and("Admin user lands on the dashboard screen", async() => {
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
        const formDoc = container.getByTestId("intakeFormDocright-2");
        expect(formDoc).toBeInTheDocument();
        fireEvent.click(formDoc);
      }
    );
  });
});
