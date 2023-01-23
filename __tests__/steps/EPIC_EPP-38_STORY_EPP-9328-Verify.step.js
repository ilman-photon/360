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
import moment from "moment";

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

  afterEach(() => { });

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
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066"
    mock
      .onGet(`/ecp/accountRecovery/viewSecurityQuestions/${patientId}`)
      .reply(200, mockSecurityQuestions);
    mock.onPost(`/ecp/patient/getLastUpdatedPasswordDate`).reply(200, {
      lastUpdatedPasswordDate: moment().subtract(2, "m").format(),
    });
  }

  const userLandsOnLoginSecurityScreen = () => {
    container.rerender(
      <Provider store={store}>
        <LoginSecurityPage />
      </Provider>
    )
  }

  const userSeeUpdateSecurityQuestionBtn = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("update-security-question-btn"))
    expect(updateBtn).toBeInTheDocument()
  }

  const userClickUpdateSecurityQuestionBtn = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("update-security-question-btn"))
    fireEvent.click(updateBtn)
  }

  const userLandsOnSecurityQuestionScreen = () => {
    container.rerender(
      <Provider store={store}>
        <AccountSecurityQuestionPage />
      </Provider>
    )
  }
  

  const userSeeQuestionOne = async () => {
    const questionOne = await waitFor(() => container.getByText(/What was the first book you read?/i))
    expect(questionOne).toBeInTheDocument()
  }

  const userSeeUpdateCTA = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("action-update-security-question-btn"))
    expect(updateBtn).toBeInTheDocument()
  }

  const userSeeCancelCTA = async () => {
    const cancelBtn = await waitFor(() => container.getByTestId("action-cancel-security-question-btn"))
    expect(cancelBtn).toBeInTheDocument()
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
    });

    when('User lands on Set-up/ Update Security Question screen', async () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userSeeUpdateSecurityQuestionBtn()
    });

    when('User clicks on the Set security questions& answers CTA', () => {
      userClickUpdateSecurityQuestionBtn()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      userLandsOnSecurityQuestionScreen()
    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {
      userSeeQuestionOne()
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
      userHasSetupSecurityQuestion()
    });

    when('User lands on Set-up/ Update Security Question screen', async () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userSeeUpdateSecurityQuestionBtn()
    });

    when('User clicks on the Set security questions& answers CTA', () => {
      userClickUpdateSecurityQuestionBtn()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      userLandsOnSecurityQuestionScreen()
    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {
      userSeeQuestionOne()
    });

    and('User should be able to view Update CTA', () => {
      userSeeUpdateCTA()
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
      userHasSetupSecurityQuestion()
    });

    when('User lands on Set-up/ Update Security Question screen', async () => {
      userLandsOnLoginSecurityScreen()
    });

    then('User should be able to view Set security questions& answers CTA if security questions are not set by user during registration', () => {
      userSeeUpdateSecurityQuestionBtn()
    });

    when('User clicks on the Set security questions& answers CTA', () => {
      userClickUpdateSecurityQuestionBtn()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      userLandsOnSecurityQuestionScreen()
    });

    and(/^User should be able to view all the (\d+) security questions and answers already set up$/, (arg0) => {
      userSeeQuestionOne()
    });

    and('User should be able to view Update CTA', () => {
      userSeeUpdateCTA()
    });

    and('User should be able to view Cancel CTA', () => {
      userSeeCancelCTA()
    });
  });
})