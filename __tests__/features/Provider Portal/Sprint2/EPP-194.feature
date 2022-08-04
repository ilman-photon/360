
Feature:As a referring provider, I should be able to receive a link to my registered email-id post filling in the registration details and submitting them

  @BDDTEST-EPP-1122
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the external provider receives a set password link to the registered email address  after completing the registration process.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And click on the registration invitation link.
    When The External provider fills all required fields on the registration page 
    And click on register button. 
    Then The External provider receives a set password link to the registered email address 
    
    Examples:
    |Email Subject - Create your Provider Portal account
    
    Email body - Hi {username},
    
    To complete your Provider Portal account creation, click {here} to set your password.
    
    Thanks,
    
    Admin|

  @BDDTEST-EPP-1123
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the external provider clicks on the set password link in the email id will redirect to the set password page.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The  set password page is opened with new window.
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1124
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the set password page consists of the following fields
    Username"<text field>", "password<Text field>""confirm password <Text field>"."create account<Button>"
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then Set password page is displayed with a Username as a text field, a Password text field, Confirm password text field and create account 'button'
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1125
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the username text field by default takes the email-id has a Username.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    
     
    Examples:
    |Photon@XYZ.com|

  @BDDTEST-EPP-1126
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the password text field is auto encrypted.
    Given External Provider Launch the Browser Enter 'Email-XXX' URL Ex: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When the External provider clicks on the set password link. 
    Then the Set password page is displayed with the registered email id as a  Username.
    When the External provider enters characters in the password text field.
    Then all entered values are auto encrypted.
    Examples:
    |Password|
    |********|

  @BDDTEST-EPP-1127
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the external provider clicks on the eye icon in the password text field the entered values are unmasked.
    Given External Provider Launch the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>"
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link 
    When the External provider clicks on the set password link. 
    Then the Set password page is displayed with the registered email id as a  Username.
    When the External provider enters characters in the password text field
    And click on the eye icon.
    Then all entered values umask.
    Examples:
    |Password|
    |Phot0@2N|

  @BDDTEST-EPP-1128
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the external provider Password combination should consist of  At least One Numeric (0-9), At least One Upper case Alphabets (A-Z), At least One Lower case Alpha (a-z), and At least One Special character (no spaces).
    Given External Provider Launch the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password "link"
    When the External provider clicks on the set password "link". 
    Then the Set password page is displayed with the registered email id as a  Username.
    When the External provider enters characters in the password text field.
    Then At least One Numeric (0-9), At least One Upper case Alpha (A-Z), At least One Lower case Alpha (a-z), and At least One Special character (no spaces).
    Examples:
    |Password|
    |Phot0@2N|

  @BDDTEST-EPP-1129
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the password text field accepts 8 to 20 characters.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters 8 characters in the password text field.
    Then Password text field accepts 8 characters.
    When The external provider enters 9 characters in the password text field.
    Then Password text field accepts 9 characters.
    When the external provider enters 19 characters in the password text field
    Then Password text field accepts 19 characters.
    When the External provider enters 20 characters in the password text field
    Then Password text field accepts 20 characters 
     
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1130
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the proper error message displays when the External provider enters less than 8 characters in the password text field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters 7 characters in the password text field.
    Then External provider sees an error message 
    
     
    Examples:
    |Password|
    |Phot0@N|

  @BDDTEST-EPP-1131
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194- Verify if the proper error message displays when the External provider enters more than 20 characters in the password text field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters 21 characters in the password text field.
    Then External provider sees an error message 
    
     
    Examples:
    |Password|
    |Photon@123@#$Bangalore|

  @BDDTEST-EPP-1132
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if when the External provider enters identical characters consecutively in the password text field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>"
    When The External provider clicks on the set password link.
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters identical characters consecutively in the password text field.
    Then Password text accepts identical characters consecutively.
    
     
    Examples:
    |Password|
    |Photon@@123|

  @BDDTEST-EPP-1134
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the proper error message displays when the External provider enters a blank space in the password text field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters a Blank space in the password text field.
    Then External provider sees an error message "This field is required"
    
     
    Examples:
    |Password|
    |       |

  @BDDTEST-EPP-1135
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194- Verify if the proper error message displays when the External provider enters a username in the password text field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>"  
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enters a username in the password text field.
    And clicks on Crea
    Then External provider sees an error message"Password doesn't match try again" 
    
     
    Examples:
    |Password|
    |Photon@xx.com|

  @BDDTEST-EPP-1136
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the ‘Confirm New Password’ field should match with the value in the ‘New Password’ field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    And External provider Enter the values in password textfield
    When the External provider enters the values in conform new password text field 
    Then Values should match the new password text field.
     
    Examples:
    |Password|
    |Photon@@123|

  @BDDTEST-EPP-1137
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the proper error message is displayed when the ‘Confirm New Password’ field should not match with the value in the ‘New Password’ field.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    And External provider Enter the values in password textfield
    When the External provider enters the missmatch values in conform password text field has compared to new password text field 
    Then the external provider sees error message "Passwords do not match. Try again”"
     
    Examples:
    |Password|
    |Photon@@980|

  @BDDTEST-EPP-1138
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the proper error message is displayed when the external provider clicks on to create my account button without entering the password
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider clicks on the to create my account 'button' without entering the password.
    Then External provider sees the error message “This is a required field”
     
    Examples:
    |Password|
    |        |

  @BDDTEST-EPP-1139
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194- Verify if the proper error message is displayed when the external provider clicks on to create my account button without entering the conform new password.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider Enter password in password text field and clicks on the to create my account 'button' without entering conform new password.
    Then External provider sees the error message “This is a required field”
     
    Examples:
    |Password|
    |        |

  @BDDTEST-EPP-1140
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-verify if the external provider clicks on the create my account button and then is redirected to the login page.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The Set password page is displayed with the registered email id as a  Username.
    When the External provider enterser password in the password text field
    And enter the same password in confirm password.
    Then External provider is redirected to the login page.
    
     
    Examples:
    |Password|
    |Photon@@123|

  @BDDTEST-EPP-1528
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-  Verify if a 503 Service unavailable message  displays when the external provider tries to crate password when the server is on maintenance
    maintenance 
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password "link"
    When The External provider clicks on the set password link. 
    Then The set password page is opened with a new window.
    And switch off the server
    And enter the password and confirm the password 
    And click on create my account button
    Then External provider sees the error message "503 Service unavailable "
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1529
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-  Verify if the set password page is opened within 3 seconds.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The set password page is opened 3 or less than 3 seconds
    Examples:
    |  |

  @BDDTEST-EPP-1530
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-  Verify if the external provider can set the password using a mobile phoner
    Given External Provider Launch mobile the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    And Enter the password confirm form password
    And clicks on creating my account "button"
    Then Password should be created.
    
    Examples:
    |  |

  @BDDTEST-EPP-1531
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-  Verify if check your internet connection message displays when the external provider tries to create a password without an internet connection.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password "link"
    When The External provider clicks on the set password "link". 
    Then The set password page is opened with a new window.
    And switch off the internet/connection
    And enter the password and confirm the password 
    And click on create my account button
    Then External provider sees the error message "check your internet connection "
    
    Examples:
    |  |

  @BDDTEST-EPP-1532
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-  Verify if the external provider  is able to view Dev Tools When F12 is clicked
    Given External Provider Launch  the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When The External provider clicks on the set password link. 
    Then The set password page is opened.
    When the External provider clicks on F12 on the keyboard.
    Then the  external provider must "validate" whether the Dev Tools are Displayed
    
    Examples:
    |  |

  @BDDTEST-EPP-1534
  @@Regression
  @Provider_Portal
  @sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-194-Verify if the Password combination should Contain at least 3 out of 4 types  At least One Numeric (0-9), At least One Upper case Alpha (A-Z), At least One Lower case Alpha (a-z), and At least One Special character (no spaces).
    Given External Provider Launch the Browser Enter 'Email-XXX' URLEx: Gmail
    When External provider login to his/her email id by enter valid "<username>" and "<password>" 
    And Open the' Create your Provider Portal account' mail sent by the ECP system
    Then mail is opened it consisting set password link
    When the External provider clicks on the set password link. 
    Then the Set password page is displayed with the registered email id as a  Username.
    When the External provider enters the password the combination of One Numeric     (0-9), At least One Upper case Alpha (A-Z), and  At least One  Special character (no spaces).
    Then Password text field accepts
    And enters the password with the combination of One Numeric (0-9), At least One Lower case Alphabets (a-z), and At least One Special character (no spaces).
    And enters the password with and the combination of One Numeric (0-9), At least One Lower case Alphabets  (a-z), At least One Special character (no spaces).
    Then Password text field accepts 
    And Enter enters the password the combination of One Numeric (0-9), At least One Lower case Alphabets (a-z), At  least One Upper case Alphabets (A-Z)
    Then Password text field accepts.
    And Enter enters the password the combination of At least One Lower case Alphabets  (a-z), At least One Upper case Alphabets  (A-Z), and   at least One Special character (no spaces). 
    Then Password text field accepts.
    And Enter at least One Numeric (0-9), At least One Upper case AlphabetsAlphabet  (A-Z), At least One Lower case Alphabets (a-z), and At least One Special character (no spaces).
    Then Password text field accepts.
    Examples:
    |Password|
    |Photon@123|
    |PHOTON@123|
    |photon@123|
    |Photon123|
