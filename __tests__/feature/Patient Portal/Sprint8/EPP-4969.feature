
Feature: Patient Portal : Messaging - Search among sent messages
  User Story: As a user, I should be able to search among the sent messages.

  @BDDTEST-EPP-6780
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4969 - Verify User clicks on the option to search among sent messages
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to search among sent messages
    Then User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search

  @BDDTEST-EPP-6781
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to search among sent messages
    Then User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search

  @BDDTEST-EPP-6782
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to see result of entering any character or word
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to search among sent messages
    Then User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search
    And User should be able to see result of entering any character or word

  @BDDTEST-EPP-6783
  @Message_Center
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to see the list of results ordered by recent ones on the top
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to search among sent messages
    Then User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search
    And User should be able to see result of entering any character or word
    And User should be able to see the list of results ordered by recent ones on the top

  @BDDTEST-EPP-6784
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to view the message “No results found. Please try with a different search criteria.” (ECP to provide verbiage) when there are no results found for the character or word searched
    Given User launch Patient Portal url		
    When User lands on the the screen to send and receive messages
    And User clicks on the option to view sent message
    Then User navigates to the screen to send and receive messages
    And User lands on the the screen to send and receive messages
    And User is viewing the list of sent messages
    When User clicks on one of the sent messages
    Then User should be able to view the sender’s detail (Provider’s name - confirm?) for that message
    And User should be able to view the subject of the received message
    And User should be able to view the body of the received message
    And User should be able to view attachments if any present along with an option to download it
    When User clicks and opens a sent message with attachments
    Then User should be able to view the date and time when message was sent
    When User clicks on the option to search among sent messages
    Then User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search
    And Verify User should be able to view the message “No results found. Please try with a different search criteria.” (ECP to provide verbiage) when there are no results found for the character or word searched
