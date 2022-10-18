
Feature: Patient Portal : Share My Record/ Prescription - Error message when entered clinician's address is not in correct format
  User Story: As a user, I should see an error message when the entered clinician's address is not in correct format.

    @BDDTEST-EPP-5579
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Verify User enters a clinician’s direct address which is not in the standard email format
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Verify User enters a clinician’s direct address which is not in the standard email format

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|a

  @BDDTEST-EPP-5580
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Verify User clicks on the option to share the record
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Verify User enters a clinician’s direct address which is not in the standard email format

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    Then User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|

  @BDDTEST-EPP-5581
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Verify User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Verify User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    Then User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|

  @BDDTEST-EPP-5582
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Verify User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage) - within 3 seconds
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Verify User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage) - within 3 seconds

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    Then User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)
    And User should see the page loads within 3 seconds

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|

  @BDDTEST-EPP-5583
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Verify User should not see the any errors script when user clicks F12 on the console - User see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Verify User should not see the any errors script when user clicks F12 on the console - User see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    Then User should see the following error message - “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)
    And User should see the page loads within 3 seconds
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|

  @BDDTEST-EPP-5592
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage) 
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage) 

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    And the internet service is unavailable
    Then user should see the appropriate error message

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|

  @BDDTEST-EPP-5593
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1763- Negative Test Cases-Verify user should see the error message when the service is unavailable - when “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage)
    Scenario: EPIC_EPP-20_STORY_EPP-1763- Negative Test Cases-Verify user should see the error message when the service is unavailable - when “You must enter a valid direct address to share your health record” (ECP to provide correct verbiage) 

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User fills invalid the "<Clinician’s address>" and "<Message subject>" fields
    When User clicks on the option to share the record
    And the service is unavailable
    Then user should see the appropriate error message

    Examples:
    |<Clinician’s address | Message subject|
    |abc@direct.placeofwork.com|xxxx|
