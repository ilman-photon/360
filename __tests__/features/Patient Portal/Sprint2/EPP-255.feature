Feature:User Story: As a user who has created the account by visiting ECP office , I should be able to set password by clicking on the activation link received to my preferred mode(s) of communication to login to the patient portal. 

  @BDDTEST-EPP-1218
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-255 - Verify if user able view the to set password screen

Scenario Outline: Verify if user able view the to set password screen
Given user visited the ECP office
And user provide all details,fill forms and consulted doctor
Then System(E360+) has all the required details of the user to onboard him to Patient portal
And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
And user receives an email/text message with a link to their registered email id/ mobile number
When user click on the link 
Then user User lands on “Set Password” screen
Examples:
|Email or Mobile number|Password|Confirm Password|
|abc@gmail.com or 5555551234|||

  @BDDTEST-EPP-1219
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-255 - Verify if user able to set the password by click the link receive through Email or phone number
  
Scenario Outline: Verify if user able to set the password by click the link receive through Email or phone number
Given user visited the ECP office
And user provide all details,fill forms and consulted doctor
Then System(E360+) has all the required details of the user to onboard him to Patient portal
And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
And User receives an email/text message with a link to their registered email id/ mobile number
When user click on the link
Then user lands on “Set Password” screen
And User should see the verbiage "Enter a password to setup your account"
And user should see Email or phone number is auto populated
And user should see password field and confirm password field "Password","Confirm Password"
When user provide the same password details to the field "Password","Confirm Password" 
And user click on "Create Account" button
Then user should see the message “Password has been set” 
Examples:
|Email or Mobile number|Password|Confirm Password|
|abc@gmail.com or 5555551234|******|******|

  
  @BDDTEST-EPP-1220
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-255 - Verify error message if user not filled the "Password" field
  
Scenario Outline: Verify error message if user not filled the "Password" field
Given user visited the ECP office
And user provide all details,fill forms and consulted doctor
Then System(E360+) has all the required details of the user to onboard him to Patient portal
And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
And User receives an email/text message with a link to their registered email id/ mobile number
When user click on the link
Then user lands on “Set Password” screen
And User should see the verbiage "Enter a password to setup your account"
And user should see Email or phone number is auto populated
And user should to view and fill the following fields 
And user should see the field "Password","Confirm Password"
When user leave "Password" field blank
Then user see the error message “This field is required” 
Examples:
|Email or Mobile number|Password||Confirm Password|
||||******|


  Scenario: EPIC_EPP-2_STORY_EPP-255 - Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field
  
Scenario Outline: Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field
Given user visited the ECP office
And user provide all details,fill forms and consulted doctor
Then System(E360+) has all the required details of the user to onboard him to Patient portal
And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
And User receives an email/text message with a link to their registered email id/ mobile number
When user click on the link
Then user lands on “Set Password” screen
And User should see the verbiage "Enter a password to setup your account"
And user should see Email or phone number is auto populated
And user should see "Password" and "Confirm Password" field
And user enter the value 'abcd1234' in Password field 
And user enter the value 'abcd1235' in Confirm password field
Then user see the error message “Password does not match” 
Examples:
|MobileNumber|Password||Confirm Password|
|5555551234||******||

  @BDDTEST-EPP-1224
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password field not meet password requirement length range from 8 to 20 characters

  Scenario Outline: Verify the error message if password field not meet password requirement length range from 8 to 20 characters
Given user visited the ECP office
And user provide all details,fill forms and consulted doctor
Then System(E360+) has all the required details of the user to onboard him to Patient portal
And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
And User receives an email/text message with a link to their registered email id/ mobile number
When user click on the link
Then user lands on “Set Password” screen
And User should see the verbiage "Enter a password to setup your account"
And user should see Email or phone number is auto populated
And user should see "Password" and "Confirm Password" field

When user enter the value 'abcd12#' length less than 8 characters
Then user should see the error message "Password does not meet requirements"
When user enter the value 'abcdefgh1234##1234567' length greater than 20 characters
Then user should see the error message "Password does not meet requirements"

When user enter the value '1234567#' without alphabets in Password field  
Then user should see the error message "Password does not meet requirements"

When user enter the value 'abcd5678' without special charaters in Password field  
Then user should see the error message "Password does not meet requirements"

When user enter the value 'abcabcabc1#' 3 or more identical characters consecutively in Password field  
Then user should see the error message "Password does not meet requirements"

When user enter the value 'abc@gmail.com' in Password field  
Then user should see the error message "Password does not meet requirements"
When user enter the value '5555551234' in Password field  
Then user should see the error message "Password does not meet requirements"



Examples:
|Password|Password|
|abcd12#|abcdefgh1234##1234567|


