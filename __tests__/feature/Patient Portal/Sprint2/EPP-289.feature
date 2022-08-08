Feature:  As a user/ admin user, I should be able to logout of the patient portal.

  @BDDTEST-EPP-649
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify user  should be able to logout from patient portal
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When lands onto “Patient Login” screen
    Then user should see "<Email or Phone Number>" field
    And user should see "<password>" field
    When  user enter Email or Phone Number in "<Email or Phone Number>" field
    And user enter password in "<password>" field
    And user should see 'Login' button
    When user click on "Login" button
    Then user should see Home/Dashboard Page
    And user should see 'Logout' option under Profile name
    When user click on 'Logout' button
    Then user should see Login screen

    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1142
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Internet connection is unavailable
    Feature: Verify user is not able to logout when Internet connection/service is unavailable

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When lands onto “Patient Login” screen
    Then user should see "<Email or Phone Number>" field
    And user should see "<password>" field
    When  user enter Email or Phone Number in "<Email or Phone Number>" field
    And user enter password in "<password>" field
    And user should see 'Login' button
    When user click on 'Login' button
    Then user should see Home/Dashboard Page
    And user should see 'Logout' option under Profile name
    When user click on 'Logout' button when internet is unavailable
    Then user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1533
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify admin user  should be able to logout form patient portal
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    Then admin user should see "<Email or Phone Number>" field
    And  admin user should see "<password>" field
    When admin user enter Email or Phone Number in "<Email or Phone Number>" field
    And admin user enter password in "<password>" field
    And admin user should see 'Login' button
    When admin user click on 'Login' button
    Then admin user should see Home/Dashboard Page
    And admin user should see 'Logout' option under Profile name
    When admin user click on 'Logout' button
    Then admin user should see Login screen

    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1535
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify user is able to view the Logout screen loaded within 3 sec
    Feature: Verify user is not able to logout when Internet connection/service is unavailable

    Given user launch the 'XXX' url	
    And  user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see "<Email or Phone Number>" field
    And user should see "<password>" field
    When user enter Email or Phone Number in "<Email or Phone Number>" field
    And user enter password in "<password>" field
    And user should see 'Login' button
    When user click on 'Login' button
    Then user should see Home/Dashboard Page
    And user should see 'Logout' option under Profile name
    When user click on 'Logout' button when internet is unavailable
    Then user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1536
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Service is unavailable
    Given user launch the 'XXX' url	
    And  user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see "<Email or Phone Number>" field
    And  user should see "<password>" field
    When user enter Email or Phone Number in "<Email or Phone Number>" field
    And  user enter password in "<password>" field
    And  user should see 'Login' button
    When  user click on 'Login' button
    Then  user should see Home/Dashboard Page
    And  user should see 'Logout' option under Profile name
    When  user click on 'Logout' button when service is unavailable
    Then  user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1538
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-289 - Verify whether user is able to view Dev Tools without errors when F12 is clicked
    Given Admin launch the 'XXX' url
    When Admin provides  "<username>" and "<password>" 
    When Admin "<clicks>" the "<F12>" button 
    Then Admin must "validate" whether the Dev Tools are Displayed

  @BDDTEST-EPP-1645
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Internet connection is unavailable
    Feature: Verify user is not able to logout when Internet connection/service is unavailable

    Given user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen
    Then admin user should see "<Email or Phone Number>" field
    And admin user should see "<password>" field
    When admin  user enter Email or Phone Number in "<Email or Phone Number>" field
    And admin user enter password in "<password>" field
    And admin user should see 'Login' button
    When admin user click on 'Login' button
    Then admin user should see Home/Dashboard Page
    And  admin user should see 'Logout' option under Profile name
    When  admin user click on 'Logout' button when internet is unavailable
    Then admin user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1649
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Service is unavailable
    Given admin user launch the 'XXX' url	
    And  admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen
    Then admin user should see "<Email or Phone Number>" field
    And  admin user should see "<password>" field
    When admin user enter Email or Phone Number in "<Email or Phone Number>" field
    And  admin user enter password in "<password>" field
    And admin user should see 'Login' button
    When admin user click on 'Login' button
    Then admin user should see Home/Dashboard Page
    And admin user should see 'Logout' option under Profile name
    When admin user click on 'Logout' button when service is unavailable
    Then admin user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1651
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-4_STORY_EPP-289 - Verify admin user is able to view the Logout screen loaded within 3 sec
    Feature: Verify user is not able to logout when Internet connection/service is unavailable

    Given admin  user launch the 'XXX' url	
    And   admin user navigates to the Patient Portal application
    When admin  user lands onto “Patient Login” screen
    Then admin  user should see "<Email or Phone Number>" field
    And  admin user should see "<password>" field
    When admin  user enter Email or Phone Number in "<Email or Phone Number>" field
    And  admin user enter password in "<password>" field
    And  admin user should see 'Login' button
    When admin  user click on 'Login' button
    Then admin  user should see Home/Dashboard Page
    And admin user should see 'Logout' option under Profile name
    When admin  user click on 'Logout' button when internet is unavailable
    Then admin user should see appropriate error message


    Examples:
      |Email or Phone Number|password|
      | xxx | xxx|

  @BDDTEST-EPP-1652
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-289 - Verify whether admin user is able to view Dev Tools without errors when F12 is clicked
    Given Admin user launch the 'XXX' url
    When Admin user provides  "<username>" and "<password>" 
    When Admin user "<clicks>" the "<F12>" button 
    Then Admin user must "validate" whether the Dev Tools are Displayed
