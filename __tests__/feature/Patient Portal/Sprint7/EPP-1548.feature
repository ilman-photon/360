
Feature: Patient Portal : Share My Record/ Prescription - Share record by entering required details 
  User Story: As a user, I should be able to share my record to another medical practise by entering the required details.

  @BDDTEST-EPP-5572
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Verify User enters direct clinician’s address with message subject
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Verify User enters direct clinician’s address with message subject

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|

  @BDDTEST-EPP-5574
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Verify User should be able to view the following success message “You have successfully shared you medical record” (ECP to confirm the verbiage)
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Verify User should be able to view the following success message “You have successfully shared you medical record” (ECP to confirm the verbiage)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the option to share their record
    When User clicks on the option to share their record
    Then User should be able to view the following success message “You have successfully shared you medical record”

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|

  @BDDTEST-EPP-5575
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Verify User clicks on the option to share their record - within 3 seconds
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Verify User clicks on the option to share their record - within 3 seconds

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the option to share their record
    When User clicks on the option to share their record
    Then User should be able to view the following success message “You have successfully shared you medical record”
    And User should see the page loads within 3 seconds

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|

  @BDDTEST-EPP-5576
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Verify User should not see the any errors script when user clicks F12 on the console - when User clicks on the option to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Verify User should not see the any errors script when user clicks F12 on the console - when User clicks on the option to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the option to share their record
    When User clicks on the option to share their record
    Then User should be able to view the following success message “You have successfully shared you medical record”
    And User should see the page loads within 3 seconds
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|

  @BDDTEST-EPP-5577
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the option to share their record
    When User clicks on the option to share their record
    Then User should be able to view the following success message “You have successfully shared you medical record”
    And the internet service is unavailable
    Then user should see the appropriate error message

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|

  @BDDTEST-EPP-5578
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1548- Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on the option to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-1548- Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on the option to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills valid the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the option to share their record
    When User clicks on the option to share their record
    Then User should be able to view the following success message “You have successfully shared you medical record”
    And the service is unavailable
    Then user should see the appropriate error message

    Examples:
    |<Clinician’s address | Message subject|
    |xxxxx|xxxxx|
