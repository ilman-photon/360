
Feature: Patient Portal : Cancel Refill Request - Cancel a prescription refill
  User Story: As a user, I should be able to cancel a refill by clicking on the option to cancel the refill

  @BDDTEST-EPP-4767
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-19_STORY_EPP-2710 - Verify User should be able to click the option to cancel refill against a prescription
    Scenario: EPIC_EPP-19_STORY_EPP-2710 - Verify User should be able to click the option to cancel refill against a prescription

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
    When User clicks on the option to cancel refill against a prescription
    Then User should see the following message that the System sends out a cancellation of refill request to Provider portal

  @BDDTEST-EPP-4769
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should see the following message that the System sends out a cancellation of refill request to Provider portal
    Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should see the following message that the System sends out a cancellation of refill request to Provider portal

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
    When User clicks on the option to cancel refill against a prescription
    Then User should see the following message that the System sends out a cancellation of refill request to Provider portal

  @BDDTEST-EPP-4770
  @P2
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to see an option to request for refill when refill request has been cancelled
    Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to see an option to request for refill when refill request has been cancelled

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
    When User clicks on the option to cancel refill against a prescription
    Then User should see the following message that the System sends out a cancellation of refill request to Provider portal
    And User should be able to see an option to request for refill when refill request has been cancelled

  @BDDTEST-EPP-4771
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive an email communication based on their registered email-id
    Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive an email communication based on their registered email-id

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
    When User clicks on the option to cancel refill against a prescription
    Then User should see the following message that the System sends out a cancellation of refill request to Provider portal
    And User should be able to see an option to request for refill when refill request has been cancelled
    And User should be able to receive an email communication based on their registered email-id

  @BDDTEST-EPP-4772
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive a text communication based on their registered phone number
    Scenario: EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive a text communication based on their registered phone number

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
    When User clicks on the option to cancel refill against a prescription
    Then User should see the following message that the System sends out a cancellation of refill request to Provider portal
    And User should be able to see an option to request for refill when refill request has been cancelled
    And User should be able to receive a text communication based on their registered phone number
