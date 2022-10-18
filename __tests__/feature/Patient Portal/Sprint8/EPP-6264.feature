
Feature: Patient Portal : Messaging - Delete a message from received/ sent messages
  User Story: As a user, I should be able to delete a message from received/ sent messages.

   @BDDTEST-EPP-6821
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6264 - Verify whether Patient can able to delete the message from received message
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And select any of the received message.
    And click the delete icon.
    Then seleted message should be deleted.

  @BDDTEST-EPP-6822
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6264 - Verify whether Patient can able to delete the message from Sent message
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And navigate to the 'Sent message'.
    And select any of the sent message.
    And click the delete icon.
    Then seleted message should be deleted from the 'Sent messages'.

  @BDDTEST-EPP-6823
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6264- Verify whether the message is deleted from the list of  received messages.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And navigate to the 'Received message'.
    And select any of the message.
    And click the delete icon.
    And the selected message is deleted.
    Then Patient should not see the deleted message from the list of received messages.

  @BDDTEST-EPP-6824
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6264 -Verify whether the message is deleted from the list of  Sent messages.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And navigate to the 'Sent message'.
    And select any of the sent message.
    And click the delete icon.
    And the selected message is deleted.
    Then Patient should not see the deleted message from the list of received messages.

  @BDDTEST-EPP-6825
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6264 -To verify whether all the deleted messages are displaying in the deleted message list.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete some messages
    And navigate to the Deleted messages.
    Then Patient should see all the deleted messages in the deleted lists.
