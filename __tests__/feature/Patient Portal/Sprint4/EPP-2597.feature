@BDDSTORY-EPP-1597
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - View Appointment Confirmation message
  User Story: As a user, I should be able to view the appointment confirmation message while scheduling appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance & searches

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User schedules the appointment

  THEN

  User should be able to view the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.” ( ECP to provide correct verbiage) - Email/ Text will be triggered by E360+

  | Sno | Fields                       |
  |-----|------------------------------|
  | 1   | Date                         |
  |-----|------------------------------|
  | 2   | Time                         |
  |-----|------------------------------|
  | 3   | Purpose of Visit             |
  |-----|------------------------------|
  | 4   | Doctor                       |
  |-----|------------------------------|
  | 5   | Patient Name                 |
  |-----|------------------------------|
  | 6   | Location                     |
  |-----|------------------------------|
  | 7   | Directions (to the location) |
  |-----|------------------------------|
  | 8   | Location’s Phone number      |

  And

  User should be able to view the option to add the appointment to my calendar

  And

  User should be able to view the text "Is this a medical emergency?" which when hovered over should see the following text "If this is a medical emergency, please call 911".

  And

  User should receive an email/ text message regarding appointment confirmation based on preferred mode of communication.

  And

  User should see an option to navigate back to dashboard from the confirmation message

  @BDDTEST-EPP-3481
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message while scheduling appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to Appointments menu
    Then user navigates to Appointments screen
    And user lands on 'Appointments' screen
    And user views the schedule new appointments link
    And user clicks on the schedule new appointments
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selects the Provider
    And user selected a time slot
    And user lands on the review of the appointment details
    And user views the Location section
    And user views the Appointment section
    And user clicks on the Continue button
    And user views the Appointment details
    And user clicks on the Continue button
    And user views Contact information
    And user views the Schedule Appointment button
    And user clicks on the Schedule Appointment button
    And user navigates to the confirmation page
    And views the confirmation message "You’re Scheduled!" "Thank you for scheduling confirmation message. We will send a confirmation Email/Text shortly."

  @BDDTEST-EPP-3482
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and the details while scheduling appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user enters all the details and clicks on the Schedule Appointment button
    And user navigates to the confirmation page
    And views the confirmation message "You’re Scheduled!" "Thank you for scheduling confirmation message. We will send a confirmation Email/Text shortly."
    And user views the Date
    And user views the Time
    And user views the Purpose of Visit
    And user views the Doctor
    And user views the Patients Name
    And user views the Location
    And user views the Directions (to the location)
    And user views the Location’s Phone number

  @BDDTEST-EPP-3483
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the appointment confirmation message and view the option to add the appointment to my calendar while scheduling appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user enters all the details and clicks on the Schedule Appointment button
    And user navigates to the confirmation page
    And views the confirmation message "You’re Scheduled!" "Thank you for scheduling confirmation message. We will send a confirmation Email/Text shortly."
    And user views the option to add the appointment to my calendar
    And user clicks on the Add to calendar button

  @BDDTEST-EPP-3484
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to view the medical emergency link to view the emergenncy number while scheduling appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user enters all the details and clicks on the Schedule Appointment button
    And user navigates to the confirmation page
    And views the confirmation message "You’re Scheduled!" "Thank you for scheduling confirmation message. We will send a confirmation Email/Text shortly."
    And user views the option to add the appointment to my calendar
    And user views the medical emergency link
    And user hover on the Is this a medical emergency? link
    And user views the message "If this is a medical emergency, please call 911"

  @BDDTEST-EPP-3485
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1597 - Verify the user able to navigate back to dashboard from the confirmation message while scheduling appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user enters all the details and clicks on the Schedule Appointment button
    And user navigates to the confirmation page
    And views the confirmation message "You’re Scheduled!" "Thank you for scheduling confirmation message. We will send a confirmation Email/Text shortly."
    And user views the Ok button
    And user clicks on the Ok button
    And user navigate back to dashboard 
    And user views the Dashboard
