Feature: Patient Portal : Schedule appointment from Patient Portal - Select time slot for appointment
User Story: As a user, I should be able to select a time slot of a provider to schedule appointment from patient portal.

@BDDTEST-EPP-3211
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be navigated to "Schedule Appointment" screen with the selected data
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)

@BDDTEST-EPP-3212
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
   Then User should navigated to review the appointment details
    And User should see the selected location along with the provider

@BDDTEST-EPP-3213
@Appointments
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should navigated to review the appointment details
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
   Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
    And User should see the selected Date and Time of the appointment
    And User should see the selected purpose of visit (if provided)
    And User should see the selected Insurance Career (if provided)
    And User should see a progress bar to identify with scheduling the appointment
    And User should see an option to go back to the previous screen
    And User should see an option to schedule the appointment

@BDDTEST-EPP-3214
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds

  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
    And User should see page load within "3 seconds"
   Then User should navigated to review the appointment details
    And User should see the selected location along with the provider

@BDDTEST-EPP-3215
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider - Without error script when user clicks on F12 on the console
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
    And User should see page load within "3 seconds"
   Then User should navigated to review the appointment details
    And User should see the selected location along with the provider
   When user clicks on F12 on the console
   Then user should not to see any errors script

@BDDTEST-EPP-3216
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the internet service is unavailable user should see the following error message
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
   Then The Internet service is unavailable
    And User should see the appropriate error message

@BDDTEST-EPP-3217
@Appointments
@P1
@Patient_Portal
@Sprint4
Scenario: EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the service is unavailable user should see the following error message
  Given User launch the "Marketing Site" url
   When User clicks on the "Schedule your Eye Exam" button
   Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
   When User clicks on the option to Search
   Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)
    And User should see a time slot of the provider
   When User selects a time slot of the provider
   Then The service is unavailable
    And User should see the appropriate error message




