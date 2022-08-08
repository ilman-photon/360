Feature: As a Referring Provider / Internal Provider / Internal Staff, I should be able to view and access the page where I can provide required input and proceed to reset my login password 

  @BDDTEST-EPP-809
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify whether Internal Provider is able to click on the forgot password link
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot password" link  
    And user should clicks on the "forgot Password" link

  @BDDTEST-EPP-810
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify whether Internal  Provider navigates to forgot password screen upon clicking the link
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Submit" button
    And user should see "Back to Login" button

  @BDDTEST-EPP-813
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-240-verify whether Internal Provider is able to reset the password
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see heading "A link has been sent to your registered email to reset your password.Please check"

    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-814
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240- Verify whether internal provider is able to see the appropriate attributes on forgot password page
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    When user "<clicks>" on "forgot Password" link 
    Then user lands on Reset Password page
    Then user should see "username" textbox
    And user should see "Submit" button
    And user should see "Back to Login" button

  @BDDTEST-EPP-818
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-240-verify whether username wiped out from field once Internal Provider refresh the page
    Given user launch the 'XXX' URL 
    When  user is on "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user refresh the page.
    Then user should see username wiped out from page

    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-828
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify if  Internal Provider not able to view the Reset Password page when Internet/service is unavailable
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link when Internet/service is available
    Then user lands see appropriate error message

  @BDDTEST-EPP-1622
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-240- verify whether username wiped out from field once Referring Provider refresh the page
    Given user launch the 'XXX' URL 
    When  user is on "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user refresh the page.
    Then user should see username wiped out from page

    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-1623
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify whether Referring Provider is able to click on the forgot password link
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot password" link  
    And user should clicks on the "forgot Password" link

  @BDDTEST-EPP-1630
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240- Verify whether internal provider is able to see the appropriate attributes on forgot password page
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    When user "<clicks>" on "forgot Password" link 
    Then user lands on Reset Password page
    Then user should see "username" textbox
    And user should see "Submit" button
    And user should see "Back to Login" button

  @BDDTEST-EPP-1631
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify whether Referring  Provider navigates to forgot password screen upon clicking the link
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Submit" button
    And user should see "Back to Login" button

  @BDDTEST-EPP-1634
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-240-verify whether Referring Provider is able to reset the password
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    And user should see "Email" field
    When user provides "<Email>"
    And user click on "Submit" button
    Then user should see heading "A link has been sent to your registered email to reset your password.Please check"

    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-1637
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify if  Referring Provider not able to view the Reset Password page when Internet/service is unavailable
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    And user should see the "forgot Password" link 
    When user clicks on "forgot Password" link when Internet/service is available
    Then user lands see appropriate error message
