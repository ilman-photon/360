Feature: As a Referring Provider / Internal Provider / Internal Staff, I should be able to view the error message shown by the system when mandatory fields are not filled

  @BDDTEST-EPP-875
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-241 - Verify whether Internal Provider is prompted with error message when Email field is left empty
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field"

    Examples:
      |Email|
      | |

  @BDDTEST-EPP-876
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-241 - Verify whether Referring Provider is prompted with error message when Email field is left empty
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field"

    Examples:
      |Email|
      | |

  @BDDTEST-EPP-880
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-241 - Verify whether Internal Provider is able to submit request for password reset after one/two unsuccessful attempts
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field" page
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field" page
    When user provides "<ValidEmail>"
    And user click on "Submit" button
    And user verify the submit request for password reset after one/two unsuccessful attempts providing incorrect name

    Examples:
      |Email|ValidEmail|
      | |XXX|

  @BDDTEST-EPP-1537
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-241 - Verify whether Referring Provider is able to submit request for password reset after one/two unsuccessful attempts
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field" page
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see error message "This is a required field" page
    When user provides "<ValidEmail>"
    And user click on "Submit" button
    And user verify the submit request for password reset after one/two unsuccessful attempts providing incorrect name
    
    Examples:
      |Email|ValidEmail|
      | |XXX|
