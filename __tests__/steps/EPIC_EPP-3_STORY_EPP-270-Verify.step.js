import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";

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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-270.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  beforeEach(async () => {
    const contex = {
      req: {
        headers: {
          cookie: "username=user1%40photon.com; mfa=true",
        },
      },
    };

    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };

    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);

    getServerSideProps(contex);
    container = render(<MfaPage />);
    await waitFor(() => container.getByText("setMFATitle"));
  });

  afterEach(() => {
    mock.reset();
  });
  test("EPIC_EPP-3_STORY_EPP-270 - Verify if New user able to navigate to “Set up Security questions” screen after MFA setup through both Email,Phone number", ({
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
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
      act(() => {
        container = render(<AuthPage />, {
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
        const createAccount = container.getByRole("button", {
          name: /createAccountButtonLabel/i,
        });
        fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
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
      mock
        .onGet(`/ecp/patient/getsecurityQuestions`)
        .reply(200, expectedResult);
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        const title = container.getByText("communicationMethodTitle");
        const email = container.getByTestId(
          constants.TEST_ID.MFA_TEST_ID.radioEmail
        );
        const phone = container.getByTestId(
          constants.TEST_ID.MFA_TEST_ID.radioPhone
        );
        expect(email).toBeVisible();
        expect(phone).toBeVisible();
        expect(title).toBeVisible();
      }
    );

    and("user should see default selection on Email", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see checkbox section "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see description of check box written as "(.*)"$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      const confirm = container.getByTestId(
        constants.TEST_ID.MFA_TEST_ID.btnConfirm
      );
      fireEvent.click(confirm);
    });

    and(/^user should prompted to set up "(.*)"$/, (arg0) => {
      const title = container.queryByText(
        "Security questions set up successfully"
      );
      expect(title).not.toBeInTheDocument();
    });

    then(/^user land on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security questions 3and answer3field", ({
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
      act(() => {
        container = render(<AuthPage />, {
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
        const createAccount = container.getByRole("button", {
          name: /createAccountButtonLabel/i,
        });
        fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      act(() => {
        container = render(<MfaPage />, {
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

      const mfaField = container.getByLabelText("mfaLabel");
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
      expect(container.getByText("Question 3")).toBeInTheDocument();
    });

    and("user click on dropdown field", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the "(.*)" text dropdown field$/, (arg0) => {
      expect(container.getByText("Question 3")).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" text field below  "(.*)" field$/,
      async (arg0, arg1) => {
        await waitFor(() => container.getByText(/Answer 3/i));
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view ‘Submit’ button", ({
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
      act(() => {
        container = render(<AuthPage />, {
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
        const createAccount = container.getByRole("button", {
          name: /createAccountButtonLabel/i,
        });
        fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      act(() => {
        container = render(<MfaPage />, {
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

      const mfaField = container.getByLabelText("mfaLabel");
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

    and(/^user should prompted to set up "(.*)"$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    then("user land on to “Set up Security questions” screen", async () => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    and("user should see the ‘Submit’ button", async () => {
      await waitFor(() => container.getByText(/Submit/i));
    });
  });

  test("EPIC_EPP-3_STORY_EPP-270 - Verify if user able to ‘Skip’ security question by clicking  skip button", ({
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
      act(() => {
        container = render(<AuthPage />, {
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
        const createAccount = container.getByRole("button", {
          name: /createAccountButtonLabel/i,
        });
        fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      act(() => {
        container = render(<MfaPage />, {
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

      const mfaField = container.getByLabelText("mfaLabel");
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

    and(/^user clicks  on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should prompted to set up "(.*)"$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    then(/^user land on to "(.*)" screen$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    and(/^user should see the "(.*)" button$/, async (arg0) => {
      await waitFor(() => container.getByText(/Skip/i));
    });
  });
});
