Feature: Patient Portal : Customization of front-end messages/error messages
  User Story: As a user, I should be able to customize the front-end messages/error messages from the backend for messages that constitute a user action and a message/error message is thrown in response to that action.

  @BDDTEST-EPP-468
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user leave empty "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error 'Please fill all the mandatory fields' below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | |

  @BDDTEST-EPP-538
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set or not)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    When user access the inbox of registered "Email" 
    And user should receive a magic link mail
    And user should see the mail with Email Subject as "Your Patient Portal Magic link"
    And user should see mail/ message body as "Hi {username},
    |You asked us to send you a magic link for quickly signing into your Patient Portal. Sign in here - {link}. If you did not make this request, please contact customer support.
    |Thanks,
    |Admin"
    When user click on a magic link
    Then user should successfully be logged in
    And user should see Home/Dashboard page 
    
    Example:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-539
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without a username & password using the magic link received to my registered Phone number.
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set or not)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" 
    And user should select only 1 "Mode of Communication" as "Phone" 
    When user clicks on Send magic link 
    Then user should see One-time link page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone"
    And user should select only 1 "Mode of Communication" as "Phone"
    And user clicks on Send magic link 
    Then user should see heading "Magic link sent"
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account" 
    When user access the messages from Phone  
    Then user should receive a magic link mail
    And user should see the mail with Email Subject as "Your Patient Portal Magic link"
    And user should see mail/ message body as "Hi {username},
    |You asked us to send you a magic link for quickly signing into your Patient Portal. Sign in here - {link}. If you did not make this request, please contact customer support.
    |Thanks,
    |Admin"
    When user click on a magic link
    Then user should successfully be logged in
    And user should see Home/Dashboard page

    Example:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-543
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions via "Answer security questions" mode

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user fills in "<Question1Ans>" and "<Question2Ans>" for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" screen
    And user should see update password fields
    And user fills "<NewPassword>" and "<ConfirmNewPassword>" field
    And user should see text "Password length should range from 8 to 20 characters"
    And user should see text "Password should contain at least one alphabet (a-z)"
    And user should see text "Password should contain at least one special character"
    And user should see text "Password should not contain your username"
    And user should see text "Password should not be match with your previously used password"
    And user should see text "Password should not contain 3 or more identical characters consecutively (ex. Employee, Sys@@@tem, abcabcabc, 123123123, etc.)" 
    And user should see "Update" button
    When user click on "Update" button
    Then user should see text "Password has been updated"
    And user should see "Back to login" button
    
    Example:
    | Email or Phone Number | Question1Ans | Question1Ans | NewPassword | ConfirmNewPassword |
    | xxxxxxxxxxxxxxxx |XXX|XXX|XXX|XXX|

  @BDDTEST-EPP-630
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "First Name" field not filled
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
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Last Name" field not filled
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
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Date of Birth"" field not filled
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
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Mobile Number
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
    Then user should see the message “Email ID or Mobile Number is required” under "Mobile Number" field
    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
    |XXXX|YYYY|DDMMYYYY|abc@gmail.com|5555551234|abc@gmail.com|********|

  @BDDTEST-EPP-634
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "First " field
    Scenario Outline: Verify if user able to see error message when incorrect format enter in "First name" field
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
    When user enter numeric/special character in "<First Name>" field
    Then user should see the error message “Incorrect format” under "First name"field
    Examples:
    |First Name|
    |123$|

  @BDDTEST-EPP-635
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Last name" field
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
  @Automation
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Email" field
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
  @Automation
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Date of Birth" field
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
  @Automation
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Mobile number" field
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

  @BDDTEST-EPP-722
  @Authentication
  @P3
  @Patient_Portal
  @Regression
  @Sprint2
  @Test_Data
  Scenario Outline: EPIC_EPP-2_STORY_EPP-254 - Verify if registered user unable to register again
    Scenario Outline: Verify if registered user able to register again
    Given user launch the 'XXX' patient portal url
    And user is in “Login” screen
    When user clicks on the ‘Create an Account’ button
    Then user lands onto “User Registration” screen 
    And user should see user registration screen		
    Then user should see the following fields "First Name","Last Name","Date Of Birth","Email","Mobile number","User Name","Password","Preferred mode(s) of communication"
    When user provide the details to the field  "<First Name>","<Last Name>","<Email>","<Date of Birth>","<Mobile number>","<Password>","<Preferred mode(s) of communication>"
    And user should see the ‘Register’ CTA
    And user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
    And user click on 'Register' button
    Then user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”
    And user should give the option to redirect to "Patient Login" screen
    And user lands on to "Patient Login" screen
    Examples:
    |First Name|Last Name|Email|Date of Birth|Mobile number|Username|Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|

  @BDDTEST-EPP-723
  @Authentication
  @P3
  @Patient_Portal
  @Regression
  @Sprint2
  @Test_Data
  Scenario Outline: EPIC_EPP-2_STORY_EPP-254- Verify if registered user unable to register again with Email id
    Scenario Outline: Verify if registered user able to register again with Email ID
    Given user launch the 'XXX' patient portal url
    And user is in “Login” screen
    When user clicks on the ‘Create an Account’ button
    Then user lands onto “User Registration” screen 
    And user should see user registration screen		
    Then User should see the following fields "First Name","Last Name","Date Of Birth","Email","Mobile number","User Name","Password","Preferred mode(s) of communication" 
    When user provide the details to the field  "<First Name,>","<Last Name>","<Email>","<Date of Birth>","<Password>","<Preferred mode(s) of communication>"
    And user should see the ‘Register’ CTA
    And user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
    And user click on 'Register' button
    Then user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”
    And user should give the option to redirect to "Patient Login" screen
    And user lands on to "Patient Login" screen
    Examples:
    |First Name|Last Name|Email|Date of Birth|Mobile number|Username|Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY||abc@gmail.com|*******|

  @BDDTEST-EPP-724
  @Authentication
  @P3
  @Patient_Portal
  @Regression
  @Sprint2
  @Test_Data
  Scenario Outline: EPIC_EPP-2_STORY_EPP-254 - Verify if registered user unable to register again with Mobile number
    Scenario Outline: Verify if registered user able to register again with Mobile number
    Given user launch the 'XXX' patient portal url
    And user is in “Login” screen
    When user clicks on the ‘Create an Account’ button
    Then user lands onto “User Registration” screen 
    And user should see user registration screen		
    Then User should see the following fields "First Name","Last Name","Date Of Birth","Email","Mobile number","User Name","Password","Preferred mode(s) of communication" 
    When user provide the details to the field "<First Name,>","<Last Name>","<Date of Birth>","<Mobile number>","<Password>","<Preferred mode(s) of communication>"
    And user should see the ‘Register’ CTA
    And user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
    And user click on 'Register' button
    Then user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”
    And user should give the option to redirect to "Patient Login" screen
    And user lands on to "Patient Login" screen
    Examples:
    |First Name|Last Name|Email|Date of Birth|Mobile number|Username|Password|
    |XXXX|YYYY||DDMMYYYY|5555551234|5555551234|*******|

  @BDDTEST-EPP-837
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user provides Invalid Email or Phone Number and Valid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides invalid  "<Email or Phone Number>" and valid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-838
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user  provides Valid Email or Phone Number and Invalid Password
    Given user  launch the 'XXX' url	
    And user  navigates to the Patient Portal application
    When user lands onto “Patient Login” screen	
    And user provides valid  "<Email or Phone Number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-839
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Email or Phone Number and Invalid Password
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen	
    And user provides Invalid  "<Email or Phone Number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-840
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user provides Valid Email or Phone Number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides E360+ Registered Invalid  "<Email or Phone Number>" and valid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-841
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Valid User name and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides E360+ Registered valid  "<Email or Phone Number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-921
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the inline error message is displayed if Email or Phone number not filled
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen
    And user/admin user provides blank "<Email or Phone Number>" and valid "<password>"
    And user click the 'Login' Button.
    Then user should view the error message 'This field is required' 
    
    Example:
    |Email or Phone Number|Password|
    ||****|

  @BDDTEST-EPP-922
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if password not filled
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen
    And user/admin user provides valid "<Email or Phone Number>" and blank "<password>"
    And user click the 'Login' Button.
    Then user should view the error message 'This field is required' 
    
    Example:
    |Email or Phone Number|Password|
    |xx@yahoo.com||

  @BDDTEST-EPP-1121
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if Email or Phone Number and  password are not filled 
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen
    And user/admin user provides blank "<Email or Phone Number>" and blank "<password>"
    And user click the 'Login' Button.
    Then user should view the error message 'This field is required' 
    
    Example:
    |Email or Phone Number|Password|
    ||****|

  @BDDTEST-EPP-1145
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Email
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
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 -  Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Email
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
    Then user should see the message “Email ID or Mobile number is required”
    
    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
    |XXXX|YYYY|DDMMYYYY||5555551234|5555551234|********|

  @BDDTEST-EPP-1147
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Mobile Number
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

  @BDDTEST-EPP-1151
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when password requirement not met in "Password" field 
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

  @BDDTEST-EPP-1157
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not found
    Scenario: "Verify user should see inline error below Email or Phone Number>" field" if Email or Phone Number>" is not found
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user enters unregistered "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error "Patient with the given Username not found. Please make sure you have entered it correctly and try again " below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1220
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  -  Verify error message if user not filled the "Password" field
    Scenario Outline: Verify error message if user not filled the "Password" field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then System(E360+) has all the required details of the user to onboard him to Patient portal
    And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should  see the verbiage "Enter a password to setup your account"
    And user should to view and fill the following fields 
    Then user should see Email or phone number is auto populated
    And user should see the field "Password","Confirm Password"
    When user leave "Password" field blank
    Then user see the error message “This field is required” 
    Examples:
    |Email or Mobile number|Password||Confirm Password|
    ||||******|

  @BDDTEST-EPP-1221
  @Authentication
  @P2
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  -  Verify error message if user not filled the "Confirm Password" field
    Scenario Outline: Verify error message if user not filled the "Confirm Password" field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then System(E360+) has all the required details of the user to onboard him to Patient portal
    And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And User receives an email/text message with a link to their registered email id/ mobile number
    When  User click on the link 
    And User lands on “Set Password” screen
    Then User should see the verbiage "Enter a password to setup your account"
    And user should see Email or phone number is auto populated
    And user should see field "Password","Confirm Password"
    When user leave "Confirm password" field blank
    Then user see the error message “This field is required” 
    Examples:
    |MobileNumber|Password||Confirm Password|
    |5555551234||******||

  @BDDTEST-EPP-1222
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  -  Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field
    Scenario Outline: Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then System(E360+) has all the required details of the user to onboard him to Patient portal
    And System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see "Password" and "Confirm Password" field
    And user enter the value 'abcd1234' in Password field 
    And user enter the value 'abcd1235' in Confirm password field
    Then user see the error message “Password does not match” 
    Examples:
    |MobileNumber|Password||Confirm Password|
    |5555551234||******||

  @BDDTEST-EPP-1224
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password field not meet password requirement length range from 8 to 20 characters
    Scenario Outline: Verify the error message if password field not meet password requirement length range from 8 to 20 characters
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see the field "Password","Confirm Password"
    When user enter the value 'abcd12#' length less than 8 characters
    Then user should see the error message "Password does not meet requirements"
    When user enter the value 'abcdefgh1234##1234567' length greater than 20 characters
    Then user should see the error message "Password does not meet requirements"
    Examples:
    |Password|Password|
    |abcd12#|abcdefgh1234##1234567|

  @BDDTEST-EPP-1225
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for not using at least 1 Upper case letter in 'Password' field
    Scenario Outline: Verify the error message if password requirement not met for not using atleast 1 alphabets in 'Password' field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see field "Password","Confirm Password"
    When user enter the value "abc12345$" without 1 upper case letter in Password field  
    Then user should see the error message "Password does not meet requirements"
    Examples:
    |Password|
    |abc12345#|

  @BDDTEST-EPP-1226
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for not using atleast 1 special character in Password field
    Scenario Outline: Verify the error message if password requirement not met for not using atleast 1 special character in Password field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see field "Password","Confirm Password"
    When user enter the value 'abcd5678' without special charaters in Password field  
    Then user should see the error message "Password does not meet requirements"
    Examples:
    |Password|
    |abcd5678|

  @BDDTEST-EPP-1227
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255-Verify the error message if password requirement not met for not using at least 1 Lower case letter in 'Password' field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see field "Password","Confirm Password"
    When user enter the value 'ABC12345$' without lower case letter in Password field  
    Then user should see the error message "Password does not meet requirements"
    Examples:
    |Password|
    |ABC12345$|

  @BDDTEST-EPP-1228
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for using our username in Password field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see password field and confirm password field "<Password>","<Confirm Password>".
    When user enter the value 'abc@gmail.com' in Password field  
    Then user should see the error message "Password does not meet requirements"
    
    Examples:
    |Password|
    |abc@gmail.com|

  @BDDTEST-EPP-1229
  @Authentication
  @P2
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-2_STORY_EPP-255  -  Verify the error message if password requirement not met for not using at least 1 Number in 'Password' field
    Given user visited the ECP office 
    And user provide all details,fill forms and consulted doctor
    Then system(E360+) has all the required details of the user to onboard him to Patient portal
    And system (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user click on the link 
    And user lands on “Set Password” screen
    Then user should see the verbiage "Enter a password to setup your account"
    Then user should see Email or phone number is auto populated
    And user should see field "Password","Confirm Password".
    When user enter the value 'ABCaasa$' 1 number in Password field  
    Then user should see the error message "Password does not meet requirements"
    
    Examples:
    |Password|
    |ABCaasa$|

  @BDDTEST-EPP-1445
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not valid
    Scenario: "Verify user should see inline error below Email or Phone Number>" field" if Email or Phone Number>" is not found
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user enters unregistered "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error "Patient with the given Username not found. Please make sure you have entered it correctly and try again " below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | arief.rahman|
    | arief rahman@photon.com|
    | arief.rahman@@photon.com|
    | arief.rahmanphoton.com|
    | arief.rahman@photon..com|

  @BDDTEST-EPP-1659
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Phone number and valid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides invalid  "<Phone number>" and valid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhonenumberXXXXXXXX |ValidYYYYYYY |

  @BDDTEST-EPP-1661
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when User provides Invalid Phone number and Invalid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen	
    And user provides Invalid  "<Phone number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | InvalidYYYYYYY |

  @BDDTEST-EPP-1662
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Invalid Phone number  and valid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides Invalid  "<Phone number>" and valid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | ValidYYYYYYY |

  @BDDTEST-EPP-1663
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Valid Phone number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen	
    And admin provides E360+ Registered valid  "<Phone number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |ValidPhone numberXXXXXXXX | InvalidPasswordYYYYYYY |

  @BDDTEST-EPP-1664
  @Authentication
  @Automation
  @P2
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Invalid Phone number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin user provides Invalid  "<Phone number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | InvalidYYYYYYY |
