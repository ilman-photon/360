@BDDSTORY-EPP-4911
@Homepage
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal - Dashboard - Prescriptions Widget - Share Prescription
  User Story: As a user, I should be able to view share the prescription from the prescriptions widget in the dashboard

  Acceptance Criteria:

  GIVEN

  User has logged in the portal
  And
  User lands on the dashboard

  WHEN
  User views the prescription widget

  THEN
  User should be able to view more actions CTA for Glasses, Contact lens and Medications prescriptions section and click on CTA to view options: Download, Share and Print
  And
  User should be able to click on share to share the prescription and navigate to share prescription screen/pop-up ( refer -  )

  @BDDTEST-EPP-10727
  @ManageAccount
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-1_STORY_EPP-4911 - Verify User should be able to share the prescription and navigate to share prescription screen/pop-up
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses
    |Contact
    |Medications
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up

  @BDDTEST-EPP-10728
  @ManageAccount
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-1_STORY_EPP-4911 - Verify User should be able to view details of share pop-up
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses
    |Contact
    |Medications
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    And user should be able to share the prescription and navigate to share prescription screen/pop-up
    And user should be able to view details of poup-up such as
    |Title written as Share my glasses Prescription
    |Prescribed on: 01/10/2021
    |Prescribed by: Dr. Sonha Nguyen
    |Expires on: 01/10/2022
    |1.We will email an invitation to someone you trust
    |2. They receive the access code.
    |3. They can securely access your shared information. 
    | Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, family or friends securely.
    |"<Email, Direct Email or Phone"> field
    | "<Message subject>" field
    | Share button

  @BDDTEST-EPP-10729
  @ManageAccount
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-1_STORY_EPP-4911 - Verify External user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses
    |Contact
    |Medications
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up
    And user enter valid email/phone number on "<Email, Direct Email or Phone>" field
    And user enter character on"< Message subject>" field
    When user click on Share button
    Then user should Access Code to view shared Health record
