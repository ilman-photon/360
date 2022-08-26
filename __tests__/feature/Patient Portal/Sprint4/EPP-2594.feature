@BDDSTORY-EPP-1594
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Change Purpose of visit during review
  User Story: As a user, I should be able to change the 'Purpose of Visit' while reviewing the appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

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

  @BDDTEST-EPP-3809
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1594-To verify whether the user is allowed to change the Purpose of visit in Appointment Review screen.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit andInsurance carrier data
    And try to update the Purpose of visit if already provided
    Then user should allow to update the Purpose of visit.

  @BDDTEST-EPP-3810
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1594-Verify whethet the user is able to select the Purpose of visit, if not selected in Previous page.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to add the Purpose of visit
    Then user should allow to add the Purpose of visit.

  @BDDTEST-EPP-3811
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1594-Verify whether the already selected data are getting removed if we update the other Purpose of visit if not supported.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the Purpose of visit, which is not supported.
    Then already selected  Location, Date of Appointment, Insurance carrier should get removed.

  @BDDTEST-EPP-3812
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1594-Verify whether the user is able to review the Appointment details after updating the Purpose of visit.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit andInsurance carrier data
    And try to update the Purpose of visit if already provided
    Then it should allow to review once again the changed Purpose of visit in Appointment review screen.
