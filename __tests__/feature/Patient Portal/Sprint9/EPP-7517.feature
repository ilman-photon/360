Feature: Patient Portal: Admin – View locked accounts –Search option

  @BDDTEST-EPP-10221
  @Admin
  @P2
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the search results based on search input 

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the options below for searching a patient whose account is locked
    |Patient name|
    |Email ID|
    |Phone No.|
    And User should be able to input Patient name, Email ID or Phone No to initiate the search 
    And User should be able to view the search results based on search input

  @BDDTEST-EPP-10222
  @Admin
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the message ‘No records found’ copy text

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the options below for searching a patient whose account is locked
    |Patient name|
    |Email ID|
    |Phone No.|
    And User should be able to input Patient name, Email ID or Phone No to initiate the search 
    When User the search result is emptied
    And User should be able to view the message ‘No records found’ copy text

  @BDDTEST-EPP-10223
  @Admin
  @P2
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to input Patient name, Email ID or Phone No to initiate the search 

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the options below for searching a patient whose account is locked
    |Patient name|
    |Email ID|
    |Phone No.|
    And User should be able to input Patient name, Email ID or Phone No to initiate the search

  @BDDTEST-EPP-10224
  @Admin
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the options below for searching a patient whose account is locked

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the options below for searching a patient whose account is locked
    |Patient name|
    |Email ID|
    |Phone No.|
