
Feature: Patient Portal : lnsurance Information - Edit existing insurance information - (P1)
  User Story: As a user, I should be able to edit my existing insurance information.

  
  @BDDTEST-EPP-2295
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit the existing insurance documents
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select a existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    Then "Edit button" is enabled user sees the edit the fields
    And user selelect a field "edit" the values
    And "Clicks" on the "Save button"
    Then "Insurance documents" is edited and is added to the list.
    Examples:

  @BDDTEST-EPP-2296
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951-    Verify if the user can cancel edited the existing insurance documents
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select a existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    Then "Edit button" is enabled user sees the edit the fields
    And user selelect a field "edit" the values
    And "Clicks" on the "cancel button"
    Then Edited fields are earased
    Examples:

  @BDDTEST-EPP-2297
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    verify if the user can see the error message “This field is required” for those mandatory fields data is deleted while editing.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select an existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    And user selects a field "delete" the values
    And "Clicks" on the "Save button"
    Then "Insurance documents" is edited 
    And "Clicks" on the "Save button"
    Then the User sees the error message “This field is required”  under the respective field.
    
    
    Examples:
    |Insurance Provider|

  @BDDTEST-EPP-2298
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can see the error message “Incorrect format” for those fields which are in incorrect format
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select an existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    And user selects a field "edit " the values
    And "Clicks" on the "Save button"
    Then the User sees the error message “Incorrect format”  under the respective field.
    
    Examples:
    |Insurance Provider| 
    |!@ASD$123|

  @BDDTEST-EPP-2299
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    Verify if all edited fields are erased when the user refreshes the browser
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select an existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    And user selects a field "edit " the values
    And Refresh the browser
    Then user sees the sees all edited fields are erased..
    
    Examples:
    |Insurance Provider| 
    |          |

  @BDDTEST-EPP-2300
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    Verify if a 503 Service unavailable message  displays when the user tries edit  "insurance details" when the server is on maintenance
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select an existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    And user selects a field "edit " the values 
    And Switch off the" server"
    And user selects a field "edit " the values 
    And "Clicks" on the "Save" "Button"
    Then the user sees the error message  "503 Service unavailable"
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|

  @BDDTEST-EPP-2301
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit Insurance details by "mobile browser
    Given Launch  the mobile Browser Enter the' XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees existing insurance documents
    And select an existing insurance 
    Then the selected insurance opened
    And "click on" edit button
    Then "Edit button" is enabled user sees the edit the fields
    And user selects a field "edit" the values
    And "Clicks" on the "Save button"
    Then "Insurance documents" is edited and is added to the list.
    Examples:
    Examples:
    |Insurance Provider| |Insurance subscriber id||Insurance Priority||Are you subscriber|
    |Atena|                           |145638905|                    |Primary|                  |Yes|
