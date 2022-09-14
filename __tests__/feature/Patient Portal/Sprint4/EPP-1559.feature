@BDDSTORY-EPP-1559
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Change Location with provider during review
  User Story: As a user, I should be able to change the ‘Location with provider’ while reviewing the appointment.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User selects the option to change the location

  THEN

  User should get navigated to the screen to select the location as in  

  And

  User should be able to change the location by searching locations using either City or State or Zipcode along with an option to detect their location (Locate me)

  And

  User should be able to select a provider with location based on the search

  And

  System might have to remove the selection made for purpose of visit, insurance carrier, date of appointment and time slot of provider if the updated location does not support them and inform the user

  And

  User has to once again review the appointment details as in  

  @BDDTEST-EPP-3054
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3055
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the City as new location.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the Zipcode as a new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3056
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment  and user enter the state as new location.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the State as a new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3057
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the Zipcode as new location.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the City as a new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3058
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid City as new location and user gets the error message.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the invalid City as a new location
    And user get the error message as Please enter the valid location to continue.
    Then user enter the new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3059
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid State as new location and user gets the error message.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the invalid State as a new location
    And user get the error message as Please enter the valid location to continue.
    Then user enter the new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3060
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1559 - Verify user able to change the 'Location' while reviewing the appointment and user enter the invalid Zipcode as new location and user gets the error message.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user clicks on the edit link in the location
    And user view options to change the location
    And user enters the invalid Zipcode as a new location
    And user get the error message as Please enter the valid location to continue.
    Then user enter the new location
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:
