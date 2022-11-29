Feature: Patient Portal: Admin – View locked accounts – Share username CTA

  @BDDTEST-EPP-10475
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify Admin should be able to view Are you sure you want to share username? overlay
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

  @BDDTEST-EPP-10476
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify Admin should be able to view the preferred mode of communication as selected by the patient
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
    And Admin should be able to default selected radio button should be same with patient data

  @BDDTEST-EPP-10477
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify admin should not be able to view mode of communication option email if the email is not available in the patient information
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
    And admin should not be able to view mode of communication option email if the email is not available in the patient information

  @BDDTEST-EPP-10478
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify admin should not be able to view mode of communication option phone if the phone is not available in the patient information
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
    And admin should not be able to view mode of communication option phone if the email is not available in the patient information

  @BDDTEST-EPP-10479
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify admin should be able to view "Share Username" button
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

  @BDDTEST-EPP-10480
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify admin should be able to view "Cancel" button
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
    And admin should be able to view "Cancel" button

  @BDDTEST-EPP-10481
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify admin should be able to view the success message ‘Username shared to <Patient name> successfully’ if ‘yes’ is selected during confirmation
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

  @BDDTEST-EPP-10482
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify The respective patient should receive the message with the username in the mode of communication selected by admin
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
    And The respective patient should receive the message with the username in the mode of communication selected by admin

  @BDDTEST-EPP-10483
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7529- Verify The respective patient should not receive the message with username if No is selected during confirmation
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
    And admin should be able to view "Cancel" button 
    When admin click on  "Cancel" button 
    And admin should be able to view overlay dismissed
    And The respective patient should not receive the message with username
