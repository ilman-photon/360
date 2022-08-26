@BDDSTORY-EPP-1573
@Appointments
@P5
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - Provide details to schedule an appointment as guest
  User Story: As a guest user, I should be able to provide the details to schedule the appointment as a guest.

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

  User wants to continue as a guest

  WHEN

  User provides valid details in  

  THEN

  System should schedule the appointment

  And 

  User should be able to view the appointment confirmation message

  @BDDTEST-EPP-2959
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest.
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
    And user enter the First name, Last name.
    And user enter the valid Date of birth
    And user select the Preferred mode of communication = Email
    And user enters the Email id
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message.

  @BDDTEST-EPP-2960
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not select the purpose of visit
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
    And user enter the First name, Last name.
    And user enter the valid Date of birth
    And user select the Preferred mode of communication = Email
    And user enters the Email id
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message.

  @BDDTEST-EPP-2961
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and the user not providing the insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user not enter the insurance name
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
    And user enter the First name, Last name.
    And user enter the valid Date of birth
    And user select the Preferred mode of communication = Email
    And user enters the Email id
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message.

  @BDDTEST-EPP-2962
  @Appointments
  @Authentication
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit and insurance name.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user not select the purpose of visit
    And user not enter the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user reviewed and clicks on the continue button
    And user view the Whos is this exam for? screen
    And user click on the Self button
    And user redirects to the login screen
    And user clicks on the continue as guest
    And user navigated to the guest user page
    And user clicks on the Already have an appointment? Sync your appointment information button
    And user enter the First name, Last name.
    And user enter the valid Date of birth
    And user select the Preferred mode of communication = Email
    And user enters the Email id
    And user clicks the 'Continue' button.
    And user recieve the email link 
    And user Set password using email link
    And user naviigated to Dash board screen
    And user clicks on the Appointment synced button
    And user view the appointment confirmation message.
