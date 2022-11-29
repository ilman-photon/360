Feature: Patient Portal: Admin – Recover username/reset password –Search result

  @BDDTEST-EPP-10446
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify Admin should be able to view the list of patients based on search along with details
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status

  @BDDTEST-EPP-10447
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify Admin should be able to view Activate CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The Experian validation has failed for that patient  
    Then Admin should be able to view Activate CTA

  @BDDTEST-EPP-10448
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify Admin should be able to view only Activate CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The Experian validation has failed for that patient
    Then Admin should be able to view only Activate CTA

  @BDDTEST-EPP-10449
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify Admin should be able to view Unlock CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The account of the patient is in locked status
    Then Admin should be able to view Unlock CTA

  @BDDTEST-EPP-10450
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify Admin should be able to view Locked date & time
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The account of the patient is in locked status 
    Then Admin should be able to view Locked date & time

  @BDDTEST-EPP-10451
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify User should be able to view Send password reset link CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The account of the patient is in locked status 
    Then Admin should be able to view Locked date & time
    And User should be able to view Send password reset link CTA

  @BDDTEST-EPP-10452
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify User should be able to view Share Username CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The account of the patient is in locked status 
    Then Admin should be able to view Locked date & time
    And User should be able to view Send password reset link CTA
    And User should be able to view Share Username CTA

  @BDDTEST-EPP-10453
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7524- Verify User should be able to view ‘View security question & answers’ CTA
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the search results based on search input 
    And Admin should be able to view the list of patients based on search along with
    |Patient Name 
    |Patient ID 
    |Date of birth 
    |Email ID 
    |Phone Number 
    |Username 
    |Status
    When The account of the patient is in locked status 
    Then Admin should be able to view Locked date & time
    And User should be able to view Send password reset link CTA
    And User should be able to view Share Username CTA
    And User should be able to view ‘View security question & answers’ CTA
