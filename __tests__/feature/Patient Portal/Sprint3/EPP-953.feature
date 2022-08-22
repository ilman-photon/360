
Feature: Patient Portal : Insurance Information - Add new insurance details - (P2)
  User Story: As a user, I should be able to add new insurance information


  @BDDTEST-EPP-2196
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-10_STORY_EPP-953 - Verify if the all attributes present in "Insurance documents" page
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the "Insurance page"
    And clicks on the "+New insurance button"
    Then  Insurance documents page open with following attributes Insurance Provider"Type-ahead search dropdown ", Plan name"Type-ahead search dropdown ",Subscriber ID/ Member ID"Numeric/text field",Group #"Numeric/text field",Upload image of the insurance" frient and back",Insurance Priority"Radio buttons - Primary / Secondary / Tertiary",Are you the subscriber?"Radio buttons yes,No"

  @BDDTEST-EPP-2197
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Scenario Outline: Verify if the Insurance Provider"<Type-ahead search dropdown >" is enabled for the user and the user can able to enter the inputs in the Insurance Provider"<Type-ahead search dropdown >"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When  Enter the uppercase alphabets on the Insurance Provider"Type-ahead search dropdown "
    Then Insurance Provider"Type-ahead search dropdown " accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Insurance Provider"Type-ahead search dropdown "
    Then Insurance Provider"Type-ahead search dropdown " accepts lowercase alphabets.
    And Enter a combination of uppercase and lowercase together in Insurance Provider"Type-ahead search dropdown "
    Then Insurance Provider"Type-ahead search dropdown " field accept 
    And Enter a combination of uppercase, lowercase,Numbers,special characters together in Insurance Provider"Type-ahead search dropdown "
    Then Insurance Provider"Type-ahead search dropdown " field accept 
    Examples:
    |Atnta|

  @BDDTEST-EPP-2198
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -  Scenario Outline: Verify if when the user starts to type in Insurance Provider in "<Type-ahead search dropdown >" dropdown should display the Insurance Provider options, which can choose from the list.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user enters the starts entering in Insurance Provider"Type-ahead search dropdown "
    Then the user sees the list of insurance providers from the dropdown 
    And user can select a provider from the dropdown 
    Then Selected provider is displayed in  Insurance Provider"Type-ahead search dropdown "
    Example:
    |Atnta|

  @BDDTEST-EPP-2199
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -  Verify if the User should also be able to add Provider on his own, if it does not exist in the dropdown
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user adds Provider on his own, if it does not exist in the" dropdown"
    Then the user-added provider is displayed in  Insurance Provider"Type-ahead search dropdown "
    Example:
    |Atnta|

  @BDDTEST-EPP-2200
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -    Verify if the  proper error message is displayed when the user is  kept blank in  "Insurance Provider <Type-ahead search dropdown >"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And kept blank in the "Insurance Provider field"
    And "Clicks" on the "Save button"
    Then the user sees the error message“This field is required”
    Examples:
    |Insurance Provider| 
    |    |

  @BDDTEST-EPP-2201
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the Plan name"<Type-ahead search dropdown >" is enabled for the user and the user can able to enter the inputs in the Plan name field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When  Enter the uppercase alphabets on the Plan name"Type-ahead search dropdown "
    Then Plan name"Type-ahead search dropdown " accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Plan name"Type-ahead search dropdown "
    Then Plan name"Type-ahead search dropdown " accepts lowercase alphabets.
    And Enter a combination of uppercase and lowercase together in Plan name"Type-ahead search dropdown "
    Then Plan name"Type-ahead search dropdown " field accept 
    And Enter a combination of uppercase, lowercase,Numbers,special characters together in Plan name"Type-ahead search dropdown "
    Then Plan name"Type-ahead search dropdown " field accept 
    Examples:
    |Atnta|

  @BDDTEST-EPP-2202
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -  Verify if when the user starts to type in Plan name in "<Type-ahead search dropdown >" dropdown should display the Plan name options, which can choose from the list.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user enters the starts entering in Plan name"Type-ahead search dropdown "
    Then the user sees the list of Plan name from the dropdown 
    And user can select a Plan  from the dropdown 
    Then Selected Plan  is displayed in  Insurance Provider"Type-ahead search dropdown "
    Example:
    |Atnta|

  @BDDTEST-EPP-2203
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -   Verify if the User should also be able to add the Plan name on his own, if it does not exist in the dropdown
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user adds Plan name on his own, if it does not exist in the" dropdown"
    Then the user-added Plan name is displayed in  Plan name"Type-ahead search dropdown "
    Example:
    |Atntaxyz|

  @BDDTEST-EPP-2204
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the Subscriber ID/ Member ID"<Numeric/text field >" is enabled for the user and the user can able to enter the inputs in the Subscriber ID/ Member ID  field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When  Enter the Numbers on the Subscriber ID/ Member ID"<Numeric/text field >"
    Then  Subscriber ID/ Member ID"<Numeric/text field >" accepts numbers (0-9).
    
    Examples:
    |1223456|

  @BDDTEST-EPP-2205
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user enters alphabets, special characters, and combinations of alphabets, special characters, and numbers in  Subscriber ID/ Member ID"<Numeric/text field >"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user enters alphabets, special characters, and combinations of alphabets, special characters, and numbers in  Subscriber ID/ Member ID"Numeric/text field " 
    Then  the user sees the error message “Incorrect format”
    Examples:
    |Photon||!@#$%||Photon@665544|

  @BDDTEST-EPP-2206
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the Group #"<Numeric/text field >" is enabled for the user and the user can able to enter the inputs in the Group #  field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When  Enter the Numbers on the Group #"Numeric/text field "
    Then  Group "#Numeric/text field " accepts numbers (0-9).
    
    Examples:
    |1223456|

  @BDDTEST-EPP-2207
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the proper error message is displayed when the user enters alphabets, special characters, and combinations of alphabets, special characters, and numbers in Group #"<Numeric/text field >"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user enters alphabets, special characters, and combinations of alphabets, special characters, and numbers in  Group #"Numeric/text field " 
    Then  the user sees the error message “Incorrect format”
    Examples:
    |Photon||!@#$%||Photon@665544|

  @BDDTEST-EPP-2208
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can add an Insurance card - Front image in to the insurance documents page..
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Front"
    Examples:
    |Image||

  @BDDTEST-EPP-2209
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the user can add an Insurance card - Front image in JPG and PNG formate
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front "JPG" image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Front"
    And select a front "PNG" image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Front"
    
    Examples:
    |JPG immage||PNG Image|

  @BDDTEST-EPP-2210
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can upload the Insurance card - Front image size 1kb to 4Mb
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front "1kb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Front"
    And select a front "2kb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Front"
    And select a front "4Mb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Front"
    And select a front "3Mb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Front"
    
    Examples:
    |1Kb image||2Kb Image||4Mb Image|

  @BDDTEST-EPP-2212
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the txt, doc, excel, pdf etc Insurance card - Front image format.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front "invalid format" image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |PDF image|

  @BDDTEST-EPP-2213
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the multiple images in to the Insurance card - Front
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front "multiple" image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2214
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the locked images in to the Insurance card - Front
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front "Locked " image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2215
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the  quality of the image should not be changed after uploading the image to the Insurance card - Front
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a" front image" of the insurance from the device
    And "click" on upload
    Then  the quality of the image is not changed after uploading
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2216
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the "Cancel Button" functionality is working in between while uploading the image to the Insurance card - Front
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And "Click" on the "Cancel Button"
    Then the Uploading image is canceled.
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2217
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user uploads only the Insurance card -Front image
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Front"
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And "Click" on the "Save Button"
    Then the user sees the error message “Please upload both sides of your insurance card".
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2218
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the user can change the uploaded "Insurance card - Front image"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Front"
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And user sees the "Change photo" below the image
    And clicks on "Change photo"
    Then the uploaded photo is deleted 
    And user navigates to the  "upload new photo" from the devise.
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2219
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can add an Insurance card - Back image to the insurance documents page.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Front
    And select a front image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Front"
    Examples:
    |Image||

  @BDDTEST-EPP-2220
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can upload the Insurance card - Back image size 1kb to 4Mb
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a front "1kb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Back"
    And select a front "2kb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "insurance card - Back"
    And select a front "4Mb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Back"
    And select a front "3Mb" image of the insurance from the device
    And "click" on upload
    Then  selected image is uploaded in "Insurance card - Back"
    
    Examples:
    |1Kb image||2Kb Image||4Mb Image|

  @BDDTEST-EPP-2221
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the Insurance card - Back image size of more than 4Mb
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a front "4.1MB" image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |4.1Mb Image|

  @BDDTEST-EPP-2222
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the txt, doc, excel, pdf etc Insurance card - Back image format.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a front "invalid format" image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |PDF image|

  @BDDTEST-EPP-2223
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the multiple images in  the Insurance card - Back
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a front "multiple" image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |JPG and PNG

  @BDDTEST-EPP-2224
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user can try to upload the locked images to the Insurance card - Back
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the I"Insurance card - Back"
    And select a front "Locked " image of the insurance from the device
    And "click" on upload
    Then  the user sees the error message “Invalid file type”
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2225
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the "Cancel Button" functionality is working in between while uploading the image to the Insurance card - Back.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And "Click" on the "Cancel Button"
    Then the Uploading image is canceled.
    Examples:
    |JPG and PNG

  @BDDTEST-EPP-2226
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the proper error message is displayed when the user uploads only the Insurance card - Back image
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And "Click" on the "Save Button"
    Then the user sees the error message “Please upload both sides of your insurance card".
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2227
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can change the uploaded "Insurance card - Back image"
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the "Insurance card - Back"
    And select a" front image" of the insurance from the device
    And "click" on the "Upload Button"
    And user sees the "Change photo" below the image
    And clicks on "Change photo"
    Then the uploaded photo is deleated 
    And user navigate to the  "upload new photo"
    Examples:
    |JPG and PNG|

  @BDDTEST-EPP-2228
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the "Insurance Priority " consisting of Primary, Secondary, and Tertiary radio buttons and check radio buttons are enabled for the user.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Insurance Priority"
    Then the user sees the Primary, Secondary, and Tertiary radio buttons
    And  User "Clicks" on "Primary Radio Button"
    Then the "Primary Radio Button" is hiligited with "Green" colour.
    And  User "Clicks" on "Secondary Radio Button"
    Then the "Secondary Radio Button" is hiligited with "Green" colour.
    And  User "Clicks" on "Tertiary Radio Button"
    Then the "TertiaryRadio Button" is hiligited with "Green" colour.
    Examples:
    ||

  @BDDTEST-EPP-2229
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the "'i' information icon " is present on the left side of the "Insurance Priority "  and check  when the user mouse over to the "i information icon " it shows the information what ‘Priority’ means
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Insurance Priority"
    Then the user sees the "'i' information icon " on the left side of the "Insurance Priority " 
    And  User "mouse over" the "'i' information icon "
    Then the user sees the information explaining what ‘Priority’ means - “You can legally have multiple insurances to cover your eye care expenses. Picking a primary insurance will allow you to decide which insurance takes priority.”
    
    Examples: in 
    ||

  @BDDTEST-EPP-2230
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the no insurance exist means  "Insurance Priority "  default take Primary
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    And Add a new Insurance
    When a user Adds a new Insurance
    Then If no insurances exist, "Insurance Priority " defaulted to ‘Primary’
    Examples: in 
    |Primary|

  @BDDTEST-EPP-2231
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if when the user adds new insurance, the "Insurance Priority "  default takes Secondary if Primary priority insurance already exists.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    And Add a new Insurance
    When a user Adds a new Insurance
    Then If no insurances exist, "Insurance Priority " defaulted to ‘Primary’
    And User Adds a new Insurance.
    Then If Primary priority insurance already exists, then"Insurance Priority " defaulted to "Secondaru"
    Examples: 
    |Primary|

  @BDDTEST-EPP-2232
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can reprioritize the  "Insurance Priority "
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    And Add a new Insurance
    When a user Adds a new Insurance
    Then If no insurances exist, "Insurance Priority " defaulted to ‘Primary’
    And User Adds a new Insurance.
    Then If Primary priority insurance already exists, then"Insurance Priority " defaulted to "Secondary"
    And User selects a "Primary priority" to newly added Insurance
    And Change the "Insurance Priority" to "Secondary"
    Then the "Insurance Priority" changed to "Secondary"
    
    Examples: 
    |Primary|

  @BDDTEST-EPP-2233
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if the  proper error message is display when user give same "Insurance Priority " to diffrient Insurance.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    And Add a new Insurance
    When a user adds a "2" new insurance
    Then the "2" new insurance was added successfully.
    And give the "Insurance Priority"  "Primary" for both Insurance
    Then the both insurance accept "Insurance Priority" as a "Primary"
    
    Examples: 
    |Primary|

  @BDDTEST-EPP-2234
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  "Are you the subscriber?" consisting Yes and No radio buttons and check radio buttons are enabled for the user
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "Yes Radio Button"
    Then the "Yes Radio Button" is hiligited with "Green" colour.
    And  User "Clicks" on "No Radio Button"
    Then the "No Radio Button" is hiligited with "Green" colour.
    Examples:-
    |Yes|

  @BDDTEST-EPP-2382
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the user can add an Insurance card - JPG and PNG Back image to the insurance documents page.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user "clicks" the Insurance card - Back
    And select a front "JPG" image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Back"
    And select a front "PNG" image of the insurance from the device
    And click on upload
    Then  selected image is uploaded in "Insurance card - Back"
    
    Examples:
    |JPG||PNG||

  @BDDTEST-EPP-2383
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 - Verify if the proper error message is displayed when a user didn't select the "Insurance Priority "radio button.  
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    And Add a new Insurance
    And clicks on the "Save button"
    Then the user sees the error message “This field is required” 
    And the "radio buttons highlighted in red color".
    
    Examples: 
    ||

  @BDDTEST-EPP-2384
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -  "Verify if the proper error message displayed when the user didn't select any one-off "Are you the subscriber?" Yes and No radio buttons
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And fill all the fields
    And  User "Clicks" on the "Save button"
    Then the user sees the error message “This field is required” 
    And the "radio buttons highlighted in red color".

  @BDDTEST-EPP-2417
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if the  proper error message is displayed when the user is  kept blank in  Subscriber ID or Member ID"Numeric or text field "
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And kept blank in the Subscriber ID/ Member ID"<Numeric/text field >" 
    And "Clicks" on the "Save button"
    Then the user sees the error message“This field is required”
    Examples:
    |Insurance Provider| 
    |   |

  @BDDTEST-EPP-2471
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the  user select  " No" in "Are you the subscriber?"  then see the following fields
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "No Radio Button"
    And  the "No Radio Button" is hiligited with "Green" colour.
    Then use sees the "First name text field","Last name text field","DOB Text field" and Relation "Droop down"
    Examples:-
    |No|

  @BDDTEST-EPP-2472
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -   Verify if First Name "<Text field> "is enabled and check user can able to enter the inputs in the First name text field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is hiligited with "Green" colour.
    When the User clicks on the First name  text field
    When  Enter the uppercase alphabets on the "First Name  Textfield "
    Then "First name text field" accepts uppercase alphabets.
    And Enter the lowercase alphabet on the "First Name Textfield "
    Then First name text field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then "First name text field "accept 
    
    
    
    Examples:
    |Photon|

  @BDDTEST-EPP-2473
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if a Proper error message is displayed when the user Enter Special characters, Numbers, and combinations of special characters and numbers in the "first name text field".
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is hiligited with "Green" colour.
    When user enter Special characters, Numbers, and combinations of special characters and numbers in the first name text field.
    Then the user sees the error message“Incorrect format” displayed under the First name field
    
    
    Examples:
    |!@#123|

  @BDDTEST-EPP-2474
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if Last Name <Free Text field> is enabled and check user can able to enter the inputs in the Last name text field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is hiligited with "Green" colour.
    When  Enter the uppercase alphabets on the Last Name  Textfield 
    Then Last name text field accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Last Name Textfield 
    Then First name Last field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then Last name text field accept.
    
    Examples:
      |RAm|

  @BDDTEST-EPP-2475
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    special characters and numbers in the Last name text field.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    Then "  invalid formate " error message is displayed under the Last name field
    
    
    Examples:
    |123@#$|

  @BDDTEST-EPP-2476
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if the Birthday field is  it is as per MM/DD/YYYY format.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When The External provider clicks on the Birthday  field
    And enter the date in MM/DD//YYYY formate
    Then The Birth date is selected MM/DD//YYYY
    
    Examples:
    |07/20/2022|

  @BDDTEST-EPP-2477
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 - Verify if the "Invalid format" error message is displayed when the user enters dd/mm/yy format.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When The External provider clicks on the Birthday field enter (DD/MM/YYYY)as per the system date.
    Then  External provider sees an "Invalid format" error message
    Examples:
    |20/07/2022|

  @BDDTEST-EPP-2478
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 - Verify if the first name text field accepts 2 to 50 alphabet
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When the user clicks on the First name  text field and enters 1 alphabet
    Then "First name text field" accepts 2 alphabet. 
    When the user clicks on the First name  text field and enters 3 alphabet
    Then "First name text field accepts" 3 alphabets. 
    When the user clicks on the First name  text field and enters 50 alphabet
    Then "First name text field" accepts 50 alphabets. 
    When the user clicks on the First name  text field and enters 49 alphabet
    Then "First name text field" accepts 49 alphabets. 
    Examples:
    |  |

  @BDDTEST-EPP-2479
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 -  Verify if the first name text field should not accept less than 2 and more than 51 alphabets.
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" color..
    When the user enters less than 2 alphabet
    Then "First name text field" shows an error message “Incorrect format”
    When the user  clicks on the" First name  text field tries to enter 51 alphabet
    Then First name text field is not allowed to enter 51 alphabets.

  @BDDTEST-EPP-2480
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  Verify if the last name text field accepts 2 to 50 alphabet
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When the user clicks on the Last name  text field and enters 1 alphabet
    Then Last name text field accepts 2 alphabet. 
    When the user clicks on the "Last name text field" enters 3 alphabet
    Then "Last name text field"  accepts 3 alphabets. 
    When the user clicks on the "Last name  text field"  enters 50 alphabet
    Then "Last name text field" accepts 50 alphabets. 
    When the user clicks on the "Last name  text field" and enters 49 alphabet
    Then "Last name text field"  accepts 49 alphabets. 
    Examples:
    |  |

  @BDDTEST-EPP-2481
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-10_STORY_EPP-953 - Verify if the last name text field should not accept less than 1 and more than 51 alphabets
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigates to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is highlighted with a "Green" colour.
    When the user enters less than 2 alphabet
    Then "Last name text field" shows an error message “Incorrect format”
    When the user  clicks on the" Last name  text field tries to enter 51 alphabet
    Then "Last name text field" is not allowed to enter 51 alphabets.

  @BDDTEST-EPP-2482
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -Verify if Relationship <Droopdown> is enabled and check user can able to select the inputs in the Relationship <Droopdown>
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "NO" "Radio Button"
    Then the "NO Radio Button" is hiligited with "Green" colour.
    When  the user clicks on "Relationship <Droopdown>"
    Then use sees the Input list
    And user select "X" value 
    Then value is selected and display in "Relationship" field
    
    Examples:
    |Mother|

  @BDDTEST-EPP-2483
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  "Are you the subscriber?" consisting Yes and No radio buttons and check radio buttons are enabled for the user
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "No Radio Button"
    And  the "No Radio Button" is hiligited with "Green" colour.
    Then use sees not see  the "First name text field","Last name text field","DOB Text field" and Relation "Droop down"
    Examples:-
    |Yes|

  @BDDTEST-EPP-2485
  @InsuranceInformation
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-10_STORY_EPP-953 -  "Are you the subscriber?" consisting Yes and No radio buttons and check radio buttons are enabled for the user
    Given Launch  the Browser Enter 'XXX' URL
    And user lands on the “Patient Login” screen
    When user login with valid "<username>" and "<password>"
    Then user lands on the dashboard page
    And clicks on "My profile"
    And user navigates to the "insurance documents"
    And clicks on" insurance documents"
    And user sees the message   “There is no insurance on file”
    And Clicks on the "+New insurance Button"
    And the user lands on the Insurance documents page.
    When the user navigate to "Are you the subscriber?"
    Then the user sees the Yes and No radio buttons.
    And  User "Clicks" on "No Radio Button"
    And  the "No Radio Button" is hiligited with "Green" colour.
    When use not fill  "First name text field","Last name text field","DOB Text field" 
    Then use sees error message "“This field is required” "
    Examples:-
    |Yes|
