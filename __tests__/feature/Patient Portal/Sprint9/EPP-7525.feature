Feature: Patient Portal: Admin – Activate CTA

  @BDDTEST-EPP-10454
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10455
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify User should be able to view the success message ‘Account of <Patient name> activated successfully’
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes option
    Then User should be able to view the success message ‘Account of <Patient name> activated successfully’

  @BDDTEST-EPP-10456
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify The account of the respective patient should be activated
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes option
    Then User should be able to view the success message ‘Account of <Patient name> activated successfully’
    And The account of the respective patient should be activated

  @BDDTEST-EPP-10457
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify The respective patient should receive the alert in preferred mode of communication
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes option
    Then User should be able to view the success message ‘Account of <Patient name> activated successfully’
    And The account of the respective patient should be activated 
    And The respective patient should receive the alert in preferred mode of communication

  @BDDTEST-EPP-10458
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify The account should not be activated
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options 
    When User selects on No option
    Then The account should not be activated

  @BDDTEST-EPP-10459
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7525- Verify User should be able to view only Activate CTA
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen
    And User searches for the patient 
    When User clicks on Activate CTA 
    Then User should be able to view the confirmation message “Are you sure to activate’ along with ‘Yes’ and ‘No’ options 
    When User selects on No option
    Then The account should not be activated
    And User should be able to view only Activate CTA
