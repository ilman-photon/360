@BDDSTORY-EPP-1602
@Appointments
@EPP_Sprint_5
@P1
@PPP_Phase_1
@Patient_Portal
Feature: Patient Portal : Appointments - Reschedule Appointments
  User Story: As a user, I should be able to reschedule the upcoming appointment.

  Acceptance Criteria:

  GIVEN

  User is in “Appointments” screen

  And

  User should be able to view the following  

  WHEN

  User clicks on the option to reschedule an appointment

  THEN

  User should be navigated to the screen where he/ she selects the Location, Date and Time with provider, purpose of visit and insurance carrier as in  

  And

  User should be able to view the selected location and be able to change them

  And

  User should be able to view the selected Date of the appointment and be able to change them

  And

  User should be able to view the selected time-slot with provider and be able to change them

  And

  User should be able to view the selected purpose of visit and be able to change them if provided

  And

  User should be able to view the selected Insurance Career and be able to change them if provided

  And

  System based on the above changes might remove the user’s previous selection of location, date and time with provider, purpose of visit (if provided) and insurance carrier (if provided) and inform user

  And

  User should be able asked to review the updated details as in  

  And

  User should be able to view an option to reschedule the appointment

  And

  User should be prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny 

  And

  User should be able to confirm and appointment details get updated accordingly where ever applicable

  And

  User should receive an email/ text message based on their preferred method of communication regarding the reschedule 

  Email/ Text content:

  Hello $PATIENT_FIRSTNAME$, 

  Your appointment with $PRACTICE$ has been rescheduled to:   

  $APPT_INFO$  


  Sincerely, 

  The Doctors and Team of  

  $PRACTICE$ 

  And

  User is navigated back to “Appointments” screen to see the updated details under upcoming appointments

  Else

  User should be able to deny and gets redirected back to “Appointments” screen without appointment being rescheduled

  @BDDTEST-EPP-4483
  @Authentication
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
  @included
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an email based on their registered mail-id when user reschedule upcoming appointment list
    
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

  @BDDTEST-EPP-4484
  @Authentication
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
  @included
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an email based on their registered phone number when user reshedulle upcoming appointment list
    
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

  @BDDTEST-EPP-4485
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
  @included
    Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an text message based on their registered phone number when user reshedulle upcoming appointment list
    
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

  @BDDTEST-EPP-4486
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
  @included
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user able to see “Are you sure you want to reschedule?” as a confirmation message
    
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

  @BDDTEST-EPP-4487
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @included
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify the user is able to see the "confirm and deny" option
    
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
    And user prompted with a confirmation message “Are you sure you want to reschedule?” with an option to confirm and deny

  @BDDTEST-EPP-4488
  @@Automation
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @Sprint5
  @included
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to the “Appointments” screen when the user reschedules the upcoming appointment list
    
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
    And user clicks on the Deny button
    And user navigated to the 'Appointments' screen to see the updated details under upcoming appointments

  @BDDTEST-EPP-4489
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @excluded
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to “Appointments” screen when user reschedule upcoming appointment list within 3 seconds
    
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
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-4490
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @excluded
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    
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
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4491
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @excluded
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify  when the service is unavailable
    
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
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-4492
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @excluded
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page
    
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
    When User refresh the page 
    Then User navigates to “Appointments” screen

  @BDDTEST-EPP-4493
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  @Sprint5
  @excluded
  Scenario: EPIC_EPP-45_STORY_EPP-1602 - Verify User should not see the any errors script when user clicks F12 on the console
    
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
    When user clicks on F12 on the console
    Then user should not to see any errors script
