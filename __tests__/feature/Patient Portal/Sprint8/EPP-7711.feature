
Feature: Patient Portal : Search Doctors - Filter search results
  User Story: As a user, I should be able to filter the list of doctors by City and Specialty .

  @BDDTEST-EPP-9617
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)

  @BDDTEST-EPP-9618
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the list of all the available cities and specialties

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties

  @BDDTEST-EPP-9619
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to select multiple cities and specialties

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties

  @BDDTEST-EPP-9620
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the Done CTA

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA

  @BDDTEST-EPP-9621
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to click on the Done CTA to view the results based on the filters applied

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA 
    Then The results based on the filters applied

  @BDDTEST-EPP-9622
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the Reset CTA

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA 
    Then The results based on the filters applied
    And User should be able to view the Reset CTA

  @BDDTEST-EPP-9623
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to click on the Reset CTA to reset all the filters selected

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all

  @BDDTEST-EPP-9624
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the Close CTA

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA

  @BDDTEST-EPP-9625
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to click on the Close CTA to close the popup for filter without applying any filters

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters

  @BDDTEST-EPP-9626
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the selected filters

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters
    And User should be able to view the selected filters

  @BDDTEST-EPP-9627
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view option to remove the selected filters

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters
    And User should be able to view the selected filters
    And User should be able to view option to remove the selected filters

  @BDDTEST-EPP-9628
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711- Verify User should be able to view the list of doctors updated when the selected filter is removed

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters
    And User should be able to view the selected filters
    And User should be able to view option to remove the selected filters
    When User removes the selected filter
    Then User should be able to view the list of doctors updated

  @BDDTEST-EPP-9629
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User removes the selected filter

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters
    And User should be able to view the selected filters
    And User should be able to view option to remove the selected filters
    When User removes the selected filter
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-9630
  @Find_a_Doctor
  @P3
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-24_STORY_EPP-7711 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User removes the selected filter

    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Find a Doctor' sub-menu under the ‘Appointments’ menu present as part of the global header
    When User clicks on the ‘Find a Doctor'  option
    Then User lands on the screen to search doctor
    When User clicks on Filter CTA
    Then User should be able to view the option to filter by City and Specialty(Specialty and sub specialty)
    And User should be able to view the list of all the available cities and specialties
    And User should be able to select multiple cities and specialties 
    And User should be able to view the Done CTA
    When User clicks on the Done CTA
    Then The results based on the filters applied
    And User should be able to view the Reset CTA
    When User clicks on the Reset CTA
    Then User should be able to see that the filters selected is reset as all
    And User should be able to view the Close CTA
    When User clicks on the Close CTA
    Then User should be able to see the filter without applying any filters
    And User should be able to view the selected filters
    And User should be able to view option to remove the selected filters
    When User removes the selected filter
    Then User should be able to view the list of doctors updated
    And the internet service is unavailable
    And the service is unavailable
    Then user should see the appropriate error message
