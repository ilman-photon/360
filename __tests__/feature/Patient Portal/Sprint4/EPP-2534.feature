@BDDSTORY-EPP-2534
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Search location and select date
  User Story: As a user, I should be able to search for location and select the date of appointment as well as purpose of visit and insurance from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  WHEN

  User selects a location, date of appointment, purpose of visit (optional) and insurance carrier (optional)

  THEN

  User should be able to click on the option to Search

  And

  User should be able to view the results  which would be based on user’s selected location, date of appointment, purpose of visit if provided and insurance carrier if provided.

  @BDDTEST-EPP-3100
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.


  @BDDTEST-EPP-3101
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.


  @BDDTEST-EPP-3102
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the date of appointment.


  @BDDTEST-EPP-3103
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit.


  @BDDTEST-EPP-3104
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the insurance carrier.

