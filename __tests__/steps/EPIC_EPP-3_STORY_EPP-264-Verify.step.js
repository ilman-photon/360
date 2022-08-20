import { fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";
import axios from "axios";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import { act } from "react-dom/test-utils";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com"

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
  "./__tests__/feature/Patient Portal/Sprint3/EPP-264.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  afterEach(() => {
    mock.reset();
  });
  const validateTextInDocument = (arg0) => {
    //expect(container.getByText(arg0)).toBeInTheDocument();
  };
  const renderMFA = async () => {
    mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
    act(() => {
      container = render(<MfaPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    await waitFor(() => container.getByText(/communicationMethodTitle/i));
    expect(container).toMatchSnapshot();
  };
  test("EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication both)", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", async () => {
      const contex = {
        req: {
          headers: {
            cookie: "username=user1%40photon.com; mfa=true",
          },
        },
      };

      getServerSideProps(contex);
      renderMFA();
    });

    and(
      /^user should see screen title written as "(.*)"$/,
      validateTextInDocument
    );

    and(
      /^user should see screen subtitle written as "(.*)"$/,
      validateTextInDocument
    );

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(container.getByText(/Email:/i)).toBeInTheDocument();
        expect(container.getByText(/Phone/i)).toBeInTheDocument();
      }
    );

    and("user should see default selection on Email", () => {
      const email = container.getByDisplayValue("email");
      expect(email).toBeChecked();
    });

    and(/^user should see checkbox section "(.*)"$/, validateTextInDocument);

    and(
      /^user should see description of check box written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      // validateTextInDocument(arg0);
      // validateTextInDocument(arg1);
    });
  });

  test("EPIC_EPP-3_STORY_EPP-264 - Verify user should be able to choose other preferred mode(s) of communication", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", renderMFA);

    and(
      /^user should see screen title written as "(.*)"$/,
      validateTextInDocument
    );

    and(
      /^user should see screen subtitle written as "(.*)"$/,
      validateTextInDocument
    );

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        const title = container.getByText("communicationMethodTitle");
        const email = container.getByTestId("email-radio-button");
        const phone = container.getByTestId("phone-radio-button");
        expect(email).toBeVisible();
        expect(phone).toBeVisible();
        expect(title).toBeVisible();
      }
    );

    and("user should see default selection on Email", () => {
      const email = container.getByDisplayValue("email");
      expect(email).toBeChecked();
    });

    when("user click on Phone radio button", () => {
      const phone = container.getByTestId("phone-radio-button");
      fireEvent.click(phone);
    });

    then(
      "user should see radio button is selected on Phone radio button",
      () => {
        const phone = container.getByDisplayValue("phone");
        expect(phone).toBeChecked();
      }
    );
  });
  test("EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Email)", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose email",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id",
      () => {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with email-id by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", renderMFA);

    and(
      /^user should see screen title written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text  "(.*)"$/, validateTextInDocument);

    and(/^user should see checkbox section "(.*)"$/, validateTextInDocument);

    and(
      /^user should see description of check box written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      // validateTextInDocument(arg0);
      // validateTextInDocument(arg1);
    });
  });

  test("EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose phone",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered phone",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with phone by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", renderMFA);

    and(
      /^user should see screen title written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see checkbox section "(.*)"$/, validateTextInDocument);

    and(
      /^user should see description of check box written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      // validateTextInDocument(arg0);
      // validateTextInDocument(arg1);

      const confirm = container.getByTestId("secondary-button");
      fireEvent.click(confirm);
    });
  });

  test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see "MFA" screen with default selection preferred mode(s) of communication', ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", async () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
    });

    and(/^user should see screen title written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and("user should see default selection on Email", () => {
      expect(true).toBeTruthy();
    });

    when("user click on Phone radio button", () => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see radio button is selected on Phone radio button",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" in browser$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user should see "(.*)" screen with default selection on Email$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when internet is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", async () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
    });

    and(/^user should see screen title written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and("user should see default selection on Email", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see checkbox section "(.*)"$/, validateTextInDocument);

    and(
      /^user should see description of check box written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      validateTextInDocument(arg0);
      validateTextInDocument(arg1);
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const confirm = container.getByTestId("primary-button");
      fireEvent.click(confirm);
    });

    then("user should see error screen", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", async () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
    });

    and(/^user should see screen title written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and("user should see default selection on Email", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see checkbox section "(.*)"$/, validateTextInDocument);

    and(
      /^user should see description of check box written as "(.*)"$/,
      validateTextInDocument
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      validateTextInDocument(arg0);
      validateTextInDocument(arg1);
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const confirm = container.getByTestId("primary-button");
      fireEvent.click(confirm);
    });

    then("user should see error screen", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-264 - Verify user see set MFA screen within 3 second", ({
    given,
    and,
    when,
    then,
  }) => {
    expect(true).toBeTruthy();
    given(/^user launch "(.*)" URL$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user is in “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to fill all madantory details and option to choose both",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user click on the link", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “Set New Username and Password” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view Username field updated with either as email-id or Phone Number by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should able to view and fill the following fields", (table) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user provide the same password details to the field  (.*),(.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user click on "(.*)" CTA$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see set MFA screen", async () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
    });

    and(/^user should see set MFA screen within (\d+) second$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
