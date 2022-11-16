@BDDSTORY-EPP-2517
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Error message displayed when there are no results for the searched location and date of appointment
  User Story: As a user, I should see an error message when there are no results for the searched location and selected date of appointment.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User select a location, date of appointment, purpose of visit and insurance carrier combination with no results

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen

  And

  System increases the radius and checks for providers with distance greater than 20 miles to display

  WHEN

  System is not able to display any providers for the combination even after increasing radius

  THEN

  User should be able to view the following error message “No appointment slots based upon your request. Please try again with a different combination.” 

  @BDDTEST-EPP-2815
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location and selected date of appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user increases the radius search locations
    And user search the providers with distance greater than 20 miles
    And application not displaying any providers 
    When user increasing radius distance greater than 20 miles
    Then user views the error message 'No appointment slots based upon your request. Please try again with a different combination.' 
    

  @BDDTEST-EPP-2816
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2517 - Verify user should not see an error message when with distance less than 20 miles for the searched location and selected date of appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user increases the radius search locations
    And user search the providers with distance less than 20 miles
    And user views the search results
    
    

  @BDDTEST-EPP-2817
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location 25 miles distance of providers locations and selected date of appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user increases the radius search locations
    And user searched location 25 miles distance of providers locations 
    And application not displaying any providers 
    When user increasing distance 25 miles
    Then user views the error message 'No appointment slots based upon your request. Please try again with a different combination.' 
    
    

  @BDDTEST-EPP-2818
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when user entered the invalid location and there are no results for the searched location and selected date of appointment.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user entered the invalid locations to search
    Then user views the error message 'No appointment slots based upon your request. Please try again with a different combination.' 
    
    
