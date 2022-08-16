Feature: Patient Portal : MFA - Incorrect code provided during setting up multi factor authentication
  User Story: As a user, I should see an error message when the provided code for setting up multi factor authentication is incorrect

  @BDDTEST-EPP-2398
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2399
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2400
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2401
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2402
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2403
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2404
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Too many attempts."
    And user should see text below message written as "Please try setting up multi factor authentication after 30 minutes."
    And user should see "Back to Login" button

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2405
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Too many attempts."
    And user should see text below message written as "Please try setting up multi factor authentication after 30 minutes."
    And user should see "Back to Login" button

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2406
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error message "Too many attempts."
    And user should see text below message written as "Please try setting up multi factor authentication after 30 minutes."
    And user should see "Back to Login" button

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2407
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when service is unavailable
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error screen

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2408
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when internet is unavailable
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user leave as blank "<Enter code>" field 
    When user click on "Submit" button
    Then user should see error screen

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2409
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should not see any error when user tap on F12 keyboard in console
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    When user tap on F12 on keyboard
    Then user should not see any error in console when user tap on F12 keyboard

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-2484
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-268 - Verify user should be able to enter only numeric in "<Enter code>" field
    Feature: Authentication - MFA

    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Submit" button
    Then user should see error message "Incorrect Code."
    And user should see text below message written as "Please try again."

    Examples:
    |Enter code|
    |xxx|
