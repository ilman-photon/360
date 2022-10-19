
Feature: Patient Portal : Messaging - View list of deleted messages
  User Story: As a user, I should be able to view the list of deleted messages.

  
  @BDDTEST-EPP-6826
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the recently deleted message is displaying at the top in 'Deleted messages'
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message
    And navigate to the Deleted messages.
    Then Patient should see the recently deleted message at the top of the lists.

  @BDDTEST-EPP-6827
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the Sender/Receiver(Provider name) details are displaying in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message
    And navigate to the Deleted messages.
    Then Patient should see the Sender/Receiver details in the list view.

  @BDDTEST-EPP-6828
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the few words of Subject are displaying in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message
    And navigate to the Deleted messages.
    Then Patient should see the few words of Subject in the list view

  @BDDTEST-EPP-6829
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the few words regarding Body of the message are displaying in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message
    And navigate to the Deleted messages.
    Then Patient should see the few words regarding Body of the message in the list view

  @BDDTEST-EPP-6830
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the Time is displaying as HH:MM if the message received today in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message that received today
    And navigate to the Deleted messages and view the deleted message.
    And Patient should see the timing as HH:MM in the deleted message list view.

  @BDDTEST-EPP-6831
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the date is displaying as MM/DD/YYYY if the message received is not  today in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message that received yesterday
    And navigate to the Deleted messages and view the deleted message.
    And Patient should see the date as MM/DD/YYYY in the deleted message list view.

  @BDDTEST-EPP-6832
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the Time is displaying as HH:MM if the message Sent today in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message that sent today
    And navigate to the Deleted messages and view the deleted message.
    And Patient should see the timing as HH:MM in the deleted message list view.

  @BDDTEST-EPP-6833
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6265-To verify whether the date is displaying as MM/DD/YYYY if the message Sent is not  today in the list view
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And delete one message that Sent yesterday
    And navigate to the Deleted messages and view the deleted message.
    And Patient should see the date as MM/DD/YYYY in the deleted message list view.
