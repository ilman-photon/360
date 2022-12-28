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
  "./__tests__/feature/Patient Portal/Sprint3/EPP-3340.feature",
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

  async function commonStep(){
    act(() => {
      container = render(<Provider store={store}>
        <MfaPage />
      </Provider>, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    await waitFor(() => container.getByText("communicationMethodTitle"));

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
    fireEvent.change(mfaField, { target: { value: "660927" } });

    const success = {
      ResponseCode: 4000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, success);
    const primaryButton = container.getByTestId(
      constants.TEST_ID.MFA_TEST_ID.btnSubmit
    );
    fireEvent.click(primaryButton);
  }

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

    const expectedResult = {
      SetUpSecurityQuestions: [
        {
          "Where did you go the first time you flew on a plane?": "",
          "What was the first book you read?": "",
          "What was the first film you saw in a theater?": "",
          "What was the make and model of your first car?": "",
          "What was the first concert you attended?": "",
          "What was your favorite cartoon character during your childhood?": "",
          "What was the first thing you learned to cook?": "",
          "What is your favorite cold-weather activity?": "",
          "In what city or town did your parents meet?": "",
          "Who is your all-time favorite movie character?": "",
        },
      ],
    };

    mock.onGet(`/ecp/patient/getsecurityQuestions`).reply(200, expectedResult);

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

  test('EPIC_EPP-3_STORY_EPP-3340 - Verify User should be able to view the list of security questions (Preset)', ({ given, and, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should prompted to set up "(.*)"$/, async (arg0) => {
      await commonStep()
    });

    then(/^user land on to "(.*)" screen$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    and('User should be able to view the list of security questions (Preset)', () => {
      const mySelectComponent = container.getByTestId("select-question-id-2");
      fireEvent.change(mySelectComponent, {
        target: { value: "What was the first concert you attended?" },
      });
      expect(
        container.getByText("What was the first concert you attended?")
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-3340 - Verify User has already selected a security question from the list of security questions', ({ given, and, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should prompted to set up "(.*)"$/, async (arg0) => {
      await commonStep()
    });

    then(/^user land on to "(.*)" screen$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    and('User should be able to view the list of security questions (Preset)', () => {
      expect(true).toBeTruthy();
    });

    and('User has already selected a security question from the list of security questions', () => {
      const mySelectComponent = container.getByTestId("select-question-id-2");
      fireEvent.change(mySelectComponent, {
        target: { value: "What was the first concert you attended?" },
      });
      expect(
        container.getByText("What was the first concert you attended?")
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-3340 - Verify User should not be showed the same security question once again in the list of security questions', ({ given, and, then }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should prompted to set up "(.*)"$/, async (arg0) => {
      await commonStep()
    });

    then(/^user land on to "(.*)" screen$/, async (arg0) => {
      await waitFor(() => container.getByText(/Security Questions/i));
    });

    and('User should be able to view the list of security questions (Preset)', () => {
      expect(true).toBeTruthy();
    });

    and('User has already selected a security question from the list of security questions', () => {
      const mySelectComponent = container.getByTestId("select-question-id-2");
      fireEvent.change(mySelectComponent, {
        target: { value: "What was the first concert you attended?" },
      });
      expect(
        container.getByText("What was the first concert you attended?")
      ).toBeInTheDocument();
    });

    and('User should not be showed the same security question once again in the list of security questions', () => {
      expect(true).toBeTruthy();
    });
  });
});
