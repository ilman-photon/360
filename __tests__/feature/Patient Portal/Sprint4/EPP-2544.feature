@BDDSTORY-EPP-2544
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - View provider's available time slots in map view
  User Story: As a user, I should be able to view the list of provider with time slots in map view from patient portal.

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

  User clicks on any pin in Map view

  THEN

  User should be able to see the doctor’s name with image and address of the location

  And

  User should be able to view the available time slots of that provider for the date of appointment selected 

  And

  User should be able to swipe/ navigate through different providers if they are the same location in the map

  And

  User should be able to select a time-slot listed there to schedule the appointment

  @BDDTEST-EPP-3301
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify User should see a pin in Map view
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view

  @BDDTEST-EPP-3302
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify User should see the doctor’s name with image and address of the location
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location

  @BDDTEST-EPP-3303
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify User should see the available time slots of that provider for the date of appointment selected
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected

  @BDDTEST-EPP-3304
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to swipe/ navigate through different providers if they are the same location in the map
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map

  @BDDTEST-EPP-3305
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to select a time-slot listed there to schedule the appointment
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map
    When User selects a time-slot listed there to schedule the appointment
    Then User see the list of provider with time slots in map view from patient portal.

  @BDDTEST-EPP-3306
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - within 3 seconds
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map
    When User selects a time-slot listed there to schedule the appointment
    And User should see page load within "3 seconds"
    Then User see the list of provider with time slots in map view from patient portal

  @BDDTEST-EPP-3307
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map
    When User selects a time-slot listed there to schedule the appointment
    And User should see page load within "3 seconds"
    Then User see the list of provider with time slots in map view from patient portal
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-3308
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map
    When User selects a time-slot listed there to schedule the appointment
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3309
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
    When User selects a time slot of the provider
    Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see a pin in Map view
    When User clicks on any pin in Map view
    Then User should see the doctor’s name with image 
    And User should see the address of the doctor's location
    And User should see the available time slots of that provider for the date of appointment selected
    And User should be able to swipe/ navigate through different providers if they are the same location in the map
    When User selects a time-slot listed there to schedule the appointment
    Then The service is unavailable
    And User should see the appropriate error message

