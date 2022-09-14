Feature: Patient Portal : Schedule Appointment from marketing site - Appointment for 'someone else' - View Appointment Confirmation message
  User Story: As a user, I should be able to view the appointment confirmation message when scheduled for some one else.

 
  @BDDTEST-EPP-3320
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1567-To verify whether the user is able to choose Appointment for Someone else
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    And select any available Time slot
    And user should see the Review Appointment details page
    And user clicks on Continue, it should display the option Myself and Someone else.
    Then user should able to choose Someone else

  @BDDTEST-EPP-3321
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: Verify whether the user is able to add the appointment to calender and check whether its added in the calender.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    And select any available Time slot
    And user should see the Review Appointment details page
    And user clicks on Continue, it should display the option Myself and Someone else.
    And user should able to choose Someone else
    Then mentioned fields should get displayed.
    |First name
    |Last name
    |Date of birth
    |Email
    |Phone number

  @BDDTEST-EPP-3322
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: Verify whether the text Is this the medical emergency? is displaying
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    And select any available Time slot
    And user should see the Review Appointment details page
    And user clicks on Continue, it should display the option Myself and Someone else.
    And user should click Someone else
    And user should provide all those basic details of patient and click Schedule Appointment.
    Then user should see the text Is this the medical emergency?

  @BDDTEST-EPP-3323
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: Verify whether the text If this is a medical emergency, please call 911 is displaying when we mouse hover the text Is this the medical emergency?
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And schedule the appointment.
    And mouse hover the text  Is this the medical emergency?
    Then user should see the text If this is a medical emergency, please call 911.

  @BDDTEST-EPP-3324
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: Verify whether the user having the option to redirect to Patient portal home page after appointment schedule.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And schedule the appointment.
    Then user should see the option to redirect to Patient portal home page.

  @BDDTEST-EPP-3325
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: Verify whether the Confirmation Email is receiving to the user after successful appointment schedule. (Preferred mode = Email)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And schedule the appointment.
    Then the user should receive the Confirmation Email for successful Appointment schedule.

  @BDDTEST-EPP-3326
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: Verify whether the Confirmation Text Message is receiving to the user after successful appointment schedule. (Preferred mode = Phone number)
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And schedule the appointment.
    Then the user should receive the Confirmation Text message for successful Appointment schedule.

