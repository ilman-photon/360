
Feature: Patient Portal: Settings– Setup/update security questions – Update CTA
  USER STORY: As a user, I should be able to submit the updated security questions & answers  

  @BDDTEST-EPP-10914
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10915
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to view the success message ‘Security question updated  successfully’ if ‘yes’ is selected during confirmation

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects Yes option
    Then User should be able to view the success message ‘Security question updated  successfully’

  @BDDTEST-EPP-10916
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify User should be navigated to Set security questions& answers screen when User selects No option

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects No option
    Then User should be navigated to Set security questions& answers screen

  @BDDTEST-EPP-10917
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify User should be able to see the security question & answers of the respective patient is updated

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects Yes option
    Then User should be able to view the success message ‘Security question updated  successfully’
    And User should be able to see the security question & answers of the respective patient is updated
    And User should be redirected to Profile screen

  @BDDTEST-EPP-10918
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify User should be redirected to Profile screen

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects Yes option
    Then User should be able to view the success message ‘Security question updated  successfully’
    And User should be able to see the security question & answers of the respective patient is updated
    And User should be redirected to Profile screen

  @BDDTEST-EPP-10919
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify The respective patient should receive the alert in preferred mode of communication

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects Yes option
    Then User should be able to view the success message ‘Security question updated  successfully’
    And User should be able to see the security question & answers of the respective patient is updated
    And User should be redirected to Profile screen 
    And The respective patient should receive the alert in preferred mode of communication

  @BDDTEST-EPP-10920
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9330- Verify The Security question should not get updated if No is selected during confirmation

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And User should be able to answer the new question
    When User clicks on Update CTA 
    Then User should be able to view the confirmation message “Are you sure to update security question’ along with ‘Yes’ and ‘No’ options 
    When User selects No option
    Then User should be navigated to Set security questions& answers screen
    And The Security question should not get updated if No is selected during confirmation
