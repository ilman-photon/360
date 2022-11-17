Feature: Patient Portal: PHR - Patient able to print his/her medical record

  @BDDTEST-EPP-6846
  @Medical_Information
  @P3
  @Patient_Portal
  @included
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7028 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on the option to print the medical record

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record
    When User clicks on the option to print the medical record 
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6847
  @Medical_Information
  @P3
  @Patient_Portal
  @included
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7028 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to print the medical record 

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record
    When User clicks on the option to print the medical record 
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6848
  @Medical_Information
  @P3
  @Patient_Portal
  @Regression
  @included
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7028 - Verify User should be able to print the medical record

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record
    When User clicks on the option to print the medical record 
    Then User should be able to print the medical record
