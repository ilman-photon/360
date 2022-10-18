
Feature: Patient Portal : Messaging - Download attachments from deleted message
  User Story: As a user, I should be able to download the attachments from the deleted messages.

  @BDDTEST-EPP-6970
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to view the list of deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    Then User should be able to view the list of deleted messages

  @BDDTEST-EPP-6971
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to clicks on the deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    And User able to clicks on the deleted messages

  @BDDTEST-EPP-6972
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to opens a deleted message with attachments
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    Then User should be able to clicks and opens a deleted message with attachments

  @BDDTEST-EPP-6973
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to clicks on the option to download an attachment
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User should be able to clicks and opens a deleted message with attachments
    Then User should be able to clicks on the option to download an attachment

  @BDDTEST-EPP-6974
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to see the attachment downloaded to their device/ system
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User should be able to clicks and opens a deleted message with attachments
    When User clicks on the option to download an attachment
    Then User should see the attachment downloaded to their device/ system
