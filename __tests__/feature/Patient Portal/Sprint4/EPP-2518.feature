@BDDSTORY-EPP-2518
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Short bio of Provider
  User Story: As a user, I should be able to view a short bio of the provider I am about to schedule an appointment.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  WHEN

  User clicks on the doctor’s name

  THEN

  User should be able the following

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

  @BDDTEST-EPP-2837
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier

  @BDDTEST-EPP-2838
  @Appointments
  @Patient_Portal
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see the short bio of Provider
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see the short bio of Provider

  @BDDTEST-EPP-2839
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see the following sections of Provider
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see the short bio of Provider as below:
    |<About>|
    |<Specialties>|
    |<Sub-specialities>|
    |<Gender>|
    |<Languages>|
    |<In-network Insurances>|
    |<Location>|
    |<Education>|
    |<Memberships and Affiliations>|
    |<Ratings>|

  @BDDTEST-EPP-2840
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <About> sections of Provider as "Short Bio of the provider with Name and Image" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <About> sections of Provider as "Short Bio of the provider with Name and Image" description

  @BDDTEST-EPP-2841
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Specialties> sections of Provider as "Specialities of the provider (Eg. OPT,OPH)" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Specialties> sections of Provider as "Specialities of the provider (Eg. OPT,OPH)" description

  @BDDTEST-EPP-2842
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Sub-specialities> sections of Provider as "Sub-specialities of the provider (Cataract, Glaucoma etc..)" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then  User should see <Sub-specialities> sections of Provider as "Sub-specialities of the provider (Cataract, Glaucoma etc..)" description

  @BDDTEST-EPP-2843
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Gender> sections of Provider as "Gender of the provider" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then  User should see <Gender> sections of Provider as "Gender of the provider" description

  @BDDTEST-EPP-2844
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Languages> sections of Provider as "Languages the provider speaks" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then  User should see <Languages> sections of Provider as "Languages the provider speaks" description

  @BDDTEST-EPP-2845
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <In-network Insurances> sections of Provider as "Insurances that are in their network" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <In-network Insurances> sections of Provider as "Insurances that are in their network" description

  @BDDTEST-EPP-2846
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Location> sections of Provider as "Address of the location with "Get directions" button which would redirect the user to maps" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Location> sections of Provider as "Address of the location with "Get directions" button which would redirect the user to maps" description

  @BDDTEST-EPP-2847
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should navigated to maps when user clicks on "Get directions" button on Location Section
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Location> sections of Provider as "Address of the location with "Get directions" button which would redirect the user to maps" description
    When User clicks on "Get direction" button
    Then User should navigated to maps

  @BDDTEST-EPP-2848
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see two Doctor's location (if any) as Primary and Secondary on Location Section
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see two Doctor's location (if any) as Primary and Secondary on Location Section

  @BDDTEST-EPP-2849
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Education> sections of Provider as "Education qualification of the provider" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Education> sections of Provider as "Education qualification of the provider" description

  @BDDTEST-EPP-2850
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Memberships and Affiliations> sections of Provider as "Memberships and Affiliations of the provider" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Memberships and Affiliations> sections of Provider as "Memberships and Affiliations of the provider" description

  @BDDTEST-EPP-2851
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Ratings> sections of Provider as "Ratings for that Provider" description
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see <Ratings> sections of Provider as "Ratings for that Provider" description

  @BDDTEST-EPP-2852
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should see the short bio of Provider within 3 seconds
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    Then User should see the page loads within "3 seconds"
    And User should see the short bio of Provider
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-2853
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Verify User should not see the any errors script when user clicks F12 on the console
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-2854
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    And The Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-2855
  @Appointments
  @Patient_Portal
  @Sprint4
  @excluded
  Scenario: EPIC_EPP-44_STORY_EPP-2518-Negative Test Cases-Verify user should see the error message when the service is unavailable
    Given User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    When User clicks on the Search button
    Then User should see the results on the Schedule Appointments screen
    And User should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And User should see the doctor’s name
    When User clicks on the doctor’s name
    And The service is unavailable
    Then user should see the appropriate error message
