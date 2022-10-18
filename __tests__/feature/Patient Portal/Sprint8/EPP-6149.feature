
Feature: Patient Portal : Messaging - Search among draft messages
  User Story: 
  @BDDTEST-EPP-6815
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149-Verify if user able to search by enter minimum of 1 character or word
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    And user enter a minimum 1 character/word in search option and enter
    Then user should see search result

  @BDDTEST-EPP-6816
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149- Verify if user able to search by enter maximum of 100 character or word
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    And user enter a maximum of 100 character/word in search option and enter
    Then user should see search result

  @BDDTEST-EPP-6817
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result for minimum of 1 character or word search option
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    And user enter a minimum 1 character/word in search option and enter
    Then system should show the result for the search character/word
    And user should see the list of messages for the search result

  @BDDTEST-EPP-6818
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result for  maximum of 100 character or word search option
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    And user enter a maximum of 100 character/word in search option and enter
    Then system should show the result for the search character/word
    And user should see the list of messages for the search result

  @BDDTEST-EPP-6819
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result of the messages ordered by recent ones on the top
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    Then system should show the result for the search character/word
    And user should see messages ordered by recent ones on the top

  @BDDTEST-EPP-6820
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see validation messages when search result not found
    Given user launch Patient Portal XXX URL		
    When user is logged in to the application with a valid username and password
    And user lands on the Dashboard  page
    And user clicks on messaging in the global header
    Then user see all message section
    And user clicks on the drafts button
    Then user see all drafts message page
    When user search with wild char in that search option
    And system not find that character search
    Then user should see message “No results found. Please try with a different search criteria.”
