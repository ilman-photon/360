
Feature: Patient Portal : Messaging - Download attachment from sent message
  User Story: As a user, I should be able to download the attachments in the sent messages.

  @BDDTEST-EPP-6799
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5287 - Verify User clicks and opens a sent message with attachments
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent

  @BDDTEST-EPP-6800
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5287 - Verify User clicks on the option to download an attachment
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to download an attachment
    And User should see the attachment downloaded to their device/ system

  @BDDTEST-EPP-6801
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5287 - Verify User should see the attachment downloaded to their device/ system
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to download an attachment
    And User should see the attachment downloaded to their device/ system
