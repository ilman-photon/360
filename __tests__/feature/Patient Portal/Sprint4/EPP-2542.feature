@BDDSTORY-EPP-2542
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - View provider's available time slots for a week
  User Story: As a user, I should be able to view the list of time slots a provider is available for a week from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  WHEN

  User clicks on ‘View all availability’ CTA

  THEN

  User should be able to see the doctor’s name with image and address of the location

  And

  User should be able to view the available time slots of that doctor listed for the whole week day wise

  And

  User should be able to view the option to navigate to next week as well as previous week (Not past dates)

  And

  User should be able to select a time-slot listed there to schedule the appointment

  And

  System should not allow the user to select a date that is 3 months greater than today’s date

  @BDDTEST-EPP-3293
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen


  @BDDTEST-EPP-3294
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor's name with image


  @BDDTEST-EPP-3295
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise


  @BDDTEST-EPP-3296
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the user is able to select the available time slot and schedule the appointment.

