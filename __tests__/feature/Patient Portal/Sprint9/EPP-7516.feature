Feature: Patient Portal: Admin – View locked accounts

  @BDDTEST-EPP-10139
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7516- Verify admin should be able to view the list of all locked accounts of patients along with details
    Scenario: EPIC_EPP-30_STORY_EPP-7522- Verify admin should be able to view the list of all locked accounts of patients along with details

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads

  @BDDTEST-EPP-10140
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7522- Verify admin should not be able to view mode of communication option email if the email is not available in the patient information
    EPIC_EPP-30_STORY_EPP-7522- Verify admin should not be able to view mode of communication option email if the email is not available in the patient information 

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads
    And admin should not be able to view mode of communication option email if the email is not available in the patient information

  @BDDTEST-EPP-10141
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7522- Verify admin should not be able to view mode of communication option phone if the phone number is not available in the patient information
    EPIC_EPP-30_STORY_EPP-7522- Verify admin should not be able to view mode of communication option phone if the phone number is not available in the patient information 

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads
    And admin should not be able to view mode of communication option phone if the phone number is not available in the patient information

  @BDDTEST-EPP-10142
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7522- Verify admin should be able to view the confirmation message “Are you sure to send reset password link’ along with ‘Yes’ and ‘No’ options when mode of communication is selected
    EPIC_EPP-30_STORY_EPP-7522- Verify admin should be able to view the confirmation message “Are you sure to send reset password link’ along with ‘Yes’ and ‘No’ options when mode of communication is selected 

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads
    When admin click on options when mode of communication
    Then admin should be able to view the confirmation message “Are you sure to send reset password link’ along with ‘Yes’ and ‘No’ options when mode of communication is selected

  @BDDTEST-EPP-10143
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7522- Verify admin should be able to view the success message ‘Password reset link sent to <Patient name> successfully’ if ‘yes’ is selected during confirmation
    EPIC_EPP-30_STORY_EPP-7522- Verify admin should be able to view the success message ‘Password reset link sent to <Patient name> successfully’ if ‘yes’ is selected during confirmation 

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads
    When admin click on options when mode of communication
    Then admin should be able to view the confirmation message “Are you sure to send reset password link’ along with ‘Yes’ and ‘No’ options when mode of communication is selected 
    When admin click on 'Yes' options
    Then admin should be able to view the success message ‘Password reset link sent to <Patient name> successfully’ if ‘yes’ is selected during confirmation

  @BDDTEST-EPP-10145
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7522- Verify the respective patient should not receive the message with the password reset link if No is selected during confirmation
    EPIC_EPP-30_STORY_EPP-7522- Verify the respective patient should not receive the message with the password reset link if No is selected during confirmation 

    Given User has logged into the patient portal 	
    And User is logged in as admin
    And admin lands on the Recover username/reset password screen 
    And admin searches for the patient
    When admin clicks on Send password reset link CTA
    Then admin should be able to view option to select mode of communication - Email or Phone or both
    And admin should be able to view the preferred mode of communication as selected by the patient 
    And admin should be able to view the preferred mode of communication selected by the patient, preselected when the page loads
    When admin click on options when mode of communication
    Then admin should be able to view the confirmation message “Are you sure to send reset password link’ along with ‘Yes’ and ‘No’ options when mode of communication is selected 
    When admin click on 'No' options
    And the respective patient should not receive the message with the password reset link if No is selected during confirmation
