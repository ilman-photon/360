
Feature: Patient Portal : Messaging - Select and view a sent message
  User Story: As a user, I should be able to select and view a sent message.
  @BDDTEST-EPP-6771
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4968 - Verify User clicks on one of the sent messages
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message

  @BDDTEST-EPP-6772
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the subject of the received message
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message

  @BDDTEST-EPP-6773
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the body of the received message
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

  @BDDTEST-EPP-6774
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view attachments if any present along with an option to download it
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

  @BDDTEST-EPP-6775
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the date and time when message was sent
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
    And User should be able to view the date and time when message was sent
