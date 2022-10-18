
Feature: Patient Portal : Form Customization (Documents/ Forms) - Navigation
  User Story: As a user, I should be able to view the option to navigate to the screen to view the list of forms that can be filled out online (Navigation).

  @BDDTEST-EPP-6988
  @ManageAccount
  @P2
  @Patient_portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6170-To check whether the 'Intake forms' submenu is displaying under the global header 'Documents'
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    Then Patient should see the 'Intake forms' menu.

  @BDDTEST-EPP-6989
  @ManageAccount
  @P1
  @Patient_portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6170-To check whether the Patient is able to navigate to the screen to view the list of forms that can be filled out Online
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the 'Intake forms' menu.
    And click the 'Intake forms'
    Then Patient should see the list of forms that can be filled out online.
