
Feature: Patient Portal : Messaging - Select and view a received message
  User Story: As a user, I should be able to select and view a received message.

  @BDDTEST-EPP-6721
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the list of received messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages

  @BDDTEST-EPP-6722
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to clicks on one of the received messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    And User able to clicks on one of the received messages

  @BDDTEST-EPP-6723
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the sender’s detail  for that message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view the sender’s detail for that message

  @BDDTEST-EPP-6724
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the subject of the received message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view the subject of the received message

  @BDDTEST-EPP-6725
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the body of the received message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view the body of the received message

  @BDDTEST-EPP-6726
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view attachments if any present along with an option to download it
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view attachments if any present along with an option to download it

  @BDDTEST-EPP-6727
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the date and time of arrival for that received message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view the date and time of arrival for that received message

  @BDDTEST-EPP-6728
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the option to reply back to that message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of received messages
    When User clicks on one of the received messages
    And User should be able to view the option to reply back to that message
