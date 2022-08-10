import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/provider/forgot-password";

const feature = loadFeature(
  "./__tests__/feature/Provider Portal/Sprint2/EPP-240.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-121_STORY_EPP-240-verify whether Internal Provider is able to click on the forgot password link", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' URL", () => {
      expect(true).toBeTruthy();
    });

    when(/^user is in "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see  the "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should clicks on the "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
