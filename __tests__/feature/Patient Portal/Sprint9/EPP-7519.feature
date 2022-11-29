Feature: Patient Portal: Admin – Unlock CTA


  @BDDTEST-EPP-10146
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options
    Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    And User lands on the view locked accounts screen 
    When User clicks on Unlock CTA 
    Then User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10147
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the success message "Account of <Patient name> unlocked successfully"
    Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the success message "Account of <Patient name> unlocked successfully"

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    And User lands on the view locked accounts screen 
    When User clicks on Unlock CTA 
    Then User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options
    When User clicks on Yes option
    Then User should be able to view the success message "Account of <Patient name> unlocked successfully"

  @BDDTEST-EPP-10148
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account of the respective patient should be unlocked
    Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account of the respective patient should be unlocked

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    And User lands on the view locked accounts screen 
    When User clicks on Unlock CTA 
    Then User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options
    When User clicks on Yes option
    Then User should be able to view the success message "Account of <Patient name> unlocked successfully"
    And User should be able to see the account of the respective patient should be unlocked

  @BDDTEST-EPP-10149
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify the respective patient should receive the alert in preferred mode of communication
    Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify the respective patient should receive the alert in preferred mode of communication 

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    And User lands on the view locked accounts screen 
    When User clicks on Unlock CTA 
    Then User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options
    When User clicks on Yes option
    Then User should be able to view the success message "Account of <Patient name> unlocked successfully"
    And User should be able to see the account of the respective patient should be unlocked
    And The respective patient should receive the alert in preferred mode of communication

  @BDDTEST-EPP-10150
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account should not be unlocked if No is selected during confirmation
    Scenario: EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account should not be unlocked if No is selected during confirmation 

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    And User lands on the view locked accounts screen 
    When User clicks on Unlock CTA 
    Then User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options
    When User clicks on No option
    Then User should be able to see the account should not be unlocked if No is selected during confirmation
