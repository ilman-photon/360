Feature: As a referring provider, I should be able to view the error message shown by the system, upon the provided inputs for password doesn’t satisfy the password requirements 

    @BDDTEST-EPP-715
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can reset the password when the number of characters are entered between 8 to 20 upon satisfying the password requirements

Given referring provider launch the "xxx" url 
And navigates to the password reset page
When referring provider enters the inputs ranging from 8 to 20 characters for "new password" field and "confirm newpassword" fields
And referring provider clicks the "submit" button
Then referring provider should see all the password requirements are met                                                     
And referring provider should be prompted with a success message "your password was reset successfully" with a login page link.                                             

Examples:
|newpassword|confirmnewpassword|
|Abcd@1234|Abcd@1234|
  
    @BDDTEST-EPP-1088
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248- Verify if referring provider can view the error message when the input for the password is 7 characters

Given user launch the 'xxx' url
And referring provider navigates to the password reset page
When referring provider enters 7 characters as input for "new password' field" field
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                    
And referring provider should remain on the same page

Examples:
|newpassword|confirm password|
|abcd123||
  
  
    @BDDTEST-EPP-1089
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when the input for the password is more than 20 characters

Given referring provider launch the "xxx" url 
And referring provider navigates to the password reset page
When referring provider enters more than 20 characters as inputs for "New Password" field
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|abcdefghijklmnopqr123456||
  
    @BDDTEST-EPP-1090
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when numeric characters are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provide navigates to the password reset page
When referring provider enters numeric characters as inputs for "New password" field
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|1234567890||
  
  
    @BDDTEST-EPP-1091
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when special characters are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provide navigates to the password reset page
When referring provider enters special characters as inputs for "New password" field
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|@#$%&&**^%%||
  
    @BDDTEST-EPP-1092
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when a combination of lower case alphabets and special characters are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provide navigates to the password reset page
When referring provider enters combination of lowercase alphabets and special characters in the "New password" field
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|abcdef@#$%^||
  
    @BDDTEST-EPP-1093
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when username is entered as a password in the password

Given referring provider launch the "xxx" url 
And referring provider navigates to the password reset page
When referring provider provides the username as input for "new password" field 
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                    
And referring provider should remain on the same page

Examples:
|newpassword||
|username||
  
  
    @BDDTEST-EPP-1094
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when a combination of lower case alphabets and numbers are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provide navigates to the password reset page
When referring provider enters combination of lowercase alphabets and numbers in the "New password" field
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|abcdef1234||
  
    @BDDTEST-EPP-1095
  @Authentication
  @Patient_Portal
  @Sprint2
 
Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when upper case alphabets are entered new password field

Given referring provider launches the 'xxx' url 
And referring provider navigates to the password reset page
When referring provider enters the alphabets in upper case as inputs for "New password" field 
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not
And referring provider should remain on the same page

Examples:
|newpassword|confirmnewpassword|
|ABCDEFGJKLIHY|| 


    @BDDTEST-EPP-1096
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when the previously used password is entered in the new password field

Given referring provider launch the "xxx" url 
And referring provider navigates to the password reset page
When referring provider enters the previously used password as inputs for "New Password" field
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|cyz@1234|cyz@1234|

  
    @BDDTEST-EPP-1216
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when lower case alphabets are entered new password field

Given referring provider launches the 'xxx' url 
And referring provider navigates to the password reset page
When referring provider enters the alphabets in lower case as inputs for "New password" field 
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not
And referring provider should remain on the same page

Examples:
|newpassword|confirmnewpassword|
|abcdefghijkl||

@BDDTEST-EPP-1217
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when space is entered in the password field

Given referring provider launches the 'xxx' url 
And referring provide navigates to the password reset page
When referring provider enters the input with space for "new password" field 
Then referring provider should be prompted with an error message "Password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not    
And referring provider should remain on the same page

Examples:
|newpassword|confirmnewpassword|
||xyza @1234|

@BDDTEST-EPP-1474
  @Authentication
  @Patient_Portal
  @Sprint2
  
Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when a combination of upper case alphabets and special characters are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provider navigates to the password reset page
When referring provider enters a combination of uppercase alphabets and special characters in the "New password" field
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|abcdef@#$%^||

@BDDTEST-EPP-1475
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-248-Verify if referring provider can view the error message when a combination of uppercase alphabets and numbers are entered in the new password field

Given referring provider launch the "xxx" url 
And referring provider navigates to the password reset page
When referring provider enters combination of uppercase alphabets and numbers in the "New password" field
Then referring provider should be prompted with an error message "password does not meet requirements"
And referring provider should be populated which of those password requirements has met and which are not                                                     
And referring provider should remain on the same page

Examples:
|newpassword|confirmpassword|
|ABCDEF1234||