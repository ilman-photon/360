Feature: As a user, I should be able to receive a link to my registered email-id/ mobile number post filling in the registration details and submitting them

   @BDDTEST-EPP-640
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link after submit the registration details.
  
  Scenario Outline: Verify if user able to receive the link after submit the registration details. 
Given user launch the 'XXX' url
And user is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then user lands onto “Registration” screen 
And user should see registration screen
Then user should see the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When user provide the details to the field  "<First Name,>","<Last Name>","<Email>","<Date of Birth>","<Mobile number">
Then user have a option to select "Email" or "Phone number"
And user should see the ‘Register’ CTA
And  user click on "Register" CTA
Then user receives activation link to either Email or to phone number
Examples:
|First Name|Last Name|Email|Date of Birth|Mobile number|
| |YYYY|abc@gmail.com|DDMMYYYY|5555551234|

  @BDDTEST-EPP-641
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link through Email
Scenario Outline: Verify if user able to receive the link through Email 
Given user launch the 'XXX' url
And user is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then user lands onto “Registration” screen 
And user should see registration screen
Then user should see the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select "Email" or "Phone number"
When user select the email option
And user to provide His/Her Email id
Then user receive a activation link to the given Email id
And user login to email 
And user check for the mail receipt with the link
And user click on the link and it redirect to the ECP Page to set Username and Password.
Examples:
|Email|
|abc@gmail.com|

    @BDDTEST-EPP-642
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify if user able to receive the link through Mobile number

Scenario Outline: Verify if user able to receive the link through Mobile number
Given user launch the 'XXX' url
And User is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then  User lands onto “Registration” screen 
And user should be able to view registration screen
Then User should be able to view the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When  user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select"Email"or"Phone number"
When user select the Mobil number option
And user to provide His/Her Mobile number
Then user receive a activation link to the given Mobile number
And user check the text message in phone
And user open the message & click on the link and it redirect to the ECP Page to set Username and Password.
Examples:
|Mobile number|
|5555551234|


    @BDDTEST-EPP-643
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify the error message when user Enter the wrong Email id

Scenario Outline: Verify the error message when user Enter the wrong Email id
Given user launch the 'XXX' url
And user is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then user lands onto “Registration” screen 
And user should be able to view registration screen
Then user should be able to view the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select "Email" or "Phone number"
When user select the email option
And user enters wrong Email id
Then user should not  receive a activation link to the actual  Email id
And user to recheck and enter the correct Email id
Examples:
|Email|
|abc@gmail.com|
  
    @BDDTEST-EPP-644
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify the error message when user Enter the wrong Mobile Number

Scenario Outline: Verify the error message when user Enter the wrong Mobile Number
Given user launch the 'XXX' url
And User is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then  User lands onto “Registration” screen 
And user should be able to view registration screen
Then User should be able to view the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When  user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select"Email"or"Phone number"
When user select the email option
And user enters wrong Mobile Number
Then user should not receive a activation link to the actual Mobile number
And user to recheck and enter the correct mobile Number
Examples:
|Mobile number|
|555555123|
  
    @BDDTEST-EPP-645
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify if user able to Register the account when the "Mobile number" field not filled

Scenario Outline: Verify if user able to Register the account when the "Mobile number" field not filled
Given user launch the 'XXX' url
And User is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then  User lands onto “Registration” screen 
And user should be able to view registration screen
Then User should be able to view the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When  user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select"Email"or"Phone number"
When user select the email option
And user not filled "Mobile Number" field
Then user should see "Appropriate Error message"
And user to recheck and enter the field "Mobile Number"
Examples:
|Mobile number|
|555555123|
  
    @BDDTEST-EPP-646
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify the error message if user not able to access the activation link through Email

Scenario Outline: Verify the error message if user not able to access the activation link through Email 
Given user launch the 'XXX' url
And user is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then user lands onto “Registration” screen 
And user should see registration screen
Then user should see the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When user provide the details to the flield  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select "Email" or "Phone number"
When user select the email option
And user to provide His/Her Email id
Then user receive a activation link to the given Email id
And user login to email 
And user check for the mail receipt with the link
And user click on the link
Then user should see "Appropriate error message" if link is not working
Examples:
|Email|
|abc@gmail.com|
  
  
   @BDDTEST-EPP-647
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-251 - Verify the error message if user not able to access the activation link through Mobile Number

Scenario Outline: Verify the error message if user not able to access the activation link through Mobile Number 

Given user launch the 'XXX' url
And User is in “Patient Login” screen
When user clicks on the ‘Create an Account’ CTA in “Patient Login” screen
Then  User lands onto “Registration” screen 
And user should be able to view registration screen
Then User should be able to view the following fields 
|First Name
|Last Name						
|Email
|Date Of Birth
|Mobile number
When user provide the details to the field  "First Name,Last Name,Email,Date of Birth,Mobile number"
Then user have a option to select"Email"or"Phone number"
When user select the Mobil number option
And user to provide His/Her Mobile number
Then user receive a activation link to the given mobile number
And user check the text message in phone
And user open the message & click on the link
Then user should see "Appropriate error message" if link is not working
Examples:
|Mobile number|
|5555551234|