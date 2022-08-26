@BDDSTORY-EPP-1575
@Appointments
@P5
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - View Appointment Confirmation page after scheduling appointment as guest
  User Story: As a guest user, I should be able to view the appointment confirmation message after scheduling an appointment as guest.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And 

  User has selected the Purpose of Visit, Location and Date & Time with provider

  And

  User selects that the appointment is for Self

  And

  User lands on the screen with different option to sync the appointment as in  

  And

  User selects ‘Continue as a Guest’ option

  And

  User provides valid details in  

  WHEN

  System schedules the appointment

  THEN

  User should be able to view the details in the Appointment confirmation page, as mentioned in  

  And 

  User should be able to view the appointment confirmation message, as mentioned in  

  And

  User should receive an email/ text message regarding appointment confirmation based on their preferred mode of communication. For email/ text message verbiage, refer 

  @BDDTEST-EPP-2964
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user reviewed and clicks on the continue button
    And user view the Whos is this exam for? screen
    And user click on the Self button
    And user redirects to the login screen
    And user clicks on the continue as guest
    And  user navigated to the guest user page
    And  user clicks on the Already have an appointment? Sync your appointment information button
    And user enter the Email
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'

  @BDDTEST-EPP-2965
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit..
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not selecting the purpose of visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user reviewed and clicks on the continue button
    And user view the Whos is this exam for? screen
    And user click on the Self button
    And user redirects to the login screen
    And user clicks on the continue as guest
    And  user navigated to the guest user page
    And  user clicks on the Already have an appointment? Sync your appointment information button
    And user enter the Email
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'

  @BDDTEST-EPP-2966
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user not entering the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user reviewed and clicks on the continue button
    And user view the Whos is this exam for? screen
    And user click on the Self button
    And user redirects to the login screen
    And user clicks on the continue as guest
    And  user navigated to the guest user page
    And  user clicks on the Already have an appointment? Sync your appointment information button
    And user enter the Email
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'

  @BDDTEST-EPP-2967
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit and insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not selecting the purpose of visit
    And user not entering the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user reviewed and clicks on the continue button
    And user view the Whos is this exam for? screen
    And user click on the Self button
    And user redirects to the login screen
    And user clicks on the continue as guest
    And  user navigated to the guest user page
    And  user clicks on the Already have an appointment? Sync your appointment information button
    And user enter the Email
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message 'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.'
