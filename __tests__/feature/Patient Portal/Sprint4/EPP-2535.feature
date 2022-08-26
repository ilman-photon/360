@BDDSTORY-EPP-2535
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - View results in schedule appointment screen
  User Story: As a user, I should be able to view the list of providers for the searched location and available time-slots for the selected date of appointment from patient portal

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  WHEN

  User lands on “Schedule Appointment” screen

  THEN

  User should be able to view an option to search locations using City or State or Zipcode with the selected location as in  

  And

  User should have the option to allow the system to detect their location (like Locate me) 

  And

  User should be able to view the filter options

  And

  User should be able to view the selected date of appointment along with an option to change them

  And

  User should be able to view the ‘Purpose of Visit’ if provided

  And

  User should be able to view ‘Insurance Carrier’ if provided

  And

  User should be able to view the results sorted by least distance(default - no option to change) with the following details based on location, date of appointment, purpose of visit (if provided) and insurance carrier(if provided) selected in  

  | Sno | Fields                                                                                                                                                                                                                                                              |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 1   | Doctor’s Image                                                                                                                                                                                                                                                      |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 2   | Doctor’s Name which when clicked will provide a short bio                                                                                                                                                                                                           |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 3   | Location’s Address                                                                                                                                                                                                                                                  |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 4   | Location’s Phone number                                                                                                                                                                                                                                             |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 5   | Distance from the searched location                                                                                                                                                                                                                                 |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 6   | ‘Direction’ CTA which when clicked will redirect the user to view directions in Maps                                                                                                                                                                                |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 7   | Doctor’s available time slots for the selected date which when selected takes the user to review the appointment                                                                                                                                                    |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 8   | 'View all availability' CTA which when clicked will list available time-slots of that doctor for a week                                                                                                                                                             |
  |-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 9   | ‘Next availability is <Date>’ CTA is displayed for providers whose availability is not there for the selected date of appointment which when clicked will change the date of appointment to that provider’s available date and display their available time slots.  |

  And

  User should be able to see the above details in Map view as well when relevant pins are selected

  And

  User on clicking those location pins in the maps will highlight that location from the list in the screen

  @BDDTEST-EPP-3105
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.

    Examples:

  @BDDTEST-EPP-3106
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City with the selected location

    Examples:

  @BDDTEST-EPP-3107
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using State with the selected location

    Examples:

  @BDDTEST-EPP-3108
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using  Zipcode with the selected location

    Examples:

  @BDDTEST-EPP-3109
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 

    Examples:

  @BDDTEST-EPP-3110
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options

    Examples:

  @BDDTEST-EPP-3111
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date

    Examples:

  @BDDTEST-EPP-3112
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit

    Examples:

  @BDDTEST-EPP-3113
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit
    And user view options to change the insurance.

    Examples:

  @BDDTEST-EPP-3267
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit as blank 
    When the user not entered the purpose of the visit

    Examples:

  @BDDTEST-EPP-3268
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the insurance carrier as blank. 
    When user has not entered in the insurance carrier 

    Examples:

  @BDDTEST-EPP-3269
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the provider's details.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user views the Locations Address
    And user views the Locations Phone number
    And user views the Distance from the searched location
    And user views the Direction button 
    And user views the Doctors available time slots for the selected date
    And user views the View all availability link
    And user views the Next availability is "<Date>"

    Examples:

  @BDDTEST-EPP-3270
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user views the provider's short bio.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user clicks on the Doctors Name
    Then user views the short bio

    Examples:

  @BDDTEST-EPP-3271
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user clicks on the Direction to view directions in Maps.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user views the Direction button 
    And user clicks on the Direction button
    And user redirected in the direction of Maps


    Examples:

  @BDDTEST-EPP-3272
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time slots for the selected date of appointment and the user picks the time slot to review the appointment.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user views the Doctors available time slots 
    And user clicks his preferred time slot
    And user lands on the appointment review screen


    Examples:

  @BDDTEST-EPP-3273
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time slots for the selected date of appointment and the user clicks the Next availability
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user views the Doctors available time slots 
    And user sees the Doctors not available for the selected date of appointment 
    And user views the Next availability "<Date>"
    And user clicks on the Next availability "<Date>" link
    And user changes the date of appointment to that doctors available date 
    And user views the Doctors available time slots 
    And user clicks his preferred time slot
    And user lands on the appointment review screen

    Examples:

  @BDDTEST-EPP-3274
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user views the doctor's details in Map view.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user redirected to the Map view
    And user views the filter options
    And user views the selected date of appointment along with an option to change 
    And user views the Purpose of Visit
    And user views the Insurance Carrier
    And user views the results sorted by least distance
    And user views the Doctors Image
    And user views the Doctors Name
    And user views the Locations Address
    And user views the Locations Phone number
    And user views the Distance from the searched location
    And user views the Direction button 
    And user views the Doctors available time slots for the selected date
    And user views the View all availability link
    And user views the Next availability is "<Date>"

    Examples:

  @BDDTEST-EPP-3275
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user getting the error on no availability in pinned location...
    EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user getting the error on no availability in pinned location in the Map view.

    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.
    And user views the option to allow the system to detect their location (like Locate me) 
    And user redirected to the Map view
    And user gets the error message "No appointment slots available based on your request, Please try again with a different combination"

    Examples:
