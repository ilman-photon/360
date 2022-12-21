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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6170.feature",
  {
    tagFilter: "@included and not @excluded",
  }
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

  test('EPIC_EPP-5256_STORY_EPP-6170-To check whether the \'Intake forms\' submenu is displaying under the global header \'Documents\'', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
      navigateToIntakeFormPage()
    });

    and('click the Documents menu.', () => {
      const documents = container.getByText("Documents");
      expect(documents).toBeInTheDocument();
      fireEvent.click(documents)
    });

    then('Patient should see the \'Intake forms\' menu.', () => {
      const documents = container.getByText("Intake Forms");
      expect(documents).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-5256_STORY_EPP-6170-To check whether the Patient is able to navigate to the screen to view the list of forms that can be filled out Online', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      launchBrowser()
    });

    when('user is logged in to the application', () => {
      clickLogin()
      navigateToIntakeFormPage()
    });

    and('click the Documents menu.', () => {
      const documents = container.getByText("Documents");
      expect(documents).toBeInTheDocument();
      fireEvent.click(documents)
    });

    and('Patient should see the \'Intake forms\' menu.', () => {
      const intake = container.getByText("Intake Forms");
      expect(intake).toBeInTheDocument();
    });

    and('click the \'Intake forms\'', () => {
      const intake = container.getByText("Intake Forms");
      fireEvent.click(intake)
    });

    then('Patient should see the list of forms that can be filled out online.', () => {
      const insurance = container.getByText(/Insurance Communication/i);
      expect(insurance).toBeInTheDocument();
    });
});
});
