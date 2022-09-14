@BDDSTORY-EPP-2547
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Short bio of Provider
  User Story: As a user, I should be able to view a short bio of the provider I am about to schedule an appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  WHEN

  User clicks on the doctor’s name

  THEN

  User should be able to view the following

  | Sno | Sections                     | Description                                                                                                                                                                 |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 1   | About                        | Short Bio of the provider with Name and Image                                                                                                                               |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 2   | Specialties                  | Specialities of the provider (Eg. OPT,OPH)                                                                                                                                  |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 3   | Sub-specialities             | Sub-specialities of the provider (Cataract, Glaucoma etc..)                                                                                                                 |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 3   | Gender                       | Gender of the provider                                                                                                                                                      |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 4   | Languages                    | Languages the provider speaks                                                                                                                                               |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 5   | In-network Insurances        | Insurances that are in their network                                                                                                                                        |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 6   | Location                     | Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 7   | Education                    | Education qualification of the provider                                                                                                                                     |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 8   | Memberships and Affiliations | Memberships and Affiliations of the provider                                                                                                                                |
  |-----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | 9   | Ratings                      | Ratings for that Provider                                                                                                                                                   |
  |     | (reviewinc is the source)    |                                                                                                                                                                             |

  @BDDTEST-EPP-3157
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.

    Examples:

  @BDDTEST-EPP-3158
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City with the selected location

    Examples:

  @BDDTEST-EPP-3159
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using State with the selected location

    Examples:

  @BDDTEST-EPP-3160
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using  Zipcode with the selected location

    Examples:

  @BDDTEST-EPP-3161
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 

    Examples:

  @BDDTEST-EPP-3162
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options


  @BDDTEST-EPP-3163
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date

    Examples:

  @BDDTEST-EPP-3164
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
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

  @BDDTEST-EPP-3165
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password and click on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
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
