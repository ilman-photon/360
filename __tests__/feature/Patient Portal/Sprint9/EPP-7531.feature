Feature: Patient Portal: Admin – Share username SMS communication
  
  @BDDTEST-EPP-10485
  @Admin
  @P2
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7533- Verify user should be able to receive an sms with my ECP patient portal username if admin has selected the preferred mode of communication as sms or both while sharing my username
    Given Admin get request from user (patient)
    And User has logged into the patient portal 	
    And Admin is logged in as Admin
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
    And Admin click on three dots icon 
    When admin click on Share Username sub menu
    Then admin should be able to view overlay with title written as Are you sure you want to share username?
    And admin should be able to view "Share Username" button 
    When admin click on "Share Username" button 
    Then admin should be able to view the success message ‘Username shared to <Patient name> successfully’ if ‘yes’ is selected during confirmation 
    And user should be able to receive an sms with my ECP patient portal username if admin has selected the preferred mode of communication as sms or both while sharing my username
