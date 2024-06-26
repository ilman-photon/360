import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import { renderWithProviders } from "../src/utils/test-util";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-273.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      else if (param === "securityQuestions") return [];
      if (param === "ip") return "10.10.10.10";

      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  beforeEach(async () => {
    Cookies.result = { mfa: true };

    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };

    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);

    container = render(
      <Provider store={store}>
        <MfaPage />
      </Provider>
    );
    await waitFor(() => container.getByText("setMFATitle"));
  });

  afterEach(() => {
    mock.reset();
  });
  test("EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave all the Answer field blank", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
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
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();

        // const createAccount = container.getByRole("button", {
        //   name: /createAccountButtonLabel/i,
        // });
        // fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and("user setup MFA successfully", async () => {
      const expectedResult = {
        SetUpSecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "",
            "What was the first book you read?": "",
            "What was the first film you saw in a theater?": "",
            "What was the make and model of your first car?": "",
            "What was the first concert you attended?": "",
            "What was your favorite cartoon character during your childhood?":
              "",
            "What was the first thing you learned to cook?": "",
            "What is your favorite cold-weather activity?": "",
            "In what city or town did your parents meet?": "",
            "Who is your all-time favorite movie character?": "",
          },
        ],
      };
      const data = {
        mfaCode: 660927,
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
      await waitFor(() => container.getByText("mfaTitle"));

      const mfaField = container.getByLabelText(/mfaLabel/i);
      fireEvent.change(mfaField, { target: { value: "123456" } });

      const success = {
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmit
      );
      fireEvent.click(primaryButton);
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should prompted to set up Security questions after setup MFA",
      async () => {
        await waitFor(() => container.getByText(/Security Questions/i));
      }
    );

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    then(/^user see the  security Question "(.*)"$/, (arg0) => {
      const mySelectComponent1 = container.getByTestId("select-question-id-1");
      fireEvent.change(mySelectComponent1, {
        target: { value: "What was the first concert you attended?" },
      });

      const mySelectComponent2 = container.getByTestId("select-question-id-2");
      fireEvent.change(mySelectComponent2, {
        target: { value: "What was the first film you saw in a theater?" },
      });

      const mySelectComponent3 = container.getByTestId("select-question-id-3");
      fireEvent.change(mySelectComponent3, {
        target: { value: "What was the make and model of your first car?" },
      });

      const mySelectComponent4 = container.getByTestId("select-question-id-4");
      fireEvent.change(mySelectComponent4, {
        target: {
          value:
            "What was your favorite cartoon character during your childhood?",
        },
      });

      const mySelectComponent5 = container.getByTestId("select-question-id-5");
      fireEvent.change(mySelectComponent5, {
        target: { value: "What was the first thing you learned to cook?" },
      });
    });

    when(/^user leave the field blank "(.*)"$/, (arg0) => {
      const answer1 = container.getByLabelText(/Answer 1/i);
      fireEvent.change(answer1, { target: { value: "" } });
      expect(answer1.value).toEqual("");

      const answer2 = container.getByLabelText(/Answer 2/i);
      fireEvent.change(answer2, { target: { value: "" } });
      expect(answer2.value).toEqual("");

      const answer3 = container.getByLabelText(/Answer 3/i);
      fireEvent.change(answer3, { target: { value: "" } });
      expect(answer3.value).toEqual("");

      const answer4 = container.getByLabelText(/Answer 4/i);
      fireEvent.change(answer4, { target: { value: "" } });
      expect(answer4.value).toEqual("");

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "" } });
      expect(answer5.value).toEqual("");
    });

    then(/^user click on "(.*)" button$/, (arg0) => {
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmitSecurity
      );
      fireEvent.click(primaryButton);
    });

    and(/^user should see the error msg "(.*)"$/, async (arg0) => {
      await waitFor(() =>
        container.getByText(/You must answer all security questions/i)
      );
    });
  });

  test("EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 1", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
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
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();

        // const createAccount = container.getByRole("button", {
        //   name: /createAccountButtonLabel/i,
        // });
        // fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and("user setup MFA successfully", async () => {
      const expectedResult = {
        SetUpSecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "",
            "What was the first book you read?": "",
            "What was the first film you saw in a theater?": "",
            "What was the make and model of your first car?": "",
            "What was the first concert you attended?": "",
            "What was your favorite cartoon character during your childhood?":
              "",
            "What was the first thing you learned to cook?": "",
            "What is your favorite cold-weather activity?": "",
            "In what city or town did your parents meet?": "",
            "Who is your all-time favorite movie character?": "",
          },
        ],
      };
      const data = {
        mfaCode: 660927,
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
      await waitFor(() => container.getByText("mfaTitle"));

      const mfaField = container.getByLabelText(/mfaLabel/i);
      fireEvent.change(mfaField, { target: { value: "123456" } });

      const success = {
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmit
      );
      fireEvent.click(primaryButton);
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should prompted to set up Security questions after setup MFA",
      async () => {
        await waitFor(() => container.getByText(/Security Questions/i));
      }
    );

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    when(/^user see the  security Question "(.*)"$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      const answer1 = container.getByLabelText(/Answer 1/i);
      fireEvent.change(answer1, { target: { value: "" } });
      expect(answer1.value).toEqual("");
    });

    and(/^user enter the "(.*)"$/, (arg0) => {
      const answer2 = container.getByLabelText(/Answer 2/i);
      fireEvent.change(answer2, { target: { value: "test answer 2" } });
      expect(answer2.value).toEqual("test answer 2");

      const answer3 = container.getByLabelText(/Answer 3/i);
      fireEvent.change(answer3, { target: { value: "test answer 3" } });
      expect(answer3.value).toEqual("test answer 3");

      const answer4 = container.getByLabelText(/Answer 4/i);
      fireEvent.change(answer4, { target: { value: "test answer 4" } });
      expect(answer4.value).toEqual("test answer 4");

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "test answer 5" } });
      expect(answer5.value).toEqual("test answer 5");
    });

    then(/^user click on "(.*)" button$/, (arg0) => {
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmitSecurity
      );
      fireEvent.click(primaryButton);
    });

    and(/^user should see the error msg "(.*)"$/, async (arg0) => {
      await waitFor(() =>
        container.getByText(/You must answer all security questions/i)
      );
    });
  });

  test("EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 2", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
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
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();

        // const createAccount = container.getByRole("button", {
        //   name: /createAccountButtonLabel/i,
        // });
        // fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and("user setup MFA successfully", async () => {
      const expectedResult = {
        SetUpSecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "",
            "What was the first book you read?": "",
            "What was the first film you saw in a theater?": "",
            "What was the make and model of your first car?": "",
            "What was the first concert you attended?": "",
            "What was your favorite cartoon character during your childhood?":
              "",
            "What was the first thing you learned to cook?": "",
            "What is your favorite cold-weather activity?": "",
            "In what city or town did your parents meet?": "",
            "Who is your all-time favorite movie character?": "",
          },
        ],
      };
      const data = {
        mfaCode: 660927,
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
      await waitFor(() => container.getByText("mfaTitle"));

      const mfaField = container.getByLabelText(/mfaLabel/i);
      fireEvent.change(mfaField, { target: { value: "123456" } });

      const success = {
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmit
      );
      fireEvent.click(primaryButton);
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should prompted to set up Security questions after setup MFA",
      async () => {
        await waitFor(() => container.getByText(/Security Questions/i));
      }
    );

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    when(/^user see the  security Question "(.*)"$/, (arg0) => {
      expect(container.getByText("Question 2")).toBeInTheDocument();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      const answer2 = container.getByLabelText(/Answer 2/i);
      fireEvent.change(answer2, { target: { value: "" } });
      expect(answer2.value).toEqual("");
    });

    and(/^user enter the "(.*)"$/, (arg0) => {
      const answer1 = container.getByLabelText(/Answer 1/i);
      fireEvent.change(answer1, { target: { value: "test answer 1" } });
      expect(answer1.value).toEqual("test answer 1");

      const answer3 = container.getByLabelText(/Answer 3/i);
      fireEvent.change(answer3, { target: { value: "test answer 3" } });
      expect(answer3.value).toEqual("test answer 3");

      const answer4 = container.getByLabelText(/Answer 4/i);
      fireEvent.change(answer4, { target: { value: "test answer 4" } });
      expect(answer4.value).toEqual("test answer 4");

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "test answer 5" } });
      expect(answer5.value).toEqual("test answer 5");
    });

    then(/^user click on "(.*)" button$/, (arg0) => {
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmitSecurity
      );
      fireEvent.click(primaryButton);
    });

    and(
      'user should see the error msg "You must answer all security questions”',
      async (arg0) => {
        await waitFor(() =>
          container.getByText(/You must answer all security questions/i)
        );
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 3", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
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
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();

        // const createAccount = container.getByRole("button", {
        //   name: /createAccountButtonLabel/i,
        // });
        // fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and("user setup MFA successfully", async () => {
      const expectedResult = {
        SetUpSecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "",
            "What was the first book you read?": "",
            "What was the first film you saw in a theater?": "",
            "What was the make and model of your first car?": "",
            "What was the first concert you attended?": "",
            "What was your favorite cartoon character during your childhood?":
              "",
            "What was the first thing you learned to cook?": "",
            "What is your favorite cold-weather activity?": "",
            "In what city or town did your parents meet?": "",
            "Who is your all-time favorite movie character?": "",
          },
        ],
      };
      const data = {
        mfaCode: 660927,
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
      await waitFor(() => container.getByText("mfaTitle"));

      const mfaField = container.getByLabelText(/mfaLabel/i);
      fireEvent.change(mfaField, { target: { value: "123456" } });

      const success = {
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmit
      );
      fireEvent.click(primaryButton);
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should prompted to set up Security questions after setup MFA",
      async () => {
        await waitFor(() => container.getByText(/Security Questions/i));
      }
    );

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    when(/^user see the  security Question "(.*)"$/, (arg0) => {
      expect(container.getByText("Question 3")).toBeInTheDocument();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      const answer3 = container.getByLabelText(/Answer 3/i);
      fireEvent.change(answer3, { target: { value: "" } });
      expect(answer3.value).toEqual("");
    });

    and(/^user enter the "(.*)"$/, (arg0) => {
      const answer1 = container.getByLabelText(/Answer 1/i);
      fireEvent.change(answer1, { target: { value: "test answer 1" } });
      expect(answer1.value).toEqual("test answer 1");

      const answer2 = container.getByLabelText(/Answer 2/i);
      fireEvent.change(answer2, { target: { value: "test answer 2" } });
      expect(answer2.value).toEqual("test answer 2");

      const answer4 = container.getByLabelText(/Answer 4/i);
      fireEvent.change(answer4, { target: { value: "test answer 4" } });
      expect(answer4.value).toEqual("test answer 4");

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "test answer 5" } });
      expect(answer5.value).toEqual("test answer 5");
    });

    then(/^user click on "(.*)" button$/, (arg0) => {
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmitSecurity
      );
      fireEvent.click(primaryButton);
    });

    and(/^user should see the error msg "(.*)"$/, async (arg0) => {
      await waitFor(() =>
        container.getByText(/You must answer all security questions/i)
      );
    });
  });

  test("EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 1 and Question 3 and Answer for Question 2, Question4, Question5", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
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
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        // const createAccount = container.getByRole("button", {
        //   name: /createAccountButtonLabel/i,
        // });
        // fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and("user setup MFA successfully", async () => {
      const expectedResult = {
        SetUpSecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "",
            "What was the first book you read?": "",
            "What was the first film you saw in a theater?": "",
            "What was the make and model of your first car?": "",
            "What was the first concert you attended?": "",
            "What was your favorite cartoon character during your childhood?":
              "",
            "What was the first thing you learned to cook?": "",
            "What is your favorite cold-weather activity?": "",
            "In what city or town did your parents meet?": "",
            "Who is your all-time favorite movie character?": "",
          },
        ],
      };
      const data = {
        mfaCode: 660927,
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
      await waitFor(() => container.getByText("mfaTitle"));

      const mfaField = container.getByLabelText(/mfaLabel/i);
      fireEvent.change(mfaField, { target: { value: "123456" } });

      const success = {
        ResponseCode: 4000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmit
      );
      fireEvent.click(primaryButton);
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should prompted to set up Security questions after setup MFA",
      async () => {
        await waitFor(() => container.getByText(/Security Questions/i));
      }
    );

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    when(/^user mouse over to "(.*)"$/, (arg0) => {
      expect(container.getByText("Question 1")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    when("user see the  security Question", (arg0) => {
      expect(container.getByText("Question 3")).toBeInTheDocument();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      const answer1 = container.getByLabelText(/Answer 1/i);
      fireEvent.change(answer1, { target: { value: "" } });
      expect(answer1.value).toEqual("");

      const answer3 = container.getByLabelText(/Answer 3/i);
      fireEvent.change(answer3, { target: { value: "" } });
      expect(answer3.value).toEqual("");
    });

    and(/^user enter the "(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2) => {
      const answer2 = container.getByLabelText(/Answer 2/i);
      fireEvent.change(answer2, { target: { value: "test answer 2" } });
      expect(answer2.value).toEqual("test answer 2");

      const answer4 = container.getByLabelText(/Answer 4/i);
      fireEvent.change(answer4, { target: { value: "test answer 4" } });
      expect(answer4.value).toEqual("test answer 4");

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "test answer 5" } });
      expect(answer5.value).toEqual("test answer 5");
    });

    then(/^user click on "(.*)" button$/, (arg0) => {
      const primaryButton = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnSubmitSecurity
      );
      fireEvent.click(primaryButton);
    });

    and(/^user should see the error msg "(.*)"$/, async (arg0) => {
      await waitFor(() =>
        container.getByText(/You must answer all security questions/i)
      );
    });
  });
});
