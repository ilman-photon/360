@BDDSTORY-EPP-1583
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Guest user set password
  User Story: As a guest user, I should be able to create a password using the link received to my email/ phone number and create an account.

  Acceptance Criteria:

  GIVEN

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  And

  User provides valid Email or Phone number as in  

  And

  User should receive a link to the registered email or phone number to set new password.

  WHEN

  User clicks on that link

  THEN

  User should be able to see the verbiage "Enter a password to setup your account"

  And

  User should view and fill the following fields -

  | Field Name            | Mandatory                                                                                                                                                                                                                                                     |
  |-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Email or phone number | Auto-populated (Not editable)                                                                                                                                                                                                                                 |
  |                       | Refer  for username requirements                                                                                                                                                                                                                              |
  |-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Password              | Yes                                                                                                                                                                                                                                                           |
  |                       | User should be able to see and be validated against password requirements; should be shown to the error message “Password does not meet requirements”, if at least any one of the password requirements have not been met  (Refer  for password requirements) |
  |-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | Confirm Password      | Yes                                                                                                                                                                                                                                                           |

  And

  System by default should mask the entered password along with an option to unmask it

  And

  User should click on ‘Create Account’ CTA

  And

  User should be prompted with inline validation error message “This field is required” when all the required fields are not filled 

  And

  Upon successful password set, user should see the message - “Password has been set” 

  And

  Upon successful registration, user should be notified to his/her preferred mode(s) of communication. - same notification as mentioned in  

  And 

  Upon successful registration, user lands on the dashboard

  And

  User should be able to view his appointment under upcoming appointments  

  @BDDTEST-EPP-2934
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1583 - Verify user able to view enter Email or Phone Number to Sync Appointment Information
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user should see submit
    When user provides "<Email or Phone Number>"
    And user click on submit
    Then user should see the Email or Phone Number synced with appointment

    Examples:
    |Email or Phone Number|
    |user1@photon.com|
    |9876543200|

  @BDDTEST-EPP-2935
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify user able to view inline error message if Email or Phone Number is not entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides blank Email or Phone number
    And user should click on submit
    Then user should see error message "This field is required"

  @BDDTEST-EPP-2936
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify user able to click both as preferences mode and able to get the link to create password
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number

  @BDDTEST-EPP-2937
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify user able to click the link to reset the password
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
    Then user should be able to click the link

  @BDDTEST-EPP-2938
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the verbiage "Enter a password to setup your account"
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
    Then user should be able to click the link
    Then user should be able to see the verbiage "Enter a password to setup your account"

  @BDDTEST-EPP-2939
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the username is already auto-populated
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
    Then user should be able to click the link
    Then user should be able to see the verbiage "Enter a password to setup your account"
    Then user should be able to see the username is already auto-populated

  @BDDTEST-EPP-2941
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be prompted with inline validation error message “This field is required” when all the required fields are not filled


  @BDDTEST-EPP-2942
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user should be notified to preferred mode(s) of communication
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
    Then user should be able to click the link
    Then user should be able to see the verbiage "Enter a password to setup your account"
    Then user should be able to see the username is already auto-populated 
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then User should be shown masked password along with an option to unmask it by default
    And User should see Create Account button
    When User should click on Create Account button
    Then user should see the message Password has been set
    Then user should get below notification message in either Email or mobile number based on preferred mode
    |Subject - Thanks for creating an account
    |Email/text body - Welcome to the family! Thanks for creating an account with us

  @BDDTEST-EPP-2943
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user lands on the dashboard
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
    Then user should be able to click the link
    Then user should be able to see the verbiage "Enter a password to setup your account"
    Then user should be able to see the username is already auto-populated 
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then User should be shown masked password along with an option to unmask it by default
    And User should see Create Account button
    When User should click on Create Account button
    Then user should see the message Password has been set
    Then user should get below notification message in either Email or mobile number based on preferred mode
    Then user should be navigated to the dashboard page

  @BDDTEST-EPP-2944
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1583 -Verify that User is able to view Past Appointments with an option to view the visit summary for each appointment
    Given user launch the patient portal url		
    And User is logged in to the application
    When User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    Then User should view Past Appointments 
    Then user should see an option to view the visit summary for each appointment
