
Feature: Patient Portal : Search Doctors - Search doctors by Name or ECP Practise name
  User Story: As a user, I should be able to search doctors by Doctor name or ECP Practice name.

  @BDDTEST-EPP-8256
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4336 - Verify User searches and selects a ECP Practise location to filter the doctors
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
    And user should view a card with basic details of a doctor 
    When user click on dropdown of "<ECP Practise location>" field
    And user click on one of ECP Practise location from the list
    Then user should be able to view list of doctor from the selected ECP Practise location 

    Example:
    |Doctor name, practice name|
    |Robert|

  @BDDTEST-EPP-8257
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4336 - Verify User able to view filter result from ECP Practise location that they selected
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
    And user should view a card with basic details of a doctor 
    When user click on dropdown of "<ECP Practise location>" field
    And user click on one of ECP Practise location from the list
    Then user should be able to view list of doctor from the selected ECP Practise location 
    And user able to view filter result from ECP Practise location that they selected 

    Example:
    |Doctor name, practice name|
    |Robert|

  @BDDTEST-EPP-8258
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4336 - Verify User able to view filter button to open overlay
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
    And user should view a card with basic details of a doctor 
    When user click on dropdown of "<ECP Practise location>" field
    And user click on one of ECP Practise location from the list
    Then user should be able to view list of doctor from the selected ECP Practise location 
    And user able to view filter button to open overlay

    Example:
    |Doctor name, practice name|
    |Robert|
