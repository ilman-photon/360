Feature: As a user, I should be able to login into the patient portal without username & password using the one-time link 

  @BDDTEST-EPP-538
  @Authentication
  @Patient_Portal
  @Automation
  @Regression
  @Sprint2
@included
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
    And user should see mail message body as "Hi {username}, You asked us to send you a magic link for quickly signing into your Patient Portal. Sign in here - {link}. If you did not make this request, please contact customer support. Thanks, Admin"
    When user click on a magic link
    Then user should successfully be logged in
    And user should see Home/Dashboard page 
    
    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-539
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
@included
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
    And user should see mail message body as "Hi {username}, You asked us to send you a magic link for quickly signing into your Patient Portal. Sign in here - {link}. If you did not make this request, please contact customer support. Thanks, Admin"
    When user click on a magic link
    Then user should successfully be logged in
    And user should see Home or Dashboard page

    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-540
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216  - Verify the error message if user accessing the magic link after 24 hours (email mode)
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" 
    And user should select only 1 "Mode of Communication" as "Email" 
    When  user clicks on Send magic link 
    Then user should see heading "Magic link sent"
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    When user access the inbox of registered "Email" after 24 hours   
    Then user should see error message "Magic link has been expired"
    And user should see text "Link has expired. Got to 'Forgot password' and request for a new link"

    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-541
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user is not able to receive magic link when Internet connection is unavailable

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set or not)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" 
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on Send magic link 
    When user click on "Login with magic link" button when conection is unavailable
    Then user should see appropriate error message
    
    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-1617
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user is not able to receive magic link when service is unavailable
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
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on Send magic link 
    When user click on "Login with magic link" button when service is unavailable
    Then user should see appropriate error message
    
    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-1618
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216  - Verify the error message if user accessing the magic link after 24 hours (phone number mode)
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
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" 
    And user should select only 1 "Mode of Communication" as "Phone" 
    And user clicks on Send magic link 
    Then user should see heading "Magic link sent"
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    When user access the inbox of registeredo "Phone number" after 24 hours   
    Then user should see error message "Magic link has been expired"
    And user should see text "Link has expired. Got to 'Forgot password' and request for a new link"

    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-1629
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should see forgot password screen when user refresh the screen
   
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    When user click on "Login with magic link" button 
    Then user should see One-time link page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Phone Number"
    And user clicks on Send magic link 
    Then user should see heading "Magic link sent"
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account" 
    When user access the messages from Phone  
    Then user should receive a magic link mail
    And user should see the mail with Email
    When user click on reload browser
    Then user should see Forgot password screen

    Examples:
    |Email of Phone Number|
    | XXXX|"

  @BDDTEST-EPP-1632
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should see One-time screen loaded within 3 seconds

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    When user click on "Login with magic link" button 
    Then user should see One-time link page
    And user should see loaded less than 3 seconds

    Examples:
    |Email of Phone Number|
    | XXXX|

  @BDDTEST-EPP-1636
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7 _STORY_EPP-216 - Verify user should not see any error after click on F12

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    When user click on "Login with magic link" button 
    Then user should see One-time link page
    And user click F12 on keyboard
    And user should not see any error after click on F12

    Examples:
    |Email of Phone Number|
    | XXXX|
