
Feature: Patient Portal : Appointments - View Past Appointments


  @BDDTEST-EPP-4526
  @Authentication
  @P1
   @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify that user should be able to view past appointments
    Scenario Outline:  Verify that user should be able to view past appointments.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view an option to schedule new appointments
    Then user should be able to view Upcoming Appointments with an option to reschedule and cancel each of them
    Then user should be able to view Past Appointments
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4527
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify that whether user should be able to view the list of past appointments
    Scenario Outline:  Verify that whether user should be able to view the list of past appointments.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view Past Appointments
    Then user should be able to view the list of past appointments
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4528
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify whether user should be able to view the details under each past appointment
    Scenario Outline:  Verify whether user should be able to view the details under each past appointment.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view Past Appointments
    Then user should be able to view the list of past appointments
    And user clicks on any of the past appointments
    Then user should be able to view the details (Date, Time, Doctor’s Name, Location’s address, Location’s Phone number) under each past appointment
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4529
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should be able to see the appropriate error message when there are no past appointments
    Scenario Outline:  Verify whether the user should be able to see the appropriate error message when there are no past appointments.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to see the message You have no past appointments when there are no past appointments
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4530
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should able to see the past appointments without Internet connection
    Scenario Outline:  Verify whether the user should able to see the past appointments without Internet connection.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    When there is no internet connection available
    Then user should view appropriate error message
    
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4532
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen
    Scenario Outline:  Verify whether any error is displaying when we press F12 after user lands on Appointments screen.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    Then user should be able to view Past Appointments
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-4533
  @Authentication
  @P1
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-48_STORY_EPP-1607 - Verify whether the error message is displaying when the service is unavailable
    Scenario Outline:  Verify whether the error message is displaying when the service is unavailable.
    
    Given user launch the  Patient Portal url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on Login button
    Then user lands on to the Patient portal home page
    And user navigates to Appointments screen
    When user lands on Appointments screen
    When the service is unavailable
    Then error message '503 - Server is not ready to handle the request' should get display
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
