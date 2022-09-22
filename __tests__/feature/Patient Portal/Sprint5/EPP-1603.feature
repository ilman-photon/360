
Feature: Patient Portal : Appointments - User cannot reschedule  appointments beyond a particular time


  @BDDTEST-EPP-4494
  @Authentication
  @P2
  @Patient_Portal
   @Regression
  @Sprint5
  Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify the user is not able to reschedule the upcoming appointment 4 hours before the time of appointment
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user not able to reschedule the appointment which is in 4 hours before the time of appointment

  @BDDTEST-EPP-4497
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint5
    Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an text message based on their registered phone number when user reshedule upcoming appointment list
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule an appointment 
    And user view the selected location and able to change 
    And user view the selected Date of the appointment and able to change 
    And user view the selected time-slot and able to change
    And user view the selected purpose of visit and able to change 
    And user view the selected Insurance Career and able to change 
    Then user navigates to review the updated details
    And user view an option to reschedule the appointment
    And user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny 
    And user clicks on the confirm botton
    And user receive the text message regarding the rescheduled Appointment
    And user navigated to 'Appointments' screen to see the updated details under upcoming appointments

  @BDDTEST-EPP-4498
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint5
    Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email and text message based on their registered email and phone number when user reshedulle upcoming appointment list
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule an appointment 
    And user view the selected location and able to change 
    And user view the selected Date of the appointment and able to change 
    And user view the selected time-slot and able to change
    And user view the selected purpose of visit and able to change 
    And user view the selected Insurance Career and able to change 
    Then user navigates to review the updated details
    And user view an option to reschedule the appointment
    And user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny 
    And user clicks on the confirm botton
    And user receive an email and text message regarding the rescheduled Appointment
    When user selected on their preferred method of communication
    And user navigated to 'Appointments' screen to see the updated details under upcoming appointments

  @BDDTEST-EPP-4505
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
    Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify the user to reschedule the upcoming appointment 5 hours before the time of the appointment
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user reschedule the appointment which is in 5 hours before the time of the appointment

  @BDDTEST-EPP-4506
  @Authentication
  @Patient_Portal
  @Sprint4
  @Sprint5
    Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email based on their registered mail-id when user reshedulle upcoming appointment list
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule an appointment 
    And user view the selected location and able to change 
    And user view the selected Date of the appointment and able to change 
    And user view the selected time-slot and able to change
    And user view the selected purpose of visit and able to change 
    And user view the selected Insurance Career and able to change 
    Then user navigates to review the updated details
    And user view an option to reschedule the appointment
    And user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny 
    And user clicks on the confirm botton
    And user receive an email regarding the reschedule
    And user navigated to 'Appointments' screen to see the updated details under upcoming appointments

  @BDDTEST-EPP-4510
  @Authentication
  @Patient_Portal
  @Sprint4
  @Sprint5
  Scenario: EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user not able to reschedule the appointment which is in 4 hours before the time of appointment
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4511
  @Authentication
  @Patient_Portal
  @Sprint4
  @Sprint5
  Scenario: EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify  when the service is unavailable
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user not able to reschedule the appointment which is in 4 hours before the time of appointment
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4512
  @Authentication
  @Patient_Portal
  @Sprint4
  @Sprint5
  Scenario: EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user not able to reschedule the appointment which is in 4 hours before the time of appointment
    When User refresh the page 
    Then User navigates to “Appointments” screen

  @BDDTEST-EPP-4513
  @Authentication
  @Patient_Portal
  @Sprint4
  @Sprint5
  Scenario: EPIC_EPP-45_STORY_EPP-1603 - Verify User should not see the any errors script when user clicks F12 on the console
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to “Appointments” menu
    Then user navigates to “Appointments” screen
    And user lands on 'Appointments' screen
    And user should see list of upcoming appointment
    And user should see reschedule and cancel each of them
    And user clicks on the reschedule the appointment
    And user not able to reschedule the appointment which is in 4 hours before the time of appointment
    When user clicks on F12 on the console
    Then user should not to see any errors script
