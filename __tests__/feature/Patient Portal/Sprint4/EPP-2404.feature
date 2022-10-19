Feature: Patient Portal : Schedule Appointment from marketing site - View results in schedule appointment screen
User Story: As a user, I should be able to view the list of providers for the searched location and available time-slots for the selected date of appointment.

@BDDTEST-EPP-2804
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment."

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

@BDDTEST-EPP-2805
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location."

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

@BDDTEST-EPP-2806
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location."

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
    And user views an option to search locations using State with the selected location

@BDDTEST-EPP-2807
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location."

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

@BDDTEST-EPP-2808
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location."

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

@BDDTEST-EPP-2809
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options."

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

@BDDTEST-EPP-2810
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date."

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

@BDDTEST-EPP-2811
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit."

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

@BDDTEST-EPP-2812
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance."

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

@BDDTEST-EPP-2813
@Appointments
@Authentication
@P1
@Patient_Portal
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered."

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

@BDDTEST-EPP-2814
@Appointments
@Authentication
@P1
@Patient_Portal
@Sprint4
Scenario: "EPIC_EPP-44_STORY_EPP-2504 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered."

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
   When user has not entered in the insurance carrier 

@BDDTEST-EPP-3052
@Appointments
@Authentication
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1558 - Verify user able to change the 'Purpose of Visit' while reviewing the appointment. and the user views the purpose of visit as blank when the user not entered

@BDDTEST-EPP-3063
@Appointments
@Authentication
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit.

@BDDTEST-EPP-3166
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view Doctor Name and click it

@BDDTEST-EPP-3167
@Appointments
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2504 - Verify user able to view Doctor Name and click it and Verify Doctors Biography



