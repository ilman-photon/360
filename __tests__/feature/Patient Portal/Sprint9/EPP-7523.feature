Feature: Patient Portal: Admin – Recover username/reset password –Search Patient

  @BDDTEST-EPP-10442
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the options for searching for a patient on Recover username/reset password screen
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no:

  @BDDTEST-EPP-10443
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the search results based on search input
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the searc
    Then Admin should be able to view the search results based on search input

  @BDDTEST-EPP-10444
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the message ‘No records found’ if the search result is empty
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the search
    Then Admin should be able to view the message ‘No records found’ if the search result is empty

  @BDDTEST-EPP-10445
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the message ‘Please search to find the patient details’ when the page loads
    Given User has logged into the patient portal 	
    And User is logged in as Admin
    And Admin lands on the Recover username/reset password screen 
    And Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as
    |Patient name 
    |Email ID 
    |Phone no: 
    When Admin should be able to input Patient name, Email ID or Phone No to initiate the searc
    Then Admin should be able to view the search results based on search input
