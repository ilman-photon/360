Feature: As a user, I should be able to view the "User Registration" screen and register myself to the patient portal.

    @BDDTEST-EPP-628
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen

  Scenario Outline: Verify if user able to view the Registration screen
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When userr lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see "Register" button
And user should see the verbiage "By registering, you accept to our Terms & Conditions and Privacy Policy" below the "Register" CTA
And user should see verbiage ”Already have an account? with "Login" link
When user click on "Login" link
Then user should see the ‘Patient Login’ page

Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|
  
  
    @BDDTEST-EPP-629
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account by providing details in all mandatory field

Scenario Outline: Verify if user able to Register the account by providing details in all mandatory field
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When userr lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then user should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see the ‘Register’ CTA
And user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field  "<First Name,>","<Last Name>","<Email>","<Date of Birth>","<Mobile number>","<password>","<Preferred mode(s) of communication>"
And user click on 'Register' button
Then user should get below notification message in either Email or mobile number based on prefer mode
|Subject - Thanks for creating an account
|Email/text body - Welcome to the family! Thanks for creating an account with us
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com|5555551234|abc@gmail.com|********|
  
    @BDDTEST-EPP-630
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "First Name" field not filled

  Scenario Outline: Verify if user able to Register the account when the "First Name" field not filled

Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should see the Don’t have an account? verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then user should see the following fields"<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>" 
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see the ‘Register’ CTA
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<Last Name>","<Email>","<Date of Birth>","<Mobile number>","<password>","<Preferred mode(s) of communication>"
And user click on 'Register' button
Then user should see error message “This field is required” under "First Name" field
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|Password|
|YYYY|abc@gmail.com|DDMMYYYY|abc@gmail.com|12345|********|


    @BDDTEST-EPP-631
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Last Name" field not filled

Scenario Outline: Verify if user able to Register the account when the "First Name" field not filled
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following field "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>" 
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see the ‘Register’ CTA
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Email>","<Date of Birth>","<Mobile number>","<password>","<Preferred mode(s) of communication>"
And user click on 'Register' button
Then user should see error message “This field is required” under "Last Name" field
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|Password|
|XXX|abc@gmail.com|DDMMYYYY|abc@gmail.com|12345|********|


    @BDDTEST-EPP-632
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Date of Birth"" field not filled

Scenario Outline: Verify if user able to Register the account when the "Date of Birth" field not filled
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see the ‘Register’ CTA
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>" , "<Email>","<Mobile number>","<password>","<Preferred mode(s) of communication>"
And user click on 'Register' button
Then user should see error message “This field is required” under "Date of Birth" field
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|Password|
|XXXX|YYYY|abc@gmail.com|abc@gmail.com|123|********|
  
  
    @BDDTEST-EPP-633
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Mobile Number

Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and blank the field "<Mobile number>"
Then user should see default "Preferred mode(s) of communication" as Email
And user change the "Preferred mode(s) of communication" from Email to Mobile number
Then user should see the message “This field is required” under "Mobile Number" field
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com|5555551234|abc@gmail.com|********|
  
  
    @BDDTEST-EPP-635
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Last name" field

Scenario Outline: Verify if user able to see error message when incorrect format enter in "Last name" field
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And user should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user enter numeric/special character in "<Last Name>" field
Then user should see the error message “Incorrect format” under "Last Name" field
Examples:
|Last Name|
|123$|
  
  
    @BDDTEST-EPP-636
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Email" field

Scenario Outline: Verify if user able to see error message when incorrect format enter in "Email" field
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
When user enter invalid format in "<Email>" field
Then user should see the error message “Incorrect email format” under "Email" field
Examples:
|Email|
|abcgmailcom|
  
  
    @BDDTEST-EPP-637
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Date of Birth" field

Scenario Outline: Verify if user able to see error message when incorrect format enter in "Date of Birth" field
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>" 
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
When user enter invalid format in "<Date of Birth>" field
Then user should see the message  “Invalid date of birth” under "Date of Birth" field
Examples:
|Date of Birth|
|YYYYMMDD|
  
  
    @BDDTEST-EPP-639
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Mobile number" field

Scenario Outline: Verify if user able to see error message when incorrect format enter in "Mobile Number" field
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user enter invalid format in "<Mobile Number>" field
Then user should see the message “Incorrect mobile number format” under "Mobile number" field
Examples:
|Mobile number|
|55555512US|
  
  
    @BDDTEST-EPP-1145
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Email

Scenario Outline: Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Email
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and blank the field "<Mobile number>"
Then user should selects "Preferred mode(s) of communication" as Email
And user click on 'Register' button
Then user should get below notification message in Email
|Subject - Thanks for creating an account
|Email/text body - Welcome to the family! Thanks for creating an account with us

Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com||abc@gmail.com|********|
  
  
    @BDDTEST-EPP-1146
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Email

Scenario Outline: Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Email
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>" 
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Mobile Number>","<Password>" and blank the field "<Email>"
Then user should see default "Preferred mode(s) of communication" as Mobile Number
And user change the "Preferred mode(s) of communication" from Mobile Number to Email
Then user should see the message “This field is required”
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|DDMMYYYY||5555551234|5555551234|********|
  
  
    @BDDTEST-EPP-1147
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Mobile Number

