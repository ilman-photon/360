import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-209.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Email and Valid Password using E360+ SSO", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("Admin launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("Admin navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when('Admin lands onto E360+ \“Patient Login\” screen', () => {
        expect(true).toBeTruthy()
    });
    and('Admin provides valid \"<Email>\" and valid \"<password>\"', () => {
          expect(true).toBeTruthy()
    });
    and("Admin click \'Login\' button.", () => {
        expect(true).toBeTruthy()
    });

    then(
      "Admin should view Home/Dashboard page",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Phone Number and Valid Password using E360+ SSO", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("Admin launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("Admin navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when('Admin lands onto E360+ \“Patient Login\” screen', () => {
        expect(true).toBeTruthy()
    });
    and('Admin provides valid "<Phone number>" and valid "<password>"', () => {
          expect(true).toBeTruthy()
    });
    and("Admin click \'Login\' button.", () => {
        expect(true).toBeTruthy()
    });

    then(
      "Admin should view Home/Dashboard page",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });
    when('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
  });
    and("turn off the Data", () => {
        expect(true).toBeTruthy()
    });
    then(
      "user should view appropriate error message",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the page is loading with in 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy()
  });
    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
  });
    then(
      "page should load in 3 seconds",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy()
  });
    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
  });
  and("press the F12 button from the keyboard.", () => {
    expect(true).toBeTruthy()
});
    then(
      "none of the javascript error should be seen by the user.",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });

    
    when('the service is unavailable', () => {
      expect(true).toBeTruthy()
  });
      and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });
    and("user lands on “Patient Login” screen", () => {
      expect(true).toBeTruthy()
    });
    then(
      "error message '503 - Server is not ready to handle the request' should get display.",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
});
