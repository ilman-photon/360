@BDDSTORY-EPP-2503
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Search location and select date
  User Story: As a user, I should be able to search for location and select the date of appointment as well as purpose of visit and insurance.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance

  WHEN

  User selects a location, date of appointment, purpose of visit (optional) and insurance carrier (optional)

  THEN

  User should be able to click on the option to Search

  And

  User should be able to view the results  which would be based on user’s selected location, date of appointment, purpose of visit if provided and insurance carrier if provided.

  @BDDTEST-EPP-2801
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.
    Feature: Schedule Appointment from marketing site - Search location and select date
    Scenario: "EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier."
    
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the insurance carrier.
    
    Examples:

  @BDDTEST-EPP-2802
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered
    Feature: Schedule Appointment from marketing site - Search location and select date
    Scenario: "EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered."
    
    Given user launch the Marketing Site URL		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit as blank 
    And the user not entered the purpose of the visit
    
    Examples:

  @BDDTEST-EPP-2803
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered
    Feature: Schedule Appointment from marketing site - Search location and select date
    Scenario: "EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered."
    
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the insurance carrier as blank. 
    And user has not entered in the insurance carrier 
    
    Examples:
