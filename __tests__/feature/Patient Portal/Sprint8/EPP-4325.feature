
Feature: Patient Portal : Messaging - Filter the received messages
  User Story: As a user, I should be able to filter the received messages.

   @BDDTEST-EPP-6756
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view Message Center Tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon

  @BDDTEST-EPP-6757
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view and click Inbox tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab

  @BDDTEST-EPP-6758
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view the list of received messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages

  @BDDTEST-EPP-6759
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view filter options below search textbox
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user must be able to view filter options below search textbox

  @BDDTEST-EPP-6761
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify User should see the option to filter for unread messages which when selected will list only unread messages ordered by recent ones on top
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user must be able to view filter options below search textbox
    Then user able must be able to view unread option 
    Then user clicks on unread option
    Then user must be displayed list only unread messages ordered by recent ones on top

  @BDDTEST-EPP-6762
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4325 - Verify User should see the option to filter by All which list both read and unread messages (Default option selected)
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user must be able to view filter options below search textbox
    Then user able must be able to view unread option 
    Then user clicks on unread option
    Then user must be displayed list only unread messages ordered by recent ones on top
    Then user must view All radio button
    Then user must view Read radio button
    Then user must view Unread radio button
    Then user must view Unread radio button is selected as default
    Then user must view With Attachments radio button
