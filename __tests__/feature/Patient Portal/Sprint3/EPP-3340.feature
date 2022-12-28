Feature: Patient Portal : Security Questions - User should not be able to view the same security questions which he had already selected
User Story: As a user, I should not be able to view the same security question which I had already selected from the list of security questions

  @BDDTEST-EPP-4947
  @Authentication
  @P1
  @Patient_Portal
  @included
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-3340 - Verify User should be able to view the list of security questions (Preset)
    Given user launch the "XXX" url	
    And user navigates to the Patient Portal application
    And user should prompted to set up "Security questions"
    Then user land on to "Set up Security questions" screen
    And User should be able to view the list of security questions (Preset)

  @BDDTEST-EPP-4948
  @Authentication
  @P1
  @Patient_Portal
  @included
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-3340 - Verify User has already selected a security question from the list of security questions
    Given user launch the "XXX" url	
    And user navigates to the Patient Portal application
    And user should prompted to set up "Security questions"
    Then user land on to "Set up Security questions" screen
    And User should be able to view the list of security questions (Preset)
    And User has already selected a security question from the list of security questions

  @BDDTEST-EPP-4949
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-3340 - Verify User should not be showed the same security question once again in the list of security questions
    Given user launch the "XXX" url	
    And user navigates to the Patient Portal application
    And user should prompted to set up "Security questions"
    Then user land on to "Set up Security questions" screen
    And User should be able to view the list of security questions (Preset)
    And User has already selected a security question from the list of security questions
    And User should not be showed the same security question once again in the list of security questions
