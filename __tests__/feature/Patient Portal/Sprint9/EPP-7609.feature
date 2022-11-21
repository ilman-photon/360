
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - External user receives the access code via email/ text message
  User Story: As an external user with whom the patient records are shared, I should receive the access code in a separate email/ text message.


  @BDDTEST-EPP-10155
  Scenario: EPIC_EPP-42_STORY_EPP-7609 - Verify the Email/SMS content as per ECP content for access code Email/SMS
    EPIC_EPP-42_STORY_EPP-7609 -  Verify the Email/SMS content as per ECP content for access code Email/SMS
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content and then access code
    And External user verify the EMAIL/SMS content is same as of ECP cotent

  @BDDTEST-EPP-10156
  Scenario: EPIC_EPP-42_STORY_EPP-7609 - Verify if External user can request for another access code if validity expire
    EPIC_EPP-42_STORY_EPP-7609 -  Verify if External user can request for another access code if validity expire
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content and then access code
    And External user can request for another access code if link validity expire

  @BDDTEST-EPP-10157
  Scenario: EPIC_EPP-42_STORY_EPP-7609 - Verify if External user to check the access code valid status post used it once
    EPIC_EPP-42_STORY_EPP-7609 -  Verify if External user to check the access code valid status post used it once
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content and then access code
    And External user should see secure link in email/text
    And External user should check access code valid status post used code to view link

  @BDDTEST-EPP-10158
  Scenario: EPIC_EPP-42_STORY_EPP-7609 -Verify if External user should receive another email/ text message with the access code
    EPIC_EPP-42_STORY_EPP-7609 -Verify if External user should receive another email/ text message with the access code
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    When user click on Document navigation menu
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number
    And External user should receive an email/text message with the content
    Then External user should receive another email/ text message with the access code

  @BDDTEST-EPP-10159
  Scenario: EPIC_EPP-42_STORY_EPP-7609 - Verify system share the patient records to the external user’s email or phone number through secure link
    EPIC_EPP-42_STORY_EPP-7609 - Verify system share the patient records to the external user’s email or phone number through secure link
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    Then user should see share options on each document 
    And user share records to external user either email or phone number 
    Then system send out the patient records via a secure link to the external user’s email or phone number

  @BDDTEST-EPP-10195
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7609 - Verify user able to share the patient records to the external user’s email or phone number
    EPIC_EPP-42_STORY_EPP-7609 - Verify user able to share the patient records to the external user’s email or phone number
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    Then user should see share options on each document 
    And user share records to external user either email or phone number
