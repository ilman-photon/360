@BDDSTORY-EPP-2501
@Appointments
@P1
@Patient_Portal
@excluded
Feature: Patient Portal : Schedule Appointment from marketing site -  View schedule appointment screen
  User Story: As a user, I should be able to view a screen to search for location and select the date of appointment as well as purpose of visit and insurance.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User navigates to a screen to search for location, select the date of appointment as well as purpose of visit and insurance

  WHEN

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  THEN

  User should be able to view an option to search locations using City or State or Zipcode

  And

  System by default should take the user’s current location if enabled and list results

  And

  User should have the option to allow the system to detect their location (like Locate me) 

  And

  User should be able to view verbiage informing the user enter a location if geo location of the user is not enabled or option to enable their geo location

  And

  User should be able to select the date of appointment (default today’s date)

  And

  User should be able to view the 'Purpose for Visit' field  (List comes from API)

  And

  User should be able to view the option to add their ‘Insurance Carrier’ (List comes from API)

  And

  User should be able to view an option to Search which when clicked will display the results

  And

  User should be able to view the map

  And

  User should be prompted with the inline validation error message “This field is required” if the mandatory fields are not filled

  | Field Names         | Mandatory |
  |---------------------|-----------|
  | Location            | Yes       |
  |---------------------|-----------|
  | Date of Appointment | Yes       |
  |---------------------|-----------|
  | Purpose of Visit    | No        |
  |---------------------|-----------|
  | Insurance Carrier   | No        |

  @BDDTEST-EPP-3083
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Location is not filled.
    Scenario: Verify whether the error message This field is required is displaying when Location is not filled.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And without selecting the location, click the search button. 
    Then user should see the error message This field is required for Location field.

  @BDDTEST-EPP-3084
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Date of Appointment is not filled.
    Scenario: Verify whether the error message This field is required is displaying when Date of Appointment is not filled.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And without selecting the Date of Appointment, click the search button. 
    Then user should see the error message This field is required for Date of Appointment field.

  @BDDTEST-EPP-3085
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501- Verify whether the system is automatically taking the current location if enabled.
    Scenario: Verify whether the system is automatically taking the current location if enabled.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    Then user should see the current location as default, if location is enabled.

  @BDDTEST-EPP-3086
  @Authentication
  @P2
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501- Verify whether the user is able to search the location using City
    Scenario: Verify whether the user is able to search the location using City.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using City option
    Then user should see the list of locations based upon City.

  @BDDTEST-EPP-3087
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using State
    Scenario: Verify whether the user is able to search the location using State.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using State option.
    Then user should see the list of locations based upon State.

  @BDDTEST-EPP-3088
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using Zipcode
    Scenario: Verify whether the user is able to search the location using Zipcode.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using Zipcode option.
    Then user should see the list of locations based upon Zipcode.

  @BDDTEST-EPP-3089
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is having the option to detect their location.
    Scenario: Verify whether the user is having the option to detect their location.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And click the option such as 'Locate me'.
    Then user present location should be displayed.

  @BDDTEST-EPP-3090
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the list of Purpose of visit options are displaying.
    Scenario : Verify whether the list of Purpose of visit options are displaying.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    Then user should see the List of options in the Purpose of visit

  @BDDTEST-EPP-3091
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the list of Insurance Carrier options are displaying.
    Scenario : Verify whether the list of Insurance Carrier options are displaying.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    Then user should see the List of options in the Insurance carrier.

  @BDDTEST-EPP-3092
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2501-Verify whether the 'Search' button is searching and displaying the result.
    Scenario: Verify whether the 'Search' button is searching and displaying the result.
    
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    Then user should see the results.
