@BDDSTORY-EPP-2546
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Error message displayed when there are no results for the searched location and date of appointment
  User Story: As a user, I should see a error messages if there are no results for the searched location and selected date of appointment from patient portal.

  Acceptance Criteria:

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User select a location, date of appointment, purpose of visit and insurance carrier combination with no results

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen

  And

  System increases the radius and checks for providers with distance greater than 20 miles to display

  WHEN

  System is not able to display any providers for the combination even after increasing radius

  THEN

  User should be able to view the following error message “No appointment slots based upon your request. Please try again with a different combination.” 

  @BDDTEST-EPP-3310
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the increases of radius and checks for providers with distance greater than 20 miles to display


  @BDDTEST-EPP-3311
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should not see any providers for the combination even after increasing radius


  @BDDTEST-EPP-3312
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."


  @BDDTEST-EPP-3313
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - within "3 seconds"


  @BDDTEST-EPP-3314
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - Without error script when user clicks on F12 on the console


  @BDDTEST-EPP-3315
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the Internet service is unavailable user should see the following error message


  @BDDTEST-EPP-3316
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the service is unavailable user should see the following error message

