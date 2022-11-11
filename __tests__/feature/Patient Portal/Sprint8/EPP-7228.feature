
Feature: Patient Portal : Search Doctors - View basic details of doctor
  User Story: As a user, I should be able to view basic details of the doctor on the find a doctor screen.

  @BDDTEST-EPP-8248
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-7228 - Verify User views a card of a doctor
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
    And user should views a card of a doctor

  @BDDTEST-EPP-8249
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-7228 - Verify User views a card the following details of the doctor
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)
    When user click on Find a Doctor
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    And user should views a card with basic details of a doctor 
    |Photo of the Doctor 
    |Name  
    |Specialty 
    |Practice name 
    |Address 
    |City
    |State 
    |Zip code 
    |Email 
    |Phone 
    |View Profile CTA Option
    |Schedule Appointment CTA option

  @BDDTEST-EPP-8250
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-7228 - Verify User should be navigate to doctor’s details screen
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)
    When user click on Find a Doctor
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    And user should views a card with basic details of a doctor 
    When user click on View Profile button
    Then user should be navigated to doctor's details screen

  @BDDTEST-EPP-8251
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-7228 - Verify User should be redirect to schedule appointment screen with location of the provider pre-filled as user’s searched location
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)
    When user click on Find a Doctor
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    And user should views a card with basic details of a doctor 
    When user click on schedule appointment button
    Then user should be redirect the user to schedule appointment screen with location of the provider pre-filled as user’s searched location

  @BDDTEST-EPP-8252
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-7228 - Verify User should be able to view today’s date as the date searched
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu
    When User Click on Appointment menu
    Then Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)
    When user click on Find a Doctor
    And user click on "<Doctor name, practice name>" field
    And user enter some keyword 
    When user click on search icon
    Then user should see result from keyword they search
    And user should views a card with basic details of a doctor 
    When user click on schedule appointment button
    Then user should be redirect the user to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And user should be able to view today’s date as the date searched
