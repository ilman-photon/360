
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - User creates an account and appointment is automatically synced
  User Story: As a user, I should be able to view the appointment automatically synced to the account that I just created after scheduling an appointment.

 
  @BDDTEST-EPP-3169
  @Appointments
  @P4
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment
    Given User launch the "Marketing Site" url
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
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3170
  @Appointments
  @P4
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Create Account" button
    Then User should navigated to "User Registration" screen
    And User should input the mandatory fields
    And User should setting the password
    When User clicks on "Register" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3171
  @Appointments
  @P4
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Forgot Password" button
    Then User should navigated to "Forgot Password" screen
    And User should input the mandatory fields
    When User clicks on "Continue" button
    Then User should navigated "Select an option"screen
    And User should see the "Answer Security Question" button
    When User clicks on "Answer Security Question" button
    Then User should navigated "Password Recovery Security Questions"
    And User should fill 3 questions 
    When User clicks on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should input valid "<New Password>" and "<Confirm New Password>" fields
    When User clicks on "Update" button
    Then User should see the sucessful message as "Password has been updated"
    And User shhould see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Login" screen
    And User should fill valid "<Username>" and "<Password>" fields
    When User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3172
  @Appointments
  @P4
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Continue as a Gues" option
    When User select on "Continue as a Gues" option
    Then User should navigated to provide basic details
    And User should see the following fields as below:
    |"<First Name>"|
    |"<Last Name>"|
    |"<Date Of Birth>"|
    |"<Email>"|
    |"<Mobile Number>"|
    |"<Preferred mode(s) of communication>"|
    And User should see the option to submit the same
    When User selects on "Submit" option
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3173
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - within 3 seconds
    Given User launch the "Marketing Site" url
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
    And User should see page load within "3 seconds"
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3174
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Create Account" button
    Then User should navigated to "User Registration" screen
    And User should input the mandatory fields
    And User should setting the password
    When User clicks on "Register" button
    And User should see page load within "3 seconds"
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3175
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - within 3 seconds
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Forgot Password" button
    Then User should navigated to "Forgot Password" screen
    And User should input the mandatory fields
    When User clicks on "Continue" button
    Then User should navigated "Select an option"screen
    And User should see the "Answer Security Question" button
    When User clicks on "Answer Security Question" button
    Then User should navigated "Password Recovery Security Questions"
    And User should fill 3 questions 
    When User clicks on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should input valid "<New Password>" and "<Confirm New Password>" fields
    When User clicks on "Update" button
    Then User should see the sucessful message as "Password has been updated"
    And User shhould see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Login" screen
    And User should fill valid "<Username>" and "<Password>" fields
    When User clicks on "Login" button
    And User should see page load within "3 seconds"
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3176
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - within 3 seconds
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Continue as a Gues" option
    When User select on "Continue as a Gues" option
    Then User should navigated to provide basic details
    And User should see the following fields as below:
    |"<First Name>"|
    |"<Last Name>"|
    |"<Date Of Birth>"|
    |"<Email>"|
    |"<Mobile Number>"|
    |"<Preferred mode(s) of communication>"|
    And User should see the option to submit the same
    When User selects on "Submit" option
    And User should see page load within "3 seconds"
    Then User should navigated to Patient Dashboard
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3177
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
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
    When user clicks on F12 on the console
    Then user should not to see any errors script
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3178
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Create Account" button
    Then User should navigated to "User Registration" screen
    And User should input the mandatory fields
    And User should setting the password
    When User clicks on "Register" button
    Then User should navigated to Patient Dashboard
    When user clicks on F12 on the console
    Then user should not to see any errors script
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3179
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Forgot Password" button
    Then User should navigated to "Forgot Password" screen
    And User should input the mandatory fields
    When User clicks on "Continue" button
    Then User should navigated "Select an option"screen
    And User should see the "Answer Security Question" button
    When User clicks on "Answer Security Question" button
    Then User should navigated "Password Recovery Security Questions"
    And User should fill 3 questions 
    When User clicks on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should input valid "<New Password>" and "<Confirm New Password>" fields
    When User clicks on "Update" button
    Then User should see the sucessful message as "Password has been updated"
    And User shhould see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Login" screen
    And User should fill valid "<Username>" and "<Password>" fields
    When User clicks on "Login" button
    Then User should navigated to Patient Dashboard
    When user clicks on F12 on the console
    Then user should not to see any errors script
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3180
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Continue as a Gues" option
    When User select on "Continue as a Gues" option
    Then User should navigated to provide basic details
    And User should see the following fields as below:
    |"<First Name>"|
    |"<Last Name>"|
    |"<Date Of Birth>"|
    |"<Email>"|
    |"<Mobile Number>"|
    |"<Preferred mode(s) of communication>"|
    And User should see the option to submit the same
    When User selects on "Submit" option
    Then User should navigated to Patient Dashboard
    When user clicks on F12 on the console
    Then user should not to see any errors script
    When User selects that the appointment is for Someone Else
    Then User provides the patient details
    And User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”
    And User should see this appointment under upcoming appointments
    And And User should receive an email message regarding appointmnet confirmation as below:
    |Email/text content is still waiting for confirmation from the client|

  @BDDTEST-EPP-3181
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
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
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3182
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Create Account" button
    Then User should navigated to "User Registration" screen
    And User should input the mandatory fields
    And User should setting the password
    When User clicks on "Register" button
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3183
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Forgot Password" button
    Then User should navigated to "Forgot Password" screen
    And User should input the mandatory fields
    When User clicks on "Continue" button
    Then User should navigated "Select an option"screen
    And User should see the "Answer Security Question" button
    When User clicks on "Answer Security Question" button
    Then User should navigated "Password Recovery Security Questions"
    And User should fill 3 questions 
    When User clicks on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should input valid "<New Password>" and "<Confirm New Password>" fields
    When User clicks on "Update" button
    Then User should see the sucessful message as "Password has been updated"
    And User shhould see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Login" screen
    And User should fill valid "<Username>" and "<Password>" fields
    When User clicks on "Login" buttonThen The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3184
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Continue as a Gues" option
    When User select on "Continue as a Gues" option
    Then User should navigated to provide basic details
    And User should see the following fields as below:
    |"<First Name>"|
    |"<Last Name>"|
    |"<Date Of Birth>"|
    |"<Email>"|
    |"<Mobile Number>"|
    |"<Preferred mode(s) of communication>"|
    And User should see the option to submit the same
    When User selects on "Submit" option
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3185
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
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
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3186
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Create Account" button
    Then User should navigated to "User Registration" screen
    And User should input the mandatory fields
    And User should setting the password
    When User clicks on "Register" buttonThen The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3187
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Create Account" button
    When User clicks on "Forgot Password" button
    Then User should navigated to "Forgot Password" screen
    And User should input the mandatory fields
    When User clicks on "Continue" button
    Then User should navigated "Select an option"screen
    And User should see the "Answer Security Question" button
    When User clicks on "Answer Security Question" button
    Then User should navigated "Password Recovery Security Questions"
    And User should fill 3 questions 
    When User clicks on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should input valid "<New Password>" and "<Confirm New Password>" fields
    When User clicks on "Update" button
    Then User should see the sucessful message as "Password has been updated"
    And User shhould see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Login" screen
    And User should fill valid "<Username>" and "<Password>" fields
    When User clicks on "Login" buttonThen The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3188
  @Appointments
  @P4
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
    When User selects that the appointment is for Self
    Then User should navigated to the Patient Portal application
    And User should see the "Continue as a Gues" option
    When User select on "Continue as a Gues" option
    Then User should navigated to provide basic details
    And User should see the following fields as below:
    |"<First Name>"|
    |"<Last Name>"|
    |"<Date Of Birth>"|
    |"<Email>"|
    |"<Mobile Number>"|
    |"<Preferred mode(s) of communication>"|
    And User should see the option to submit the same
    When User selects on "Submit" optionThen The Internet service is unavailable
    And User should see the appropriate error message
