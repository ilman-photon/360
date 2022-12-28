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
import moment from "moment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-9327.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
  let container;

  beforeEach(async () => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'authorized=true;accessToken=1234',
    });

    mock.onPost(`/ecp/patient/getLastUpdatedPasswordDate`).reply(200, {
      lastUpdatedPasswordDate: moment().subtract(2, "m").format(),
    });

    mock.onPost(`/ecp/patient/settings/changePassword`).reply(200, {
      responseCode: 3000,
      responseType: "success",
    });

    mock.onPost(`/ecp/patient/settings/validatePassword`).reply(400, {
      responseCode: 2001,
      responseType: " Password is invalid",
    });

    mock.onPost(`/ecp/patient/logout`).reply(200, {
      ResponseCode: 2005,
      ResponseType: "success",
    });
  })

  afterEach(() => { });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const userHasNotSetupSecurityQuestion = () => {
    const mockSecurityQuestions = {
      ResponseCode: 3000,
      ResponseType: "success",
      SecurityQuestions: [],
    };
    const patientId = "8ad30e6a-db45-4147-b108-0d8a4c810782"
    mock
      .onGet(`/ecp/accountRecovery/viewSecurityQuestions/${patientId}`)
      .reply(200, mockSecurityQuestions);

    expect(store.getState().accountRecovery.securityQuestions).toHaveLength(0)
  }

  const userLandsOnLoginSecurityScreen = () => {
    container = render(
      <Provider store={store}>
        <LoginSecurityPage />
      </Provider>
    )
  }

  const userViewSetSecurityQuestionCTA = () => {
    const ctaBtn = container.getByTestId("setup-security-question-btn")
    expect(ctaBtn).toBeInTheDocument()
    return ctaBtn
  }

  const userClickSetSecurityQuestionCTA = () => {
    const btn = userViewSetSecurityQuestionCTA()
    fireEvent.click(btn)
  }

  test('EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has not setup the security question & answers', () => {
      userHasNotSetupSecurityQuestion()
    });

    when('User lands on Set-up/ Update Security Question screen', () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userViewSetSecurityQuestionCTA()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to click on the Set security questions& answers CTA', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has not setup the security question & answers', () => {
      userHasNotSetupSecurityQuestion()
    });

    when('User lands on Set-up/ Update Security Question screen', () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userViewSetSecurityQuestionCTA()
    });

    and('User should be able to click on the Set security questions& answers CTA', () => {
      userClickSetSecurityQuestionCTA()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9327- Verify User should be navigated to Set security questions& answers screen', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', async () => {
      cleanup()
      container = await renderLogin()
    });

    and('User has logged in as patient', () => {
      doLogin(mock, container)
    });

    and('User has not setup the security question & answers', () => {
      userHasNotSetupSecurityQuestion()
    });

    when('User lands on Set-up/ Update Security Question screen', () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userViewSetSecurityQuestionCTA()
    });

    when('User clicks on the Set security questions& answers CTA', () => {
      userClickSetSecurityQuestionCTA()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      container.rerender(
        <Provider store={store}>
          <AccountSecurityQuestionPage />
        </Provider>
      )
    });
  });
})