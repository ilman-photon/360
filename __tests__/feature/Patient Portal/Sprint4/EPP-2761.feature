@BDDSTORY-EPP-1761
@Appointments
@EPP_Sprint_4
@P3
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - User resets the password to login and appointment is automatically synced
  User Story: As a registered user, I should be able to reset my password and view the appointment automatically synced to the account after scheduling an appointment.

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

  User resets his password and logs in -  

  THEN

  User lands on the dashboard

  And

  User should be able to view the success message as mentioned in  

  And

  User should be able to view this appointment under upcoming appointments

  And

  User should receive an email/ text message regarding appointment confirmation based on their preferred mode of communication. For email/ text message verbiage, refer 

  @BDDTEST-EPP-3838
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password and Appointment is synced automatically
    Given registered user launch the Marketing Site url		
    When registered user clicks on the Schedule your Eye Exam button
    And registered user select the Purpose of Visit, Location and Date & Time with provider.
    And registered user review the appointments.
    And select the Appointment for Myself.
    And registered user should see the mentioned fields Login, Create an Account and Forgot password
    And registered user click the Forgot password
    And registered user should able to set the password.
    And registered should lands on dashboard.
    And the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.
    Then registered user should  able to view the Appointment under Upcoming Appointments

  @BDDTEST-EPP-3839
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Email is delivering to registered Email based on Preferred mode of communication
    Given registered user launch the Marketing Site url		
    When registered user clicks on the Schedule your Eye Exam button
    And registered user select the Purpose of Visit, Location and Date & Time with provider.
    And registered user review the appointments.
    And select the Appointment for Myself.
    And registered user should see the mentioned fields Login, Create an Account and Forgot password
    And registered user click the Forgot password
    And registered user should able to set the password.
    And registered should lands on dashboard.
    And the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.
    And registered user should  able to view the Appointment under Upcoming Appointments
    Then Appointment Confirmation Email should received to the registered user.

  @BDDTEST-EPP-3840
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Text message is delivering to registered Phone number based on Preferred mode of communication
    Given registered user launch the Marketing Site url		
    When registered user clicks on the Schedule your Eye Exam button
    And registered user select the Purpose of Visit, Location and Date & Time with provider.
    And registered user review the appointments.
    And select the Appointment for Myself.
    And registered user should see the mentioned fields Login, Create an Account and Forgot password
    And registered user click the Forgot password
    And registered user should able to set the password.
    And registered should lands on dashboard.
    And the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.
    And registered user should  able to view the Appointment under Upcoming Appointments
    Then Appointment Confirmation Text message should received to the registered user.

  @BDDTEST-EPP-3841
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1761-To verify the Appointment confirmation Email content
    Given registered user launch the Marketing Site url		
    When registered user clicks on the Schedule your Eye Exam button
    And registered user select the Purpose of Visit, Location and Date & Time with provider.
    And registered user review the appointments.
    And select the Appointment for Myself.
    And registered user should see the mentioned fields Login, Create an Account and Forgot password
    And registered user click the Forgot password
    And registered user should able to set the password.
    And registered should lands on dashboard.
    And the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.
    And registered user should  able to view the Appointment under Upcoming Appointments
    Then check for whether the Email content is displaying as below

    |Hello $PATIENT_FIRSTNAME$, 

    |Thank you for confirming your appointment with $PRACTICE$ on: 
    |$APPT_INFO$ 
    |Sincerely, 
    |The Doctors and Team of  
    |$PRACTICE$

  @BDDTEST-EPP-3858
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password from the Marketting site
    Given registered user launch the Marketing Site url		
    When registered user clicks on the Schedule your Eye Exam button
    And registered user select the Purpose of Visit, Location and Date & Time with provider.
    And registered user review the appointments.
    And select the Appointment for Myself.
    And registered user should see the mentioned fields Login, Create an Account and Forgot password
    And Registered user click the Forgot password
    Then Registered user should able to set the password.
