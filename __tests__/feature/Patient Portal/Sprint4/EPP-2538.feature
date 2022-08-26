@BDDSTORY-EPP-2538
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Apply filters in schedule appointment screen
  User Story: As a user, I should be able to apply the filters which will update the results accordingly from patient portal.

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

  User should be able to select from the filters mentioned in  

  And

  User should be able to see the filters being dynamic i.e filter options get updated based on selecting other filter options

  And

  User should see the results i.e. providers with available time slots getting updated based on the filters applied

  And

  User should be able to clear the applied filters

  @BDDTEST-EPP-3287
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2538 - Verify user able to apply the filters which will update the results accordingly from the patient portal.
    Feature: Schedule appointment from Patient Portal - Apply filters in schedule appointment screen
    Scenario: "EPIC_EPP-44_STORY_EPP-2538 - Verify user able to apply the filters which will update the results accordingly from the patient portal."
    
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to Appointments menu
    Then user navigates to Appointments screen
    And user lands on 'Appointments' screen
    And user views the schedule new appointments link
    And user clicks on the schedule new appointments
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the Filters button
    And user clicks on the filter button
    And user views the filter for Available Today (Provider)
    And user views the filter for Language of Provider
    And user views the filter for Gender of Provider
    And user views the filter for Insurance In/Out of Network 
    And user selects the filters 
    And user applies the filters

  @BDDTEST-EPP-3288
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly.
    Feature: Schedule appointment from Patient Portal - View filters in schedule appointment screen
    Scenario: "EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly."
    
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the Filters button
    And user clicks on the filter button
    And user views the filter for Available Today (Provider)
    And user views the filter for Language of Provider
    And user views the filter for Gender of Provider
    And user views the filter for Insurance In/Out of Network 
    And user selects the filters 
    And user applies the filters
    And user gets the updated result

  @BDDTEST-EPP-3289
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter.
    Feature: Schedule appointment from Patient Portal - View filters in schedule appointment screen
    Scenario: "EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter."
    
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the Filters button
    And user clicks on the filter button
    And user views the filter for Available Today (Provider)
    And user views the filter for Language of Provider
    And user views the filter for Gender of Provider
    And user views the filter for Insurance In/Out of Network 
    And user selects the filters 
    And user applies the filters
    And user gets the updated result
    And user removes the filter
