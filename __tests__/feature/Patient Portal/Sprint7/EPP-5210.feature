
Feature: Patient Portal : Messaging - Reply to a received message
  User Story: As a user, I should be able to reply back to the received messages.

  @BDDTEST-EPP-6789
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to view Message Center Tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon

  @BDDTEST-EPP-6790
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to view and click Inbox tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab

  @BDDTEST-EPP-6791
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to reply received messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user opens a message
    Then user clicks reply

  @BDDTEST-EPP-6792
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to edit the subject of the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user opens a message
    Then user clicks reply 
    Then validate whether user is able to edit the subject of the message

  @BDDTEST-EPP-6793
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to enter text in the body of the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user opens a message
    Then user clicks reply 
    Then validate whether user is able to edit the subject of the message
    Then validate whether user is able to enter text in the body of the message

  @BDDTEST-EPP-6794
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to attach files with the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user opens a message
    Then user clicks reply 
    Then validate whether user is able to edit the subject of the message
    Then validate whether user is able to enter text in the body of the message
    Then validate whether user is able to attach files with the message

  @BDDTEST-EPP-6795
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-5210 - Verify whether user is able to send the message
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user opens a message
    Then user clicks reply 
    Then validate whether user is able to edit the subject of the message
    Then validate whether user is able to enter text in the body of the message
    Then validate whether user is able to attach files with the message
    Then validate whether user is able to click on send 
    Then validate whether user is able to send the message
