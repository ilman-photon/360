
Feature: Patient Portal : Messaging - View
  User Story: As a user, I should be able to view the screen to send and receive messages.

  @BDDTEST-EPP-6701
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify user should see to the screen  send and receive messages.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages

  @BDDTEST-EPP-6702
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the list of received messages as that option will be selected by default (like inbox)
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages
    And User should be able to view the list of received messages as that option will be selected by default (like inbox)

  @BDDTEST-EPP-6703
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view list the sent messages
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages
    And User should be able to view the list of received messages as that option will be selected by default (like inbox)
    And User should be able to view the option (like sent)
    When user clicked the option (like sent)
    Then User should be able to view list the sent messages

  @BDDTEST-EPP-6704
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to compose a new message
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages
    And User should be able to view the option to compose new message

  @BDDTEST-EPP-6705
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to search for a message within received as well as sent messages
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages
    And User should be able to view the option (like sent)
    When user clicked the option (like sent)
    Then User should be able to view list the sent messages
    And user should be able to view the option to search for a message within received as well as sent messages

  @BDDTEST-EPP-6706
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to filter the messages within received message
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    Then user lands on the screen to send and receive messages
    And User should be able to view the option to filter the messages within received message
