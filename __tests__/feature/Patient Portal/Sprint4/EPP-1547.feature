Feature: Patient Portal : Schedule Appointment from marketing site - Select date of appointment
User Story: As a user, I should be able to select a date for the appointment to view the list of providers and their location with available time slots.

@BDDTEST-EPP-2821
@Appointments
@Automation
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario Outline: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to view system date by default set as todays date
  Given user launch the Marketing Site URL	
   When user clicks on the Schedule your Eye Exam button
   Then User lands on to the screen
   When user navigate to "Date" calender field
    And user should see today’s date as date of appointment by default
  Examples: 
    | Date           | 
    | 17-August-2022 | 

@BDDTEST-EPP-2822
@Appointments
@Automation
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario Outline: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to change the date of appointment
  Given user launch the Marketing Site url		
   When user clicks on the Schedule your Eye Exam button
   Then User lands on to the screen
   When user navigate to date calender field
    And user should see today’s date as date of appointment by default
   When user change the "Date" of appointment
   Then user should see change in the date
  Examples: 
    | Date        | 
    | 17-SEP-2022 | 

@BDDTEST-EPP-2823
@Appointments
@Automation
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario Outline: EPIC_EPP-44_STORY_EPP-1547 - Verify if user not be able to select past dates (< today)
  Given user launch the Marketing Site url		
   When user clicks on the Schedule your Eye Exam button
   Then User lands on to the screen
   When user navigate to date calender field
    And user should see today’s "Date" as date of appointment by default
   When user click on Date calender & select past dates from today's date
   Then user should not able to select past dates from today's date
  Examples: 
    | Date        | 
    | 15-AUG-2022 | 

@BDDTEST-EPP-2824
@Appointments
@Automation
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario Outline: EPIC_EPP-44_STORY_EPP-1547 -Verify if user not allow to select a date that  3 months greater than today’s date
  Given user launch the Marketing Site url		
   When user clicks on the Schedule your Eye Exam button
   Then user lands on to the screen
   When user navigate to date calender field
    And user should see today’s "Date" as date of appointment by default
   When user click on Date calender & select 3 months greater than today's date
   Then user should not able to select the date 3 months greater than today's date
  Examples: 
    | Date        | 
    | 17-DEC-2022 | 

@BDDTEST-EPP-2825
@Appointments
@Automation
@P1
@Patient_Portal
@Regression
@Sprint4
Scenario Outline: EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to select any date within 3 month
  Given user launch the Marketing Site url		
   When user clicks on the Schedule your Eye Exam button
   Then user lands on to the screen
   When user navigate to date calender field
    And user should see today’s "Date" as date of appointment by default
   When user click on Date calender & select  the date within 3 months 
   Then user should able to select the date  within 3 months 
  Examples: 
    | Date           | 
    | 17-August-2022 | 