Scenario Outline: Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Mobile Number
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Mobile number>","<Password>" and blank the field "<Email>"
And user should see default "Preferred mode(s) of communication" as Mobile Number
And user should see the ‘Register’ CTA
And user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
And user should see verbiage ”Already have an account? with "Login" link
When user click on 'Register' button
Then user should get below notification message in Mobile Number
|Subject - Thanks for creating an account
|Email/text body - Welcome to the family! Thanks for creating an account with us
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY||abc@gmail.com|5555551234|abc@gmail.com|********|
  
  
    @BDDTEST-EPP-1148
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Email id when email id is provided but Mobile number not provided

Scenario Outline: Verify if user able to view "Username" field auto populate with Email id when email id is provided but Mobile number not provided
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>" 
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>" and blank the field "<Mobile number>"
Then user should see Username field autopopulate with email id
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com||abc@gmail.com|
  
  
    @BDDTEST-EPP-1149
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Mobile number when mobile number is provided but email not provided

Scenario Outline: Verify if user able to view "Username" field auto populate with Mobile number when mobile number is provided but email is not provided
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Mobile number>" and blank the field "<Email>"
Then user should see Username field autopopulate with Mobile number 
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|
|XXXX|YYYY|DDMMYYYY||5555551234|5555551234|

  @BDDTEST-EPP-1150
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view "Username" field auto populate with Email id when both email id and Mobile number provided

Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Mobile number>"
Then user should see Username field autopopulate with email id
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com|5555551234|abc@gmail.com|


 @BDDTEST-EPP-1151
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when password requirement not met in "Password" field

Scenario Outline: Verify if user able to see error message when password requirement not met in "Password" field  
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Mobile number>"
And user enter password which does not meet the password requirement
Then user should see error message “Password does not meet requirements”
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|DDMMYYYY|abc@gmail.com|5555551234|abc@gmail.com|***|
  
   @BDDTEST-EPP-1152
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the field "Preferred mode of communication" preselected with option ‘Both’

Scenario Outline: Verify if user able to view the field "Preferred mode of communication" preselected with option ‘Both’
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user mouse over to field "Preferred mode(s) of communication"
Then user should see the field “Preferred mode(s) of communication” preselected the option 'Both'
Examples:
|Preferred mode(s) of communication|
|Both|
  
   @BDDTEST-EPP-1153
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to Mobile Number or Both when Email is provided

Scenario Outline: Verify if user able to change "Preferred mode of communication" to Mobile Number or Both when Email is provided
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And user should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>"
Then user should see the field “Preferred mode(s) of communication” selected with option 'Email'
And user change the preferred mode to either Mobile number or Both
Then user should see field “Preferred mode(s) of communication” selected with either 'Mobile number' or 'Both'
Examples:
|Preferred mode(s) of communication|
|Mobile number or Both|
  
   @BDDTEST-EPP-1154
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided

Scenario Outline: Verify if user able to change "Preferred mode of communication" to Mobile Number or Both when Email is provided
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then User should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And user should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Mobile number>"
Then user should see the field “Preferred mode(s) of communication” selected with option 'Mobile number'
And user change the preferred mode to either Email or Both
Then user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Both'
Examples:
|Preferred mode(s) of communication|
|Email or Both|

@BDDTEST-EPP-1155
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to change "Preferred mode of communication" to 'Email' or 'Mobile number' when Both Mobile number & Email provided

Scenario Outline: Verify if user able to change "Preferred mode of communication" to Mobile Number or Both when Email is provided
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When user lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button  
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 	
Then user should see the following fields "<First Name>","<Last Name>","<Date Of Birth>","<Email>","<Mobile number>","<User Name>","<Password>","<Preferred mode(s) of communication>"
And user should see ‘Register’ button
And User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button
And user should see verbiage ”Already have an account? with "Login" link
When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Mobile number>"
Then user should see the field “Preferred mode(s) of communication” selected with option 'Both'
And user change the preferred mode to either Email or Mobile number
Then user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Mobile number'
Examples:
|Preferred mode(s) of communication|
|Email or Mobile number|

@BDDTEST-EPP-1541
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 -Verify if user able to view the Registration screen page load within 3 seconds

Scenario Outline: Verify if user able to view the Registration screen page load when internet service unavaliable
Given user launch the 'XXX' patient portal url
And user is in “Login” screen
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see "Appropriate Error Message" when internet service unavaliable
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|

@BDDTEST-EPP-1568
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen page load when internet service unavailable

Scenario Outline: Verify if user able to view the Registration screen page load when internet service unavaliable
Given user launch the 'XXX' patient portal url
And user is in “Login” screen
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see "Appropriate Error Message" when internet service unavaliable
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|

@BDDTEST-EPP-1574
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen page load when ECP Application service unavailable

Scenario Outline: Verify if user able to view the Registration screen page load when ECP Application service unavailable
Given user launch the 'XXX' patient portal url
And user is in “Login” screen
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see "Appropriate Error Message" when ECP Application service unavailable
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|

@BDDTEST-EPP-1577
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to validate whether Dev tools displayed when clicks on "F12" button

Scenario Outline: Verify if user able to validate whether Dev tools displayed when clicks on "F12" button
Given user launch the 'XXX' patient portal url
And user is in “Login” screen
When user "<clicks>" the "<F12>" button 
Then user should validate whether the Dev Tools are Displayed
Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|

@BDDTEST-EPP-1784
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if all mandatory fields are consisting astrerisk(*) symbol

Given user launch the 'XXX' patient portal url
And user is in “Login” screen
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see user registration screen	
When user mouse over to the field  "<First Name,>","<Last Name>","<Email>","<Date of Birth>","<Mobile number>","<password>"
Then user should see the asterisk symbol in all  mandatory fields

Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|
