Feature: Patient Portal : Changes to records - Logs changes made to authentication records - (P1)
  User Story: System should be able to log the changes made to Patient portal and send it to a system external to portal.

  @BDDTEST-EPP-1940
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with Email and valid Password.

    Given user launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone Number>" and valid"<password>"
    And user click "Login" button.
    Then user should view Home/Dashboard page
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    |Email or Phone Number| Password |
    |xx@yahoo.com|**** |

  @BDDTEST-EPP-1941
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with phone number and valid Password.

    Given user launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Phone Number>" and valid"<password>"
    And user click "Login" button.
    Then user should view Home/Dashboard page
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    |Email or Phone Number|Password|
    |12345678|****|

  @BDDTEST-EPP-1942
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing whether the 'Login using Magic link' option is displaying along with the error message "Your password has expired. Please reset your password."
    Given user launch the "XXX" url
    When user see the Login screen
    And user  provides "<Email or Phone>" and expired "<Password>"		
    Then user should be able to see the following message “Your password has expired. Please reset your password." along with "Login using one-time" link.
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Examples:
    |Email or Phone|Password|
    |xxxxxxxxxx|*******|

  @BDDTEST-EPP-1943
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing data's, when user edit the Personal information in the profile information.

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "Profile information" link
    And user clicks on the "Edit" link
    And user clicks on the "Prefered name" field
    And user provide the "<Prefered name>"
    And user clicks on the "Title" dropdown
    And user select the "<Title>" from the dropdown
    And user clicks on the "Upload photo" button
    And user naviates to explorer window to chosse photo
    Then user clicks on the "<upload photo>" button
    And user clicks on the "Gender" from the dropdown
    And user select the "<Gender>" dropdown
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|Preferd name|Title|Photo|Gender
    xxxxxxxxx|xxxxxxxx|xxxxxxx|Mr|xxxx|Male

  @BDDTEST-EPP-1944
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify that the log should capturing data's, when user edit the Contact information in the profile information.

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "Phone number" field
    And user provide the "<Phone number>"
    And user clicks on the "Email" field
    And user provide the "<Email>"
    And user clicks on the "Address" field
    And user provide the "<Address>"
    And user clicks on the "City" field
    And user provide the "<City>"
    And user clicks on the "State" field
    And user provide the "<State>"
    And user clicks on the "Zip" field
    And user provide the "<Zip>"
    And user clicks on the "Preferred mode(s) of communication" radio button
    And user provide the  "<Preferred mode(s) of communication>"
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|Phone number| Email|Address|City|State| 
    xxxxxxxxx|xxxxxxxx|xxxxxxx|xxxx|xxxx|xxxx|xxxxx|
    Zip|Preferred mode(s) of communication
    12345|Email

  @BDDTEST-EPP-1945
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when user add the new insurance details

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "insurance document" link
    And user clicks on the "Add" a newinsurance link
    And user clicks on the "insurance provider" dropdown
    And user select the "<insurance provider>" from the dropdown
    And user clicks on the "Plan name" dropdown
    And user select the "<Plane name>" from the dropdown
    And user clicks on the "Subscriber/Member id" field
    And user provide the "<Member id>"
    And user clicks on the "Group #"  field
    And user provide the "<Group id>"
    And user clicks on the "insurance card - front" upload button
    And user upload the  "<insurance front>"
    And user clicks on the "insurance card - back" upload button
    And user upload the  "<insurance card back>"
    And user clicks on the "insurance priority"  radio button
    And user clicks on the "<insurance priority>" option
    And user clicks on the "Are the subscriber?" radio button
    And user clicks on the "<Are the subscriber>" option
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|insurance provider|Plane|Member id|Group id 
    xxxxxxxxx|xxxxxxxxx|xxxxxxxxxxx|xxxxx|223322|3232        
    
    |insurance front|insurance back|insurance priority|Are the subscriber
    |xxxxxxxxx|xxxxxxxx|xxxxxxx| xxxx

  @BDDTEST-EPP-1946
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capture data's when the user edits the existing insurance details

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "insurance document" link
    And user clicks on the "Edit" button
    And user clicks on the "insurance provider" dropdown
    And user select the "<insurance provider>" from the dropdown
    And user clicks on the "Plan name" dropdown
    And user select the "<Plane name>" from the dropdown
    And user clicks on the "Subscriber/Member id" field
    And user provide the "<Member id>"
    And user clicks on the "Group #"  field
    And user provide the "<Group id>"
    And user clicks on the "insurance card - front" upload button
    And user upload the  "<insurance front>"
    And user clicks on the "insurance card - back" upload button
    And user upload the  "<insurance card back>"
    And user clicks on the "insurance priority"  radio button
    And user clicks on the "<insurance priority>" option
    And user clicks on the "Are the subscriber?" radio button
    And user clicks on the "<Are the subscriber>" option
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|insurance provider|Plane|Member id|Group id 
    xxxxxxxxx|xxxxxxxxx|xxxxxxxxxxx|xxxxx|223322|3232        
    
    |insurance front|insurance back|insurance priority|Are the subscriber
    |xxxxxxxxx| xxxxxxxx|xxxxxxx|xxxx

  @BDDTEST-EPP-1947
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when user delete the insurance details

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "insurance document" link
    And user clicks on the "Delete" link
    And user can see the  insurance should delete successfully message
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1948
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when user answer the security "Questions"
    Given user launch the "XXX"url
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<email/phone>" and "<password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question dropdown field
    And user click on dropdown field
    Then user should see the list of 5 security question
    When user select the security "Question1" field
    Then user "<Answer1>" the question in textfield
    When user select the security "Question2" field
    Then user "<Answer2>" the question in textfield
    When user select the security "Question3" field
    Then user "<Answer3>" the question in textfield
    When user select the security "Question4" field
    Then user "<Answer4>" the question in textfield
    When user select the security "Question5" field
    Then user "<Answer5>" the question in textfield
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Examples:
    
    email/phone|password|Answer1|Answer2| Answer3|Answer4|Answer5|
    xxxxxxxxx|xxxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|

  @BDDTEST-EPP-1949
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing when the user logout form patient portal

    Given user launch the "XXX" url	
    And user navigates to the Patient Portal application
    When lands onto “Patient Login” screen
    Then user should see "Email or Phone Number" field
    And user should see "password" field
    When  user enter Email or Phone Number in "<Email or Phone Number>" field
    And user enter password in "<password>" field
    And user should see "Login" button
    When user click on "Login" button
    Then user should see Home/Dashboard Page
    And user should see "Logout" option under Profile name
    When user click on "Logout" button
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1950
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log should not  capture when user provides Invalid Email and Valid Password

    Given user launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides invalid  "<Email>" and valid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    Then user get the log file in the location/tool
    Then the user can't view the log details 
    
    
    |Email or Phone Number|Password|
    |xxxxxxx.gmail.com|xxxxxxxx|

  @BDDTEST-EPP-1951
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capture the error screen when the user refreshes the page

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "insurance document" link
    And user clicks on the "Delete" link
    And user can see the  insurance should delete successfully message
    Then user should see error screen when the page refresh
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1952
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing the error screen when service is unavailable

    Given user launch the "XXX" url
    When user provides  "<email/phone>" and "<password>"
    And user clicks on "Login" button
    And user clicks on the "Account" link
    And user clicks on the "insurance document" link
    And user clicks on the "Delete" link
    And user can see the  insurance should delete successfully message
    Then user should see error screen when service is unavailable
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1953
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capture the error screen when the user's internet is unavailable

    Given user launch the "XXX" url 
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "email/phone" field and "<Password>" field
    And user should enter valid "<email/phone>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user shoud see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button selected on "Email: m********@yahoo.com"
    And user unchecked the "remember me" checkbox
    When user click on "Confirm" button
    Then user should see "second of set MFA" screen
    And user should see message "Success " and text "see Multi factor Authentication has been set successfully"
    And user should receive a email with code
    Then user see "Email Subject - Your Verification Code"
    Then user seeEmail/ message body - Hi {username},
    Then user see message"The temporary code you requested is xxxxxx. Please use this code to complete your request. Thank you, Admin"
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with invalid code
    When user click on "Confirm" button
    Then user should see error screen when internet is unavailable
    Then user gets the log file in the location/tool
    Then the user can view the log details with time stamp

  @BDDTEST-EPP-1954
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing data's, when admin edit the Personal information in the profile information.

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin navigates to the Patient Portal application
    And admin clicks on the "Account" link
    And admin clicks on the "Profile information" link
    And admin clicks on the "Edit" link
    And admin clicks on the "Prefered name" field
    And admin provide the "<Prefered name>"
    And admin clicks on the "Title" dropdown
    And admin select the "<Title>" from the dropdown
    And admin clicks on the "Upload photo" button
    And admin naviates to explorer window to chosse photo
    Then admin clicks on the "<upload photo>" button
    And admin clicks on the "Gender" from the dropdown
    And admin select the "<Gender>" dropdown
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|Preferd name|Title|Photo|Gender
    xxxxxxxxx|xxxxxxxx|xxxxxxx|Mr|xxxx|Male

  @BDDTEST-EPP-1955
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify that the log should capturing data's, when admin edit the Contact information in the profile information.

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "Phone number" field
    And admin provide the "<Phone number>"
    And admin clicks on the "Email" field
    And admin provide the "<Email>"
    And admin clicks on the "Address" field
    And admin provide the "<Address>"
    And admin clicks on the "City" field
    And admin provide the "<City>"
    And admin clicks on the "State" field
    And admin provide the "<State>"
    And admin clicks on the "Zip" field
    And admin provide the "<Zip>"
    And admin clicks on the "Preferred mode(s) of communication" radio button
    And admin provide the  "<Preferred mode(s) of communication>"
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|Phone number| Email|Address|City|State| 
    xxxxxxxxx|xxxxxxxx|xxxxxxx|xxxx|xxxx|xxxx|xxxxx|
    Zip|Preferred mode(s) of communication
    12345|Email

  @BDDTEST-EPP-1956
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when admin add the new insurance details

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "insurance document" link
    And admin clicks on the "Add" a newinsurance link
    And admin clicks on the "insurance provider" dropdown
    And admin select the "<insurance provider>" from the dropdown
    And admin clicks on the "Plan name" dropdown
    And admin select the "<Plane name>" from the dropdown
    And admin clicks on the "Subscriber/Member id" field
    And admin provide the "<Member id>"
    And admin clicks on the "Group #"  field
    And admin provide the "<Group id>"
    And admin clicks on the "insurance card - front" upload button
    And admin upload the  "<insurance front>"
    And admin clicks on the "insurance card - back" upload button
    And admin upload the  "<insurance card back>"
    And admin clicks on the "insurance priority"  radio button
    And admin clicks on the "<insurance priority>" option
    And admin clicks on the "Are the subscriber?" radio button
    And admin clicks on the "<Are the subscriber>" option
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|insurance provider|Plane|Member id|Group id 
    xxxxxxxxx|xxxxxxxxx|xxxxxxxxxxx|xxxxx|223322|3232        
    
    |insurance front|insurance back|insurance priority|Are the subscriber
    |xxxxxxxxx|xxxxxxxx|xxxxxxx| xxxx

  @BDDTEST-EPP-1957
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capture data's, when the admin edits the existing insurance details

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "insurance document" link
    And admin clicks on the "Edit" button
    And admin clicks on the "insurance provider" dropdown
    And admin select the "<insurance provider>" from the dropdown
    And admin clicks on the "Plan name" dropdown
    And admin select the "<Plane name>" from the dropdown
    And admin clicks on the "Subscriber/Member id" field
    And admin provide the "<Member id>"
    And admin clicks on the "Group #"  field
    And admin provide the "<Group id>"
    And admin clicks on the "insurance card - front" upload button
    And admin upload the  "<insurance front>"
    And admin clicks on the "insurance card - back" upload button
    And admin upload the  "<insurance card back>"
    And admin clicks on the "insurance priority"  radio button
    And admin clicks on the "<insurance priority>" option
    And admin clicks on the "Are the subscriber?" radio button
    And admin clicks on the "<Are the subscriber>" option
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|insurance provider|Plane|Member id|Group id 
    xxxxxxxxx|xxxxxxxxx|xxxxxxxxxxx|xxxxx|223322|3232        
    
    |insurance front|insurance back|insurance priority|Are the subscriber
    |xxxxxxxxx| xxxxxxxx|xxxxxxx|xxxx

  @BDDTEST-EPP-1958
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when admin delete the insurance details

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "insurance document" link
    And admin clicks on the "Delete" link
    And admin can see the  insurance should delete successfully message
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1959
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when the admin answers the security "Questions" 

    Given admin launch the "XXX"url
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    Then admin login with "<email/phone>" and "<password>"
    And admin clicks  on "Login" button
    And admin should prompted to set up Security questions after setup MFA
    Then admin land on to “Set up Security questions” screen
    When admin mouse over to "Question dropdown field
    And admin click on dropdown field
    Then admin should see the list of 5 security question
    When admin select the security "Question1" field
    Then admin "<Answer1>" the question in textfield
    When admin select the security "Question2" field
    Then admin "<Answer2>" the question in textfield
    When admin select the security "Question3" field
    Then admin "<Answer3>" the question in textfield
    When admin select the security "Question4" field
    Then admin "<Answer4>" the question in textfield
    When admin select the security "Question5" field
    Then admin "<Answer5>" the question in textfield
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Examples:
    
    email/phone|password|Answer1|Answer2| Answer3|Answer4|Answer5|
    xxxxxxxxx|xxxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|

  @BDDTEST-EPP-1960
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing when the admin logout form patient portal

    Given admin launch the "XXX" url	
    And admin navigates to the Patient Portal application
    When lands onto “Patient Login” screen
    Then admin should see "Email or Phone Number" field
    And admin should see "password" field
    When  admin enter Email or Phone Number in "<Email or Phone Number>" field
    And admin enter password in "<password>" field
    And admin should see "Login" button
    When admin click on "Login" button
    Then admin should see Home/Dashboard Page
    And admin should see "Logout" option under Profile name
    When admin click on "Logout" button
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-1961
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log should not  capture when admin provides Invalid Email and Valid Password

    Given admin launch the "XXX" url	
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    And admin provides invalid  "<Email>" and valid "<password>" 
    And admin clicks on "Login" Button
    Then admin should see the error message "Invalid adminname or Password"
    Then admin get the log file in the location/tool
    Then the admin can't view the log details 
    
    
    |Email or Phone Number|Password|
    |xxxxxxx.gmail.com|xxxxxxxx|

  @BDDTEST-EPP-2268
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the admin is able to login with Email and valid Password.

    Given admin launch the "XXX" url
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    And admin provides valid "<Email>" and valid"<password>"
    And admin click "Login" button.
    Then admin should view Home/Dashboard page
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    |Email or Phone Number| Password |
    |xx@yahoo.com|**** |

  @BDDTEST-EPP-2269
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the admin is able to login with phone number and valid Password.

    Given admin launch the "XXX" url
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    And admin provides valid "<Phone Number>" and valid"<password>"
    And admin click "Login" button.
    Then admin should view Home/Dashboard page
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    |Email or Phone Number|Password|
    |12345678|****|

  @BDDTEST-EPP-2270
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing when admin 'Login using Magic link' option is displaying along with the error message "Your password has expired. Please reset your password."

    Given admin launch the "XXX" url		
    When admin see the Login screen
    And admin  provides "<adminName>" and expired "<Password>"		
    Then admin should be able to see the following message “Your password has expired. Please reset your password." along with "Login using one-time" link.
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Examples:
    |adminname|Password|
    |xxxxxxxxxx|*******|

  @BDDTEST-EPP-2271
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-6_STORY_EPP-278 -  Verify that the log should capturing data's, when admin creates the security "Questions"

    Given admin launch the "XXX"url
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    Then admin login with "<email/phone>" and "<password>"
    And admin clicks  on "Login" button
    And admin should prompted to set up Security questions for setup a MFA
    Then admin land on to “Set up Security questions” screen
    And admin added the questions
    And admin clicks on the security "Question1" field
    Then admin added the"<Question1>" the question in textfield
    And admin clicks on the security "Question2" field
    Then admin added the"<Question2>" the question in textfield
    And admin clicks on the security "Question3" field
    Then admin added the"<Question3>" the question in textfield
    And admin clicks on the security "Question4" field
    Then admin added the"<Question4>" the question in textfield
    And admin clicks on the security "Question5" field
    Then admin added the"<Question5>" the question in textfield
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Examples:
    
    email/phone|password| Question1|Question2|Question3|Question4|Question5|
    xxxxxxxxx|xxxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|

  @BDDTEST-EPP-2272
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing the error screen when admin refresh the page

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "insurance document" link
    And admin clicks on the "Delete" link
    And admin can see the  insurance should delete successfully message
    Then admin should see error screen when the page refresh
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-2273
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing the error screen when  the admin update and before saving the service is unavailable

    Given admin launch the "XXX" url
    When admin provides  "<email/phone>" and "<password>"
    And admin clicks on "Login" button
    And admin clicks on the "Account" link
    And admin clicks on the "insurance document" link
    And admin clicks on the "Delete" link
    And admin can see the  insurance should delete successfully message
    Then admin should see error screen when service is unavailable
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    
    Example:
    email/phone|password|
    xxxxxxxxx|xxxxxxxxx|

  @BDDTEST-EPP-2274
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing  the error screen when the admin update and before saving the internet is unavailable

    Given admin launch the "XXX" url 
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    Then admin see "email/phone" field and "<Password>" field
    And admin should enter valid "<email/phone>" and valid "<Password>"
    When admin clicks on "Continue" button
    Then admin should see set MFA screen
    And admin should see screen title written as "Set Multi-Factor Authentication"
    And admin should see screen subtitle written as "Select a delivery method to identify your identity."
    And admin should see "Select a method" section with radio button selected on "Email: m********@yahoo.com"
    And admin unchecked the "remember me" checkbox
    When admin click on "Confirm" button
    Then admin should see "second of set MFA" screen
    And admin should see message "Success " and text "see Multi factor Authentication has been set successfully"
    And admin should receive a email with code
    And admin see the "Email Subject - Your Verification Code"
    Then admin see the Email/ message body - Hi {adminname},
    Then admin see the message "The temporary code you requested is xxxxxx. Please use this code to complete your request. Thank you,  Admin"
    And admin should see "<Enter code>" field
    And admin fill "<Enter code>" field with invalid code
    When admin click on "Confirm" button
    Then admin should see error screen when internet is unavailable
    Then admin gets the log file in the location/tool
    Then the admin can view the log details with time stamp

  Example:
  email/phone|password|
  xxxxxxxxx|xxxxxxxxx|