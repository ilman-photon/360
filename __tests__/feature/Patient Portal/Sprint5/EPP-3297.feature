
Feature: Patient Portal : Dashboard - View upcoming appointments widget


  @BDDTEST-EPP-4622
  @Appointments
  @P1
  @Patient_Portal
  @Regression
   @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the following details as part of each upcoming appointment
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming appointments
    When User click on the widget with with upcoming appointments
    Then User should navigated "upcoming appointments" screen
    And User should see the following details as part of each upcoming appointment as below:
    |<Date> field|
    |<Time> field|
    |<Patient’s Name> field|
    |<Doctor’s Name> field|
    |<Location’s address> field|
    |<Location’s Phone number> field|
    |"Directions" button|
    |<Purpose of Visit> field|

  @BDDTEST-EPP-4623
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the latest list of appointments that are scheduled in the widget
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming appointments
    When User click on the widget with with upcoming appointments
    Then User should navigated "upcoming appointments" screen
    And User should see the latest list of appointments that are scheduled in the widget

  @BDDTEST-EPP-4624
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking the widget will get navigated to the screen with upcoming appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming appointments
    When User click on the widget with with upcoming appointments
    Then User should navigated "upcoming appointments" screen

  @BDDTEST-EPP-4625
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking any particular appointment will get navigated to that particular appointment in the screen with upcoming appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming appointments
    When User on clicking any particular appointment
    Then User should navigated particular appointment in the screen with upcoming appointments

  @BDDTEST-EPP-4626
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3297 - Verify User should be able to swipe through to view other upcoming appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming appointments
    When User click on the widget with with upcoming appointments
    Then User should navigated "upcoming appointments" screen
    And User should be able to swipe through to view other upcoming appointments
