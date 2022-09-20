import { cleanup, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import { TEST_ID } from "../../src/utils/constants";
import {
  clickContinueForgot,
  createMatchMedia,
  renderForgotPassword,
  renderLogin,
} from "../../__mocks__/commonSteps";
import { act } from "react-dom/test-utils";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-215.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    mock
      .onPost(`https://api.ipify.org?format=json`)
      .reply(200, { data: { ip: "123456" } });
  });
  afterEach(cleanup);
  test("EPIC_EPP-7_STORY_EPP-215 - Verify user able to navigate to the Select option screen from the Forgot Password Screen on entering valid Email or Phone Number", ({
    given,
    when,
    then,
    and,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when(`user clicks on 'Forgot Password' link`, () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then(`user should see Forgot Password screen`, async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and('user clicks on "Continue" button', async () => {
      container = await clickContinueForgot(container, mock);
    });

    then(`user should see "Select an option" screen`, () => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      `user should see "Answer security questions" button(if security questions is set)`,
      () => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

    and(`user should see "Login with magic link" button`, () => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(`user should see "Back to Log in" button`, () => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-7_STORY_EPP-215 - Verify user able to view “Login with Magic link” button and on clicking should send a magic link to the his email or phone number", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" button\(if security questions is set\)$/,
      (arg0) => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    when(/^user click on  "(.*)" button$/, async (arg0) => {
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/onetimelink`).reply(200, expectedResult);
      act(() => {
        fireEvent.click(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
        );
      });
      await waitFor(() => container.getByText(/subtitleOneTime/i));
    });

    then(
      "user should receive magic link to his registered Email or Phone Number",
      () => {
        expect(container.getByText(/subtitleOneTime/i)).toBeInTheDocument();
      }
    );
  });
  test('EPIC_EPP-7_STORY_EPP-215 - Verify user able to view “Answer security questions” button and clicking should navigate to "Password Recovery Security Questions" page', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", () => {});

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" button\(if security questions is set\)$/,
      (arg0) => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        fireEvent.click(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        );
      });
      await waitFor(() =>
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn)
      );
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(
        container.getByText(
          /Where did you go the first time you flew on a plane?/i
        )
      ).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-7_STORY_EPP-215- Verify user able to view  login screen on clicking the “Back to Log in” button from Forgot Password - Select an option page", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", () => {});

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see "(.*)" field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid "(.*)"$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on ""(.*)"" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see ""(.*)"" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      /^user should see ""(.*)"" button\(if security questions is set\)$/,
      (arg0) => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

    and(/^user should see ""(.*)"" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see ""(.*)"" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      act(() => {
        fireEvent.click(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        );
      });
    });

    then("user should see Login screen", async () => {
      container = await renderLogin();
    });
  });
  test("EPIC_EPP-7_STORY_EPP-215 - Verify user is not able to view the Select Option page when Internet is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(
      /^user clicks on "(.*)" button when the Internet is unavailable$/,
      async (arg0) => {
        mock.reset();
        const expectedResult = {
          ResponseCode: 1000,
          ResponseType: "failure",
        };
        mock.onPost(`/ecp/patient/validate`).reply(400, expectedResult);
        act(() => {
          const button = container.getByTestId(
            TEST_ID.FORGOT_TEST_ID.continueBtn
          );
          fireEvent.click(button);
        });
        await waitFor(() => container.getByText("errorUsernameNotFound"));
      }
    );

    then("user should see appropriate error message", () => {
      expect(container.getByText("errorUsernameNotFound")).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-7_STORY_EPP-215 - Verify user is not able to view the Select Option page when service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(
      /^user clicks on "(.*)" button when the Service is unavailable$/,
      (arg0) => {}
    );

    then("user should see appropriate error message", () => {});
  });
  test('EPIC_EPP-7 _STORY_EPP-25 - Verify user should see "<Email or Phone Number>" field is blank after user refresh the page', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" button\(if security questions is set\)$/,
      (arg0) => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      act(() => {
        fireEvent.click(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        );
      });
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(
        container.getByText(
          /Where did you go the first time you flew on a plane?/i
        )
      ).toBeInTheDocument();
    });

    and("user click on reload browser", async () => {
      container = await renderForgotPassword();
    });

    and(/^user should see "(.*)" page$/, (arg0) => {});
  });

  test('EPIC_EPP-7 _STORY_EPP-215 - Verify user should see "Select an option" screen loaded within 3 seconds', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and("user should enter valid Email or Phone Number", () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" screen loaded within (\d+) seconds$/,
      (arg0, arg1) => {}
    );
  });

  test("EPIC_EPP-7 _STORY_EPP-215  - Verify user should not see any error after click on F12", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      createMatchMedia("1020px");
    });

    when("user lands onto “Patient Login” screen", async () => {
      container = await renderLogin();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Forgot Password' link", () => {
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
    });

    then("user should see Forgot Password screen", async () => {
      cleanup();
      container = await renderForgotPassword();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and("user should enter valid Email or Phone Number", () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user click F(\d+) on keyboard$/, (arg0) => {});

    and(/^user should not see any error after click on F(\d+)$/, (arg0) => {});
  });
});
