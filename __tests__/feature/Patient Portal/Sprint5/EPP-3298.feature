
Feature: Patient Portal : Dashboard - View upcoming tests and procedures widget


  @BDDTEST-EPP-4627
  @Appointments
  @Patient_Portal
  @Regression
   @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the following details as part of each upcoming test/ procedure
    Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the following details as part of each upcoming test/ procedure

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedure
    When User clicks on the widget with upcoming test/ procedure
    Then User should navigated to "upcoming test/ procedure" screen
    And User should be able to view the following details as below:
    |<Date> field|
    |<Time> field|
    |<Patient’s Name> field|
    |<Doctor’s Name> field|
    |<Location’s address> field|
    |<Location’s Phone number> field|
    |"Directions" button|
    |<Test/ Procedure Name> field|

  @BDDTEST-EPP-4628
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the latest list of tests and procedures that are scheduled in the widget
    Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should see the latest list of tests and procedures that are scheduled in the widget

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedure
    When User clicks on the widget with upcoming test/ procedure
    Then User should navigated to "upcoming test/ procedure" screen
    And User should see the latest list of tests and procedures that are scheduled in the widget

  @BDDTEST-EPP-4629
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking the widget will get navigated to the screen with upcoming tests and procedures
    Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking the widget will get navigated to the screen with upcoming tests and procedures

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedure
    When User clicks on the widget with upcoming test/ procedure
    Then User should navigated to "upcoming test/ procedure" screen

  @BDDTEST-EPP-4630
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking any particular test/ procedure will get navigated to that particular test/ procedure in the screen with upcoming test sand procedures
    Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User on clicking any particular test/ procedure will get navigated to that particular test/ procedure in the screen with upcoming test sand procedures

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedure
    When User clicks on the widget with upcoming test/ procedure
    Then User should navigated to "upcoming test/ procedure" screen
    When User on clicking any particular appointment
    Then User should navigated particular appointment in the screen with upcoming appointments

  @BDDTEST-EPP-4631
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should be able to swipe through to view other upcoming tests and procedures
    Scenario: EPIC_EPP-1_STORY_EPP-3298 - Verify User should be able to swipe through to view other upcoming tests and procedures

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedure
    When User clicks on the widget with upcoming test/ procedure
    Then User should navigated to "upcoming test/ procedure" screen
    When User on clicking any particular appointment
    And User should be able to swipe through to view other upcoming appointments
