@BDDSTORY-EPP-6695
@EPP_Sprint_8
@Experian_Integration
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal : Integration with Experian - User digitally verified using experian
  User Story: As an unverified user, I should be able to digitally verify myself through Experian and access the patient portal completely.

  Acceptance Criteria:

  GIVEN

  User is an unverified user

  And

  User is logged into the portal

  And

  User lands on the dashboard as in  

  And

  User clicks on the ‘Verify Identity Digitally’ CTA

  And

  User views a list of five multiple choice questions from Experian

  And

  User answers those questions correctly

  WHEN

  User clicks on the option to submit them

  THEN

  User should be able to view the message “Success! You have been digitally verified.” (ECP to provide verbiage)

  And

  User should be able to access all the features within the patient portal



  Note for Backend:

  Where data is stored regarding digital verification? Eg: - data of “who is this user, timestamp, if digital verification was successful or not, etc.” ? - To be in PPP and push this information to E360+ (To be part of patient note section)

  @BDDTEST-EPP-8187
  @Experian_Integration
  @PPP_Phase_2
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6695 - Verify  unverified user should be able to see all other menus and options being disabled
    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified user such as
    |Prescription widget
    |Mycare team widget

  @BDDTEST-EPP-8188
  @Experian_Integration
  @PPP_Phase_2
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6695 - Verify after unverified user click submit, they should be able to view success message then able to access menus and options
    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified user such as
    |Prescription widget
    |Mycare team widget
    When user click on Verify Identity Digitally button
    Then user should be able to view five multiple choice questions from Experian overlay
    And user answers those questions correctly
    When user click on Submit button
    Then user should be able to view success message "Success! You have been digitally verified.” displayed
    And user should be able t access menus and options

  @BDDTEST-EPP-8189
  @Experian_Integration
  @PPP_Phase_2
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6695 - Verify after unverified user click submit, they should be able to view failed message
    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified user such as
    |Prescription widget
    |Mycare team widget
    When user click on Verify Identity Digitally button
    Then user should be able to view five multiple choice questions from Experian overlay
    And user answers those questions correctly
    When user click on Submit button
    Then user should be able to view failde message "Unable to Verify Your Identity.” displayed
