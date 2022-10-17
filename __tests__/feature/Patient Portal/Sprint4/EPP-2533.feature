Feature: Patient Portal : Schedule appointment from Patient Portal  - Provide Insurance career
  User Story: As a user, I should be able to provide my insurance career for the appointment to be scheduled from patient portal.

  
  @BDDTEST-EPP-4756
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view  the Insurance field
    Scenario: Verify if user able to view the Insurance field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then User lands on to the screen
    And user view and search  the location
    When user select  the date of appointment 
    And user view the purpose of visit
    And user view the insurance
    Examples:
    |Insurance|
    |Aetna|

  @BDDTEST-EPP-4757
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to select Insurance Carriers from the Insurance field
    Given user launch the "Marketing Site" url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field
    And user select the Insurance carriers from the search field
    Then user should see insurance carriers selected from field
    Examples:
    |Insurance|
    |Aetna|

  @BDDTEST-EPP-4758
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view a (Optional) label under Insurance field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field 
    Then user should see (Optional) label under Insurance field
    Examples:
    |Insurance|
    |Aetna|

  @BDDTEST-EPP-4759
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view a Other Insurance option in the Insurance search field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field 
    And user select the Insurance carriers from the search field
    Then user should see Other insurance option from field
    
    Examples:
    |Insurance|
    |Other Insurance|

  @BDDTEST-EPP-4760
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to provide Other Insurance option in the Insurance search field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field 
    And user select the Insurance carriers from the search field
    Then user should see Other insurance option from field
    When user provide insurance carrier details by selecting Other insurance
    Then user should see details updated in the field. 
    
    Examples:
    |Insurance|
    |AIG|

  @BDDTEST-EPP-4761
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(I'm paying out of pocket) in the Insurance search field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field 
    And user select the Insurance carriers from the search field
    Then user should see (I'm paying out of pocket) insurance option from field
    And user select (I'm paying out of pocket) in the insurance field
    
    
    Examples:
    |Insurance|
    ||

  @BDDTEST-EPP-4762
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(Skip and choose insurance later) in the Insurance search field
    Given user launch the Patient portal URL		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user navigates to Insurance field 
    And user select the Insurance carriers from the search field
    Then user should see (Skip and choose insurance later)  insurance option from field
    And user should select (Skip and choose insurance later) in the insurance field
    
    
    Examples:
    |Insurance|
    ||