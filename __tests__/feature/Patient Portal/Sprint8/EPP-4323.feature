
Feature: Patient Portal : Messaging - Send a new message
  User Story: As a user, I should be able to send a new message.

   @BDDTEST-EPP-6751
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4323 - Verify whether user can compose a new message
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    Then user should able to click 'New message' button.

  @BDDTEST-EPP-6752
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4323 - To verify whether the message composing screen is displaying if user click the 'New Message' button.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the 'Message Center'.
    And user lands on the the screen to send and receive messages
    And click the 'New message' button.
    Then user should see the message composing screen.

  @BDDTEST-EPP-6753
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4323 -To verify whether the user can send the message to Receiver.
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
    Then message should send to the receiver

  @BDDTEST-EPP-6754
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4323 -To verify whether the user is able to view his/her list of sent messages in Sent messages.
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
    Then user should see the list of his/her sent messages

  @BDDTEST-EPP-6755
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4323 -To verify whether the message is successfully received to the Recipient.
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
    And login as Recipient and navigate to message center
    And view the message
    Then Recipient should see the received message.
