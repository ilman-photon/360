Feature: Patient Portal: Admin – Account unlock email communication

  @BDDTEST-EPP-10151
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7520- Verify User should be able to receive an email for unlock notification
    Scenario: EPIC_EPP-30_STORY_EPP-7520- Verify User should be able to receive an email for unlock notification

    Given User has logged into email app
    And User has set preferred mode of communication as Email or both
    When User has received email for unlock notification  
    Then User should be able to view the email below (Actual verbiage to be provided by ECP)
    |Email subject – EyeCare portal – Account unlocked|
    |Email body - |
    |Hi <First name>,| 
    |We are happy to inform you that your account has been unlocked.|
    |Please login to EyeCare portal <Login Link> to schedule appointments|
    |If you did not request the account unlock, contact customer support. |
    |Thanks,| 
    |EyeCare Admin|
