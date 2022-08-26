@BDDSTORY-EPP-1561
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Schedule for myself or someone
  User Story: As a user, I should be able to select if the appointment is for myself or someone else.

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

  User reviews the appointment and proceeds to schedule it 

  THEN

  User lands on the screen to select who the appointment is for

  And

  User should be able to see an option as “Self” which when selected will take the user to another page  

  And

  User should be able to see another option “Someone else” which when selected will ask for few basic details  

  And

  User should be able to view the following details along with an option to update them

  | Items Displayed        | Update                                 |
  |------------------------|----------------------------------------|
  | Location with provider | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Date and Time          | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Insurance Carrier      | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Purpose of Visit       | On selecting to update them refer to   |

  And

  User should be able to view an option to go back to the previous screen

  And

  User should be able to view a progress bar to identify where they are with scheduling the appointment

  @BDDTEST-EPP-2998
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.


  @BDDTEST-EPP-2999
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location
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

    Examples:

  @BDDTEST-EPP-3000
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the date of appointment.

    Examples:

  @BDDTEST-EPP-3001
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit
    Given user launch the Marketing Site URL		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit.

    Examples:

  @BDDTEST-EPP-3002
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.
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

  @BDDTEST-EPP-3003
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user lands on Schedule Appointment screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided)

    Examples:

  @BDDTEST-EPP-3004
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the timeslot

    Examples:

  @BDDTEST-EPP-3005
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot 

    Examples:

  @BDDTEST-EPP-3006
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot
    Then user lands on the screen to review the appointment details

    Examples:

  @BDDTEST-EPP-3007
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it

    Examples:

  @BDDTEST-EPP-3008
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for

    Examples:

  @BDDTEST-EPP-3009
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Myself option in who the appointment is for screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for
    And user able to see Myself option in who the appointment is for screen

    Examples:

  @BDDTEST-EPP-3010
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Someone else option in who the appointment is for screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for
    And user able to see Someone else option in who the appointment is for screen

    Examples:
