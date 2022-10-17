Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'self' - View Continue as a Guest screen
User Story: As a user, I should be able to view "Continue as a Guest" screen.

@BDDTEST-EPP-3238
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view and select continue as guest option
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
    And User to click & select Continue as a Guest button

@BDDTEST-EPP-3239
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to navigate to basic detail page after select Continue as a Guest
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details

@BDDTEST-EPP-3240
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view basic details fields
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication

@BDDTEST-EPP-3241
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view First Name, Last Name, Date of Birth, Preferred mode(s) of communication as mandatory field
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see First Name, Last Name, Date of Birth, Preferred mode(s) of communication field as mandatory

@BDDTEST-EPP-3242
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in First Name field
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When user enter first name field with mimium 2 to maximum 50 characters 
   Then user should see the enter character length accepted in First name field

@BDDTEST-EPP-3243
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in Last Name field
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When user enter Last name field with mimium 2 to maximum 50 characters 
   Then user should see the enter character length accepted in Last name field

@BDDTEST-EPP-3244
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter Date of Birth in MM/DD/YYYY format
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When user enter Date of Birth field in MM/DD/YYYY format
   Then user should see Date entered in the field

@BDDTEST-EPP-3245
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter email id with correct format in Email field
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When User enter email id with correct format in Email field
   Then user should see email entered in the field

@BDDTEST-EPP-3246
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to Mobile number with correct format in Mobile number field
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When User enter number with correct format in Mobile number field
   Then user should see Mobile number entered in the field

@BDDTEST-EPP-3247
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572-Verify if user able to see either Email or Mobile number field mandatory if both field leaves blank
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
    And User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
   When User leave both field(Email & Mobile number) blank and enter 
   Then user should see error message "Email ID or Mobile Number is required”

@BDDTEST-EPP-3248
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see error message when mandatory field leaves blank
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When user leave mandatory field ( First Name, Last Name, Date of Birth, Preferred mode(s) of communication) blank 
    And User should error message “This field is required”

@BDDTEST-EPP-3249
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see submit option after enter all details in the field
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When User enter details in the field First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication
    And user to click on submit button  
   Then user should see details submitted

@BDDTEST-EPP-3250
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view the field Preferred mode of communication preselected with option Both
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When user mouse over to field Preferred mode(s) of communication
   Then user should see the field Preferred mode(s) of communication preselected the option Both

@BDDTEST-EPP-3251
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change Preferred mode of communication to Mobile Number or Both when Email is provided
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>"
   Then user should see the field “Preferred mode(s) of communication” selected with option 'Email'
    And user change the preferred mode to either Mobile number or Both
   Then user should see field “Preferred mode(s) of communication” selected with either 'Mobile number' or 'Both'

@BDDTEST-EPP-3252
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Mobile number>"
   Then user should see the field “Preferred mode(s) of communication” selected with option 'Mobile number'
    And user change the preferred mode to either Email or Both
   Then user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Both'

@BDDTEST-EPP-3253
@Appointments
@P5
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to 'Email' or 'Mobile number' when Both Mobile number & Email provided
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the Date & Time with provider
    And User should select the purpose of the visit
    And User has reviewed the appointment details
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
   When User selects that the appointment is for Self
   Then User should navigated to the Patient Portal application
    And User should see option as Continue as a Guest button
   When User to click & select Continue as a Guest button
   Then User should lands onto Page to enter basic details
   When user provide the details to the field "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Mobile number>"
   Then user should see the field “Preferred mode(s) of communication” selected with option 'Both'
    And user change the preferred mode to either Email or Mobile number
   Then user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Mobile number'



