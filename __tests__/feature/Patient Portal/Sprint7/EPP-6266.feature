
Feature: Patient Portal : Messaging - Select and view delete message
  User Story: As a user, I should be able to select and view a deleted message.

  @BDDTEST-EPP-6955
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the list of deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    Then User should be able to view the list of deleted messages

  @BDDTEST-EPP-6956
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to clicks on the deleted messages
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    And User able to clicks on the deleted messages

  @BDDTEST-EPP-6957
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the sender’s detail (Provider’s name) for deleted message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the sender’s detail (Provider’s name) for that message

  @BDDTEST-EPP-6958
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the subject of the received message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the subject of the received message

  @BDDTEST-EPP-6959
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the body of the received message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the body of the received message

  @BDDTEST-EPP-6960
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view attachments
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view attachments if any have

  @BDDTEST-EPP-6961
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the option to download the attachment
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view attachments if any present along with an option to download it

  @BDDTEST-EPP-6962
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the date and time of arrival if that was a received message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the date and time of arrival if that was a received message

  @BDDTEST-EPP-6963
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the date and time when message was sent if that was a sent message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the date and time when message was sent if that was a sent message

  @BDDTEST-EPP-6964
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the option to restore that message
    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User is viewing the list of deleted messages 
    When User clicks on one of the deleted messages
    Then User should be able to view the option to restore that message
