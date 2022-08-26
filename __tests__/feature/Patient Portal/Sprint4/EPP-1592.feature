@BDDSTORY-EPP-1592
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Review appointment details
  User Story: As a user, I should be able to review the appointment details while scheduling appointment from patient portal

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

  WHEN

  User lands on the screen to review the appointment details

  THEN

  User should be able to view the selected location along with the provider with an option to change them

  And

  User should be able to view the selected Date and Time of the appointment with an option to change them

  And

  User should be able to view the selected purpose of visit with an option to change them if provided

  And

  User should be able to view the selected Insurance Career with an option to change them if provided

  And

  User should be able to view a progress bar to identify where they are with scheduling the appointment

  And

  User should be able to view an option to go back to the previous screen

  And

  User should be able to view an option to schedule the appointment

  @BDDTEST-EPP-3358
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1592 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date and Time
    And user view options to change the Purpose of the Visit
    And user view options to change the insurance.
    And user view options to change selected provider
    And user view options to change selected location
    And user view an option to schedule the appointment

    Examples:
