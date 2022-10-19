
Feature: Patient Portal : Messaging - View the screen to compose message
  User Story: As a user, I should be able to view the screen to compose an message.
  @BDDTEST-EPP-6739
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to see the option to compose a message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User able to see the option to compose a message

  @BDDTEST-EPP-6740
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to clicks on the option to compose a message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    And User should able to clicks on the option to compose a message

  @BDDTEST-EPP-6741
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to enter in the subject of the message which should not exceed 'x' characters
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    Then User should be able to view the field to enter in the subject of the message which should not exceed 'x' characters

  @BDDTEST-EPP-6742
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to select the receiver
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message 
    And User should be able to view the field to select the receiver

  @BDDTEST-EPP-6743
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to select the receiver as a mondatory field
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message 
    And User should be able to view the field to select the receiver
    And User should see the select receiver as mondatory field

  @BDDTEST-EPP-6744
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to enter in the body of the message which should not exceed 'x' characters
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the field to enter in the body of the message which should not exceed 'x' characters

  @BDDTEST-EPP-6745
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to add attachments
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the option to add attachments

  @BDDTEST-EPP-6746
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to send the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the option to send the message

  @BDDTEST-EPP-6747
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to discard the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the option to discard the message

  @BDDTEST-EPP-6748
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to cancel the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the option to discard the message which when clicked will cancel the message

  @BDDTEST-EPP-6749
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user redirect to list of received messages screen
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User should be able to view the option to discard the message which when clicked will cancel the message and redirect the user to list of received messages screen

  @BDDTEST-EPP-6750
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4322 - Verify whether user see the following inline error message “This field is required” when mandatory fields are not filled
    When User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User clicks on the option to compose a message
    And User provides the subject of the message
    And User provide the body message
    And User not selects the receivers name
    When User clicks on Send button
    Then User should see the following inline error message This field is required when mandatory fields are not filled
