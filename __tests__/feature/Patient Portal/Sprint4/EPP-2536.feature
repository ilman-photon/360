@BDDSTORY-EPP-2536
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Search locations in schedule appointment screen
  User Story: As a user, I should be able to search for locations in schedule appointment screen from patient portal.

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

  User should be able to change the location by searching locations using either City or State or Zipcode along with an option to detect their location (Locate me)

  And

  User should be able to select a location based on the search

  And

  System might have to remove the selection made for purpose of visit, insurance carrier, date of appointment and time slot of provider if the updated location does support them and inform the user

  And

  User should see the results i.e. providers with available time slots getting updated based on the change in location

  And

  User should see an error message as in  if the location search criteria is invalid

  @BDDTEST-EPP-3151
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using City along with an option to detect their location (Locate me)
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    And User views an option to search locations using City 
    When User selects location
    Then User changes the City
    And User should see a location based on the City

  @BDDTEST-EPP-3152
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using State along with an option to detect their location (Locate me)
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    And User views an option to search locations using State 
    When User selects location
    Then User changes the State
    And User should see a location based on the State

  @BDDTEST-EPP-3153
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using Zipcode along with an option to detect their location (Locate me)
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    Then User changes the Zipcode
    And User should see a location based on the Zipcode

  @BDDTEST-EPP-3154
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset if user updated the location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    Then User changes the Zipcode
    And User should see a location based on the Zipcode
    When User updates location
    Then User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset

  @BDDTEST-EPP-3155
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should see the results i.e. providers with available time slots getting updated based on the change in location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    When User input invalid the State/ City/ Zipcode
    Then User should see a location based on the State/ City/ Zipcode
    And User should see the results i.e. providers with available time slots getting updated based on the change in location

  @BDDTEST-EPP-3156
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2536-Verify User should see an error message for the location search criteria is invalid as "No results found. Please try again with a different search criteria."
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then User should navigated the results in the Schedule Appointments screen
    And User views the results in the Schedule Appointments screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then User should be prompted with an error message "No results found. Please try again with a different search criteria."
