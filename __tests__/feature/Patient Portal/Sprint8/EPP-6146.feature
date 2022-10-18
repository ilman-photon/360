
Feature: Patient Portal : Messaging - Select and view a draft message
  User Story: 

  @BDDTEST-EPP-6806
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the receiver’s detail (Provider’s name) in the drafts message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And user able to view the receiver’s detail (Provider’s name ) in the drafts message

  @BDDTEST-EPP-6807
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the message body in the drafts message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And user able to view the receiver’s detail (Provider’s name ) in the drafts message

  @BDDTEST-EPP-6808
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146-Verify if the user can view the attachments if any present along with an option to download in the drafts message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And user able to  view the attachments if any present along with an option to download in the drafts message

  @BDDTEST-EPP-6809
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user send  option in the drafts message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And users are able to  view the attachments if any present along with an option to download in the drafts message
    And User sees the Send Option in the respective message.

  @BDDTEST-EPP-6810
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user can able to  send  a message from the drafts message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And user sees the message subject and body of the message
    And users are able to  view the attachments if any present along with an option to download in the drafts message
    And User sees the Send Option in the respective message.
    And user clicks on the send button
    Then the message is sent to the respective recipient

  @BDDTEST-EPP-6811
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146-Verify if the user revives a message sent from the drafts.
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And user sees the message subject and body of the message
    And users are able to  view the attachments if any present along with an option to download in the drafts message
    And User sees the Send Option in the respective message.
    And user clicks on the send button
    Then the message is sent to the respective recipient
    And login to the receiver account with a valid username and password
    And clicks on messaging in the  global header
    And clicks on Inbox
    Then User sees the message

  @BDDTEST-EPP-6812
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user can discard the draft message
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And select a message  
    And user sees the message subject and body of the message
    And users are able to  view the attachments if any present along with an option to download in the drafts message
    And User sees the Send Option in the respective message.
    And user sees the cancel button
    And user clicks on clicks on cancel message
    And the message is discarded

  @BDDTEST-EPP-6887
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the Drafts button is enabled for the user
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page

  @BDDTEST-EPP-6890
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the subject in the drafts messages
    Given user launch Patient Portal XXX URL		
    When a user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then the User sees the all received message
    And User clicks on the drafts button
    Then the user sees the all drafts message page
    And user able to view the subject in the drafts message
