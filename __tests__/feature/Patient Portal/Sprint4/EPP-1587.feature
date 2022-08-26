@BDDSTORY-EPP-1587
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Search locations
  User Story: As a user, I should be able to search for location using certain criteria while scheduling appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  WHEN

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance as in  

  THEN

  System by default should take the user’s current location if enabled 

  Else

  User should be able to search for locations using either City or State or Zipcode 

  And

  User should have the option to allow the system to detect their location (like Locate me) 

  And

  User should be able to select a location based on the search

  @BDDTEST-EPP-3127
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587- Verify whether the system is automatically taking the current location if enabled.


  @BDDTEST-EPP-3128
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587- Verify whether the user is able to search the location using City
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And Enter a city name and clicks on search button
    Then the user should see the list of locations based on City.

    Example:
    ||

  @BDDTEST-EPP-3129
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using State
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And Enter a state name and clicks on the search button
    Then the user should see the list of locations based upon State.

    Example:
    ||

  @BDDTEST-EPP-3130
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using Zipcode
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And Enter a valid zip code and clicks on the search button
    Then the user  see the list of locations based upon Zipcode.

    Example:
    ||

  @BDDTEST-EPP-3131
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is having the option to detect their location.
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When the user clicks on use my current location link
    Then the user sees the current location 

    Example:
    ||

  @BDDTEST-EPP-3132
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to select the searched location
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And enter the City name
    And click on Search.
    And user will see the location based upon city name.
    Then user should allow to select any listed location.

    Example:
    ||

  @BDDTEST-EPP-3280
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1587- Verify user able to see the below mentioned functionality on Schedule appointment page.  Search for location Date of appointment Purpose of visit Insurance...
    EPIC_EPP-44_STORY_EPP-1587- Verify user able to see the below mentioned functionality on Schedule appointment page.



    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    Then user should see the location, date of appointment, Purpose of the visit, Insurance name
