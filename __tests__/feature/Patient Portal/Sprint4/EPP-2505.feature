@BDDSTORY-EPP-2505
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Search locations in schedule appointment screen
  User Story: As a user, I should be able to search for locations in schedule appointment screen.

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

  User should be able to change the location by searching locations using either City or State or Zipcode along with an option to detect their location (Locate me)

  And

  User should be able to select a location based on the search

  And

  System might have to remove the selection made for purpose of visit, insurance carrier, date of appointment and time slot of provider if the updated location does support them and inform the user

  And

  User should see the results i.e. providers with available time slots getting updated based on the change in location

  And

  User should see an error message as in  if the location search criteria is invalid

  @BDDTEST-EPP-2857
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using City along with an option to detect their location (Locate me)
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using City 
    When User selects location
    Then User changes the City
    And User should see a location based on the City

  @BDDTEST-EPP-2858
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using State along with an option to detect their location (Locate me)
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using State 
    When User selects location
    Then User changes the State
    And User should see a location based on the State

  @BDDTEST-EPP-2859
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using Zipcode along with an option to detect their location (Locate me)
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    Then User changes the Zipcode
    And User should see a location based on the Zipcode

  @BDDTEST-EPP-2860
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset if user updated the location
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    Then User changes the Zipcode
    And User should see a location based on the Zipcode
    When User updates location
    Then User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset

  @BDDTEST-EPP-2861
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should see the results i.e. providers with available time slots getting updated based on the change in location
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    When User input invalid the State/ City/ Zipcode
    Then User should see a location based on the State/ City/ Zipcode
    And User should see the results i.e. providers with available time slots getting updated based on the change in location

  @BDDTEST-EPP-2862
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should see an error message for the location search criteria is invalid as "No results found. Please try again with a different search criteria."
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then User should be prompted with an error message "No results found. Please try again with a different search criteria."

  @BDDTEST-EPP-2863
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to select a location based on the search within 3 seconds
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then User should see the page loads within "3 seconds"
    And User should see a location based on the State/ City/ Zipcode

  @BDDTEST-EPP-2864
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Verify User should not see the any errors script when user clicks F12 on the console
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then User should see the page loads within "3 seconds"
    And User should see a location based on the State/ City/ Zipcode
    When User clicks on F12 on the console
    Then User should not to see any errors script

  @BDDTEST-EPP-2865
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then The internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-2866
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the “Schedule your Eye Exam” button
    Then User should navigated to the search screen
    And User enters the location
    And User selects the date of appointment 
    And User selects the purpose of the visit
    And User enters the insurance name
    When User clicks on the Search button
    Then User should navigated the results in the "Schedule Appointments" screen
    And User views the results in the "Schedule Appointments" screen
    And User views the selected location.
    And User views an option to search locations using Zipcode 
    When User selects location
    And User input invalid the State/ City/ Zipcode 
    Then The service is unavailable
    And User should see the appropriate error message
