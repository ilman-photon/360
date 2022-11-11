@BDDSTORY-EPP-6696
@EPP_Sprint_8
@Experian_Integration
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal : Integration with Experian - Error message when user fails to verify themselves using Experian
  User Story: As an unverified user, I should see an error message if I fail to digitally verify myself.

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

  User answers those questions incorrectly

  WHEN

  User clicks on the option to submit them

  THEN

  User should be able to view the message “One or more answers were incorrect. Please try again.” along with an option to try again which when clicked will ask the user a set of multiple choice questions as in   (ECP to provide verbiage)

  @BDDTEST-EPP-8268
  @P2
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-27_STORY_EPP-6696 - Verify after unverified user click submit, they should be able to view failed message
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
    Then user should be able to view failed message "Unable to Verify Your Identity.” displayed

  @BDDTEST-EPP-8269
  @P2
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-27_STORY_EPP-6696 - Verify after unverified user click submit, they should be able to view failed message dissapear
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
    Then user should be able to view failed message "Unable to Verify Your Identity.” displayed
    When user click on X button
    Then error message overlay is dissapear

  @BDDTEST-EPP-8270
  @P2
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-27_STORY_EPP-6696 - Verify after unverified user click submit, they should be able to view failed message on dashboard
    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified 
    And user should be able to view failed message "You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves."

  @BDDTEST-EPP-8271
  @P2
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-27_STORY_EPP-6696 - Verify after unverified user click submit, they should be able to view failed message on dashboard disappear
    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified 
    And user should be able to view failed message "You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves."
    When user click on X button
    Then Error message is disappear
