
Feature: As a user, I should be able to view "Forgot Password" screen 

  @BDDTEST-EPP-467
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see Forgot Password screen.
    Scenario: "Verify user should see view Forgot Password screen"
    
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should see "Continue" button
    And user should see "Back to Log in" button

  @BDDTEST-EPP-468
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user leave empty "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error 'Please fill all the mandatory fields' below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | |

  @BDDTEST-EPP-1143
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-215 - Verify user able to view  login screen on clicking the “Back to Log in” button from Forgot Password Page
    Scenario: "Verify user able to view  login screen on clicking the “Back to Log in” button"

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should see 'Continue' button
    And user should see 'Back to Log in' button
    When user clicks on 'Back to Log in' button
    Then user should see Login screen


    Example:
    | Email or Phone Number|
    | xxx |

  @BDDTEST-EPP-1144
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify whether the user is able to see the Forgot Password  page when Internet connection/service is unavailable
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link when internet/service is unavailable
    Then user should see see appropriate error message


    Example:
    | Email or Phone Number|
    | |

  @BDDTEST-EPP-1157
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not found
    Scenario: "Verify user should see inline error below Email or Phone Number>" field" if Email or Phone Number>" is not found
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user enters unregistered "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error "Patient with the given Username not found. Please make sure you have entered it correctly and try again " below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1445
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not valid
    Scenario: "Verify user should see inline error below Email or Phone Number>" field" if Email or Phone Number>" is not found
    
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user enters unregistered "<Email or Phone Number>" field
    And user click on 'Continue' button
    Then user should see inline error "Patient with the given Username not found. Please make sure you have entered it correctly and try again " below "<Email or Phone Number>"  field
    
    
    Example:
    | Email or Phone Number|
    | arief.rahman|
    | arief rahman@photon.com|
    | arief.rahman@@photon.com|
    | arief.rahmanphoton.com|
    | arief.rahman@photon..com|

  @BDDTEST-EPP-1539
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see "<Email or Phone Number>" field is blank after user refresh the page
    Scenario: "Verify user should see ""<Email or Phone Number>"" field is blank after user refresh the page"

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    When user valid "<Email or Phone Number>" field
    And user click on reload on browser
    Then user should see Forgot Password screen with "<Email or Phone Number>" field is blank

    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1540
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see Forgot Password page loaded within 3 seconds
    Scenario: "Verify user should see Forgot Password page loaded less than 3 seconds"

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see Forgot Password screen
    And user should see Forgot Password page loaded within 3 seconds"

  @BDDTEST-EPP-1564
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should not see any error after click on F12
    Scenario: "EPIC_EPP-7 _STORY_EPP-25 - Verify user should not see any error after click on F12"


    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see Forgot Password screen
    And user click F12 on keyboard
    And user should not see any error after click on F12
