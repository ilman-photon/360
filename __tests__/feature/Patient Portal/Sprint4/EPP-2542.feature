Feature: Patient Portal : Schedule appointment from Patient Portal  - View provider's available time slots for a week
  User Story: As a user, I should be able to view the list of time slots a provider is available for a week from patient portal.


  @BDDTEST-EPP-3293
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should see all the doctors availability details.

  @BDDTEST-EPP-3294
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor's name with image
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should display the Doctor's name with Image.

  @BDDTEST-EPP-3295
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    Then user should see the time slots of each doctor for whole week in day wise

  @BDDTEST-EPP-3296
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2542-Verify whether the user is able to select the available time slot and schedule the appointment.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    Then user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    When user click the View all availability button
    And user should select any available time slot.
    Then user should able to schedule the appointment.
