Feature: Patient Portal : Forgot Password -  User details validation and options to reset password
  
  @BDDTEST-EPP-535
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  @Automation
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user able to navigate to the Select option screen from the Forgot Password Screen on entering valid Email or Phone Number 

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    
    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-536
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
@included
  @Automation
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user able to view “Login with Magic link” button and on clicking should send a magic link to the his email or phone number

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    When user click on  "Login with magic link" button
    Then user should receive magic link to his registered Email or Phone Number
    
    
    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-537
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
@included
  @Automation
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user able to view “Answer security questions” button and clicking should navigate to "Password Recovery Security Questions" page

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    
    
    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1156
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
@included
  @Automation
  Scenario: EPIC_EPP-7_STORY_EPP-215- Verify user able to view  login screen on clicking the “Back to Log in” button from Forgot Password - Select an option page
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see ""<Email or Phone Number>"" field
    And user should enter valid ""<Email or Phone Number>""
    And user clicks on ""Continue"" button
    Then user should see ""Select an option"" screen 
    And user should see ""Answer security questions"" button(if security questions is set)
    And user should see ""Login with magic link"" button
    And user should see ""Back to Log in"" button
    When user clicks on "Back to Log in" button
    Then user should see Login screen
    
    Examples:
    |Email or Phone Number|
    | |

  @BDDTEST-EPP-1163
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user is not able to view the Select Option page when Internet is unavailable
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button when the Internet is unavailable
    Then user should see appropriate error message
    
    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1582
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user is not able to view the Select Option page when service is unavailable
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button when the Service is unavailable
    Then user should see appropriate error message
    
    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1593
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see "<Email or Phone Number>" field is blank after user refresh the page
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user click on reload browser
    And user should see "Password Recovery Security Questions" page

    Examples:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1610
  @Authentication
  @Patient_Portal
  @Sprint2
@excluded
  Scenario: EPIC_EPP-7 _STORY_EPP-215 - Verify user should see "Select an option" screen loaded within 3 seconds
   
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Select an option" screen loaded within 3 seconds

  @BDDTEST-EPP-1611
  @Authentication
  @Patient_Portal
  @Sprint2
@excluded
  Scenario: EPIC_EPP-7 _STORY_EPP-215  - Verify user should not see any error after click on F12
   
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid Email or Phone Number
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user click F12 on keyboard
    And user should not see any error after click on F12
