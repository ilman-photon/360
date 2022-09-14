@BDDSTORY-EPP-1563
@Appointments
@P2
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'someone else' - View Basic Information
  User Story: As a user, I should be able to view the screen where I provide the basic details when scheduling appointment for someone else.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance & searches

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  And

  User lands on the screen to select who the appointment is for

  WHEN

  User selects ‘Someone Else’ option

  THEN

  User should be able to view the following fields

  | Field Names                        | Mandatory                       | Character Limit             |
  |------------------------------------|---------------------------------|-----------------------------|
  | First Name                         | Yes                             | Max - 50; Min - 2           |
  |------------------------------------|---------------------------------|-----------------------------|
  | Last Name                          | Yes                             | Max - 50; Min - 2           |
  |------------------------------------|---------------------------------|-----------------------------|
  | Date Of Birth                      | Yes                             | MM/DD/YYYY                  |
  |------------------------------------|---------------------------------|-----------------------------|
  | Email                              | No, if mobile number is entered | abc@mail.com - Format       |
  |------------------------------------|---------------------------------|-----------------------------|
  | Mobile Number                      | No, if email is entered         | (XXX)-XXX-XXXX - Format     |
  |------------------------------------|---------------------------------|-----------------------------|
  | Preferred mode(s) of communication | Yes                             | Same business rules as in   |

  And

    to get back if we need to capture the details of the person who is booking the information

  User should be able to see the option to submit the same

  And

  User should be prompted with the inline validation error message “This field is required” when all the required fields are not filled except for Email and Mobile Number field

  And

  User should be prompted with the inline validation error message “Email ID or Mobile Number is required” when either the Email and/or Mobile number fields is not filled 

  And

  User should be able to view a progress bar to identify where they are with scheduling the appointment

  And

  User should be able to view an option to go back to the previous screen

  And

  User should be able to view the following details along with an option to update them

  | Items Displayed        | Update                                 |
  |------------------------|----------------------------------------|
  | Location with provider | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Date and Time          | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Insurance Carrier      | On selecting to update them refer to   |
  |------------------------|----------------------------------------|
  | Purpose of Visit       | On selecting to update them refer to   |

  @BDDTEST-EPP-3011
  @Appointments
  @P2
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1563 - Verify user able to provide the basic details when scheduling appointment for someone else.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user provided location,date of appointment,purpose of visit,insurance and provider
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    And user selects a time slot
    Then user should see Review appointment details screen
    And user selects Someone Else
    Then user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number, Preferred mode(s) of communication
    And user should see submit
