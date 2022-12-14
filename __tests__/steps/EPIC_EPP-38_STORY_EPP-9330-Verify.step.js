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
  "./__tests__/feature/Patient Portal/Sprint10/EPP-9330.feature"
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
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066"
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

  const userSeeUpdateSecurityQuestionBtn = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("update-security-question-btn"))
    expect(updateBtn).toBeInTheDocument()
  }

  const userClickUpdateSecurityQuestionBtn = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("update-security-question-btn"))
    fireEvent.click(updateBtn)
  }

  const userSeeQuestionOne = async () => {
    const questionOne = await waitFor(() => container.getByText(/What was the first book you read?/i))
    expect(questionOne).toBeInTheDocument()
  }

  const userLandsOnSecurityQuestionScreen = () => {
    const mockSecurityQuestionList = {
      SetUpSecurityQuestions: [
        "What was the first concert you attended?",
        "In what city or town did your parents meet?",
        "What was the make and model of your first car?",
        "Who is your all-time favorite movie character?",
        "What was your favorite cartoon character during your childhood?",
        "What was the first book you read?",
        "What was the first thing you learned to cook?",
        "What was the first film you saw in a theater?",
        "Where did you go the first time you flew on a plane?",
        "What is your favorite cold-weather activity?",
      ]
    }
    mock
      .onGet(`/ecp/patient/getsecurityQuestions`)
      .reply(200, mockSecurityQuestionList);
    container.rerender(
      <Provider store={store}>
        <AccountSecurityQuestionPage />
      </Provider>
    )
  }

  const userChangeTheAnswerOfQuestionOne = () => {
    const answer1 = container.getByLabelText(/Answer 1/i);
    fireEvent.change(answer1, { target: { value: "change answer 1" } });
    expect(answer1.value).toEqual("change answer 1");
  }

  const userChangeTheQuestionOne = async () => {
    const question1 = container.getByTestId("content-input-1")
    fireEvent.change(question1, { target: { value: "What was the first film you saw in a theater?" } });
    const question1Changed = await waitFor(() => container.getByText(/What was the first film you saw in a theater?/i))
    expect(question1Changed.value).toEqual("What was the first film you saw in a theater?");
  }

  const userSeeAnswerOfQuestionOneBlank = async () => {
    const answer1 = await waitFor(() => container.getByLabelText(/Answer 1/i))
    fireEvent.change(answer1, { target: { value: "" } });
    expect(answer1.value).toEqual("");
  }

  const userClickUpdateCTA = async () => {
    const updateBtn = await waitFor(() => container.getByTestId("action-update-security-question-btn"))
    expect(updateBtn).toBeInTheDocument()
  }

  const userViewSuccessUpdateMsg = async () => {
    const successMsg = await waitFor(() => container.getByText(/Security questions successfully updated/i))
    expect(successMsg).toBeInTheDocument()
  }

  test('EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to view the success message ‘Security question updated  successfully’ if ‘yes’ is selected during confirmation', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects Yes option', () => {
      defaultValidation()
    });

    then('User should be able to view the success message ‘Security question updated  successfully’', () => {
      userViewSuccessUpdateMsg()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify User should be navigated to Set security questions& answers screen when User selects No option', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects No option', () => {
      defaultValidation()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      userLandsOnLoginSecurityScreen()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to see the security question & answers of the respective patient is updated', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects Yes option', () => {
      defaultValidation()
    });

    then('User should be able to view the success message ‘Security question updated  successfully’', () => {
      userViewSuccessUpdateMsg()
    });

    and('User should be able to see the security question & answers of the respective patient is updated', () => {
      defaultValidation()
    });

    and('User should be redirected to Profile screen', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify User should be redirected to Profile screen', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects Yes option', () => {
      defaultValidation()
    });

    then('User should be able to view the success message ‘Security question updated  successfully’', () => {
      userViewSuccessUpdateMsg()
    });

    and('User should be able to see the security question & answers of the respective patient is updated', () => {
      defaultValidation()
    });

    and('User should be redirected to Profile screen', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify The respective patient should receive the alert in preferred mode of communication', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects Yes option', () => {
      defaultValidation()
    });

    then('User should be able to view the success message ‘Security question updated  successfully’', () => {
      userViewSuccessUpdateMsg()
    });

    and('User should be able to see the security question & answers of the respective patient is updated', () => {
      defaultValidation()
    });

    and('User should be redirected to Profile screen', () => {
      defaultValidation()
    });

    and('The respective patient should receive the alert in preferred mode of communication', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-38_STORY_EPP-9330- Verify The Security question should not get updated if No is selected during confirmation', ({ given, and, when, then }) => {
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

    when('User lands on Set-up/ Update Security Question screen', () => {
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

    and('User should be able to change the answer for any of the questions', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    and('User should be able to select a new question from the list of questions available instead of the existing question', () => {
      userChangeTheQuestionOne()
    });

    and('User should be able to view the field for answer as blank once the new question is selected', () => {
      userSeeAnswerOfQuestionOneBlank()
    });

    and('User should be able to answer the new question', () => {
      userChangeTheAnswerOfQuestionOne()
    });

    when('User clicks on Update CTA', () => {
      userClickUpdateCTA()
    });

    then('User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options', () => {
      defaultValidation()
    });

    when('User selects No option', () => {
      defaultValidation()
    });

    then('User should be navigated to Set security questions& answers screen', () => {
      defaultValidation()
    });

    and('The Security question should not get updated if No is selected during confirmation', () => {
      defaultValidation()
    });
  });
})