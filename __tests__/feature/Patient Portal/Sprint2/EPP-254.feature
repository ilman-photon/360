Feature: Patient Portal : Patient Registration - Registered/ Existing user trying to register again
  
  @BDDTEST-EPP-722
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again
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
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-2_STORY_EPP-254- Verify if registered user able to register again with Email id
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
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again with Mobile number
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

