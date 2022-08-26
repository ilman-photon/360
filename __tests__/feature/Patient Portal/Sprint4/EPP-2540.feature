@BDDSTORY-EPP-2540
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Select/ Update Purpose of visit in Schedule appointment screen
  User Story: As a user, I should be able to select/ update the purpose of visit in schedule appointment screen from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  WHEN

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  THEN

  User should be able to change the purpose of visit if already provided

  Else

  User should be able to select a purpose of visit if not selected in  

  And

  System might have to remove the selection made for insurance carrier, location, date and time slot of the provider if the updated purpose of visit does not support them and inform the user

  @BDDTEST-EPP-3398
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2540 - Verify user able to select/ update the purpose of visit in schedule appointment screen from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the Location section
    And user views the selected location.
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the appointment date and time
    And user view options to change the Purpose of visit
    And user selects the option to change the purpose of visit
    And user changes the purpose of visit
    And user clicks on the continue button

  @BDDTEST-EPP-3399
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can remove.
    Feature: Schedule appointment from Patient Portal - View filters in schedule appointment screen
    Scenario: "EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly."

    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the Location section
    And user views the selected location.
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the appointment date and time
    And user view options to change the Purpose of visit
    And user selects the option to change the purpose of visit
    And user remove the purpose of visit
    And user clicks on the continue button

  @BDDTEST-EPP-3400
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can edit.
    Feature: Schedule appointment from Patient Portal - View filters in schedule appointment screen
    Scenario: "EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter."

    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the Location section
    And user views the selected location.
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the appointment date and time
    And user view options to change the Purpose of visit
    And user selects the option to change the purpose of visit
    And user selects another option for purpose of visit
    And user clicks on the continue button

  @BDDTEST-EPP-3401
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2540 - Verify user not selected the purpose of visit in schedule appointment screen from patient portal and user add the purpose of visit
    Scenario: "EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter."

    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button  without selecting the purpose of visit
    And user views the results in the Schedule Appointments screen
    And user views the Location section
    And user views the selected location.
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the appointment date and time
    And user view options to change the Purpose of visit
    And user selects the option to change the purpose of visit
    And user selects the purpose of visit
    And user clicks on the continue button
