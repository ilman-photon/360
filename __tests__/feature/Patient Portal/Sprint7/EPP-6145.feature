
Feature: Patient Portal : Messaging - View list of draft message

  @BDDTEST-EPP-7542
  @Message_Center
  @P2
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to select the option to view the list of draft messages
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -  Verify whether user able to select the option to view the list of draft messages

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    Then User should be able to select the option to view the list of draft messages

  @BDDTEST-EPP-7543
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the list of draft messages ordered by recent ones at the top
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -  Verify whether user able to view the list of draft messages ordered by recent ones at the top

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top

  @BDDTEST-EPP-7544
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the receiver’s details (Provider’s name) for each message in the list view if provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -  Verify whether user able to view the receiver’s details (Provider’s name) for each message in the list view if provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the receiver’s details (Provider’s name) for each message in the list view if provided

  @BDDTEST-EPP-7545
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the list as “[Draft]” for each message in the list view if receiver's details not provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -  Verify whether user able to view the list as “[Draft]” for each message in the list view if receiver's details not provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the list as “[Draft]” for each message in the list view if receiver's details not provided

  @BDDTEST-EPP-7546
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view first few words (based on space available) from the subject of the message for each message in the list view if provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view first few words (based on space available) from the subject of the message for each message in the list view if provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view first few words (based on space available) from the subject of the message for each message in the list view if provided

  @BDDTEST-EPP-7547
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the list as list as “(No subject)” for each message in the list view if subject of the message is  not provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -   Verify whether user able to view the list as list as “(No subject)” for each message in the list view if subject of the message is  not provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the list as list as “(No subject)” for each message in the list view if subject of the message is  not provided

  @BDDTEST-EPP-7548
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view first few words (based on space available) from the body of the message for each message in the list view if provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -  Verify whether user able to view first few words (based on space available) from the body of the message for each message in the list view if provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view first few words (based on space available) from the body of the message for each message in the list view if provided

  @BDDTEST-EPP-7549
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the list as “No body of message” for each message in the list view if body of the message is  not provided
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -   Verify whether user able to view the list as “No body of message” for each message in the list view if body of the message is  not provided

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the list as “No body of message” for each message in the list view if body of the message is  not provided

  @BDDTEST-EPP-7550
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the time (HH:MM) at which the message was saved as draft
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -   Verify whether user able to view the time (HH:MM) at which the message was saved as draft

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the time (HH:MM) at which the message was saved as draft if the date the message was saved as draft is today (today’s date) for each message in the list view

  @BDDTEST-EPP-7551
  @Message_Center
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6145 - Verify whether user able to view the date (MM/DD/YYYY) when the message was saved as draft instead of time
    Scenario: EPIC_EPP-23_STORY_EPP-6145 -   Verify whether user able to view the date (MM/DD/YYYY) when the message was saved as draft instead of time

    Given User launch Patient Portal url		
    And User is logged in to the application
    And User lands on the the screen to send and receive messages
    When User selects the option to view the list of draft messages
    Then User should be able to view the list of draft messages ordered by recent ones at the top
    And User should be able to view the date (MM/DD/YYYY) when the message was saved as draft instead of time if the date the message was saved as draft is not today for each message in the list view
