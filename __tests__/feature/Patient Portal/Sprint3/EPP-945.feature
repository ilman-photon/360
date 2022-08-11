
Feature: Patient Portal : Profile Information/ Demographics - View - (P1)

  @BDDTEST-EPP-2037
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Android or IOS
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    Then user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then user able to view "Personal information" section in top and "Contact information" section in bottom
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2038
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Desktop
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    Then user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then user able to view "Personal information" section in left side and "Contact information" section in right side
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2039
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details1
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    Then user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then user able to view "Personal information" section
    Then user able to view "Contact information" section
    Then user able to view the "Name", "Prefered Name", "Title", "Date of Birth", "Photo", "Age", "Gender", "SSN" and "State Issued ID" fields under "Personal information" section
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2040
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details2
    Given user launch the "XXX" url
    When user provides  "<Email or Phone Number>" and "<password>"
    And user clicks on "Login" button
    Then user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then user able to view "Personal information" section
    Then user able to view "Contact information" section
    Then user able to view the "Phone Number", "Email ID", "Address", "City", "State", "Zip", "Prefered mode of communication" fields under "Contact information" section
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2041
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945-Verify whether the user is able to view my profile information without Internet connection
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” section
    When there is no internet connection available
    Then user should view appropriate error message
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2042
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945-Verify whether the page is loading with in 3 seconds
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” section
    Then page should load in 3 seconds
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2043
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945-Verify whether any error is displaying when we press F12 after navigating to the Profile information page.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” section
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2044
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-8_STORY_EPP-945-Verify whether the error message is displaying when the service is unavailable.
    Given user user launch the "XXX" url
    When the service is unavailable	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” section
    Then error message '503 - Server is not ready to handle the request' should get display.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
