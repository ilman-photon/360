
Feature: Patient Portal : Messaging - View list of sent message
  User Story: As a user, I should be able to view the list of sent messages.

  @BDDTEST-EPP-6763
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the recent message is displaying at the top of the Sent items
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And click the 'New message' button.
    And enter the Recipient name in the 'To' field.
    And enter the Subject regarding that message.
    And enter the message that need to be send to the Recipient.
    And if neccessary Add the attachment.
    And click 'Send' button.
    And the message should send to the receiver
    And click the Sent Messages
    Then user should see the recent sent message at the top

  @BDDTEST-EPP-6764
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the send and receive message of same message is grouping and recent at the top
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And click the 'New message' button.
    And enter the Recipient name in the 'To' field.
    And enter the Subject regarding that message.
    And enter the message that need to be send to the Recipient.
    And if neccessary Add the attachment.
    And click 'Send' button.
    And the message should send to the receiver
    And click the Sent Messages
    Then Send and Received message should be grouped as same messages and recent should be displayed at top.

  @BDDTEST-EPP-6765
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the group of unread messages is displaying properly.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And click the 'New message' button.
    And enter the Recipient name in the 'To' field.
    And enter the Subject regarding that message.
    And enter the message that need to be send to the Recipient.
    And if neccessary Add the attachment.
    And click 'Send' button.
    And the message should send to the receiver
    And click the Sent Messages
    And login as recipient
    Then number of unread messages should be displayed.

  @BDDTEST-EPP-6766
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the sender details is displaying in the list view.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And click the Sent messages
    Then user should see the sender details in the list view.

  @BDDTEST-EPP-6767
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the user is able to view the first few words in the Subject of the message in list view.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    Then user should see the first few words in the subject of the message.

  @BDDTEST-EPP-6768
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the user is able to view the first few words in the body of the message in list view.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    Then user should see the first few words in the body of the message.

  @BDDTEST-EPP-6769
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the time is displaying in HH:MM and today's Date(Today's message) in the arrived message in the list view.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    Then user should see the time in the format HH:MM and today's Date in the list view

  @BDDTEST-EPP-6770
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4967-To verify whether the Date is displaying in MM/DD/YYYY instead of time in the arrived message in the list view(Message received is not current date).
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    Then user should see the date MM/DD/YYYY in the list view of arrived message(Message received is not current date)
