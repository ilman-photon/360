
Feature: Patient Portal: Settings– Change username – email communication
  User Story: As a patient, I should be able to receive an email if my preferred mode of communication is email or both , when my username is updated

  @BDDTEST-EPP-10930
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7720- Verify User should be able to view the email below (Actual verbiage to be provided by ECP)
    Scenario: EPIC_EPP-36_STORY_EPP-7720- Verify User should be able to view the email below (Actual verbiage to be provided by ECP)

    Given User has logged into the patient portal 
    And User has navigated to Change username screen or User has navigated to Change password screen or User has navigated to Set-up/ Update security question screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes options
    Then User should redirected back to Profile screen
    And User has logged into email
    And User has set preferred mode of communication as email or both
    When User has received email for username change  
    Then User should be able to view the email below (Actual verbiage to be provided by ECP)
    |Email subject – EyeCare portal – User name updated|
    |Email body - |
    | Hi <First name>, |
    | You have successfully updated your username. |
    |  If you did not update the username, contact customer support.|
    |  Thanks, |
    |EyeCare Admin |
