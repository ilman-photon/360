Feature: Patient Portal: Admin – Account unlock SMS communication

  @BDDTEST-EPP-10152
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7521- Verify User should be able to receive a text for unlock notification
    Scenario: EPIC_EPP-30_STORY_EPP-7521- Verify User should be able to receive a text for unlock notification

    Given User has logged into SMS app
    And User has set preferred mode of communication as SMS or both
    When User has received SMS for unlock notification
    Then User should be able to view the SMS below (Actual verbiage to be provided by ECP)
    |SMS body - |
    |We are happy to inform you that your account has been unlocked.|
    |Please login to EyeCare portal <Login Link> to schedule appointments| 
    |If you did not request the account unlock, contact customer support. |
     |Thanks, |
    |EyeCare Admin|
