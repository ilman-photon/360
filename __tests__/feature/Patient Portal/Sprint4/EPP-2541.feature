@BDDSTORY-EPP-2541
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Select/ Update Insurance carrier in Schedule appointment screen
  User Story: As a user, I should be able to select/ update the insurance carrier in schedule appointment screen from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  WHEN

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  THEN

  User should be able to change the insurance carrier if already provided

  Else

  User should be able to select an insurance carrier if not selected in  

  And

  System might have to remove the selection made for purpose of visit, location, date and time slot of the provider if the updated insurance carrier does not support them and inform the user

  @BDDTEST-EPP-3290
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.


  @BDDTEST-EPP-3291
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.


  @BDDTEST-EPP-3292
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.

