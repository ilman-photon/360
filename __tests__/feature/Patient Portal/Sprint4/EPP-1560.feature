Feature: Patient Portal : Schedule Appointment from marketing site - Change Date and Time during review
  User Story: As a user, I should be able to change the 'Date and Time' while reviewing the appointment.

 

  @BDDTEST-EPP-3061
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment.
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
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date and time
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3062
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user get the error when user select the past dates.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not selecting the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date and time
    And user select the date of appointment 
    And user not selecting the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3063
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit.


  @BDDTEST-EPP-3064
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user not providing the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date and time
    And user select the date of appointment 
    And user select the purpose of the visit
    And user not providing the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:

  @BDDTEST-EPP-3065
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit and  insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not selecting the purpose of the visit
    And user not providing the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date and time
    And user select the date of appointment 
    And user not selecting the purpose of the visit
    And user not providing the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

    Examples:
