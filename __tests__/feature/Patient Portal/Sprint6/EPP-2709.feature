
Feature: Patient Portal : Cancel Refill Request - View
  User Story: As a user, I should be able to view the option to cancel the refill requested against prescriptions 

  @BDDTEST-EPP-4766
  @P2
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-19_STORY_EPP-2709 - Verify User should be able to see the option to cancel the requested refill

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the "Schedule" option
    When User selects the "Schedule" option
    Then User should navigated to "Schedule Appointment" screen
    And User should see on "Schedule Appointment" button
    When User clicks on "Schedule Appointment" button
    Then User should navigated to " View schedule appointment" screen
    And User should see the widget with prescriptions
    When User clicks on the widget with prescriptions
    Then User should navigated to "prescriptions" screen
    And User should be able to view the list of prescriptions with the details as below:
    |Prescription Type (e.g. Glasses)|
    |Prescribed on|
    |Expires on|
    |Prescribed by|
    |Eye - Sph - Cyl - Axis - Add (With values under them - refer attached screenshot)|
    And User should be able to view options to filter the prescriptions with details as below:
    |Refill status|
    |Provider|
    |Prescription Type (Glass, lens, medications)|
    |Expiry date|
    And User should be able to view an option to clear those filters when applied
    And User should be able to view option to cancel refill for those requested prescriptions
