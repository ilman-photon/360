
Feature: Patient Portal : Search Doctors - View doctor's details
  User Story: As a user, I should be able to view the doctor's details on selecting them.

  @BDDTEST-EPP-8265
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4338 - Verify User should be view doctor's details screen
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
    And user should be view doctor's details screen

  @BDDTEST-EPP-8266
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4338 - Verify User should be view doctor's details screen with following details
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
    And user should be view doctor's details screen
    |About
    |Specialties 
    |Sub-specialities
    |Gender
    |Languages
    |In-network Insurances
    |Location with ‘Get directions’ CTA
    |Education
    |Memberships and Affiliations
    |Ratings
    |Ratings for that Provider

  @BDDTEST-EPP-8267
  @P2
  @Patient_Portal
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-24_STORY_EPP-4338 - Verify User should be able to view new tab is open with locations of doctor
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
    When user click on ‘Get directions’ CTA
    Then user should be able to view new tab is open with locations of doctor
