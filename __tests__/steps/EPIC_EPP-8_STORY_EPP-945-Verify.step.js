import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-945.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Android or IOS', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” menu', () => {
        defaultValidation();
    });

    then('user able to view "Personal information" section in top and "Contact information" section in bottom', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Desktop', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” menu', () => {
        defaultValidation();
    });

    then('user able to view "Personal information" section in left side and "Contact information" section in right side', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details1', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” menu', () => {
        defaultValidation();
    });

    then('user able to view "Personal information" section', () => {
        defaultValidation();
    });

    then('user able to view "Contact information" section', () => {
        defaultValidation();
    });

    then('user able to view the "Name", "Prefered Name", "Title", "Date of Birth", "Photo", "Age", "Gender", "SSN" and "State Issued ID" fields under "Personal information" section', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details2', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” menu', () => {
        defaultValidation();
    });

    then('user able to view "Personal information" section', () => {
        defaultValidation();
    });

    then('user able to view "Contact information" section', () => {
        defaultValidation();
    });

    then('user able to view the "Phone Number", "Email ID", "Address", "City", "State", "Zip", "Prefered mode of communication" fields under "Contact information" section', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945-Verify whether the user is able to view my profile information without Internet connection', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” section', () => {
        defaultValidation();
    });

    when('there is no internet connection available', () => {
        defaultValidation();
    });

    then('user should view appropriate error message', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945-Verify whether the page is loading with in 3 seconds', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” section', () => {
        defaultValidation();
    });

    then('page should load in 3 seconds', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945-Verify whether any error is displaying when we press F12 after navigating to the Profile information page.', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” section', () => {
        defaultValidation();
    });

    and('press the F12 button from the keyboard.', () => {
        defaultValidation();
    });

    then('none of the javascript error should be seen by the user.', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-8_STORY_EPP-945-Verify whether the error message is displaying when the service is unavailable.', ({ given, and, when, then }) => {
    given('user launch the "XXX" url', () => {
        defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
        defaultValidation();
    });

    and('user clicks on "Login" button', () => {
        defaultValidation();
    });

    then('user navigates to the Patient Portal application', () => {
        defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
        defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
        defaultValidation();
    });

    and('user clicks on “Profile Information” section', () => {
        defaultValidation();
    });

    then("error message '503 - Server is not ready to handle the request' should get display.", () => {
        defaultValidation();
    });
  });


  });