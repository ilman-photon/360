@BDDSTORY-EPP-1570
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - User logs into the portal and appointment is automatically synced
  User Story: As a registered user, I should be able to view the appointment automatically synced to my account when I login into patient portal if I am an existing user.

  Acceptance Criteria:

  GIVEN

  User is already a registered user

  And

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And 

  User has selected the Purpose of Visit, Location and Date & Time with provider

  And

  User selects that the appointment is for Self

  And

  User lands on the screen with different option to sync the appointment as in  

  WHEN

  User provides valid username and password; and logs in

  THEN

  User lands on the dashboard

  And

  User should be able to view the success message, as mentioned in  

  And

  User should be able to view this appointment under upcoming appointments -  

  And

  User should receive an email/ text message regarding appointment confirmation based on their preferred mode of communication. For email/ text message verbiage, refer  

  @BDDTEST-EPP-3073
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should navigated to the Patient Portal application
    Given User is already a registered user
    And User launch the "Marketing Site" url		
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application

  @BDDTEST-EPP-3074
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should Logged in to the Patient Portal application
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard

  @BDDTEST-EPP-3075
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the success message as "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should see following details in the Appointment confirmation message "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."

  @BDDTEST-EPP-3076
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should see the appointment under upcoming appointments
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User fills valid "<username>" and "<password>"
    Then User clicks on "Login" button
    And User should navigated to Patient Dashboard
    When User clicks to "Appointments' menu
    Then User navigates to "Appointments" screen
    And User should see the appointment under upcoming appointments

  @BDDTEST-EPP-3077
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should receive an email message regarding appointment confirmation
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should see following details in the Appointment confirmation message "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."
    And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3078
  @Appointments
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should receive a text message regarding appointment confirmation
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should see following details in the Appointment confirmation message "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."
    And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3079
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the following filters within 3 seconds
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should see page load within 3 seconds

  @BDDTEST-EPP-3080
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Verify User should not see the any errors script when user clicks F12 on the console
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should see page load within "3 seconds" 
    Then User should see following details in the Appointment confirmation message "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-3081
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3082
  @Appointments
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the service is unavailable
    Given User is already a registered user
    And User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    When User fills valid "<username>" and "<password>"
    And User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then The service is unavailable
    And User should see the appropriate error message
