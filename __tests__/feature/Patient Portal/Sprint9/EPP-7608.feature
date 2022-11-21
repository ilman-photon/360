
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - External user receives the link via email/ text message
  User Story: As an external user with whom the patient records are shared, I should receive an email/ text message with a secure link (Patient portal URL) to access the health record/ care plan document/ prescription.



  @BDDTEST-EPP-10194
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7608 - Verify user able to share the patient records to the external user’s email or phone number
    EPIC_EPP-42_STORY_EPP-7608 - Verify user able to share the patient records to the external user’s email or phone number
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    Then user should see share options on each document 
    And user share records to external user either email or phone number

  @BDDTEST-EPP-10197
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7608 - Verify system share the patient records to the external user’s email or phone number through secure link
    EPIC_EPP-42_STORY_EPP-7608 - Verify system share the patient records to the external user’s email or phone number through secure link
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    Then user should see share options on each document 
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number

  @BDDTEST-EPP-10198
  @P1
  @Patient_portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should receive an email/ text message with the content
    EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should receive an email/ text message with the content
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    When user click on Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content

  @BDDTEST-EPP-10199
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should see validation message when link expiry 
    EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should see validation message when link expiry 
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content
    And External user should see message “The validity of the link has expired" if link clicked after 72 hours

  @BDDTEST-EPP-10200
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should see a secure link (patient portal link) with the email/ text message which when clicked will direct the user to a patient portal URL
    EPIC_EPP-42_STORY_EPP-7608 - Verify if External user should see a secure link (patient portal link) with the email/ text message which when clicked will direct the user to a patient portal URL
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    Then user should see share options on each document 
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content
    And External user should see secure link in email/text
    Then link will redirect patient portal URL upon click
