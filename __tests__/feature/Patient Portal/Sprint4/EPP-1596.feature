@BDDSTORY-EPP-1596
@Appointments
@P1
@Patient_Portal
@Include
Feature: Patient Portal : Schedule appointment from Patient Portal - Select time slot for appointment
  User Story: As a user, I should be able to select a time slot of a provider to schedule appointment from patient portal.
Acceptance Criteria:
GIVEN User clicks on “Schedule Appointment” CTA from patient portal
And User provides location, select the date of appointment as well as purpose of visit and insurance
And User clicks on the option to Search
And User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in https://eyecare-partners.atlassian.net/browse/EPP-2535 
WHEN User selects a time slot of the provider
THEN User should be navigated to review the appointment details

  @BDDTEST-EPP-3853
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.		
When user clicks on the Schedule Appointment button
And user navigates to the schedule appointment screen
And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
And click on Search button
And user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data
And try to update the Date and Time if already provided
Then user should allow to update the Date and Time.
  
  @BDDTEST-EPP-3855
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.
  Given user launch the Patient portal URL		
When user clicks on the Schedule Appointment button
And user navigates to the schedule appointment screen
And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
And click on Search button
And user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data
And try to update the Date and Time if already provided
Then it should allow to review once again the changed Date and Time in Appointment review screen.