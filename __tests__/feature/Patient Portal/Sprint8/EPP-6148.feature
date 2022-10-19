
Feature: Patient Portal : Messaging - Download attachment from draft message
  User Story: 

 
  @BDDTEST-EPP-6813
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6148- Verify if the user able to clicks the download option
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user sees the all received message
    And user clicks on the drafts button
    Then user see the all drafts message page
    And user should see and click  the option to download the attachment

  @BDDTEST-EPP-6814
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6148- Verify if able to see attachement downloaded in the device
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user sees the all received message
    And user clicks on the drafts button
    Then user sees the all drafts message page
    When user able to view and click option to download
    Then user should see attachement downloaded in the device
