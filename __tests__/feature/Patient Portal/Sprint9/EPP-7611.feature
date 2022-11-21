
@EPP_Patient_Sprint_9
@P2
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Option to resend access code
  User Story: As an external user with whom the patient records are shared, I should be able to receive the access code again when I click on the resend option.


  @BDDTEST-EPP-10203
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7611 - Verify External user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times
    EPIC_EPP-42_STORY_EPP-7611 - Verify External user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses|
    |Contact|
    |Medications|
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up
    And user enter valid email/phone number on "<Email, Direct Email or Phone>" field
    And user enter valid character on "<Message subject>" field
    When user click on share button
    Then user should navigated to Access Code to view shared Health record screen
    When user click on Resend Code three time
    Then user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times

  @BDDTEST-EPP-10204
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7611 - Verify External user should not be able to resend code for the next 30 mins
    EPIC_EPP-42_STORY_EPP-7611 - Verify External user should not be able to resend code for the next 30 mins

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses|
    |Contact|
    |Medications|
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up
    And user enter valid email/phone number on "<Email, Direct Email or Phone>" field
    And user enter valid character on "<Message subject>" field
    When user click on share button
    Then user should navigated to Access Code to view shared Health record screen
    When user click on Resend Code three time
    Then user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times
    And user wait more than 30 minutes
    When user click on Resend Code button
    Then user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times

  @BDDTEST-EPP-10216
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to view details of share pop-up
    EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to view details of share pop-up

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses|
    |Contact|
    |Medications|
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up
    And user should be able to view details of poup-up such as
    |Title written as Share my glasses Prescription|
    |Prescribed on: 01/10/2021|
    |Prescribed by: Dr. Sonha Nguyen|
    |Expires on: 01/10/2022|
    |1.We will email an invitation to someone you trust|
    |2. They receive the access code.|
    |3. They can securely access your shared information.|
    | Securely Transmit Your Information to a Third Party (enter) You can now transfer your medical records, care plan document as well as prescriptions to any other provider, family or friends securely.|
    |"<Email, Direct Email or Phone"> field|
    | "<Message subject>" field|
    | Share button|

  @BDDTEST-EPP-10217
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to share the prescription and navigate to share prescription screen/pop-up
    EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to share the prescription and navigate to share prescription screen/pop-up

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    When user click on View prescriptions Link
    Then user should be navigated to prescriptions screen 
    |Glasses|
    |Contact|
    |Medications|
    And user should be able to view each of prescriptions
    And user should be able to share icon
    When user click on share icon
    Then user should be able to share the prescription and navigate to share prescription screen/pop-up
