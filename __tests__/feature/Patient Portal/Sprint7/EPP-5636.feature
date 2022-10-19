
Feature: Patient Portal : Patient Portal : Share My Record/ Prescription - Share prescriptions by entering required details 
User Story: As a user, I should be able to enter the required details to share my prescriptions to another practise.

  @BDDTEST-EPP-6164
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage)
    Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User lands on the screen to share their record/ prescriptions
    When User selects the option to share their prescriptions
    And User selects the prescriptions that needs to be shared
    And User enters direct clinician’s address with message subject
    And User clicks on the option to share their prescriptions
    Then User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage)

  @BDDTEST-EPP-6165
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage) - within 3 seconds
    Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage) - within 3 seconds

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User lands on the screen to share their record/ prescriptions
    When User selects the option to share their prescriptions
    And User selects the prescriptions that needs to be shared
    And User enters direct clinician’s address with message subject
    And User clicks on the option to share their prescriptions
    Then User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage)
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-6166
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should not see the any errors script when user clicks F12 on the console - when User clicks on the option to share their prescriptions
    Scenario: EPIC_EPP-42_STORY_EPP-5636 - Verify User should not see the any errors script when user clicks F12 on the console - when User clicks on the option to share their prescriptions

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User lands on the screen to share their record/ prescriptions
    When User selects the option to share their prescriptions
    And User selects the prescriptions that needs to be shared
    And User enters direct clinician’s address with message subject
    And User clicks on the option to share their prescriptions
    Then User should be able to view the following success message “You have successfully shared your prescriptions” (ECP to confirm the verbiage)
    And User should see the page loads within 3 seconds
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6167
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-5636 -Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to share their prescriptions
    Scenario: EPIC_EPP-42_STORY_EPP-5636 -Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to share their prescriptions

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User lands on the screen to share their record/ prescriptions
    When User selects the option to share their prescriptions
    And User selects the prescriptions that needs to be shared
    And User enters direct clinician’s address with message subject
    And User clicks on the option to share their prescriptions
    And the Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6168
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-5636 -Negative Test Cases-Verify  when the service is unavailable - when User clicks on the option to share their prescriptions
    Scenario: EPIC_EPP-42_STORY_EPP-5636 -Negative Test Cases-Verify  when the service is unavailable - when User clicks on the option to share their prescriptions

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User lands on the screen to share their record/ prescriptions
    When User selects the option to share their prescriptions
    And User selects the prescriptions that needs to be shared
    And User enters direct clinician’s address with message subject
    And User clicks on the option to share their prescriptions
    And the service is unavailable
    Then user should see the appropriate error message
