
Feature: Patient Portal : Insurance Information - View/Delete filled insurance information - (P1)
  User Story: As a user, I should be able to view already filled insurance information.

  
  @BDDTEST-EPP-1895
  @Manage_account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their primary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks primary
    Then user can view the primary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1896
  @Manage_account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their secondary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks secondary
    Then user can view the secondary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1897
  @Manage_account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can view their tertiary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks tertiary
    Then user can view the tertiary insurance details "Plan name", "Subscriber ID/ Member ID", "Group number" and Insurance files
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1898
  @Manage_account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their primary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on "insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks primary
    Then user can edit the primary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "Yes, Remove insurance" option
    Then insurance info is removed from Patient Portal, with message “Insurance successfully removed”
    Then user should not see that insurance under"insurance documents"
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1899
  @Manage_account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their secondary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks secondary
    Then user can edit the primary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "Yes, Remove insurance" option
    Then insurance info is removed from Patient Portal, with message “Insurance successfully removed”
    Then user should not see that insurance under"insurance documents"
    
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1900
  @Manage_account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user can delete their tertiary insurance details in the patient portal
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks tertiary
    Then user can edit the primary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "Yes, Remove insurance" option
    Then insurance info is removed from Patient Portal, with message “Insurance successfully removed”
    Then user should not see that insurance under"insurance documents"
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1901
  @Manage_account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their primary insurance details in the patient portal but selects "No, keep insurance" option
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on "insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks primary
    Then user can edit the primary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "No, Keep insurance" option
    Then insurance info remains in Patient Portal
    Then user should see that insurance under"insurance documents"
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1902
  @Manage_account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their secondary insurance details in the patient portal but selects "No, keep insurance" option.
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks secondary
    Then user can edit the secondary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "No, Keep insurance" option
    Then insurance info remains in Patient Portal
    Then user should see that insurance under"insurance documents"
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|

  @BDDTEST-EPP-1903
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-950 - Verify if the user going to delete their tertiary insurance details in the patient portal but selects "No, keep insurance" option.
    Given user launch the 'XXX' URL
    When user provides "<email/phone number>" and "<password>"
    And user clicks on the Login button
    Then user logged into the patient portal
    And user verifies the Dashboard
    And user clicks on "My profile"
    And user navigates to the "insurance documents"
    And user clicks on" insurance documents"
    And user can view Primary, Secondary, and Tertiary insurance details
    And user clicks tertiary
    Then user can edit the tertiary insurance details by clicking the "Remove Insurance" CTA
    And user can see the overlay with two options
    And user selects the "No, Keep insurance" option
    Then insurance info remains in Patient Portal
    Then user should see that insurance under"insurance documents"
    
    Example:
    |email/phone number|password|
    |xxx@mail.com|******|
