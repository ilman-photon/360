
Feature: Patient Portal : Insurance  Information - Fill new insurance details - (P2)
  User Story: As a user, I should be able to fill my new Insurance information.

  

  @BDDTEST-EPP-2329
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 - Verify if "+New insurance button" is enabled for user
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the "Insurance page"
    And clicks on the "+New insurance button"
    Then  "+New insurance button is enabled" 
    And Insurance documents page open
    
    Examples:

  @BDDTEST-EPP-2330
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -  Verify if the user can see the existing insurance
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    Then user sees the "sees the list of existing  insurances"
    
    
    Examples:

  @BDDTEST-EPP-2332
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the user can add new insurance details by clicking the "+ New Insurance  button"
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Fill all the required fields
    And "Clicks" on the "Save button"
    Then "Insurance documents" is added to the list
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2333
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    verify if the user can see the error message “This field is required” for those mandatory fields which are not filled
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And do not fill any one of the required fields.
    And "Clicks" on the "Save button"
    Then the User sees the error message “This field is required”  under the respective field.
    
    
    Examples:
    |Insurance Provider|

  @BDDTEST-EPP-2334
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the user can see the error message “Incorrect format” for those fields which are in incorrect format
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And enter invalid formate in the required field
    And "Clicks" on the "Save button"
    Then the User sees the error message “Incorrect format”  under the respective field.
    
    Examples:
    |Insurance Provider|

  @BDDTEST-EPP-2335
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the "Cancel " "button" is enabled for the user
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Fill all the required fields
    And "Clicks" on the "Cancel" "button"
    Then All entered fields are erased.
    
    
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|

  @BDDTEST-EPP-2336
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the user can add maximum "5"new insurance details by clicking the "+ New Insurance  button"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Fill all the required fields
    And "Clicks" on the "Save button"
    Then "Insurance documents" is added to the list.
    And Clicks on the "+New insurance Button"
    And Fill all the required fields
    And "Clicks" on the "Save button"
    Then User can add up to "5" Insurance detailes
    
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2337
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the proper error message is displayed when the user tries to add more than 5 insurance.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Add 5 successful "insurance details"
    And "Clicks" on the +New insurance Button
    Then use sees the error message  “Cannot add any more insurances. The maximum limit has been reached” 
    
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2338
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the proper error message is displayed when the user tries to add insurance documents without an internet connection
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Switch off the" internet connection"
    And Enter all the required fields
    And "Clicks" on the "Save"< "Button">
    Then the user sees the error message  “check your internet connection". 
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2339
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if all fields are erased when the user refreshes the browser
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Enter all the required fields
    And Refresh the browser
    Then the user sees the sees all entered fields are erased.
    
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    ||                                                  ||                                  ||                                         ||

  @BDDTEST-EPP-2340
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if a 503 Service unavailable message  displays when the user tries to fill "insurance details" when the server is on maintenance
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Switch off the" server"
    And Enter all the required fields
    And "Clicks" on the "Save"< "Button">
    Then the user sees the error message  "503 Service unavailable"
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2341
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-949 -    Verify if the user can add new Insurance details by "mobile browser"
    Given Launch  the mobile Browser Enter the' XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "Insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And Fill all the required fields
    And "Clicks" on the "Save button"
    Then "Insurance documents" is added to the list
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2342
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-949 -    Verify if the insurance details page is opened within 3 seconds when the user clicks on the "+ New insurance button"
    Given Launch  the mobile Browser Enter the' XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    Then the "Insurance documents" page is opened for 3 or less than 3 seconds.

  @BDDTEST-EPP-2343
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-949 -    Verify if the user is able to view Dev Tools When F12 is clicked
    Given Launch  the Browser Enter the' XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And "Insurance documents" page is opened for 3 or less than 3 seconds.
    And Clicks on "F12" key in keyboard
    Then user must "validate" whether the Dev Tools are Displayed.
