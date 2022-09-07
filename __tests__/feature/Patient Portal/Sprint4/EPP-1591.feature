Feature: Patient Portal : Schedule Appointment from Patient Portal - Select date of appointment

  @BDDTEST-EPP-3254
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to view system date by default set as todays date
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When user navigate to "Date" calender field
    And user should see today’s date as date of appointment by default

    Examples:
    |Date|
    |17-August-2022|

  @BDDTEST-EPP-3255
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to change the date of appointment
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When the user navigates to the date calendar field
    And the user should see today’s date as the date of appointment by default
    When user change the "Date" of appointment
    Then user should see change in the date

    Examples:
    |Date|
    |17-SEP-2022|

  @BDDTEST-EPP-3256
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @excluded
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1591 - Verify if user not be able to select past dates (< today)
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When the user navigate to date calender field
    And user should see today’s "Date" as date of appointment by default
    When user click on Date calender & select past dates from today's date
    Then user should not able to select past dates from today's date

    Examples:
    |Date|
    |15-AUG-2022|

  @BDDTEST-EPP-3257
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @excluded
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1591-Verify if user not allow to select a date that  3 months greater than today’s date
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When the user navigates to the date calendar field
    And the user should see today’s "Date" as the date of appointment by default
    When the user clicks on the Date calendar & select 3 months greater than today's date
    Then user should not able to select the date 3 months greater than today's date

    Examples:
    |Date|
    |17-DEC-2022|

  @BDDTEST-EPP-3258
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @excluded
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1591- -Verify if user able to select any date within 3 month
    Given user launch the Patient Portal URL	
    When a user provides a valid Email or Phone Number and password 
    And user clicks on the Login button
    Then user navigates to the Patient Portal home page	
    When a user  clicks on the Schedule Appointment link
    Then User lands on the Schedule Appointment screen
    When user navigate to date calender field
    And user should see today’s "Date" as date of appointment by default
    When user click on Date calender & select  the date within 3 months 
    Then user should able to select the date  within 3 months 

    Examples:
    |Date|
    |17-August-2022|
