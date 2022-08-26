@BDDSTORY-EPP-1545
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Error messages displayed when search criteria is not valid
  User Story: As a user, I should be able to view error messages when search criteria provided is not valid.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And 

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  WHEN

  User provides an incorrect State/ City/ Zipcode 

  THEN

  User should be prompted with an error message “No results found. Please try again with a different search criteria.” 

  @BDDTEST-EPP-2794
  @Authentication
  @P2
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1545- Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect City name.
    Scenario: Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect City name.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the incorrect city name
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.

  @BDDTEST-EPP-2795
  @Authentication
  @P2
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1545- Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect Zipcode.
    Scenario:  Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect Zipcode name.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the incorrect Zipcode
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.

  @BDDTEST-EPP-2796
  @Authentication
  @P2
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1545- Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect State name.
    Scenario:  Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect State name.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the incorrect State name
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.
