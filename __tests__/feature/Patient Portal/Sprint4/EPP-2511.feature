@BDDSTORY-EPP-2511
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - View provider's available time slots in map view
  User Story: As a user, I should be able to view the list of provider with time slots in map view.

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

  User clicks on any pin in Map view

  THEN

  User should be able to see the doctor’s name with image and address of the location

  And

  User should be able to view the available time slots of that provider for the date of appointment selected 

   Is this functionality required for MVP (Mid Nov release) ? Will confirm with business

  And

  User should be able to swipe/ navigate through different providers if they are the same location in the map

  And

  User should be able to select a time-slot listed there to schedule the appointment

  @BDDTEST-EPP-3036
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2511-Verify if user able to pin the location in map view
    Scenario: -Verify if user able to pin the location in map view 
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user to pin any location in Map view
    Then user should see the location pin in map

  @BDDTEST-EPP-3038
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2511-Verify if user able see the doctor’s name with image and address of the location
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user to pin & click location in Map view
    Then user should see the doctor’s name with image 
    And user should see address of the location

  @BDDTEST-EPP-3039
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2511- Verify if user able view the available time slots of the date of appointment
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user to pin & click location in Map view
    Then user should see the doctor’s name with image 
    And user should see address of the location
    Then user should view next avaliable time slot (Today,Tomorrow) for the appointment

  @BDDTEST-EPP-3040
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2511- Verify if user able to select the time slot listed to schedule the appointment
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user to pin & click location in Map view
    Then user should see the doctor’s name with image 
    And user should see address of the location
    Then user should view next avaliable time slot (Today,Tomorrow) for the appointment
    When user select the time slot listed with date 
    Then user should see time slot selected for schedule the appointment
