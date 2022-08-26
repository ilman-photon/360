@BDDSTORY-EPP-1558
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Change Purpose of visit during review
  User Story: As a user, I should be able to change the 'Purpose of Visit' while reviewing the appointment.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User selects the option to change the purpose of visit

  THEN

  User should be able to change the purpose of visit if already provided in  

  Else

  User should be able to select a purpose of visit if not selected as in   

  And

  System might have to remove the selection made for insurance carrier, location, date and time slot of the provider if the updated purpose of visit does not support them and inform the user

  And

  User has to once again review the appointment details as in  

  @BDDTEST-EPP-3050
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment.
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
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment and user view options to change the Purpose of the Visit
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
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to  change the 'Purpose of Visit' while reviewing the appointment to remove the existing Purpose of Visit.
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
