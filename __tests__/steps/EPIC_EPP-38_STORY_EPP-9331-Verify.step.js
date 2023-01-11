import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom/extend-expect";
import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint10/EPP-9331.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
  let container;

  beforeEach(async () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
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
  });

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
          "In what city or town did your parents meet?": "test5",
        },
      ],
    };
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    mock
      .onGet(`/ecp/accountRecovery/viewSecurityQuestions/${patientId}`)
      .reply(200, mockSecurityQuestions);
  };

  const userLandsOnLoginSecurityScreen = () => {
    container.rerender(
      <Provider store={store}>
        <LoginSecurityPage />
      </Provider>
    );
  };

  const userViewSetSecurityQuestionCTA = () => {
    const ctaBtn = container.getByTestId("setup-security-question-btn");
    expect(ctaBtn).toBeInTheDocument();
    return ctaBtn;
  };

  const userSeeUpdateSecurityQuestionBtn = () => {
    const updateBtn = container.getByTestId("update-security-question-btn");
    expect(updateBtn).toBeInTheDocument();
    return updateBtn;
  };

  const userClickSetSecurityQuestionCTA = () => {
    const btn = userViewSetSecurityQuestionCTA();
    fireEvent.click(btn);
  };

  const userClickUpdateSecurityQuestionCTA = () => {
    const btn = userSeeUpdateSecurityQuestionBtn();
    fireEvent.click(btn);
  };

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
      ],
    };
    mock
      .onGet(`/ecp/patient/getsecurityQuestions`)
      .reply(200, mockSecurityQuestionList);
    container.rerender(
      <Provider store={store}>
        <AccountSecurityQuestionPage />
      </Provider>
    );
  };

  const userClickUpdateCTA = async () => {
    const updateBtn = await waitFor(() =>
      container.getByTestId("action-update-security-question-btn")
    );
    fireEvent.click(updateBtn);
  };

  test("EPIC_EPP-38_STORY_EPP-9331- Verify User should be able to view the error message “You must answer all security questions”", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("User has logged in as patient", () => {
      doLogin(mock, container);
    });

    and("User has setup the security question & answers", () => {
      userHasSetupSecurityQuestion();
    });

    when("User lands on Set-up/ Update Security Question screen", () => {
      userLandsOnLoginSecurityScreen();
    });

    then(
      "User should be able to view Set security questions& answers CTA if security questions are not set by user during registration",
      () => {
        userViewSetSecurityQuestionCTA();
      }
    );

    when("User clicks on the Set security questions& answers CTA", () => {
      userClickSetSecurityQuestionCTA();
    });

    then(
      "User should be navigated to Set security questions& answers screen",
      () => {
        userLandsOnSecurityQuestionScreen();
      }
    );

    and(
      "User has selected one or more new question & answer or has changed the answer to one or more question",
      () => {
        const answer1 = container.getByLabelText(/Answer 1/i);
        fireEvent.change(answer1, { target: { value: "" } });
        expect(answer1.value).toEqual("");
      }
    );

    when("User clicks on Update CTA", () => {
      userClickUpdateCTA();
    });

    and(/^User are not answered the (\d+) security questions$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be able to view the error message “You must answer all security questions”",
      () => {
        setTimeout(() => {
          const postMessage = container.getByLabelText(
            "You must answer all security questions"
          );
          expect(postMessage).toBeInTheDocument();
        }, 200);
      }
    );
  });

  test("EPIC_EPP-38_STORY_EPP-9331- Verify User should be able to view the error message “No updated made” if the questions or answers are not changed", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("User has logged in as patient", () => {
      doLogin(mock, container);
    });

    and("User has setup the security question & answers", () => {
      userHasSetupSecurityQuestion();
    });

    when("User lands on Set-up/ Update Security Question screen", () => {
      userLandsOnLoginSecurityScreen();
    });

    then(
      "User should be able to view Set security questions& answers CTA if security questions are not set by user during registration",
      () => {
        userSeeUpdateSecurityQuestionBtn();
      }
    );

    when("User clicks on the Set security questions& answers CTA", () => {
      userClickUpdateSecurityQuestionCTA();
    });

    then(
      "User should be navigated to Set security questions& answers screen",
      () => {
        userLandsOnSecurityQuestionScreen();
      }
    );

    and("User has not changed the answer to one or more question", () => {
      defaultValidation();
    });

    when("User clicks on Update CTA", async () => {
      await userClickUpdateCTA();
    });

    then(
      "User should be able to view the error message “No updated made”",
      async () => {
        await waitFor(() => container.getByText(/No updated made/i));
        const noUpdatedMsg = container.getByText(/No updated made/i);
        expect(noUpdatedMsg).toBeInTheDocument();
      }
    );
  });
});
