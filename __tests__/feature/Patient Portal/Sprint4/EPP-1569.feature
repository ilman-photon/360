Feature: User Story: As a user, I should be able to view the screen with different options to sync appointment to my account when the appointment is scheduled for myself

  @BDDTEST-EPP-3407
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying if the user select the Myself in Provide Information page.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    Then user should see the below mentioned fields
    |Login
    |Create an Account
    |Forgot password

  @BDDTEST-EPP-3408
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Continue as a Guest option is displaying after user select the Myself option
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    Then user should see the Continue as Guest button.

  @BDDTEST-EPP-3409
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is displaying the Mandatory error message.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And without entering the First name, click the Continue
    Then it should display the error message This field is required.

  @BDDTEST-EPP-3410
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the numbers
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And enter the First name with numbers, click the Continue
    Then Guest user should see the error message Invalid Format.

  @BDDTEST-EPP-3411
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the Special characters


  @BDDTEST-EPP-3412
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 1 character length.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name with 1 character, click the Continue
    Then Guest user should see the appropriate error message.

  @BDDTEST-EPP-3413
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 51 characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name with 51 characters, click the Continue
    Then Guest user should see the appropriate error message.

  @BDDTEST-EPP-3414
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 2 characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name with valid 2 characters, click the Continue
    Then Guest user should not see any error message for First name

  @BDDTEST-EPP-3415
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 50 characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name with valid 50 characters, click the Continue
    Then Guest user should not see any error message for First name

  @BDDTEST-EPP-3416
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is displaying the Mandatory error message.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And without entering the Last name, click the Continue
    Then it should display the error message This field is required.

  @BDDTEST-EPP-3417
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the numbers
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the Last name with numbers, click the Continue
    Then Guest user should see the error message Invalid Format.

  @BDDTEST-EPP-3418
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the Special characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the Last name with Special characters, click the Continue
    Then Guest user should see the error message Invalid Format.

  @BDDTEST-EPP-3419
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 1 character
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the Last name with 1 character, click the Continue
    Then Guest user should see the appropriate error message.

  @BDDTEST-EPP-3420
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 51 characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the Last name with 51 characters, click the Continue.
    Then Guest user should see the appropriate error message.

  @BDDTEST-EPP-3421
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: VEPIC_EPP-44_STORY_EPP-1569-erify whether the Last name is allowing the valid 2 characters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the Last name with valid Minimum 2 characters length, click the Continue.
    Then Guest user should not see any error message for Last name

  @BDDTEST-EPP-3422
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is allowing the valid 50 characters length


  @BDDTEST-EPP-3423
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of Birth is displaying the Mandatory error message.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And without entering the Date of birth, click the Continue
    Then it should display the error message This field is required.

  @BDDTEST-EPP-3424
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Invalid date of birth is displaying for invalid Date of birth DD/MM/YYYY
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name
    And enter the invalid Date of Birth.
    And click Continue button. 
    Then Guest user should see the error message Invalid date of birth

  @BDDTEST-EPP-3425
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is displaying as per the given date format MM/DD/YYYY.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name
    And enter the invalid Date of Birth format.
    And click Continue button. 
    Then Guest user should see the correct Date of Birth format.

  @BDDTEST-EPP-3426
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the future date is not allowing in the Date of Birth field.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the future Date of birth.
    And click Continue button. 
    Then user should see the appropriate error message.

  @BDDTEST-EPP-3427
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing more than Maximum age limit.(Need to confirm)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the Date of birth more than maximum age limit.
    And click Continue button. 
    Then user should see the appropriate error message.

  @BDDTEST-EPP-3428
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing less than Minimum age limit.(Need to confirm)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the Date of birth less than minimum age limit.
    And click Continue button. 
    Then user should see the appropriate error message.

  @BDDTEST-EPP-3429
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is accepting valid Date of Birth
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And click Continue button. 
    Then Guest user should not see any error message for Date of birth.

  @BDDTEST-EPP-3430
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email and Mobile number fields are asking for mandatory when both Email and Mobile number is left as blank.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And without entering the Email and Mobile number
    And click Continue button. 
    Then error message Email ID or Mobile number is required should display for both Email & Mobile number fields.

  @BDDTEST-EPP-3431
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Email when Mobile number is filled.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And without entering the Email and enter the Mobile number
    And click Continue button.
    Then error message should not display for Email field.

  @BDDTEST-EPP-3432
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Mobile number when Email is filled.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And without entering the Mobile number and enter the Email
    And click Continue button.
    Then error message should not display for Mobile number field.

  @BDDTEST-EPP-3433
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit +1 (Need to confirm)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email ID
    And enter the Mobile number (Max+1 digit)
    And click the Continue button.
    Then it should display the appropriate error message.

  @BDDTEST-EPP-3434
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit -1 (Need to confirm)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email ID
    And enter the Mobile number (Max-1 digit)
    And click the Continue button.
    Then it should not display the error message for mobile

  @BDDTEST-EPP-3435
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is allowing the Maximum limit (Need to confirm)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email ID
    And enter the Mobile number (Max digit)
    And click the Continue button.
    Then it should not display the error message for mobile

  @BDDTEST-EPP-3436
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the many special characters inbetween the Mobile number.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email ID
    And enter many special characters inbetween Mobile number
    And click the Continue button.
    Then it should display the error message Incorrect mobile number

  @BDDTEST-EPP-3437
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the Alphabets inbetween the Mobile number.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email ID
    And enter the alphabet inbetween Mobile number
    And click the Continue button.
    Then it should display the error message Incorrect mobile number

  @BDDTEST-EPP-3438
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Preferred mode of communication Both is selected as default.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    Then verify whether the Preferred mode of communication is selected Both as default.

  @BDDTEST-EPP-3439
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email field is asking for mandatory when user select the Preferred mode of communication = Email.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication = Email
    And click the Continue button.
    Then Email should ask for the mandatory.

  @BDDTEST-EPP-3440
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number field is asking for mandatory when user select the Preferred mode of communication = Phone.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication = Phone
    And click the Continue button.
    Then Mobile number should ask for the mandatory.

  @BDDTEST-EPP-3441
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is asking for mandatory, when user enters the Email ID and set the preferred mode = Email for the first time and change the Preferred mode of communication =Phone
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email
    And without entering the Mobile number
    And select the Preferred mode of communication = Email
    And change the Preferred mode of communication = Phone
    And click the Continue button.
    Then mandatory error message should display for the Mobile number field.

  @BDDTEST-EPP-3442
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is asking for mandatory, when user enters the Mobile number and set the preferred mode = Phone for the first time and change the Preferred mode of communication =Email
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email
    And without entering the Mobile number
    And select the Preferred mode of communication = Email
    And change the Preferred mode of communication = Phone
    And click the Continue button.
    Then mandatory error message should display for the Mobile number field.

  @BDDTEST-EPP-3443
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is receiving properly, when Preferred mode of communication is selected as Email
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Email
    And select the Preferred mode of communication = Email
    And click the Continue button.
    Then Email should trigger to the email.(Need to confirm)

  @BDDTEST-EPP-3444
  @Appointments
  @Automation
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Message alert is receiving properly, when Preferred mode of communication is selected as Phone
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication = Phone
    And click the Continue button.
    Then Message should trigger to the Mobile number.(Need to confirm)

  @BDDTEST-EPP-3445
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the back buton is navigating to back
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication = Email
    And click the Continue button.
    And click the back button.
    Then user should navigate to previous page.

  @BDDTEST-EPP-3486
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying in the Guest user basic details page after choosing the Myself option.
    EPIC_EPP-44_STORY_EPP-1569-Verify whether the below-mentioned fields are displaying in the Guest user basic details page after choosing the Myself option.

    |First name

    |Last name

    |Date of Birth

    |Email

    |Mobile number

    |Preferred mode of communication

    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    Then user should see the fields such as First name, Last name, Date of birth, Email, Mobile number, Preferred mode of communication

  @BDDTEST-EPP-3487
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the Progress bar is displaying for the stages of Appointment
    EPIC_EPP-44_STORY_EPP-1569-Verify whether the Progress bar is displaying for the stages of the Appointment

    |Location

    |Review

    |Appointment details

    |Contact Info

    |Confirm

    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication = Phone
    And click the Continue button.
    Then user should see the Progress bar with Location,  Review, Appointment details, Contact Info, Confirm

  @BDDTEST-EPP-3488
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1569-Verify whether the user is able to view the following details along with option to update them.
    EPIC_EPP-44_STORY_EPP-1569-Verify whether the user is able to view the following details along with option to update them.

    |Location with provider

    |Date and Time

    |Insurance Carrier

    |Purpose of Visit

    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the Mobile number
    And select the Preferred mode of communication =Email
    And click the Continue button.
    Then user is able to edit the Location, Date and Time, Insurance carrier, Purpose of visit.

  @BDDTEST-EPP-3490
  @Appointments
  @Automation
  @P2
  @Patient_Portal
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Incorrect email format is displaying for the below mentioned Invaild Email IDs
    EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Incorrect email format is displaying for the below-mentioned Invalid Email IDs

    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user select the Purpose of Visit, Location and Date & Time with provider.
    And user review the appointments.
    And select the Appointment for Myself.
    And click the Continue as a Guest button.
    And Guest user should see the Guest Access screen.
    And enter the First name, Last name.
    And enter the valid Date of birth
    And enter the mentioned Email ID
    And click Continue button.
    Then error message Incorrect email format should get displayed.

    Examples:
      |xxx yyyy@gmail.com
      | xxxyyyygmail.com
      | xxx@yyyy@gmail.com
      | @gmail.com
      | xxxxxxxxxxx@.com
      | xxxxxxxxx@gmail
      | xxxxxxxxx@gmailcom
      | ..xxxxxxxxx@gmail.com
      | xxxxx..xxxx@gmail.com
      | xxxxxxxxx..@gmail.com
      | xxxxxxxxx@gmail..com
      | xxxx%^&%%&^xxxxx@gmail.com
      | .xxxxxxxxx@gmail.com
      | xxxxxxxxx@gmail.com.
      | $^^&%&GG*&^*(*kslajkjla&()(
