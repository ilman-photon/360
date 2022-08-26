@BDDSTORY-EPP-2506
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - View filters in schedule appointment screen
  User Story: As a user, I should be able to view the filters in schedule appointment screen.

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

  User should be able to view the following filters

  | Sno | Filters                                                                                                                                                                                                                                                                        |
  |-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 1   | Languages Spoken (List the different languages of provider)                                                                                                                                                                                                                    |
  |-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 2   | Gender (List the Genders of the provider)                                                                                                                                                                                                                                      |
  |-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 3   | Insurance In/Out of Network (Applicable only if Insurance career was provided in  ) - ‘In Network’ filter option should be selected by default if Insurance carrier is  provided and user can add ‘Out of Network’ filter option to add Providers who are out of the network.  |
  |-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 4   | Available Today (Provider)                                                                                                                                                                                                                                                     |

  And

  User should be able to view an option to clear those filters when applied

  @BDDTEST-EPP-2867
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should be able to view the following filters as below:
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|

  @BDDTEST-EPP-2868
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Language filter
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Language filter
    Then User should see Filtered Language

  @BDDTEST-EPP-2869
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Gender filter
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Gender filter
    Then User should see Filtered Gender

  @BDDTEST-EPP-2870
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Insurance In/Out of Network filter
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Insurance In/Out of Network filter
    Then User should see Filtered Insurance In/Out of Network

  @BDDTEST-EPP-2871
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Available Today (Provider) filter
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Insurance Available Today (Provider) filter
    Then User should see Filtered Available Today (Provider)

  @BDDTEST-EPP-2872
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should see an option to clear those filters when applied
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Insurance Available Today (Provider) filter
    Then User should see Filtered Available Today (Provider)
    And User should see an option to clear the applied filter

  @BDDTEST-EPP-2873
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should see the filter was removed when user clicks on Clear option
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When User selects Insurance Available Today (Provider) filter
    Then User should see Filtered Available Today (Provider)
    And User should see an option to clear the applied filter
    And User should see the filter was removed when user clicks on Clear option

  @BDDTEST-EPP-2874
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters within 3 seconds
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should be able to view the following filters as below:
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|
    When User filter based on selected filter
    Then User should see page load within "3 seconds"

  @BDDTEST-EPP-2875
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Verify User should not see the any errors script when user clicks F12 on the console
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should be able to view the following filters as below:
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|
    When User filter based on selected filter
    Then User should see page load within "3 seconds"
    When User clicks on F12 on the console
    Then User should not to see any errors script

  @BDDTEST-EPP-2876
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should be able to view the following filters as below:
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|
    When User filter based on selected filter
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-2877
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should be able to view the following filters as below:
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|
    When User filter based on selected filter
    Then The service is unavailable
    And User should see the appropriate error message
