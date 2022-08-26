@BDDSTORY-EPP-1544
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Search and Filter locations
  User Story: As a user, I should be able to search for location using certain criteria

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  WHEN

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  THEN

  System by default should take the user’s current location if enabled 

  Else

  User should be able to search for locations using either City or State or Zipcode 

  And

  User should have the option to allow the system to detect their location (like Locate me) 

  And

  User should be able to select a location based on the search

  @BDDTEST-EPP-2784
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544- Verify whether the Schedule your Eye Exam button in market site is navigating to the Appointment schedule page.
    Scenario: Verify whether the Schedule your Eye Exam button in market site is navigating to the Appointment schedule page.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should see the Appointment schedule page

  @BDDTEST-EPP-2785
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544- Verify whether the system is automatically taking the current location if enabled.
    Scenario: Verify whether the system is automatically taking the current location if enabled.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    Then user should see the current location as default, if location is enabled.

  @BDDTEST-EPP-2786
  @Authentication
  @P1
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544- Verify whether the user is able to search the location using City
    Scenario: Verify whether the user is able to search the location using City.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using City option
    Then user should see the list of locations based upon City.

  @BDDTEST-EPP-2787
  @Authentication
  @P1
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using State
    Scenario: Verify whether the user is able to search the location using State.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using State option.
    Then user should see the list of locations based upon State.

  @BDDTEST-EPP-2788
  @Authentication
  @P1
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using Zipcode
    Scenario: Verify whether the user is able to search the location using Zipcode.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And search the location using Zipcode option.
    Then user should see the list of locations based upon Zipcode.

  @BDDTEST-EPP-2789
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
Appointments
  Scenario: EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is having the option to detect their location.


  @BDDTEST-EPP-2790
  @Authentication
  @P1
  @Patient_Portal
  @Regression
Appointments
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to select the searched location
    Scenario: Verify whether the user is able to select the searched location
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the City name
    And click on Search.
    And user will see the location based upon city name.
    Then user should allow to select any listed location.

  @BDDTEST-EPP-2791
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544- Verify user able to see the mentioned functionality on Schedule appointment page.
    Scenario: Verify user able to see the below mentioned functionality on Schedule appointment page.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should see the location, date of appointment, Purpose of the visit, Insurance name

  @BDDTEST-EPP-2792
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is having the option to detect their location.
    Scenario: Verify whether the user is having the option to detect their location.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And click the option such as 'Locate me'.
    Then user present location should be displayed.
