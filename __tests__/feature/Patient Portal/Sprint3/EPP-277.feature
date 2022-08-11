
Feature: Patient Portal : Concurrent Sessions - Login/access Patient Portal via multiple devices
  User Story: As a user, I should be able to have concurrent sessions i.e., login into multiple devices simultaneously and access Patient Portal.

  @BDDTEST-EPP-2302
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-277 - Verify that  User should be prompted regarding session time out in multiple devices
    Given user launch the "XXX" url in Device A
    When user provides  "<username or phone number>" and "<password>" in Device A
    And user clicks on "Login" button in Device A
    And user navigates to the Patient Portal application in Device A
    When user lands onto “Patient Login” screen in Device A
    Then user provides  "<username or phone number>" and "<password>" in Device B
    And user clicks on "Login" button in Device B
    And user navigates to the Patient Portal application in Device B
    When user lands onto “Patient Login” screen in Device B
    When both Devices are in Idle state 
    Then User should validate whether both are logged out after 15 mins

  @BDDTEST-EPP-2303
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-277 - Verify that  User does any action Device A whether it affects Device B
    Given user launch the "XXX" url in Device A
    When user provides  "<username or phone number>" and "<password>" in Device A
    And user clicks on "Login" button in Device A
    And user navigates to the Patient Portal application in Device A
    When user lands onto “Patient Login” screen in Device A
    Then user provides  "<username or phone number>" and "<password>" in Device B
    And user clicks on "Login" button in Device B
    And user navigates to the Patient Portal application in Device B
    When user lands onto “Patient Login” screen in Device B
    When both Devices are in Idle state 
    When user does any action in Device A and the state becomes active
    Then user must validate whether it reflects in Device B

  @BDDTEST-EPP-2304
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-277 - Verify multiple devices has Unique Session ID
    Given user launch the "XXX" url in Device A
    When user provides  "<username or phone number>" and "<password>" in Device A
    And user clicks on "Login" button in Device A
    And user navigates to the Patient Portal application in Device A
    When user lands onto “Patient Login” screen in Device A
    Then user provides  "<username or phone number>" and "<password>" in Device B
    And user clicks on "Login" button in Device B
    And user navigates to the Patient Portal application in Device B
    When user lands onto “Patient Login” screen in Device B
    Then user should validate the session ID in both the devices whether it is Unique

  @BDDTEST-EPP-2305
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-277 - Verify if any one of the device got switched off whether it logs out or wait for the session time out
    Given user launch the "XXX" url in Device A
    When user provides  "<username or phone number>" and "<password>" in Device A
    And user clicks on "Login" button in Device A
    And user navigates to the Patient Portal application in Device A
    When user lands onto “Patient Login” screen in Device A
    Then user provides  "<username or phone number>" and "<password>" in Device B
    And user clicks on "Login" button in Device B
    And user navigates to the Patient Portal application in Device B
    Then user lands onto “Patient Login” screen in Device B
    When Device A gets switched off
    Then user must validate the whether it logs out or wait for the session time out

  @BDDTEST-EPP-2486
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-277 - Verify that When user makes any changes in Device A it must reflect in Device B
    Given user launch the "XXX" url in Device A
    When user provides  "<username or phone number>" and "<password>" in Device A
    And user clicks on "Login" button in Device A
    And user navigates to the Patient Portal application in Device A
    When user lands onto “Patient Login” screen in Device A
    Then user provides  "<username or phone number>" and "<password>" in Device B
    And user clicks on "Login" button in Device B
    And user navigates to the Patient Portal application in Device B
    Then user lands onto “Patient Login” screen in Device B
    When user makes any Changes like change in Text fields in any page or scheduling an appointment in Device A
    Then user must validate the changes in Device B as well
