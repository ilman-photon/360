



Feature: As a user, I should see an error message when I have provided incorrect username during ‘forgot password’. 

  @BDDTEST-EPP-513
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Negative Tests - Verify User should see the error message "Enter a valid Email or Phone Number"
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-238 - Negative Tests - Verify User should see the error message "Enter a valid Email or Phone Number""

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter invalid email on "<Email or Phone Number>" field
    And user clicks on 'Continue' button
    Then User should see the following error message "Enter a valid Email or Phone Number"

    Example:
    |Email or Phone Number|
    |donjohn@|
    |$^%&*(@|
    |donjohn @gmail.com|
    |donjohn@@gmail.com|
    |donjohn.gmailcom|
    |donjohn@gmail..com|
    |donjohn@.com|
    |Phone Number|
    |+123 00091|
    |+123|
    |+12345678901234567|

  @BDDTEST-EPP-1734
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Verify user should see "page loading" within 3 seconds
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-238 - Verify user should see "page loading" within 3 seconds"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter invalid email on "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then User should see the following error message "Enter a valid Email or Phone Number"
    And user should see "page loading" within 3 seconds

    Example:
    |Email or Phone Number|
    |donjohn@|
    |$^%&*(@|
    |donjohn @gmail.com|
    |donjohn@@gmail.com|
    |donjohn.gmailcom|
    |donjohn@gmail..com|
    |donjohn@.com|
    |Phone Number|
    |+123 00091|
    |+123|
    |+12345678901234567|

  @BDDTEST-EPP-1735
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when service is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when service is unavailable"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see appropriate error message 

    Example:
    |email|
    |donjohn@gmail.com|

  @BDDTEST-EPP-1736
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when internet connection is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when internet connection is unavailable"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see appropriate error message 

    Example:
    |email|
    |donjohn@gmail.com|

  @BDDTEST-EPP-1737
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Verify User should see the empty field when user refesh the page
    Scenario Outline: "PIC_EPP-7_STORY_EPP-238 - Verify User should see the error message "Internet unavailable" when the connection is lost"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    When User should refresh the page
    Then user should see "Forgot Password" screen
    And User should see the empty "<Email or Phone Number>" field

    Example:
    |email|
    |donjohn@gmail.com|

  @BDDTEST-EPP-1738
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Verify user should not see any scripts error when after user press F12 on the console
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-238 - Verify user should not see any Java scripts error when after user press F12 on the console"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should input Unregistered Phone Number on "<Email or Phone Number>" field
    And user clicks on "Continue" button
    When User press F12 on the console 
    Then User  should not see any scripts error 

    Example:
    |Email or Phone Number|
    |000001234|
