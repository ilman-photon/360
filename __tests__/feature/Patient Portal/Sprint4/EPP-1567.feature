@BDDSTORY-EPP-1567
@Appointments
@P2
@Patient_Portal
@excluded
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'someone else' - View Appointment Confirmation message
  User Story: As a user, I should be able to view the appointment confirmation message when scheduled for some one else.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance & searches

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  And

  User selects that the appointment is for Someone Else

  WHEN

  User provides the patient details

  THEN

  User should be able to view the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.” ( ECP to provide correct verbiage) - Email/ Text will be triggered by E360+

  | Sno | Fields                       |
  |-----|------------------------------|
  | 1   | Date                         |
  |-----|------------------------------|
  | 2   | Time                         |
  |-----|------------------------------|
  | 3   | Purpose of Visit             |
  |-----|------------------------------|
  | 4   | Doctor                       |
  |-----|------------------------------|
  | 5   | Patient Name                 |
  |-----|------------------------------|
  | 6   | Location                     |
  |-----|------------------------------|
  | 7   | Directions (to the location) |
  |-----|------------------------------|
  | 8   | Location’s Phone number      |

  And

  User should be able to view the option to add the appointment to my calendar

  And

  User should be able to view the text "Is this a medical emergency?" which when hovered over should see the following text "If this is a medical emergency, please call 911". 

  And

  User should be able to view an option to redirect to patient portal home page

  And

  User should receive an email/ text message regarding appointment confirmation based on preferred mode of communication selected in  

  ( ECP to provide email/ text content) 

  @BDDTEST-EPP-3320
  @Appointments
  @P1
  @Patient_Portal
  @included
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1567-To verify whether the user is able to choose Appointment for Someone else


  @BDDTEST-EPP-3321
  @Appointments
  @P1
  @Patient_Portal
  @included
  @Regression
  @Sprint4
  Scenario: Verify whether the user is able to add the appointment to calender and check whether its added in the calender.


  @BDDTEST-EPP-3322
  @Appointments
  @P2
  @Patient_Portal
@excluded
  @Sprint4
  Scenario: Verify whether the text Is this the medical emergency? is displaying


  @BDDTEST-EPP-3323
  @Appointments
  @P2
  @Patient_Portal
@excluded
  @Sprint4
  Scenario: Verify whether the text If this is a medical emergency, please call 911 is displaying when we mouse hover the text Is this the medical emergency?


  @BDDTEST-EPP-3324
  @Appointments
  @P2
  @Patient_Portal
@excluded
  @Sprint4
  Scenario: Verify whether the user having the option to redirect to Patient portal home page after appointment schedule.


  @BDDTEST-EPP-3325
  @Appointments
  @P1
  @Patient_Portal
@excluded
  @Regression
  @Sprint4
  Scenario: Verify whether the Confirmation Email is receiving to the user after successful appointment schedule. (Preferred mode = Email)


  @BDDTEST-EPP-3326
  @Appointments
  @P1
  @Patient_Portal
@excluded
  @Regression
  @Sprint4
  Scenario: Verify whether the Confirmation Text Message is receiving to the user after successful appointment schedule. (Preferred mode = Phone number)

