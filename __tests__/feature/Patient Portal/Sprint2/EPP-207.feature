
Feature: Patient Portal : Patient login using valid credentials

  @BDDTEST-EPP-638
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the Registered Patient is able to Login with Valid Email or Phone Number and Valid Password


    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone Number>" and valid"<password>"
    And user click 'Login' button.
    Then user should view Home/Dashboard page

  @BDDTEST-EPP-925
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the Patient is able to login with Email and valid Password.
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email>" and valid"<password>"
    And user click 'Login' button.
    Then user should view Home/Dashboard page
    
    Example:
    |Email or Phone Number|Password|
    |xx@yahoo.com|****|

  @BDDTEST-EPP-926
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the Patient is able to login with Phone number with valid Password.
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Phone Number>" and valid"<password>"
    And user click 'Login' button.
    Then user should view Home/Dashboard page
    
    Example:
    |Email or Phone Number|Password|
    |12345678|****|

  @BDDTEST-EPP-1624
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the user is able to see the Patient Login page without Internet connection
    Given user launch the 'XXX' url	
    When user navigates to the Patient Portal application
    And turn off the Data
    Then user should view appropriate error message

  @BDDTEST-EPP-1625
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the page is loading with in 3 seconds
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then page should load in 3 seconds

  @BDDTEST-EPP-1626
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.

  @BDDTEST-EPP-1627
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-207-Verify whether the error message is displaying when the service is unavailable.
    Given user user launch the 'XXX' url
    When the service is unavailable	
    And user navigates to the Patient Portal application
    And user lands on “Patient Login” screen
    Then error message '503 - Server is not ready to handle the request' should get display.
