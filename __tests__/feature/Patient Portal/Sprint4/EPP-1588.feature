Feature: Patient Portal : Schedule appointment from Patient Portal - Error messages displayed when search criteria is not valid

  @BDDTEST-EPP-3133
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect city name
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And enter the incorrect city name
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.

  @BDDTEST-EPP-3134
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect zip code
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And enter the incorrect Zipcode
    And click on Search
    Then user should see the error message No results found. Please try again with a different search criteria.

  @BDDTEST-EPP-3135
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect state name
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    And enter the incorrect State name
    And click on Search
    Then the user should see the error message No results found. Please try again with a different search criteria.
