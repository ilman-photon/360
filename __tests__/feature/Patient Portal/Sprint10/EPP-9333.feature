
Feature: Patient Portal: Settings– Setup/update security questions – SMS communication
  User Story: As a patient, I should be able to receive an SMS if my preferred mode of communication is SMS or both when my security questions or answers are updated 

  @BDDTEST-EPP-10924
  @Admin
  @P2
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9333- Verify User should be able to view the SMS below (Actual verbiage to be provided by ECP)
    Scenario: EPIC_EPP-38_STORY_EPP-9333- Verify User should be able to view the SMS below (Actual verbiage to be provided by ECP)

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
    And User has logged into email  
    And User has set preferred mode of communication as SMS or both
    And User has received email for security questions or answers update
    And User should be able to view the email below (Actual verbiage to be provided by ECP) 
    |SMS body -  |
    |You have successfully updated your security question.  |
    | If you did not update your security question, contact customer support  |
    | Thanks,  |
    |EyeCare Admin |
