Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View share my health record/ care plan document/ prescription pop-up
 
  @BDDTEST-EPP-10170
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their care plan document with field
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When user click on share icon button
    Then user should see the pop-up to share their care plan document 
    And user should be able to see field
    
  @BDDTEST-EPP-10171
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their prescriptions with field
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Chart navigation menu
    When user click on Health Chart menu
    And user click on prescriptions sub menu
    Then user should be able to view share options on each document of prescriptions
    When user click on share icon button
    Then User should see the pop-up to share their prescriptions 
    And user should be able to see field
    
  @BDDTEST-EPP-10172
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the pop-up to share their Test & Lab Result  with field
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Chart navigation menu
    When user click on Health Chart menu
    And user click on Test & Lab Result sub menu
    Then user should be able to view share options on each document of Test & Lab Result
    When user click on share icon button
    Then User should see the pop-up to share their Test & Lab Result 
    And user should be able to see field
    
  @BDDTEST-EPP-10173
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the inline error message This is a required field when mandatory fields are not provided
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Chart navigation menu
    When user click on Health Chart menu
    And user click on Test & Lab Result sub menu
    Then user should be able to view share options on each document of Test & Lab Result
    When user click on share icon button
    Then User should see the pop-up to share their Test & Lab Result 
    And user should be able to see field
    And user leaves an empty field
    When user click on OK button
    Then user should see the inline error message This is a required field when mandatory fields are not provided

  @BDDTEST-EPP-11092
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-30_STORY_EPP-7260 - Verify User should see the text Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, etc
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When user click on share icon button
    Then User should see the pop-up to share their care plan document 
    And User should see the text Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, family or friends securely. on pop-up

