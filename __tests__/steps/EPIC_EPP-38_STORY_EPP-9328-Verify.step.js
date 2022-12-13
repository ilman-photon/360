import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom/extend-expect";
import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { Login } from "../../src/components/organisms/Login/login";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { renderWithProviders } from "../src/utils/test-util";
import AccountSecurityQuestionPage from "../../src/pages/patient/account/login-&-security/security-question";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import { doLogin, renderLogin } from "../../__mocks__/commonSteps";
import LoginSecurityPage from "../../src/pages/patient/account/login-&-security";
import { onViewSecurityQuestions } from "../../src/store/accountRecovery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-9328.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
  let container;
  
  beforeEach(async () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'authorized=true;accessToken=1234',
    });
  })

  afterEach(() => {});

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const userHasSetupSecurityQuestion = async () => {
    const mockSecurityQuestions = {
      ResponseCode: 3000,
      ResponseType: "success",
      SecurityQuestions: [
        {
          "What was the first book you read?": "test3",
          "What was your favorite cartoon character during your childhood?":
            "test2",
          "What is your favorite cold-weather activity?": "test1",
          "Who is your all-time favorite movie character?": "test4",
          "In what city or town did your parents meet?": "test5"
        },
      ],
    };
    const patientId = "8ad30e6a-db45-4147-b108-0d8a4c810782"
    mock
      .onGet(`/ecp/accountRecovery/viewSecurityQuestions/${patientId}`)
      .reply(200, mockSecurityQuestions);
  }

  const userLandsOnLoginSecurityScreen = () => {
    container.rerender(
      <Provider store={store}>
        <LoginSecurityPage />
      </Provider>
    )
  }

  test('EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view all the 5 security questions and answers already set up', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has setup the security question & answers', () => {
      userHasSetupSecurityQuestion()
      userLandsOnLoginSecurityScreen()
    });

    when('User lands on Set-up/ Update Security Question screen', async () => {
      container.rerender(
        <Provider store={store}>
          <LoginSecurityPage />
        </Provider>
      )
      const updateText = await waitFor(() => container.getAllByText(/Update/i))
      expect(updateText[0]).toBeInTheDocument()
      // expect(container).toMatchSnapshot()
      // expect(store.getState().accountRecovery.securityQuestions).toBe("Test")
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {

    });

    when('User clicks on the Set security questions& answers CTA', () => {

    });

    then('User should be navigated to Set security questions& answers screen', () => {

    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {

    });
  });

  test('EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view Update CTA', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has setup the security question & answers', () => {

    });

    when('User lands on Set-up/ Update Security Question screen', () => {

    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {

    });

    when('User clicks on the Set security questions& answers CTA', () => {

    });

    then('User should be navigated to Set security questions& answers screen', () => {

    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {

    });

    and('User should be able to view Update CTA', () => {

    });
  });

  test('EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view Cancel CTA', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has setup the security question & answers', () => {

    });

    when('User lands on Set-up/ Update Security Question screen', () => {

    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {

    });

    when('User clicks on the Set security questions& answers CTA', () => {

    });

    then('User should be navigated to Set security questions& answers screen', () => {

    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {

    });

    and('User should be able to view Update CTA', () => {

    });

    and('User should be able to view Cancel CTA', () => {

    });
  });
})