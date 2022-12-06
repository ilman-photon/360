
Feature: Patient Portal: Settings – Change username – Update Username CTA
  USER STORY: As a user, I should be able to update the username of patient portal

  @BDDTEST-EPP-10932
  @P1
  @Patient_Portal
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view sub menu under Profile to setup change user name
    EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view sub menu under Profile to setup change user name

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"

  @BDDTEST-EPP-10933
  @P1
  @Patient_Portal
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view "Login" screen sub menu
    EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view "Login" screen sub menu

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    And user should be able to view "Login" header title

  @BDDTEST-EPP-10934
  @P1
  @Patient_Portal
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view Username & Password section along with 'Update' Link
    EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view Username & Password section along with 'Update' Link

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    And user should be able to view "Login" header title
    And user should be able to view Username & Password section along with 'Update' Link

  @BDDTEST-EPP-10935
  @P1
  @Patient_Portal
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able navigated to Update Username screen
    EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able navigated to Update Username screen

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    And user should be able to view "Login" header title
    And user should be able to view Username & Password section along with 'Update' Link
    When user click on 'Update' Link
    Then user  should be able to navigated  Update Username screen along with
    |'Update Username' title screen|
    |Back  to Login & Security link|
    |Enter a valid email ID or phone number as your username copy text|
    |"<Username*>" field|
    |Update button|
    |Cancel button|

  @BDDTEST-EPP-10936
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user has provided new username and confirm new username
    EPIC_EPP-36_STORY_EPP-7717 - Verify user has provided new username and confirm new username 

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    When user click on 'Update' Link
    Then user  should be able to navigated  Update Username screen
    And user enter new user name on "<Username*>" field
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Update button
    Then user should be navigated back to "Login" screen sub menu along with success message 'Your username was successfully updated.'

    Example:
    |Username|
    |xxxxxxxx|

  @BDDTEST-EPP-10937
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to receive the alert for changing the username in preferred mode of communication
    EPIC_EPP-36_STORY_EPP-7717 - Verify user  should be able to receive the alert for changing the username in preferred mode of communication

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    When user click on 'Update' Link
    Then user  should be able to navigated  Update Username screen
    And user enter new user name on "<Username*>" field
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Update button
    Then user should be navigated back to "Login" screen sub menu along with success message 'Your username was successfully updated.'
    And user should be able to receive the alert for changing the username in preferred mode of communication


    Example:
    |Username|
    |xxxxxxxx|

  @BDDTEST-EPP-10938
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7717 - Verify username should not be changed if No is selected during confirmation
    EPIC_EPP-36_STORY_EPP-7717 - Verify username should not be changed if No is selected during confirmation 

    Given User launch Patient Portal url		
    And user is logged into the portal with valid credential
    And user lands on the Dashboard screen
    When user click on account menu in header
    Then user should be navigated to Account screen
    And user should be able to view sub menu under Profile to setup change user name
    And sub menu written as "Login & Security"
    When user click on "Login" screen sub menu
    Then user should be able to view "Login" screen sub menu
    When user click on 'Update' Link
    Then user  should be able to navigated  Update Username screen
    And user enter new user name on "<Username*>" field
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Cancel button
    Then user should be navigated back to "Login" screen and username isn't update

    Example:
    |Username|
    |xxxxxxxx|
