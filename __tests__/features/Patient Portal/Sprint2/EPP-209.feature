
Feature: Patient Portal : Admin logs in to Patient Portal using E360+ SSO
 
  @BDDTEST-EPP-932
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Email and Valid Password using E360+ SSO
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Patient Portal application
    When Admin lands onto E360+ “Patient Login” screen
    And Admin provides valid "<Email>" and valid"<password>"
    And Admin click 'Login' button.
    Then Admin should view Home/Dashboard page
    
    Example:
    |Email or Phone Number|Password|
    |ValidEmail|ValidPassword|

  @BDDTEST-EPP-1508
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Phone Number and Valid Password using E360+ SSO
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Patient Portal application
    When Admin lands onto E360+ “Patient Login” screen
    And Admin provides valid "<Phone number>" and valid"<password>"
    And Admin click 'Login' button.
    Then Admin should view Home/Dashboard page
    
    Example:
    |Email or Phone Number|Password|
    |ValidPhoneNumber|ValidPassword|

  @BDDTEST-EPP-1640
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209-Verify whether the user is able to see the Patient Login page without Internet connection
    Given user launch the 'XXX' url	
    When user navigates to the Patient Portal application
    And turn off the Data
    Then user should view appropriate error message

  @BDDTEST-EPP-1641
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209-Verify whether the page is loading with in 3 seconds
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then page should load in 3 seconds

  @BDDTEST-EPP-1642
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.

  @BDDTEST-EPP-1644
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-209-Verify whether the error message is displaying when the service is unavailable.
    Given user user launch the 'XXX' url
    When the service is unavailable	
    And user navigates to the Patient Portal application
    And user lands on “Patient Login” screen
    Then error message '503 - Server is not ready to handle the request' should get display.
