
Feature:  Patient Portal: Settings – Change Username – Input New Username
  USER STORY: As a user, I should be able to input new username for patient portal

  @BDDTEST-EPP-10925
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view an option to input new username
    Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view an option to input new username

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has navigated to Login & Security screen
    And User should be able to see on Update CTA in the username section
    When User clicks on Update CTA in the username section
    Then User should be able to view an option to input new username

  @BDDTEST-EPP-10926
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to input new username
    Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to input new username

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has navigated to Login & Security screen
    And User should be able to see on Update CTA in the username section
    When User clicks on Update CTA in the username section
    Then User should be able to view an option to input new username 
    And User should be able to input new username

  @BDDTEST-EPP-10927
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view the information message ” Enter a  valid email ID or phone number as your username”
    Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view the information message ” Enter a  valid email ID or phone number as your username”

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has navigated to Login & Security screen
    And User should be able to see on Update CTA in the username section
    When User clicks on Update CTA in the username section
    Then User should be able to view an option to input new username 
    And User should be able to input new username 
    And  User should be able to view the information message ” Enter a  valid email ID or phone number as your username”

  @BDDTEST-EPP-10928
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Update CTA
    Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Update CTA

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has navigated to Login & Security screen
    And User should be able to see on Update CTA in the username section
    When User clicks on Update CTA in the username section
    Then User should be able to view an option to input new username 
    And User should be able to input new username 
    And  User should be able to view the information message ” Enter a  valid email ID or phone number as your username” 
    And User should be able to view Update CTA

  @BDDTEST-EPP-10929
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Cancel CTA
    Scenario: EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Cancel CTA

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has navigated to Login & Security screen
    And User should be able to see on Update CTA in the username section
    When User clicks on Update CTA in the username section
    Then User should be able to view an option to input new username 
    And User should be able to input new username 
    And  User should be able to view the information message ” Enter a  valid email ID or phone number as your username” 
    And User should be able to view Update CTA
    And User should be able to view Cancel CTA
