
Feature: Patient Portal : Messaging - Reply to received message - View
  User Story: As a user, I should be able to view the fields present when I click on the option to reply back for a message.

  @BDDTEST-EPP-6729
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to see the reply option
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    Then User able to see the Reply option

  @BDDTEST-EPP-6730
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to click  on reply option
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    Then User able to clicks on the option to reply to that message

  @BDDTEST-EPP-6731
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the subject of the message with ‘RE:’ prefixed
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    Then User should be able to view the subject of the message with ‘RE:’ prefixed

  @BDDTEST-EPP-6732
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the receiver’s detail
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the receiver’s detail

  @BDDTEST-EPP-6733
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the body of the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the body of the message

  @BDDTEST-EPP-6734
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the option to attach files
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the option to attach files

  @BDDTEST-EPP-6735
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to  view the message to which reply was clicked as the trailing message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the message to which reply was clicked as the trailing message

  @BDDTEST-EPP-6736
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to  view the option to send the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the option to send the message

  @BDDTEST-EPP-6737
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the option to discard the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the option to discard the message

  @BDDTEST-EPP-6738
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to cancel the message and redirect the user to list of received messages screen
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User clicks and opens a received message
    When User clicks on the option to reply to that message
    And User should be able to view the option to discard the message which when clicked will cancel the message and redirect the user to list of received messages screen
