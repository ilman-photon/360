@BDDSTORY-EPP-1553
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Review appointment details
  User Story: As a user, I should be able to review the appointment details.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  WHEN

  User lands on the screen to review the appointment details

  THEN

  User should be able to view the selected location along with the provider with an option to change them

  And

  User should be able to view the selected Date and Time of the appointment with an option to change them

  And

  User should be able to view the selected purpose of visit with an option to change them if provided

  And

  User should be able to view the selected Insurance Career with an option to change them if provided

  And

  User should be able to view a progress bar to identify where they are with scheduling the appointment

  And

  User should be able to view an option to go back to the previous screen

  And

  User should be able to view an option to schedule the appointment

  @BDDTEST-EPP-3043
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able to see review  appointment details after selected the time slot
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected  provider with the time slot available 
    Then  user land to Review Appointnment detail page

  @BDDTEST-EPP-3044
  @Appointments
  @Patient_Portal
  @RegressionP1
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected provider with an option to change the provider
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    And user should see option to change the selected provider to another provider

  @BDDTEST-EPP-3045
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected location with an option to change location
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    And user should see option to change the selected location to another location

  @BDDTEST-EPP-3046
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected Date and Time of the appointment with option to change another date and time
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    And user should see option to change the selected "Date and Time" to another date and time

  @BDDTEST-EPP-3047
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected purpose of visit with an option to change if provided
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    And user should see option to change the selected "Purpose of visit" one to other

  @BDDTEST-EPP-3048
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able to selected Insurance Career with an option to change another carrier
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    And user should see option to change the selected " Insurance Career" one to other

  @BDDTEST-EPP-3049
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view an option to schedule the appointment
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user selected provider with the time slot available 
    Then user lands onto Review Appointnment detail page
    When user should see option Date and Time,Insurance , purpose of visit 
    And user should click on continue button 
    Then user should see option to schedule the appointment
