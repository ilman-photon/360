Feature: Provider Portal: Login - Error message for invalid credentials
  As an ECP Provider/ Referring Provider/ Admin, I want to view the validation message shown by the system on attempting to login with incorrect username or password 

  
  @BDDTEST-EPP-554
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222-Verify if ECP Provider is displayed with the error message when tries to login the portal with invalid username and valid password
    Given  launch the "XXX" url
    And user is in "Login" screen
    When user provides "<Username>" & "<password>"
    And user clicks on "Sign In" button
    Then user is prompted with error message "Incorrect Username / Password. Please try again"
    And usern remains on login page itself
    
    Examples:
    |Username|password|
    | invalidXXX|YYY|

  @BDDTEST-EPP-555
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify if ECP Provider is displayed with the error message when tries to login into  portal with valid username and invalid password
    Given user launch the "XXX" url
    And user is in "Login" screen
    When user provides "<Username>" & "<password>"
    And user clicks on  "Sign In" button
    Then user is prompted with error message "Incorrect Username / Password. Please try again"
    And user remains on login page itself
    
    Examples:
    |username|password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-556
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222-Verify if ECP Provider is displayed with the error message when tries to login into  portal with invalid username and invalid password
    Given user launch the "XXX" url
    And user is in "Login" screen
    When user provides "<username>" & "<password>"
    And user clicks on  "Sign In" button
    Then user is prompted with error message "Incorrect Username / Password Please try again"
    And user remains on login page itself
    
    Examples:
    |Username|Password|
    | invalidXXX|invalidpassword|

  @BDDTEST-EPP-557
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify if Referring Provider is displayed with the error message when tries to login the portal with invalid username and valid password
    Given Referring Provider  launch the "XXX" url
    And Referring Provider is in "Login" screen
    When Referring Provider provides Invalid "<username>" 
    And Referring Provider provides Valid "<password>"
    And Referring Provider  clicks on  "Sign In" button
    Then Referring Provider is prompted with error message "Incorrect Username / Password. Please try again" for "Username or Email" field.
    And Referring Provider remains on login page itself
    
    Examples:
    |username|password|
    | invalidXXX|YYY|

  @BDDTEST-EPP-558
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify if Referring Provider is displayed with the error message when tries to login into  portal with valid username and invalid password
    Given Referring Provider  launch the "XXX" url
    And Referring Provider is in "Login" screen
    When Referring Provider provides valid "<username>" 
    And Referring Provider provides Invalid"<password>"
    And Referring Provider  clicks on  "Sign In" button
    Then Referring Provider is prompted with error message "Incorrect Username / Password. Please try again" for "Password" field.
    And Referring Provider remains on login page itself
    
    Examples:
    |username|password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-559
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222-Verify if Referring Provider is displayed with the error message when  tries to login into the portal with invalid username and invalid password
    Given Referring Provider  launch the "XXX" url
    And Referring Provider is in "Login" screen
    When Referring Provider provides  Invalid"<username>" and  Invalid"<password>"
    And Referring Provider  clicks on  "Sign In" button
    Then Referring Provider is prompted with error message "Incorrect Username / Password. Please try again" for both "Username or Email" & "Password" field.
    And Referring Provider remains on login page itself
    
    Examples:
    |username|password|
    |invalidXXX|invalidYYY|

  @BDDTEST-EPP-1427
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify whether credentials is wiped out after page refresh
    Given user launch the "XXX" url
    And user is in "Login" screen
    When user provides  valid "<Username or Email>" 
    Then user provides Invalid"<password>"
    And user refreshes the page
    And user sees credentials wiped out from page
    
    Examples:
    |username|password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-1460
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-222- Verify whether Login  page loads in 3 seconds
    Given user launch the "XXX" url
    Then user sees page loads in 3 seconds
    And user is in "Login" screen

  @BDDTEST-EPP-1461
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify whether error message in login page is wiped out after page refresh
    Given user launch the "XXX" url
    And user is in "Login" screen
    When user provides "<Username>" & "<password>"
    And user clicks on  "Sign In" button
    Then user is prompted with error message "Incorrect Username / Password. Please try again"
    And user refresh the page
    Then user should see error message is wiped out from page
    
    Examples:
    |username|password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-1695
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when Referring Provider  provides invalid inputs in different combination on Username field and valid password present on login page
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Provider Portal application
    When Referring Provider lands onto “Provider Login” screen		
    And Referring Provider provides Invalid  "<Email or Phone Number>" and valid "<password>" 
    And Referring Provider  clicks on "Login" Button
    Then Referring Provider should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Email|Valid Password|
    |Jeyabal.Thangaraj|YYYYYYY|
    |J e yabal.Thangaraj@photon.com| YYYYYYY |
    |Jeyabal.Thangaraj@@photon.com| YYYYYYY |
    |Jeyabal.Thangarajphoton.com| YYYYYYY |
    |Jeyabal.Thangaraj@photon..com| YYYYYYY |
    |Jeyabal_Thangaraj@photon.com| YYYYYYY |

  @BDDTEST-EPP-1696
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when Referring Provider provides invalid inputs in different combination Phone Number on Username field and valid password present on login page
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Provider Portal application
    When Referring Provider lands onto “Provider Login” screen		
    And Referring Provider provides Invalid  "<Phone Number>" and valid "<password>" 
    And Referring Provider clicks on "Login" Button
    Then Referring Provider should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Phone Number|Valid Password|
    |1234+56789012345|YYYYYYY|
    |1234567  89012345| YYYYYYY |
    |{123456789012345| YYYYYYY |
    |1234567890| YYYYYYY |
    |+000123456789012345| YYYYYYY |
    |+12345678901234567| YYYYYYY |

  @BDDTEST-EPP-1697
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when Admin  provides invalid inputs in different combination on Username field and valid password present on login page
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Provider Portal application
    When Admin lands onto “Provider Login” screen		
    And Admin provides Invalid  "<Email or Phone Number>" and valid "<password>" 
    And Admin "<clicks>" on "Login" Button
    Then Admin should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Email|Valid Password|
    |Jeyabal.Thangaraj|YYYYYYY|
    |J e yabal.Thangaraj@photon.com| YYYYYYY |
    |Jeyabal.Thangaraj@@photon.com| YYYYYYY |
    |Jeyabal.Thangarajphoton.com| YYYYYYY |
    |Jeyabal.Thangaraj@photon..com| YYYYYYY |
    |Jeyabal_Thangaraj@photon.com| YYYYYYY |

  @BDDTEST-EPP-1698
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when ECP Provider  provides invalid inputs in different combination on Username field and valid password present on login page
    Given ECP Provider launch the 'XXX' url	
    And ECP Provider navigates to the Provider Portal application
    When ECP Provider lands onto “Provider Login” screen		
    And ECP Provider provides Invalid  "<Email or Phone Number>" and valid "<password>" 
    And ECP Provider "<clicks>" on "Login" Button
    Then ECP Provider should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Email|Valid Password|
    |Jeyabal.Thangaraj|YYYYYYY|
    |J e yabal.Thangaraj@photon.com| YYYYYYY |
    |Jeyabal.Thangaraj@@photon.com| YYYYYYY |
    |Jeyabal.Thangarajphoton.com| YYYYYYY |
    |Jeyabal.Thangaraj@photon..com| YYYYYYY |
    |Jeyabal_Thangaraj@photon.com| YYYYYYY |

  @BDDTEST-EPP-1699
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when Admin provides invalid inputs in different combination Phone Number on Username field and valid password present on login page
    Given Admin launch the 'XXX' url	
    And Admin navigates to the Provider Portal application
    When Admin lands onto “Provider Login” screen		
    And Admin provides Invalid  "<Phone Number>" and valid "<password>" 
    And Admin "<clicks>" on "Login" Button
    Then Admin should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Phone Number|Valid Password|
    |1234+56789012345|YYYYYYY|
    |1234567  89012345| YYYYYYY |
    |{123456789012345| YYYYYYY |
    |1234567890| YYYYYYY |
    |+000123456789012345| YYYYYYY |
    |+12345678901234567| YYYYYYY |

  @BDDTEST-EPP-1701
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-222- Verify the response when ECP Provider provides invalid inputs in different combination Phone Number on Username field and valid password present on login page
    Given ECP Provider launch the 'XXX' url	
    And ECP Provider navigates to the Provider Portal application
    When ECP Provider lands onto “Provider Login” screen		
    And ECP Provider provides Invalid  "<Phone Number>" and valid "<password>" 
    And ECP Provider "<clicks>" on "Login" Button
    Then ECP Provider should see the error message "Invalid Username or Password"
    
    Examples:
    |Invalid Phone Number|Valid Password|
    |1234+56789012345|YYYYYYY|
    |1234567  89012345| YYYYYYY |
    |{123456789012345| YYYYYYY |
    |1234567890| YYYYYYY |
    |+000123456789012345| YYYYYYY |
    |+12345678901234567| YYYYYYY |
