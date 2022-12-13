
Feature: Patient Portal: Settings– Change username – Error message
  USER STORY: As a user, I should be able to view the error messages while updating the username of patient portal

  @BDDTEST-EPP-10953
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a valid email ID or Phone number” if the new email ID or phone number entered is not in correct format

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
    And user enter new user name on "<Username*>" field with invalid format
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Update button
    Then user should be able to view the error message “Please enter a valid email ID or Phone number” if the new email ID or phone number entered is not in correct format


  @BDDTEST-EPP-10954
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username

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
    And user enter new user name on "<Username*>" field with same with previously
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Update button
    Then user should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username


  @BDDTEST-EPP-10955
  @P1
  @Patient_Portal
  @Regression
  @Settings
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a valid email ID or Phone number ” if anything other than email ID or Phone number is entered as username

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
    And user enter new user name on "<Username*>" field with invalid format
    When user click on 'Update' button
    Then user should be able to view Are you sure want to update your username modal
    And user should be able to view Update button
    And user should be able to view Cancel button
    When user click on Update button
    Then user should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username
