Feature: As a user, I should be able to view the "User Registration" screen and register myself to the patient portal.

    @BDDTEST-EPP-628
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen

Scenario Outline: Verify if user able to view the Registration screen
Given User clicks on the ‘Create Account’ CTA in “Patient Login” screen
When User lands onto “User Registration” screen
Then User should be able to view the following fields
And User should have the option to select either Email or Mobile or both as their preferred method of communication to receive email/ message alerts with links to reset password, magic link as well as in situations like Password is Reset, Account is locked etc.
And User should be able to view the ‘Register’ button
And User should be able to view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA
And User should be able to view the verbiage ”Already have an account? Login” where ‘Login’ is a CTA which when clicked will redirect the user to the ‘Patient Login’ screen
And User should be able to see the following error message if email-id provided was in incorrect format “Incorrect email format”
And User should be able to see the following error message if mobile number provided was in incorrect format “Incorrect mobile number format”
And User should be able to see the inline error message “Invalid date of birth” when the date of birth entered by the patient is invalid
And User should be prompted with the inline validation error message “This field is required” when all the required fields are not filled except for Email and Mobile Number field
And User should be prompted with the inline validation error message “Email ID or Mobile Number is required” when either the Email and/or Mobile number fields is not filled

Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|
  