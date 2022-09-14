
Feature: Patient Portal : Dashboard - View prescriptions widget
  @BDDTEST-EPP-4632
  @Appointments
  @Patient_Portal
  @Regression
  @included
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3299 - Verify User should see the following details as part of each prescriptions

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with prescriptions
    When User clicks on the widget with prescriptions
    Then User should navigated to "prescriptions" screen
    And User should be able to view the following details as below:
    |<Prescription Type> field|
    |<Prescribed on> field|
    |<Expires on> field|
    |<Prescribed by> field|
    |<Eye - Sph - Cyl - Axis - Add> dropdown|

  @BDDTEST-EPP-4634
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3299 - Verify User on clicking the widget will get navigated to the screen with upcoming prescriptions

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with prescriptions
    When User clicks on the widget with prescriptions
    Then User should navigated to "prescriptions" screen

  @BDDTEST-EPP-4635
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3299 - Verify User on clicking any particular test/ procedure will get navigated to that particular test/ procedure in the screen with upcoming test sand procedures

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with prescriptions
    When User clicks on the widget with prescriptions
    Then User should navigated to "prescriptions" screen
    When User on clicking any particular appointment
    Then User should navigated particular appointment in the screen with upcoming appointments

  @BDDTEST-EPP-4636
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-3299 - Verify User should be able to swipe through to view other upcoming prescriptionss

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with prescriptions
    When User clicks on the widget with prescriptions
    Then User should navigated to "prescriptions" screen
    When User on clicking any particular appointment
    And User should be able to swipe through to view other upcoming appointments
