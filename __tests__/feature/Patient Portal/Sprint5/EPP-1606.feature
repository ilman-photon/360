
Feature: Patient Portal : Appointments - View Upcoming Appointments

  @BDDTEST-EPP-4518
  @Authentication
  @P1
  @Patient_Portal
  @Regression
    @Sprint5 
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment"
    
    Given user launch the  Patient Portal url		
    And User is logged in to the application
    When User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|

  @BDDTEST-EPP-4519
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    When User clicks on "Directions" button
    Then User should navigated to maps screen

  @BDDTEST-EPP-4520
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them

  @BDDTEST-EPP-4521
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see "Are you sure you want to cancel?" as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    Then User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"

  @BDDTEST-EPP-4522
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see "Are you sure you want to cancel?" as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    And User should see the page loads within "3 seconds"
    Then User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"

  @BDDTEST-EPP-4523
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see "Are you sure you want to cancel?" as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    And User should see the page loads within "3 seconds"
    Then User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-4524
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see "Are you sure you want to cancel?" as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    And the Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4525
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable
    Scenario: "EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should be able to view the following details under each upcoming appointment as belows:
    |"<Date>" field|
    |"<Time>" field|
    |"<Patient’s Name>" field|
    |"<Doctor’s Name>" field|
    |"<Location’s address>" field|
    |"<Location’s Phone number>" field|
    |"Directions" button|
    |"<Purpose of Visit>" field|
    And User should see an option to schedule new appointments
    And User should see Upcoming Appointments with an option to reschedule and cancel each of them
    When User clicks on the option to cancel an appointment
    Then User should see "Are you sure you want to cancel?" as confirmation message
    And User should see "confirm and deny" option
    When User selects on "Confirm" option
    And the service is unavailable
    Then user should see the appropriate error message
