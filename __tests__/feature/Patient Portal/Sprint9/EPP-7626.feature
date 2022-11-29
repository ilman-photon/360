Feature: Patient Portal : Share My Record/ Prescription/ Care plan - History of health record/ prescription/ care plan document navigation

  @BDDTEST-EPP-10130
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7626- Verify User should be able to view the history for the record shared with the following details
    EPIC_EPP-42_STORY_EPP-7626- Verify User should be able to view the history for the record shared with the following details

    Given User has logged into the patient portal 
    And User launch Patient Portal url
    And User lands on the dashboard screen
    And User views the ‘History of Shared Patient Records' sub-menu under the ‘’ menu present as part of the global header
    When User clicks on the ‘History of Shared Patient Records'  option
    Then User lands on the screen to view the History of Shared Patient Records
    And User should be able to view the history for the record shared with the following details 
    |Date (The date the record/ prescription was shared)|
    |Item Shared (If medical record, display as medical record. If prescription, list those prescriptions that have been shared)|
    |Shared with (Recipient’s Direct Messaging Address or Email address or Phone number)|
    |Delivery Status (Delivered, Pending & Failed) - Based on Tech team feasibility|
