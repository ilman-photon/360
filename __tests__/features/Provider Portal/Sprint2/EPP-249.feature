Feature: As a referring provider, I should be able to reset my password by creating a new password, upon satisfy all the password requirements in Reset password page. 

  @BDDTEST-EPP-1488
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one numeric, one upper case, and one lower case character
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user get a successful message to their registered email and phone number 
    
    And user was navigated to login page 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1489
  @Authentication
  @Provider_Portal
  @Regression
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one upper case, one lower case, and one special character
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should enter a password containing at least one special character  
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user get a successful message to their registered email and phone number 
    
    And user was navigated to login page 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1490
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one lower case, one special, and one numeric character
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1>text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should enter a password containing at least one special character  
    
    And user should enter a password containing at least one numeric character 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2>text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user get a successful message to their registered email and phone number 
    
    And user was navigated to login page 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1491
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with one special, one numeric, and one upper case character
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one special character  
    
    And user should enter a password containing at least one numeric character 
    
    And user should enter a password containing at least one upper case alphabet(A-Z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user get a successful message to their registered email and phone number 
    
    And user was navigated to login page 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1492
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with only seven characters
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user enters a password in seven characters 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1493
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with twenty-one characters
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user enters a password in twenty-one characters 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1494
  @Authentication
  @Provider_Portal
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with password matches with the username/registered email
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user enters a password containing the user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1495
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen password matches with the current password
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user enters a password that matches the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1496
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with one numeric and one upper case character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1497
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with one numeric and one lower case character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one lower case alphabet (a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1498
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one numeric and one special character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one special character 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1499
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one upper case and one lower case character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet (a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1500
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen with one upper case and one special character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one special character 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1501
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with one lower case and one special character only
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one lower case alphabet (a-z) 
    
    And user should enter a password containing at least one special character 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1502
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-  verify if the registered referring provider is able to reset the password from the password reset screen with one numeric, one upper case, one lower case character and white space
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should enter a password containing one empty space between characters 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please refer to password policy” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1503
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-249-  verify if the registered referring provider is able to reset the password from the password reset screen and noting enters but clicking submit button
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user nothing enters in the “New password” text field 
    
    And user nothing enters in the “Confirm password” text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “please enter the valid password”

  @BDDTEST-EPP-1504
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen with one numeric, one upper case one lower case character and not re-enter the password in the confirm new password field
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user nothing entered in the “Confirm new password” field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “please re-enter the password in confirm new password field” 
    
     
    
    Examples: 
    
    |Password| 
    
    |photon@12|

  @BDDTEST-EPP-1505
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen and nothing enters in the new password field and enters the valid password in confirm new password field
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” text field 
    
    And user nothing enters in the “New password” text field 
    
    And user enters the fresh password in the “Confirm new password” <password> field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Entered password does not match with the new password field” 
    
     
    
    Examples: 
    
    |Password| 
    
    |photon@12|

  @BDDTEST-EPP-1506
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen and different passwords in new password field and confirm new password field
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one lower case alphabet (a-z) 
    
    And user should enter a password containing at least one special character 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password does not match with the “New password” text field 
    
    Then user should be able to click on the ‘Submit’ button 
    
    And user should get an error message “Please enter same password in both fields” 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1507
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249- verify if the registered referring provider is able to reset the password from the password reset screen and that referring provider enters the new password in both fields and give refresh button
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user should reenter the same password in the “Confirm new password” <password2> text field 
    
    And user entered password should match with the “New password” text field 
    
    Then user refreshes the screen 
    
    And Entered data must be deleted in both fields 
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|

  @BDDTEST-EPP-1512
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-249-verify if the registered referring provider is able to reset the password from the password reset screen and user enters the new password in new password field and copy paste the password to Confirm new password field
    Given user launch the 'XXX' URL 
    
    When user should navigate to password reset page 
    
    Then user enters their new password in the “New password” <password1> text field 
    
    And user should enter a password in a range from 8 to 20 characters 
    
    And user should enter a password containing at least one numerical character (0-9) 
    
    And user should enter a password containing at least one upper case alphabet (A-Z) 
    
    And user should enter a password containing at least one lower case alphabet(a-z) 
    
    And user should not enter a password containing with user's username/registered email 
    
    And user should enter a password that should not match with the current password 
    
    And user copy-paste the password to the “Confirm new password” <password2> text field 
    
    Then user should not be able to copy-paste the password from the “New password” field  
    
     
    
    Examples: 
    
    |Password1|password2| 
    
    |photon@12|photon@12|
