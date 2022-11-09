Feature: Patient Portal : Search Doctor - Navigation
  User Story: As a user, I should be able to see the navigation option to view the screen to search for doctors.

  @BDDTEST-EPP-8123
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-6698 - Verify User should be able to view Appointment sub Menu
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment

  @BDDTEST-EPP-8124
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-6698 - Verify User should be able to view search doctors screen
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)
    When user clicks on the ‘Find a Doctor'  option
    Then user should be able to view search doctors screen
