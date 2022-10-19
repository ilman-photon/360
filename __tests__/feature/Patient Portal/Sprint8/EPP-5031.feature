
Feature: Patient Portal : Messaging - Download attachment from received message
  User Story: As a user, I should be able to download the attachments in the received messages.

  @BDDTEST-EPP-6796
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5031 - Verify whether user clicks and opens a received message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User able to clicks and opens a received message

  @BDDTEST-EPP-6797
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5031 - Verify whether the User is able to clicks on the option to download an attachment
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    And User able to clicks on the option to download an attachment

  @BDDTEST-EPP-6798
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5031 - Verify whether the User is able to see the attachment downloaded to their device/ system
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to download an attachment
    Then User should see the attachment downloaded to their device/ system
