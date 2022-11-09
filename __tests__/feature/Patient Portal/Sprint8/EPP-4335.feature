
Feature: Patient Portal : Search Doctors - View
  User Story: As a user, I should be able to view the screen to search for doctors.

  @BDDTEST-EPP-8125
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify User should be able to navigated to search doctors screen
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen

  @BDDTEST-EPP-8126
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the heading “Find a Doctor"
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as “Find a Doctor"

  @BDDTEST-EPP-8127
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the copy text below heading "Doctor Search"
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as 'Find a Doctor'
    And user should be able to view the copy text below heading 'Doctor Search'

  @BDDTEST-EPP-8128
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to filter doctors by City
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as 'Find a Doctor'
    And user should be able to view the option to filter doctors by City

  @BDDTEST-EPP-8129
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to filter doctors by ECP practise name
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as 'Find a Doctor'
    And user should be able to view the option to filter doctors by ECP practise name

  @BDDTEST-EPP-8130
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to filter doctors by Specialities
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as 'Find a Doctor'
    And user should be able to view the option to filter doctors by Specialities

  @BDDTEST-EPP-8131
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to filter doctors by Sub Specialities
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user should be able to view the heading written as “Find a Doctor"
    And user should be able to view the option to filter doctors by Sub Specialities

  @BDDTEST-EPP-8132
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to clear all filters which when clicked will clear all the filters
    EPIC_EPP-7205_STORY_EPP-4335 - Verify user should be able to view the option to clear all filters which when clicked will clear all the filters

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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    When user click on dropdown of "<City>" field
    And user click on one of city from the list
    Then user should be able to view list of doctor from the selected city 
    And user should be able to view the option to clear all filters which when clicked will clear all the filters

  @BDDTEST-EPP-8133
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-4335 - Verify user by default should be able to view the list of all doctors with details
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
    When user click on Find a Doctor
    Then user should be able to navigated to search doctors screen
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    And user by default should be able to view the list of all doctors with details
