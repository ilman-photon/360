@BDDSTORY-EPP-2532
@Appointments
@P1
@Patient_Portal
@Include
Feature: Patient Portal : Schedule appointment from Patient Portal  - View schedule appointment screen
  User Story: As a user, I should be able to view a screen to search for location and select the date of appointment as well as purpose of visit and insurance from patient portal.
  Acceptance Criteria: 
  GIVEN User clicks on “Schedule Appointment” CTA from patient portal
  And User navigates to a screen to search for location, select the date of appointment as well as purpose of visit and insurance
  WHEN User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance
  THEN User should be able to view an option to search locations using City or State or Zipcode
  And System by default should take the user’s current location if enabled and list results
  And User should have the option to allow the system to detect their location (like Locate me) 
  And User should be able to view verbiage informing the user enter a location if geo location of the user is not enabled or option to enable their geo location
  And User should be able to select the date of appointment (default today’s date) 
  And User should be able to view the 'Purpose for Visit' field  (List comes from API)
  And User should be able to view the option to add their ‘Insurance Carrier’ (List comes from API)
  And User should be able to view an option to Search which when clicked will display the results
  And User should be able to view the map 
  And User should be prompted with the inline validation error message “This field is required” if the mandatory fields are not filled
  | Field Names         | Mandatory |
  |---------------------|-----------|
  | Location            | Yes       |
  |---------------------|-----------|
  | Date of Appointment | Yes       |
  |---------------------|-----------|
  | Purpose of Visit    | No        |
  |---------------------|-----------|
  | Insurance Carrier   | No        |

  @BDDTEST-EPP-3117
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532- Verify if the user able to see the below mentioned functionality on Schedule appointment page.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And the user should see the search location, date of appointment, Purpose of the visit, Insurance Carrier

  @BDDTEST-EPP-3118
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the error message This field is required is displaying when Date of Appointment is not filled.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on Schedule Appointment link
    Then User lands on to the Schedule Appointment screen
    When the user without selecting the Date of Appointment, click the search button. 
    Then user should see the error message This field is required for Date of Appointment field.

  @BDDTEST-EPP-3119
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532- Verify whether the system is automatically taking the current location if enabled.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on Schedule Appointment link
    Then User lands on to the Schedule Appointment screen
    And user should see the current location as default, if location is enabled.

  @BDDTEST-EPP-3120
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532- Verify whether the user is able to search the location using City
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on Schedule Appointment link
    Then User lands on to the Schedule Appointment screen
    And search the location using City option
    Then user should see the list of locations based upon City.

  @BDDTEST-EPP-3121
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EEPIC_EPP-44_STORY_EPP-2532-Verify whether the user is able to search the location using State
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on Schedule Appointment link
    Then User lands on to the Schedule Appointment screen
    And search the location using State option.
    Then user should see the list of locations based upon State.

  @BDDTEST-EPP-3122
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the user is able to search the location using Zipcode
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And search the location using the Zipcode option.
    Then the user should see the list of locations based upon Zipcode.

  @BDDTEST-EPP-3123
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the user is having the option to detect their location.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And click the option such as use my current location link
    Then the user sees the his/her current location in location field.

  @BDDTEST-EPP-3124
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the list of Purpose of visit options are displaying.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    Then the user should see the List of options in the Purpose of visit dropdown

  @BDDTEST-EPP-3125
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the list of Insurance Carrier options are displaying.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    Then user should see the List of options in the Insurance carrier.

  @BDDTEST-EPP-3126
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2532-Verify whether the 'Search' button is searching and displaying the result.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And the user should select the location
    And the user should select the Date of Appointment
    And the user should select the Purpose of the visit
    And the user should select the Insurance carrier.
    And click on the Search button
    Then the user should see the results.
