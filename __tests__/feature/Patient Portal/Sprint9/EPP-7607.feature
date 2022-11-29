
@EPP_Patient_Sprint_9
@P3
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - System to identify whether entered in direct email or normal email or phone number
  User Story: System should have the capability to identify if the entered detail is a direct email or normal email or a phone number and route the shared items accordingly.



  @BDDTEST-EPP-10184
  @P3
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify user should be able to view share options on each document of Health care
    EPIC_EPP-42_STORY_EPP-7607 - Verify user should be able to view share options on each document of Health care

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    |Print
    |Download
    |Share

  @BDDTEST-EPP-10185
  @P3
  @Patient_portal
  @Sprint6
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify User should see the pop-up to share their care plan document a
    EPIC_EPP-42_STORY_EPP-7607 - Verify User should see the pop-up to share their care plan document 

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When user click on
    Then User should see the pop-up to share their care plan document

  @BDDTEST-EPP-10186
  @P3
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify if User enters the required details and clicks on the option to share
    EPIC_EPP-42_STORY_EPP-7607 -  Verify if User enters the required details and clicks on the option to share

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When User enters the required details  
    Then clicks on the option to share

  @BDDTEST-EPP-10187
  @P3
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify if System  identify  the entered email id is normal email and should send an email with a secure link for the recipient to access the patient records
    EPIC_EPP-42_STORY_EPP-7607 - Verify if System  identify  the entered email id is normal email and should send an email with a secure link for the recipient to access the patient records

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When User enters the required details  
    Then clicks on the option to share
    And System should identify whether the entered email id is a normal email and should send an email with a secure link for the recipient to access the patient records

  @BDDTEST-EPP-10188
  @P3
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify if System should identify whether the entered email id is a direct email and route it to the mentioned recipient via secure direct messaging
    EPIC_EPP-42_STORY_EPP-7607 - Verify if System should identify whether the entered email id is a direct email and route it to the mentioned recipient via secure direct messaging

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When User enters the required details  
    Then clicks on the option to share
    And System should identify whether the entered email id is a direct email and route it to the mentioned recipient via secure direct messaging

  @BDDTEST-EPP-10189
  @P3
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7607 - Verify if System  identify and entered phone number and should send text message with a secure link for the recipient to access the patient records 
    EPIC_EPP-42_STORY_EPP-7607 - Verify if System  identify and entered phone number and should send text message with a secure link for the recipient to access the patient records 

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When User enters the required details  
    Then clicks on the option to share
    And System should identify whether the entered is a phone number and should send a text message with a secure link for the recipient to access the patient records
