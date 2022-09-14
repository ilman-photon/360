
Feature: Patient Portal : Appointments - View Visit Summary


  @BDDTEST-EPP-4554
  @Authentication
  @P1
  @Patient_Portal
   @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether the user should see the option to view the visit summary from the past appointments
    Scenario Outline:  Verify whether the user should see the option to view the visit summary from the past appointments.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4555
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether the user should able to view the visit summary for that appointment
    Scenario Outline:  Verify whether the user should able to view the visit summary for that appointment.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    Then User should be able to view the visit summary for that appointment
    
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4556
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether the user should able to see the visit summary for the appointment without Internet connection
    Scenario Outline:  Verify whether the user should able to see the visit summary for the appointment without Internet connection.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    When there is no internet connection available
    Then user should view appropriate error message
    
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4557
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether the page is loading with in 3 seconds
    Scenario Outline:  Verify whether the page is loading with in 3 seconds.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    Then page should load in 3 seconds
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4558
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen
    Scenario Outline:  Verify whether any error is displaying when we press F12 after user lands on Appointments screen.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4559
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether the error message is displaying when the service is unavailable
    Scenario Outline:  Verify whether the error message is displaying when the service is unavailable.
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    When the service is unavailable
    Then error message '503 - Server is not ready to handle the request' should get display
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4560
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-50_STORY_EPP-1608 - Verify whether  the page is loading properly or not when refresh the page
    Scenario Outline:  Verify whether  the page is loading properly or not when refresh the page
    
    Given user launch the  Patient Portal url
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view the list of past appointments
    And user should see the option to view the visit summary from the past appointments
    When user select the option to view the visit summary from the past appointments
    Then user should be able to view the visit summary for that appointment
    When the user refresh the page
    Then the page should load properly and should stay in visit summary for the appointment page
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
