Feature: Patient Portal: PHR - Patient view and access Health record page
  As a patient, I should be able to view and access the Health Records page in Patient Portal 

  @BDDTEST-EPP-6845
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf file 
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf file 

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file

  @BDDTEST-EPP-6854
  @Medical_Information
  @P1
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the latest medical record chart that uploaded by ECP E360+
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the latest medical record chart that uploaded by ECP E360+

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+

  @BDDTEST-EPP-6866
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the service is unavailable - When User clicks on Health Record sub menu
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the service is unavailable - When User clicks on Health Record sub menu

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6867
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User clicks on Health Record sub menu
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User clicks on Health Record sub menu

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6868
  @Medical_Information
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should view the message as “No Health record available now.” in the page, if there is no medical record has been uploaded by ECP for him/her
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should view the message as “No Health record available now.” in the page, if there is no medical record has been uploaded by ECP for him/her

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record
    And User should be able to view the option to share the medical record with others 
    And User should view the message as “No Health record available now.” in the page, if there is no medical record has been uploaded by ECP for him/her

  @BDDTEST-EPP-6869
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to view the option to share the medical record with others 
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to view the option to share the medical record with others 

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record
    And User should be able to view the option to share the medical record with others

  @BDDTEST-EPP-6870
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the option to print the medical record
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the option to print the medical record

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record
    And User should be able to see the option to print the medical record

  @BDDTEST-EPP-6871
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should have the provision to view the medical record
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should have the provision to view the medical record

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record

  @BDDTEST-EPP-6872
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-7205_STORY_EPP-7025 - Verify User should have the provision to view the medical record
    Scenario: EPIC_EPP-7205_STORY_EPP-7025 - Verify User should have the provision to view the medical record

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format
    And User should have the provision to view the medical record

  @BDDTEST-EPP-6873
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the uploaded date in ‘mm/dd/yyyy’ format 
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the uploaded date in ‘mm/dd/yyyy’ format 

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
    And User should be able to see the date on when the medical record has been uploaded by ECP for him/her 
    And User should be able to see the uploaded date in ‘mm/dd/yyyy’ format

  @BDDTEST-EPP-6874
  @Medical_Information
  @P1
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf file 
    Scenario: EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf file 

    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard|
    |Appointments|
    |Health Chart|
    |My Care Team|
    |Pay My Bill|
    |Messaging|
    |Documents|
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
    When User clicks on Health Record sub menu
    Then User should be navigated to Health Record screen
    And User should be able to see the latest medical record chart that uploaded by ECP E360+
    And User should be able to see the name of the medical record as same as the name of the uploaded pdf file
