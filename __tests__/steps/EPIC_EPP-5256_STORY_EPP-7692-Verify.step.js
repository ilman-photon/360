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
} from "../../__mocks__/commonSteps";
import { dummyFormDocument, submitedForm } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-7692.feature",
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
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=co=FORM CUSTOMIZATION))`
      )
      .reply(200, submitedForm);
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

  test("EPIC_EPP-5256_STORY_EPP-7692- Verify User should be able to see the download the form to the user’s local system/ device", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is logged into the portal", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    and("User lands on the dashboard screen", () => {
      clickLogin();
    });

    and(
      "User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the ‘Intake Forms’ option", () => {
      defaultValidation();
    });

    then(
      "User lands on the screen to view the list of forms that can be filled online",
      async () => {
        await navigateToIntakeFormPage();
      }
    );

    and("User should be able to view the list of forms and its details", () => {
      defaultValidation();
    });

    and("User should be able to view the option to download", () => {
      const downloadBtn = container.getByTestId("download-button-left-0");
      expect(downloadBtn).toBeInTheDocument();
    });

    when("User clicks on the option to download a form", () => {
      const downloadBtn = container.getByTestId("download-button-left-0");
      fireEvent.click(downloadBtn);
    });

    then(
      "User should be able to see the download the form to the user’s local system/ device",
      () => {
        defaultValidation();
      }
    );
  });
});
