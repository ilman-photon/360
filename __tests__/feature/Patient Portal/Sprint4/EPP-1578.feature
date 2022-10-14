Feature: Patient Portal : Schedule Appointment from marketing site - Provide Email or Phone number to Sync Appointment Information
  User Story: As a user, I should be able to provide my email or phone number that was provided during scheduling appointment to create an account and sync the appointments.

  

  @BDDTEST-EPP-2956
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1578 - Verify user able to view enter Email or Phone Number to Sync Appointment Information
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user should see submit
    When user provides "<Email or Phone Number"
    And user click on submit
    Then user should see the Email or Phone Number synced with appointment

    Examples:
    |Email or Phone Number|
    |user1@photon.com|
    |9876543200|

  @BDDTEST-EPP-2957
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1578 -Verify user able to view inline error message if Email or Phone Number is not entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user should see submit
    When user provides "<Email or Phone Number"
    And user click on submit
    Then user should see the Email or Phone Number synced with appointment

    Examples:
    |Email or Phone Number|
    |user1@photon.com|
    |9876543200|
