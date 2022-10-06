Feature: Patient Portal : Schedule appointment from Patient Portal  - Error message displayed when there are no results for the searched location and date of appointment
  User Story: As a user, I should see a error messages if there are no results for the searched location and selected date of appointment from patient portal.


  @BDDTEST-EPP-3310
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display

  @BDDTEST-EPP-3311
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should not see any providers for the combination even after increasing radius
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius

  @BDDTEST-EPP-3312
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius
    And User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."

  @BDDTEST-EPP-3313
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - within "3 seconds"
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius
    And User should see page load within "3 seconds"
    And User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."

  @BDDTEST-EPP-3314
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - Without error script when user clicks on F12 on the console
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius
    And User should see page load within "3 seconds"
    And User should see the following error message "No appointment slots based upon your request. Please try again with a different combination." 
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-3315
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the Internet service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius
    Then The Internet service is unavailable
    And User should see the appropriate error message

  @BDDTEST-EPP-3316
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the service is unavailable user should see the following error message
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location (with no result)
    And User should see the selected date (with no result)
    And User should see the purpose of visit (with no result)
    And And User should see the insurance carrier (with no result)
    And User should see the increases of radius and checks for providers with distance greater than 20 miles to display
    And User should not see any providers for the combination even after increasing radius
    Then The service is unavailable
    And User should see the appropriate error message
