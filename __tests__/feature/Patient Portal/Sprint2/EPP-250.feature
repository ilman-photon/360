Feature: As a user, I should be able to view the "User Registration" screen and register myself to the patient portal.

  @BDDTEST-EPP-628
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen

Scenario Outline: Verify if user able to view the Registration screen
Given user launch the 'XXX' url	
And user navigates to the Patient Portal application
When userr lands onto “Patient Login” screen
And user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button
When user clicks on the ‘Create an Account’ button
Then user lands onto “User Registration” screen 
And user should see "Register" button
And user should see the verbiage "By registering, you accept to our Terms & Conditions and Privacy Policy" below the "Register" CTA
And user should see verbiage ”Already have an account? with "Login" link
When user click on "Login" link
Then user should see the ‘Patient Login’ page

Examples:
|First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|
|XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|********|