
Feature: Patient Portal : Education Materials - Read more CTA
  User Story: As a user, I should be able to view the entire content of education material

  @BDDTEST-EPP-9631
  @P1
  @Patient_Education
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view the entire content of education material
    Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view the entire content of education material

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material

  @BDDTEST-EPP-9632
  @P1
  @Patient_Education
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to see that the education material document & Print
    Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to see that the education material document & Print

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material
    And User should be able to view Download CTA 
    When User clicks on view Download CTA 
    Then User should be able to see that the education material document & Print is downloaded

  @BDDTEST-EPP-9633
  @P1
  @Patient_Education
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Print CTA which when clicked will print the education material document
    Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Print CTA which when clicked will print the education material document

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material
    And User should be able to view Print CTA 
    When User clicks on view Print CTA 
    Then User should be able to print that the education material document with print page

  @BDDTEST-EPP-9634
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Back to education material CTA which when clicked will take the user back to Education materials screen
    Scenario: EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Back to education material CTA which when clicked will take the user back to Education materials screen

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material
    And User should be able to view Back to education material CTA
    When User clicks on Back to education material CTA
    Then User should be navigated to Education materials screen

  @BDDTEST-EPP-9635
  @P1
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on Read more CTA
    Scenario: EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on Read more CTA

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material
    And User should be able to view Print CTA 
    When User clicks on view Print CTA 
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-9636
  @P1
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on Read more CTA
    Scenario: EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on Read more CTA

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Education Materials' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Education Materials'  option
    Then User lands on the screen to view the patient education materials
    When User clicks on Read more CTA
    Then User should be able to view the entire content of education material
    And User should be able to view Print CTA 
    When User clicks on view Print CTA 
    And the service is unavailable
    Then user should see the appropriate error message
