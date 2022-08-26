@BDDSTORY-EPP-2527
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Select/ Update Insurance carrier in Schedule appointment screen
  User Story: As a user, I should be able to select/ update the purpose of visit in schedule appointment screen.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

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

  System might have to remove the selection made for purpose of visit, location, date and time slot of the provider if the updated insurance carrier does support them and inform the user

  @BDDTEST-EPP-3317
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2527-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit.
    And dont select the Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit.
    And try to add the Insurance carrier
    Then user should allow to add the Insurance carrier.

  @BDDTEST-EPP-3318
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2527-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data
    And try to update the Insurance carrier if already provided
    Then user should allow to update the Insurance carrier.

  @BDDTEST-EPP-3319
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2527-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data
    And try to update the Insurance carrier, which is not supported.
    Then already selected  Location, Date of Appointment, Purpose of visit should get removed.
