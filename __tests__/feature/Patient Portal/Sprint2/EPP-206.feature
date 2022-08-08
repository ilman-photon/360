Feature: As a user/ admin user, I should be able to view the "Patient Login" Page.

  @BDDTEST-EPP-913
  @Sprint2
  @Authentication
  @Automation
  @Patient_Portal
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Email or phone number & Password fields
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should be able to view "Email or phone number" & "Password fields"

  @BDDTEST-EPP-914
  @Authentication
  @Patient_Portal
  @Sprint2
   @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the Password is getting mask when user typing the Password.
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone Number>" and "<password>"
    Then entered password should be masked.
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-915
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when user typing the Password.
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<username>" and "<password>"
    Then entered password should be masked.
    And user should view unmask option
    When user click the Unmask icon
    Then entered password should get visible to the user
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-916
  @Authentication
  @Automation
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Login button, Continue as  a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should able to view 'Login' button .
    And user should able to view  'Continue as Guest' button .
    And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button
    And user should able to view 'Forgot password' link .

  @BDDTEST-EPP-918
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to Login as Guest User.
    Given user  launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user click the 'Continues as a guest' button 
    Then user should view the mentioned fields like First Name, Last Name, Date of Birth, Email, Phone number.
    And user should allow to enter the <"FirstName ">
    And user should allow to enter the  <"LastName ">
    And user should allow to enter the  <"DateofBirth ">
    And user should allow to enter the  <"Email ">
    And user should allow to enter the  <"PhoneNumber ">
    And user click the 'Login ' button.	
    Then user should view the Home/Dashboard Page
    
    Example: 
    |FirstName|LastName|DateofBirth|Email|PhoneNumber|
    |xxxxxxxxx|yyyyyyyyy|07.04.1989|xxxx.yyyy@gmail.com|9876532123|

  @BDDTEST-EPP-919
  @Authentication
  @Automation
  @Patient_Portal
  @Sprint2
     @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Create Account' link 
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user click the 'Create Account' button
    Then user should navigate to Registration page.

  @BDDTEST-EPP-920
  @Authentication
  @Automation
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Forgot Password' link 
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user click the 'Forgot Password' link 
    Then user should navigate to Forgot password page.

  @BDDTEST-EPP-921
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
    @included
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
    @included
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

  @BDDTEST-EPP-923
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206- Verify whether the admin user is not able to see the Patient Login page with Continue as a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link and see Login Button
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen
    Then admin user should view "Login" button
    And admin user should not view  'Continue as a guest' button .
    And admin user should not view the  Don’t have an account?” verbiage along with 'Create Account' button 
    And admin user should not view 'Forgot password' link .

  @BDDTEST-EPP-1121
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if Email or Phone Number and  password are not filled 
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen
    And user/admin user provides blank "<Email or Phone Number>" and blank "<password>"
    And user click the "Login" Button.
    Then user should view the error message 'This field is required' 
    
    Example:
    |Email or Phone Number|Password|
    ||****|

  @BDDTEST-EPP-1141
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page when Internet connection/service is unavailable
    Given user/admin user launch the 'XXX' url	
    When user/ admin user navigates to the Patient Portal application
    Then user/ admin user should view appropriate error message

  @BDDTEST-EPP-1612
  @Authentication
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page without Internet connection


  @BDDTEST-EPP-1613
  @Authentication
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the page is loading with in 3 seconds


  @BDDTEST-EPP-1614
  @Authentication
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.


  @BDDTEST-EPP-1615
  @Authentication
  @Patient_Portal
  @Sprint2
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the error message is displaying when the service is unavailable.


  @BDDTEST-EPP-1709
  @Authentication
  @Patient_Portal
  @Sprint2
    @extended
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when Admin typing the Password.
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Patient Portal application
    When Admin lands onto “Patient Login” screen
    And Admin provides "<username>" and "<password>"
    Then Admin password should be masked.
    And Admin should view unmask option
    When Admin click the Unmask icon
    Then entered password should get visible to the Admin
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-1710
  @Sprint2
  @Authentication
  @Automation
  @Patient_Portal
    @included
  Scenario: EPIC_EPP-4_STORY_EPP-206-Verify whether the Admin is able to see the Patient Login page with Email or phone number & Password fields
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Patient Portal application
    When Admin lands onto “Patient Login” screen
    Then Admin should be able to view "Email or phone number" & "Password fields"
