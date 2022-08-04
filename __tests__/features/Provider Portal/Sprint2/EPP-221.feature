
Feature: Provider Portal: Login - Error message if mandatory fields not filled-in
  As an ECP Provider/ Referring Provider/ Admin, I should be able to see error message when mandatory fields are not filled in Login page

  
  @BDDTEST-EPP-521
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether ECP provider is prompted with error message when password field is left empty
    Given ECP provider  launch the 'XXX' url
    When ECP provider navigates to Marketting Website
    When ECP provider provides  input on "<Username>" textbox
    And ECP provider not provides input on "<Password>" textbox
    And ECP provider clicks on the "login" button
    Then ECP provider prompted with error message "This is a required field" for "Password" field.
    And ECP provider remains on login page itself
    
    Examples:
    |username or Email| |
    |xxxxxxxxx| |

  @BDDTEST-EPP-522
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether ECP provider is prompted with error message when username field is left empty
    Given ECP provider launch the 'XXX' url
    When ECP provider navigates to Marketting Website
    When ECP provider doesn’t provide any input on "<Username>" textbox
    And ECP provider Admin provides input on "<Password>" textbox
    And ECP provider clicks on the "login" button
    Then ECP provider prompted with error message "This is a required field" for User name field.
    And ECP provider remains on login page itself
    
    Examples:
    |username or Email|Password|
    |  |yyyyyyyyyyy |

  @BDDTEST-EPP-523
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether ECP provider is prompted with error message when both "Username" & "Password" fields are left empty
    Given ECP provider  launch the 'XXX' url
    When ECP provider navigates to Marketting Website
    When ECP provider not provides  input on "<Username>" textbox
    And ECP provider not provides input on "<Password>" textbox
    And ECP provider clicks on the "login" button
    Then ECP provider prompted with error message "This is a required field" for both "Username" and "Password" field.
    And ECP provider remains on login page itself
    
    Examples:
    |username|Password|
    |    |   |

  @BDDTEST-EPP-524
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Referring provider is prompted with error message when password field is left empty
    Given Referring Provider  launch the 'XXX' url
    When Referring provider navigates to Marketting Website
    When Referring provider provides  input on "<Username>" textbox
    And Referring provider not provides input on "<Password>" textbox
    And Referring provider clicks on the "login" button
    Then Referring provider prompted with error message "This is a required field" for "Username" field.
    And Referring provider remains on login page itself
    
    Examples:
    |username or Email|Password |
    |  | **********|

  @BDDTEST-EPP-525
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Referring provider is prompted with error message when username field is left empty
    Given Referring Provider  launch the 'XXX' url
    When Referring Provider not provides  input on "<Username or Email>" textbox
    And Referring Provider provides input on "<Password>" textbox
    And Referring Provider clicks on the "login" button
    Then  Referring Provider prompted with error message "This is a required field" for User name field.
    And Referring Provider remains on login page itself
    
    Examples:
    |username or Email|Password|
    |  |yyyyyyyyyyy |

  @BDDTEST-EPP-526
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Referring provider is prompted with error message when both username & password fields are left empty
    Given Referring Provider  launch the 'XXX' url
    When Referring provider navigates to Marketting Website
    When Referring provider not provides  input on "<Username>" textbox
    And Referring provider not provides input on "<Password>" textbox
    And Referring provider clicks on the "login" button
    Then Referring provider prompted with error message "This is a required field" for both "User name" and "Password" field.
    And Referring provider remains on login page itself
    
    Examples:
    |username or Email|Password|
    |    |   |

  @BDDTEST-EPP-1433
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Admin is prompted with error message when username field is left empty
    Given Admin launch the 'XXX' url
    When Admin navigates to Marketting Website
    When Admin doesn’t provide any input on "<Username>" textbox
    And Admin Admin provides input on "<Password>" textbox
    And Admin clicks on the "login" button
    Then Admin prompted with error message "This is a required field" for User name field.
    And remains on login page itself
    
    Examples:
    |username or Email|Password|
    |  |yyyyyyyyyyy |

  @BDDTEST-EPP-1434
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Admin is prompted with error message when both "Username" & "Password" fields are left empty
    Given ECP provider  launch the 'XXX' url
    When ECP provider navigates to Marketting Website
    When ECP provider not provides  input on "<Username>" textbox
    And ECP provider not provides input on "<Password>" textbox
    And ECP provider clicks on the "login" button
    Then ECP provider prompted with error message "This is a required field" for both "Username" and "Password" field.
    And ECP provider remains on login page itself
    
    Examples:
    |username|Password|
    |    |   |

  @BDDTEST-EPP-1435
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-221-Verify whether Admin is prompted with error message when password field is left empty
    Given Admin  launch the 'XXX' url
    When Admin navigates to Marketting Website
    When Admin provides  input on "<Username>" textbox
    And Admin not provides input on "<Password>" textbox
    And Admin clicks on the "login" button
    Then Admin prompted with error message "This is a required field" for "Password" field.
    And Admin remains on login page itself
    
    Examples:
    |username or Email| |
    |xxxxxxxxx| |
