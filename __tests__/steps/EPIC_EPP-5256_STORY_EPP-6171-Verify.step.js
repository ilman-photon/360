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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6171.feature",
);



defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach(async () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);
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
  
  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-5256_STORY_EPP-6171 - Verify User should be able to view list of e-form that can be edit', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    and('user is logged in to the application', () => {
      clickLogin()
    });

    and('user lands on the dashboard', () => {
      navigateToIntakeFormPage()
      defaultValidation()
    });

    and('user views the ‘Intake Forms\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
      const documents = container.getByText("Documents");
      expect(documents).toBeInTheDocument();
      fireEvent.click(documents)
    });

    when('user click on the ‘Intake Forms’ option', () => {
      const documents = container.getByText("Intake Forms");
      expect(documents).toBeInTheDocument();
    });

    then('user lands on the screen to view the list of forms that can be filled online', () => {
      const documents = container.getByTestId("download-button-left-0");
      expect(documents).toBeInTheDocument();
    });

    and('user should see list of e-form', () => {
      const documents = container.getByTestId("download-button-left-0");
      const documents1 = container.getByTestId("download-button-left-1");
      const documents2 = container.getByTestId("download-button-left-2");
      expect(documents).toBeInTheDocument();
      expect(documents1).toBeInTheDocument();
      expect(documents2).toBeInTheDocument();
    });

    and(/^the total e-form will be displayed is (\d+)$/, (arg0) => {
      const documents = container.getByTestId("download-button-left-0");
      const documents1 = container.getByTestId("download-button-left-1");
      const documents2 = container.getByTestId("download-button-left-2");
      const documents3 = container.getByTestId("download-button-left-3");
      const documents4 = container.getByTestId("download-button-right-0");
      const documents5 = container.getByTestId("download-button-right-1");
      const documents6 = container.getByTestId("download-button-right-2");
      const documents7 = container.getByTestId("download-button-right-3");
      expect(documents).toBeInTheDocument();
      expect(documents1).toBeInTheDocument();
      expect(documents2).toBeInTheDocument();
      expect(documents3).toBeInTheDocument();
      expect(documents4).toBeInTheDocument();
      expect(documents5).toBeInTheDocument();
      expect(documents6).toBeInTheDocument();
      expect(documents7).toBeInTheDocument();
      
      fireEvent.click(documents)
      fireEvent.click(documents1)
      fireEvent.click(documents2)
      fireEvent.click(documents3)
      fireEvent.click(documents4)
      fireEvent.click(documents5)
      fireEvent.click(documents6)
      fireEvent.click(documents7)
    });
  });
});
