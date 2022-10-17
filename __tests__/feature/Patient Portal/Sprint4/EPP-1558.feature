Feature: Patient Portal : Schedule Appointment from marketing site - Change Purpose of visit during review
User Story: As a user, I should be able to change the 'Purpose of Visit' while reviewing the appointment.

@BDDTEST-EPP-3050
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment.
  Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
   Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view options to change the Purpose of the Visit
    And user selects the option to change the purpose of the visit
    And user changes the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  Examples: 

@BDDTEST-EPP-3051
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment and user view options to change the Purpose of the Visit
  Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
   Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view options to change the Purpose of the Visit
    And user selects the option to change the purpose of the visit
    And user views the purpose of the visit as blank 
    And user selects the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  Examples: 

@BDDTEST-EPP-3052
@Appointments
@Authentication
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment. and the user views the purpose of visit as blank when the user not entered

@BDDTEST-EPP-3053
@Appointments
@Authentication
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to  change the 'Purpose of Visit' while reviewing the appointment to remove the existing Purpose of Visit.
  Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
   Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view options to change the Purpose of the Visit
    And user not select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  Examples: 



