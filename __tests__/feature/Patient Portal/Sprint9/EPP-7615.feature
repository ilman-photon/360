
@EPP_Patient_Sprint_9
@P3
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Error message when entered access code is incorrect
  User Story: As an external user with whom the patient records are shared, I should see an error message when the entered access code is incorrect.



  @BDDTEST-EPP-10214
  @P3
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the following error message “Incorrect code! Please try again.” for the first 3 times
    Scenario: EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.” 

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive an email message with the following content (ECP to provide content)
    |Email message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)
    When External user enters the incorrect access code. more than 3 times
    Then External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.”

  @BDDTEST-EPP-10215
  @P3
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.” 
    Scenario: EPIC_EPP-42_STORY_EPP-7615- Verify External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.” 

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive an email message with the following content (ECP to provide content)
    |Email message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)
    When External user enters the incorrect access code. more than 3 times
    Then External user should be able to view the error message “ You have attempted the wrong code multiple times. The link is no longer valid. Please request a new one.”
