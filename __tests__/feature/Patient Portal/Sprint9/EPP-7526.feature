Feature: Patient Portal: Admin – Account activation email communication

  @BDDTEST-EPP-10471
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7526- Verify User should be able to receive an email for account activation notification
    Given User has logged into email 
    And User has set preferred mode of communication as Email or both
    When User has received email for account activation notification 
    Then User should be able to view the email below  (Actual verbiage to be provided by ECP)
    |Email subject – EyeCare portal – Account activation|
    |Email  body - |
    |Hi <First name>|
    |Welcome to EyeCare portal.|
    |We are happy to inform you that your account has been activated.|
    |Please login to EyeCare portal <Login Link> to schedule appointments|
    |If you did not request the account activation, please contact customer support.|
    |Thanks,|
    |EyeCare Admin|
