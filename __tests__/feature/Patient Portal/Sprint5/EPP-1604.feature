
Feature: Patient Portal : Appointments - Cancel Upcoming Appointments
  User Story: As a user, I should be able to cancel an upcoming appointment.

@BDDTEST-EPP-4667
  @Authentication
  @Automation
  @Patient_Portal
  @Regression.P1
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should see “Are you sure you want to cancel?” as confirmation message
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message

  @BDDTEST-EPP-4668
  @Authentication
  @Automation
  @Patient_Portal
  @Regression.P1
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should see "confirm and deny" option
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option

  @BDDTEST-EPP-4669
  @Authentication
  @Automation
  @Patient_Portal
  @Regression.P1
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should receive an email based on their registered mail-id regarding the cancellation
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see "We do not list canceled appointments anywhere in Patient Portal" as a note
    And User navigates to “Appointments” screen
    And User should receive an email based on their registered mail-id regarding the cancellation

  @BDDTEST-EPP-4670
  @Authentication
  @Automation
  @Patient_Portal
  @Regression.P1
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should receive a text based on their registered mobile number regarding the cancellation
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Deny" option
    Then User navigates to “Appointments” screen
    And User should receive a text based on their registered mobile number regarding the cancellation

  @BDDTEST-EPP-4671
  @Authentication
  @Automation
  @Patient_Portal
  @Regression.P1
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should be able to deny and gets redirected back to “Appointments” screen without appointment being cancelled
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Deny" option
    Then User navigates to “Appointments” screen
    And user should see the appointment is not cancelled

  @BDDTEST-EPP-4673
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see "We do not list canceled appointments anywhere in Patient Portal" as a note
    And User navigates to “Appointments” screen
    And User should receive an email based on their registered mail-id regarding the cancellation
    And the Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4674
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify  when the service is unavailable
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see "We do not list canceled appointments anywhere in Patient Portal" as a note
    And User navigates to “Appointments” screen
    And User should receive an email based on their registered mail-id regarding the cancellation
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4675
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see "We do not list canceled appointments anywhere in Patient Portal" as a note
    And User navigates to “Appointments” screen
    And User should receive an email based on their registered mail-id regarding the cancellation
    And the service is unavailable
    Then user should see the appropriate error message
    When User refresh the page 
    Then User navigates to “Appointments” screen

  @BDDTEST-EPP-4676
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-3_STORY_EPP-1604-Verify User should not see the any errors script when user clicks F12 on the console
    Given user launch the "XXX" url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see “Are you sure you want to cancel?” as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see "We do not list canceled appointments anywhere in Patient Portal" as a note
    And User navigates to “Appointments” screen
    And User should receive an email based on their registered mail-id regarding the cancellation
    And User should see the page loads within "3 seconds"
    When user clicks on F12 on the console
    Then user should not to see any errors script
