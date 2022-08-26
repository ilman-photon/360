@BDDSTORY-EPP-1565
@Appointments
@P2
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'someone else' - Provide Basic Information
  User Story: As a user, I should be able to provide valid patient details to schedule the appointment for someone else.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance & searches

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  And

  User selects that the appointment is for Someone Else

  And

  User provides valid patient details in  

  WHEN

  User confirms the patient details

  THEN

  System should schedule the appointment

  And 

  User should be able to view the appointment confirmation message as in  

  @BDDTEST-EPP-3012
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button

    Examples:

  @BDDTEST-EPP-3013
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location
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

  @BDDTEST-EPP-3014
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment
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

  @BDDTEST-EPP-3015
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit
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

  @BDDTEST-EPP-3016
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.
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

  @BDDTEST-EPP-3017
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
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

  @BDDTEST-EPP-3018
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user views the timeslot

    Examples:

  @BDDTEST-EPP-3019
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot 

    Examples:

  @BDDTEST-EPP-3020
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details

    Examples:

  @BDDTEST-EPP-3021
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it

    Examples:

  @BDDTEST-EPP-3022
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for

    Examples:

  @BDDTEST-EPP-3023
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see the fields in who the appointment is for screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for
    And user able to view Myself and Someone else buttons

    Examples:

  @BDDTEST-EPP-3024
  @Appointments
  @P3
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to select Someone else option in who the appointment is for screen
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for
    And user able to select Someone else option

    Examples:

  @BDDTEST-EPP-3025
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see provide patient basic information page
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    Then user lands on the screen to select who the appointment is for
    And user select Someone else option
    Then user able to see Provide patient's baic information page

    Examples:

  @BDDTEST-EPP-3026
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the fields in provide patient basic information page
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    And user able to select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number, Preferred mode(s) of communication

    Examples:

  @BDDTEST-EPP-3027
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1565 - Verify user able to provide the basic details when scheduling appointment for someone else.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provides valid patient details
    And user should see submit

  @BDDTEST-EPP-3028
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the appointment confirmation message.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details
    And user selects the option proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provides valid patient details
    And user select the submit button
    And user should be able to view the appointment confirmation message
