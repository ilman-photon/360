Feature: Patient Portal : Schedule appointment from Patient Portal  - Select/ Update Insurance carrier in Schedule appointment screen
  User Story: As a user, I should be able to select/ update the insurance carrier in schedule appointment screen from patient portal.



  @BDDTEST-EPP-3290
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data
    And try to update the Insurance carrier if already provided
    Then user should allow to update the Insurance carrier.

  @BDDTEST-EPP-3291
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit.
    And try to add the Insurance carrier
    Then user should allow to add the Insurance carrier.

  @BDDTEST-EPP-3292
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2541-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on Appointments menu
    Then User should navigated to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on the Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data
    And try to update the Insurance carrier, which is not supported.
    Then already selected  Location, Date of Appointment, Purpose of visit should get removed.
