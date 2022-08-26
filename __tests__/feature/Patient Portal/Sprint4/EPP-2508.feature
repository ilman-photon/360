@BDDSTORY-EPP-2508
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Change the date of appointment in schedule appointment screen
  User Story: As a user, I should be able to change the date of appointment in schedule appointment screen.

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

  User should be able to change the date of appointment 

  And

  User should not be able to select past dates (< today)

  And

  System should not allow the user to select a date that is 3 months greater than today’s date

  @BDDTEST-EPP-2900
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.

  @BDDTEST-EPP-2901
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City with the selected location

  @BDDTEST-EPP-2902
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location


  @BDDTEST-EPP-2903
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using  Zipcode with the selected location

  @BDDTEST-EPP-2904
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location

  @BDDTEST-EPP-2905
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options

  @BDDTEST-EPP-2906
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date

  @BDDTEST-EPP-2907
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit

  @BDDTEST-EPP-2908
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit
    And user view options to change the insurance.

  @BDDTEST-EPP-2909
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered
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
    When the user not entered the purpose of the visit

  @BDDTEST-EPP-2910
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered


  @BDDTEST-EPP-2953
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user should be able to change the date of appointment
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    Then user changes the date of appointment

  @BDDTEST-EPP-2954
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user should not be able to select past dates from current date
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    Then user should validate user should not be able to select past dates from current date

  @BDDTEST-EPP-2971
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2508 - Verify the user should not be able to select a date that is 3 months greater than current date
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    Then user should validate user should not be able to select date that is 3 months greater than current date
