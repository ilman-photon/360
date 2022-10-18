
Feature: Patient Portal : Messaging - View list of received message
  User Story: As a user, I should be able to view the list of received messages.

  @BDDTEST-EPP-6707
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should see the list of received messages ordered by recent ones at the top
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages

  @BDDTEST-EPP-6708
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the number of unread messages in the group of trailing messages
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages

  @BDDTEST-EPP-6709
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages
    And user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view

  @BDDTEST-EPP-6710
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view first few words (based on space available) from the subject of the message for each message in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages
    And user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view
    And user should be able to view first few words (based on space available) from the subject of the message for each message in the list view

  @BDDTEST-EPP-6711
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view first few words (based on space available) from the body of the message for each message in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages
    And user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view
    And user should be able to view first few words (based on space available) from the subject of the message for each message in the list view
    And user should be able to view first few words (based on space available) from the body of the message for each message in the list view

  @BDDTEST-EPP-6712
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages
    And user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view
    And user should be able to view first few words (based on space available) from the subject of the message for each message in the list view
    And user should be able to view first few words (based on space available) from the body of the message for each message in the list view
    And user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view

  @BDDTEST-EPP-6713
  @Message_Center
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the date (MM/DD/YYYY) when the message arrived instead of time if the message arrived date is not today for each message in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the screen to send and receive messages
    When user selects the option to view the list of received messages (like inbox)
    Then user should see the list of received messages ordered by recent ones at the top
    And user should be able to view the number of unread messages in the group of trailing messages
    And user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view
    And user should be able to view first few words (based on space available) from the subject of the message for each message in the list view
    And user should be able to view first few words (based on space available) from the body of the message for each message in the list view
    And user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view
    And user should be able to view the date (MM/DD/YYYY) when the message arrived instead of time if the message arrived date is not today for each message in the list view
