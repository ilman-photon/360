Feature: Patient Portal : Schedule Appointment from marketing site - Select purpose of visit
  User Story: As a user, I should be able to select the purpose of visit for the appointment to be scheduled.
    
  @BDDTEST-EPP-2826
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view   click 'Schedule your Eye Exam' CTA from Marketing site
    Scenario: Verify if user clicks 'Schedule your Eye Exam' CTA from Marketing site
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then User lands on to the screen
    And user view and search  the location
    When user view  the date of appointment 
    And user view the purpose of visit dropdown field
    Then user view  Insurance field
    Examples:
    |Location|Date|Purpose of Visit|Insurance|
    |NewYork|17-August-2022|Eye exam|Aetna|

  @BDDTEST-EPP-2827
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to select the ‘Purpose of Visit’
    Scenario: Verify if user able to select the ‘Purpose of Visit’
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then User lands on to the screen
    And user view and search  the location
    When user select  the date of appointment 
    And user view the" Purpose of visit"
    Then user select the Purpose of Visit in dropdown field
    
    Examples:
    |Purpose of Visit|
    |Eye exam|

  @BDDTEST-EPP-2828
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view optional label under ‘Purpose of Visit’field
    Scenario: Verify if user able to select the ‘Purpose of Visit’which is a optional field
    Given user launch the "Marketing Site" url		
    When user clicks on the “Schedule your Eye Exam” button
    Then User lands on to the screen
    And user view and search  the location
    When user select  the date of appointment 
    And user view the purpose of visit field 
    Then user able to select the "Purpose of Visit"
    And user view optional label under ‘Purpose of Visit’field
    
    Examples:
    |Purpose of Visit|
    |Eye exam|

