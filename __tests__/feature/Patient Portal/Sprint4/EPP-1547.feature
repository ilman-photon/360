@BDDSTORY-EPP-1547
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Select date of appointment
  User Story: As a user, I should be able to select a date for the appointment to view the list of providers and their location with available time slots.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  WHEN

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  THEN

  System by default should take today’s date as date of appointment

  And

  User should be able to change the date of appointment 

  And

  User should not be able to select past dates (< today)

  And

  System should not allow the user to select a date that is 3 months greater than today’s date

  @BDDTEST-EPP-2821
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to view system date by default set as todays date


  @BDDTEST-EPP-2822
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to change the date of appointment


  @BDDTEST-EPP-2823
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1547 - Verify if user not be able to select past dates (< today)


  @BDDTEST-EPP-2824
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1547 -Verify if user not allow to select a date that  3 months greater than today’s date


  @BDDTEST-EPP-2825
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to select any date within 3 month


  @BDDTEST-EPP-2826
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view   click 'Schedule your Eye Exam' CTA from Marketing site


  @BDDTEST-EPP-2827
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to select the ‘Purpose of Visit’


  @BDDTEST-EPP-2828
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view optional label under ‘Purpose of Visit’field

