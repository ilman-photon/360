@BDDSTORY-EPP-1566
@Appointments
@P2
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'someone else' - Basic Information format error
  User Story: As a user, I should be able to view error messages in when the Patient details provided for someone else are not in proper format.

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

  User provides patient details in wrong format  

  WHEN

  User confirms the patient details

  THEN

  User should be able to see the following error message if First Name provided was less than 2 characters “First Name should be greater than 2 characters” 

  User should be able to see the following error message if Last Name provided was less than 2 characters “Last Name should be greater than 2 characters” 

  And

  User should be able to see the following error message if email-id provided was in incorrect format “Incorrect email format” . 

  And

  User should be able to see the following error message if mobile number provided was in incorrect format “Incorrect mobile number format” 

  And

  User should be able to see the inline error message “Invalid date of birth” when the date of birth entered by the patient is invalid 

  @BDDTEST-EPP-3029
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to provide the patient datails.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user able to provide patient details

  @BDDTEST-EPP-3030
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user confirms the patient details
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details
    Then user able to confirms the patient details

  @BDDTEST-EPP-3031
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if First Name provided was less than 2 characters
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details with less than 2 characters in "<First Name>" field
    And user submit the details
    Then user should get error message First Name should be greater than 2 characters

    Examples:
    |First Name|
    |R|

  @BDDTEST-EPP-3032
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if Lat Name provided was less than 2 characters
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details with less than 2 characters in "<Lat Name>" field
    And user submit the details
    Then user should get error message Last Name should be greater than 2 characters

    Examples:
    |Last Name|
    |R|

  @BDDTEST-EPP-3033
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if email-id provided was in incorrect format
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details with incorrect format "<email-id>"
    And user submit the details
    Then user should get error message Incorrect email format

    Examples:
    |email-id|
    |raghurami.reddy@gmail|
    |raghurami.reddygmail.com|
    |raghurami.reddy@com|

  @BDDTEST-EPP-3034
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if mobile number provided was in incorrect format
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details with incorrect format "<mobile number>"
    And user submit the details
    Then user should get error message Incorrect mobile number format

    Examples:
    |mobile number|
    |94922@$876|
    |9492228760|

  @BDDTEST-EPP-3035
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if invalid date of birth entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user select the timeslot
    Then user lands on the screen to review the appointment details and click on proceeds to schedule it
    And user select Someone else option
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication
    And user provide patient details with invalid date of birth
    And user submit the details
    Then user should be able to see the inline error message Invalid "<date of birth>"

    Examples:
    |date of birth|
    |1994/01/01|
    |02/1994/02|
