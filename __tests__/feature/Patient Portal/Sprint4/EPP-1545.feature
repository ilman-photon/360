Feature: Patient Portal : Schedule Appointment from marketing site - Error messages displayed when search criteria is not valid
  
  @BDDTEST-EPP-2794
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-1545- Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect Zipcode.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the incorrect Zipcode
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.

  @BDDTEST-EPP-2796
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  @included
  Scenario: EPIC_EPP-44_STORY_EPP-1545- Verify whether the error message No results found. Please try again with a different search criteria. is displaying if search for the incorrect State name.
    
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And enter the incorrect State name
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.
