@BDDSTORY-EPP-1572
@Appointments
@P5
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - View Continue as a Guest screen
  User Story: As a user, I should be able to view "Continue as a Guest" screen.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And 

  User has selected the Purpose of Visit, Location and Date & Time with provider

  And

  User selects that the appointment is for Self

  And

  User lands on the screen with different option to sync the appointment as in  

  WHEN

  User selects ‘Continue as a Guest’ option

  THEN

  User lands on page to provide basic details

  And

  User should be able to view the following fields

  | Field Names                        | Mandatory                       | Character Limit                                                       |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | First Name                         | Yes                             | Max - 50; Min - 2                                                     |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | Last Name                          | Yes                             | Max - 50; Min - 2                                                     |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | Date Of Birth                      | Yes                             | MM/DD/YYYY                                                            |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | Email                              | No, if mobile number is entered | abc@mail.com - Format                                                 |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | Mobile Number                      | No, if email is entered         | (XXX)-XXX-XXXX - Format                                               |
  |------------------------------------|---------------------------------|-----------------------------------------------------------------------|
  | Preferred mode(s) of communication | Yes                             | The preferred mode of communication options will be radio buttons.    |
  |                                    |                                 | Default Preferred mode of communication should be ‘Both’, preselected |
  |                                    |                                 | At the end of filling above fields,                                   |
  |                                    |                                 |                                                                       |

  And

  User should be able to see the option to submit the same

  And

  User should be prompted with the inline validation error message “This field is required” when all the required fields are not filled except for Email and Mobile Number field

  And

  User should be prompted with the inline validation error message “Email ID or Mobile Number is required” when either the Email and/or Mobile number fields is not filled 

  And

  User should be able to view error messages as in  

  And 

  User should be able to view the same message as in  if the user already has an account

  @BDDTEST-EPP-3238
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view and select continue as guest option


  @BDDTEST-EPP-3239
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to navigate to basic detail page after select Continue as a Guest


  @BDDTEST-EPP-3240
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view basic details fields


  @BDDTEST-EPP-3241
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view First Name, Last Name, Date of Birth, Preferred mode(s) of communication as mandatory field


  @BDDTEST-EPP-3242
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in First Name field


  @BDDTEST-EPP-3243
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in Last Name field


  @BDDTEST-EPP-3244
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter Date of Birth in MM/DD/YYYY format


  @BDDTEST-EPP-3245
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter email id with correct format in Email field


  @BDDTEST-EPP-3246
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to Mobile number with correct format in Mobile number field


  @BDDTEST-EPP-3247
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to see either Email or Mobile number field mandatory if both field leaves blank


  @BDDTEST-EPP-3248
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see error message when mandatory field leaves blank


  @BDDTEST-EPP-3249
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see submit option after enter all details in the field


  @BDDTEST-EPP-3250
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view the field Preferred mode of communication preselected with option Both


  @BDDTEST-EPP-3251
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change Preferred mode of communication to Mobile Number or Both when Email is provided


  @BDDTEST-EPP-3252
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided


  @BDDTEST-EPP-3253
  @Appointments
  @P5
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to 'Email' or 'Mobile number' when Both Mobile number & Email provided

