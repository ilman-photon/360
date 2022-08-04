Feature: As a user, I should be able to view the error message shown by the system, upon submitting  with incorrect username

  @BDDTEST-EPP-885
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-242 - Verify whether user is prompted with error message when username is provided incorrectly
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page 
    And navigate to forgot password page
    Then user provides incorrect "<username>"
    And user clicks on the "submit" button
    Then user prompted with error message as "‘Incorrect Username'. Please try again’"

    Examples:
    |username|
    | InvalidXXX|

  @BDDTEST-EPP-887
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-242 - Verify whether user is able to submit password reset request using email after one/two unsuccessful attempts providing incorrect name
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page 
    And navigate to forgot password page
    Then user provides incorrect "<Email>"
    And user verify the submit request for password reset after one/two unsuccessful attempts providing incorrect name

    Examples:
    |Email|
    |invalidXXX |

  @BDDTEST-EPP-888
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-242 - Verify whether user is prompted with error message when primary phone number is entered in username field
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page 
    And navigate to forgot username page
    Then user provides primary phone number as "<Email>"
    And user clicks on the "submit" button
    Then user prompted with error message as "‘Incorrect Username'. Please try again’"

    Examples:
    |Email|
    | 123|

  @BDDTEST-EPP-1422
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-242- Verify whether username is wiped out from field after page refresh


    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page
    And navigate to forgot password page
    Then user provides "<username>"
    And user refreshes the page without submitting
    And user sees data wiped out from screen

    Examples:
    |Email|
    |XXX |

  @BDDTEST-EPP-1423
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-242- Verify whether  forgot password page loads within 3 seconds
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page
    Then user sees page loads in  3 seconds
    And navigate to forgot password page

  @BDDTEST-EPP-1485
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-242- verify the response when user provides invalid inputs in different combination on Username field present on forgot password page
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page 
    And navigate to forgot password page
    Then user provides incorrect "<Email>"
    Then user clicks on "submit" button
    And user is prompted with error message "Incorrect username/password.Please try again"

    Examples:
    |Email|
    |Jeyabal.Thangaraj|  
    |J e yabal.Thangaraj@photon.com|
    |Jeyabal.Thangaraj@@photon.com|
    |Jeyabal.Thangarajphoton.com|
    |Jeyabal.Thangaraj@photon..com|
    |Jeyabal_Thangaraj@photon.com|
