@BDDSTORY-EPP-1595
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Change Location during review
  User Story: As a user, I should be able to change the 'Location' while reviewing the appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User selects the option to change the location

  THEN

  User should get navigated to the screen to select the location as in  

  And

  User should be able to change the location by searching locations using either City or State or Zipcode along with an option to detect their location (Locate me)

  And

  User should be able to select a location based on the search

  And

  System might have to remove the selection made for purpose of visit, insurance carrier, date of appointment and time slot of provider if the updated location does not support them and inform the user

  And

  User has to once again review the appointment details as in  

  @BDDTEST-EPP-3802
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-To verify whether the user is allowed to change the Location in Appointment Review screen.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the location if already provided
    Then user should allow to update the location.

  @BDDTEST-EPP-3803
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whethet the user is able to select the Location, if not selected in Previous page.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the Date of Appointment, Purpose of visit, Insurance carrier and without selecting location.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with blank selected location, date, Purpose of visit and Insurance carrier data
    And try to add the location
    Then user should allow to add the Location.

  @BDDTEST-EPP-3804
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whether the already selected data are getting removed if we update the other Location if not supported.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the Location, which is not supported.
    Then already selected  Date of Appointment, Insurance carrier, purpose of visit should get removed.

  @BDDTEST-EPP-3805
  @Appointments
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to review the Appointment details after updating the Location.
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit andInsurance carrier data
    And try to update the Location if already provided
    Then it should allow to review once again the changed Location in Appointment review screen.

  @BDDTEST-EPP-3806
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by City
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the location using Search by City and select any other location.
    Then user should allow to update the location.

  @BDDTEST-EPP-3807
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by State
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the location using Search by State and select any other location.
    Then user should allow to update the location.

  @BDDTEST-EPP-3808
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by Zipcode
    Given user launch the Patient portal URL		
    When user clicks on the Schedule Appointment button
    And user navigates to the schedule appointment screen
    And user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data
    And try to update the location using Search by Zipcode and select any other location.
    Then user should allow to update the location.
