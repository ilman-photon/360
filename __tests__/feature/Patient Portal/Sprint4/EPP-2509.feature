@BDDSTORY-EPP-2509
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - View provider's available time slots for a week
  User Story: As a user, I should be able to view the list of time slots a provider is available for a week.

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

  User clicks on ‘View all availability’ CTA

  THEN

  User should be able to see the doctor’s name with image and address of the location

  And

  User should be able to view the available time slots of that doctor listed for the whole week day wise

  And

  User should be able to view the option to navigate to next week as well as previous week (Not past dates)

  And

  User should be able to select a time-slot listed there to schedule the appointment

  And

  System should not allow the user to select a date that is 3 months greater than today’s date

  @BDDTEST-EPP-3066
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should see all the doctors availability details

  @BDDTEST-EPP-3067
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise
    Scenario: Verify whether the user can able to see the available time slots of the doctors for the whole week.

    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should see the time slots of each doctor for whole week in day wise

  @BDDTEST-EPP-3068
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to see the Doctor's Time slots of Previous week
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And user should see the time slots of each doctor for whole week in day wise
    Then user should have the option to see the Time slots of doctor's for Previous week

  @BDDTEST-EPP-3069
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to see the Doctor's Time slots of Next week
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And user should see the time slots of each doctor for whole week in day wise
    Then user should have the option to see the Time slots of doctor's for Next week

  @BDDTEST-EPP-3070
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is not able to see the Doctor's Time slots of Past dates
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And user should see the time slots of each doctor for whole week in day wise
    Then user should have the option to see the Time slots of doctor's for Next week

  @BDDTEST-EPP-3071
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to select the available time slot and schedule the appointment.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And user should select any available time slot.
    Then user should able to schedule the appointment.

  @BDDTEST-EPP-3072
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether user is not allowed to select the date not more than 3 months from the current date.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And select the date more than 3 months from the current date.
    Then user should not allow to select more than 3 months from the current date

  @BDDTEST-EPP-3116
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2509-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor's name with image
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should display the Doctor's name with Image.
