
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-950.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their primary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and(/^user navigates to the "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks primary', () => {
            defaultValidation();
        });
    
        then('user can view the primary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their secondary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks secondary', () => {
            defaultValidation();
        });
    
        then('user can view the secondary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their tertiary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks tertiary', () => {
            defaultValidation();
        });
    
        then('user can view the tertiary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files', () => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their primary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks primary', () => {
            defaultValidation();
        });
    
        then('user can edit the primary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "Yes, Remove insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info is removed from Patient Portal, with message “Insurance successfully removed”', () => {
            defaultValidation();
        });
    
        then('user should not see that insurance under "insurance documents"', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their secondary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks secondary', () => {
            defaultValidation();
        });
    
        then('user can edit the secondary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "Yes, Remove insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info is removed from Patient Portal, with message “Insurance successfully removed”', () => {
            defaultValidation();
        });
    
        then('user should not see that insurance under "insurance documents"', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their tertiary insurance details in the patient portal', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks tertiary', () => {
            defaultValidation();
        });
    
        then('user can edit the tertiary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "Yes, Remove insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info is removed from Patient Portal, with message “Insurance successfully removed”', () => {
            defaultValidation();
        });
    
        then('user should not see that insurance under "insurance documents"', () => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their primary insurance details in the patient portal but selects "No, keep insurance" option', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks primary', () => {
            defaultValidation();
        });
    
        then('user can edit the primary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "No, Keep insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info remains in Patient Portal', () => {
            defaultValidation();
        });
    
        then(/^user should see that insurance under"(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their secondary insurance details in the patient portal but selects "No, keep insurance" option.', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks secondary', () => {
            defaultValidation();
        });
    
        then('user can edit the secondary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "No, Keep insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info remains in Patient Portal', () => {
            defaultValidation();
        });
    
        then(/^user should see that insurance under"(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their tertiary insurance details in the patient portal but selects "No, keep insurance" option.', ({ given, and, when, then }) => {
        given("user launch the 'XXX' URL", () => {
            defaultValidation();
        });

        when('user provides "<email/phone number>" and "<password>"', () => {
            defaultValidation();
        });
    
        and('user clicks on the Login button', () => {
            defaultValidation();
        });
    
        then('user logged into the patient portal', () => {
            defaultValidation();
        });
    
        and('user verifies the Dashboard', () => {
            defaultValidation();
        });
    
        and('user clicks on "My profile"', () => {
            defaultValidation();
        });
    
        and('user navigates to the "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user clicks on "insurance documents"', () => {
            defaultValidation();
        });
    
        and('user can view Primary, Secondary, and Tertiary insurance details', () => {
            defaultValidation();
        });
    
        and('user clicks tertiary', () => {
            defaultValidation();
        });
    
        then('user can edit the tertiary insurance details by clicking the "Remove Insurance" CTA', () => {
            defaultValidation();
        });
    
        and('user can see the overlay with two options', () => {
            defaultValidation();
        });
    
        and('user selects the "No, Keep insurance" option', () => {
            defaultValidation();
        });
    
        then('insurance info remains in Patient Portal', () => {
            defaultValidation();
        });
    
        then(/^user should see that insurance under"(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });
});