
Feature: Patient Portal : Dashboard - View

  @BDDTEST-EPP-4612
  @Appointments
  @Patient_Portal
   @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the option to schedule appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button

  @BDDTEST-EPP-4613
  @Appointments
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should navigated to the "View Schedule Appointment" screen when user selects the option of schedule appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen

  @BDDTEST-EPP-4614
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the widget with upcoming appointments
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

  @BDDTEST-EPP-4615
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should navigated to "upcoming appointment" screen when user clicks the widget with upcoming appointment
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
    When User clicks on the widget with upcoming appointment
    Then User should navigated to "upcoming appointment" screen

  @BDDTEST-EPP-4616
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the widget with upcoming test/ procedures
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with upcoming test/ procedures

  @BDDTEST-EPP-4617
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should navigated to "upcoming test/ procedure" screen when user clicks the widget with upcoming test/ procedure
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

  @BDDTEST-EPP-4618
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the widget with latest prescriptions
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with latest prescriptions

  @BDDTEST-EPP-4619
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should navigated to "latest prescriptions" screen when user clicks the widget with latest prescriptions
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with latest prescriptions
    When User clicks on the widget with latest prescriptions
    Then User should navigated to "latest prescriptions" screen

  @BDDTEST-EPP-4620
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the following verbiage "There are no upcoming test and procedures." in the upcoming test/ procedures widget when there are no appointments
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
    Then User should navigated to the "upcoming test/ procedures" screen
    And User should see the following verbiage "There are no upcoming test/ procedures." in the upcoming test and procedures widget when there are no appointments

  @BDDTEST-EPP-4621
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-1_STORY_EPP-2715 - Verify User should see the following verbiage "There are no prescriptions." in the upcoming latest prescriptions when there are no appointments
    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with latest prescriptions
    When User clicks on the widget with latest prescriptions
    Then User should navigated to the "latest prescriptions" screen
    And User should see the following verbiage "There are no prescriptions." in the upcoming latest prescriptions when there are no appointments
