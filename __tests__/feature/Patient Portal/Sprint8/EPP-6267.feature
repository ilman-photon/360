
Feature: Patient Portal : Messaging - Restore a deleted message
  User Story: As a user, I should be able to restore a deleted message.
  @BDDTEST-EPP-6965
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6267 - Verify whether user able to view the list of deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    Then User should be able to view the list of deleted messages

  @BDDTEST-EPP-6966
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6267 - Verify whether user able to see the list of deleted mesages in the deleted folder
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    And User should  see the list of deleted messages ordered by recent ones at the top
    And User should see the sender or receiver details (Provider’s name) for each message in the list view

  @BDDTEST-EPP-6967
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6267 - Verify whether user able to clicks on the deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    And User clicks on the deleted messages

  @BDDTEST-EPP-6968
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6267 - Verify whether user able to see the option to restore the message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on the deleted messages
    Then user should able to see the option restore the message

  @BDDTEST-EPP-6969
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6267 - Verify whether user able to resore the deleted messages from deleted folder
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on the deleted messages
    Then user should able to see the option restore the message
    When user clicks on the restore option
    Then system should remove this message from the list of deleted message
    And system should restore the message to corresponding list of received or sent messages
