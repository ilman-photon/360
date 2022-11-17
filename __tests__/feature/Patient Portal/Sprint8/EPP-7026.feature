Feature: Patient Portal: PHR - Patient able to view the medical record without downloading the file

  @BDDTEST-EPP-6852
  @Medical_Information
  @P2
  @Patient_Portal
  @included
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7026 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on the option to view the medical record 

    Given ECP has uploaded the medical record and it is available to the patient in portal
    And user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    When User clicks on the option to view the medical record 
    And the internet is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6853
  @Medical_Information
  @P2
  @Patient_Portal
  @included
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7026 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to view the medical record 

    Given ECP has uploaded the medical record and it is available to the patient in portal
    And user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    When User clicks on the option to view the medical record 
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6855
  @Medical_Information
  @P2
  @Patient_Portal
  @included
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7026 - Verify User should be able to view the medical record as a pdf file opened in a separate tab
  
    Given ECP has uploaded the medical record and it is available to the patient in portal
    And user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360
    When User clicks on the option to view the medical record 
    Then User should be able to view the medical record as a pdf file opened in a separate tab
