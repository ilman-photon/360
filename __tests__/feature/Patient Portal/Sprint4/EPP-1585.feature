@BDDSTORY-EPP-1585
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Select purpose of visit
  User Story: As a user, I should be able to select the purpose of visit for the appointment to be scheduled from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  WHEN

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  THEN

  User should be able to select the ‘Purpose of Visit’ which is a optional field

  @BDDTEST-EPP-3096
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1585 -Verify whether the user able to view  purpose of visit on the screen
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then User lands on to the screen
    And user view and search  the location
    When user view  the date of appointment 
    And user view the purpose of visit dropdown field
    Then user view  Insurance field

    Examples:
    |Location|Date|Purpose of Visit|Insurance|
    |NewYork|17-August-2022|Eye exam|Aetna|

  @BDDTEST-EPP-3097
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1585 -Verify if user able to select the ‘Purpose of Visit’
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then User lands on to the screen
    And user view and search  the location
    When user select  the date of appointment 
    And user view the" Purpose of visit"
    Then user select the Purpose of Visit in dropdown field

    Examples:
    |Purpose of Visit|
    |Eye exam|

  @BDDTEST-EPP-3098
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1585 -Verify if user able to view optional label under ‘Purpose of Visit’ field
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then User lands on to the screen
    And user view and search  the location
    When user select  the date of appointment 
    And user view the purpose of visit field 
    Then user able to select the Purpose of Visit
    And user view optional label under Purpose of Visit field

    Examples:
    |Purpose of Visit|
    |Eye exam|
