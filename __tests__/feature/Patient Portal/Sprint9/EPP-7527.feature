Feature: Patient Portal: Admin – Account activation SMS communication

  @BDDTEST-EPP-10472
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7527- Verify User should be able to receive a text for account activation notification
    Given User has logged into SMS app
    And User has set preferred mode of communication as SMS or both
    When User has received SMS for account activation notification
    Then User should be able to view the email below  (Actual verbiage to be provided by ECP)
    |SMS Body - |
    |Hi <First name>,|
    |Welcome to EyeCare portal.|
    |We are happy to inform you that your account has been activated.|
    |Please login to EyeCare portal <Login Link> to schedule appointments|
    |If you did not request the account activation, please contact customer support.|
    |Thanks,|
    |EyeCare Admin|
