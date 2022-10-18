
Feature: Patient Portal : Messaging - Search among received messages
  User Story: As a user, I should be able to search among the received messages.

   @BDDTEST-EPP-6714
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view Message Center Tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon

  @BDDTEST-EPP-6715
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view and click Inbox tab
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab

  @BDDTEST-EPP-6716
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view the list of received messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages

  @BDDTEST-EPP-6717
  @Message_Center
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to search among recieved messages
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user clicks search text box
    Then user validates the search textbox must allow text more than 1 character 
    Then user validates the search textbox must allow only 100 characters

  @BDDTEST-EPP-6718
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario Outline: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view the list of  messages related to characters entered in the search text box
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user clicks search text box
    Then user validates the search textbox must allow text more than 1 character 
    Then user validates the search textbox must allow only 100 characters
    Then user enter "characters" in the search textbox 
    Then user clicks on search button 
    Then user must be able to view the list of  messages related to characters entered in the search text box

    Examples:
    |characters|
    |@gm|

  @BDDTEST-EPP-6719
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to list the results ordered by recent ones on the top
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user clicks search text box
    Then user validates the search textbox must allow text more than 1 character 
    Then user validates the search textbox must allow only 100 characters
    Then user enter "characters" in the search textbox 
    Then user clicks on search button 
    Then user must be able to view the list of  messages related to characters entered in the search text box
    Then user must validate whether user able to list the results ordered by recent ones on the top

  @BDDTEST-EPP-6720
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view error message when there are no results found for the character or word searched
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then user clicks Message Center + icon
    Then user views drop down menu
    Then user clicks on Direct Messages
    Then user clicks on Inbox tab
    Then user views the list of received messages
    Then user clicks search text box
    Then user validates the search textbox must allow text more than 1 character 
    Then user validates the search textbox must allow only 100 characters
    Then user enter ""characters"" in the search textbox 
    Then user clicks on search button 
    When no results found for the character or word searched
    Then user must view No results found. Please try with a different search criteria.
