@BDDSTORY-EPP-2507
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Apply filters in schedule appointment screen
  User Story: As a user, I should be able to apply the filters which will update the results accordingly.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  WHEN

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  THEN

  User should be able to select from the filters mentioned in 

  And

  User should be able to see the filters being dynamic i.e filter options get updated based on selecting other filter options

  And

  User should see the results i.e. providers with available time slots getting updated based on the filters applied

  And

  User should be able to clear the applied filters

  @BDDTEST-EPP-2878
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results on the Schedule Appointments screen
    And user views the selected location, date of appointment, the purpose of visit, and insurance carrier.

  @BDDTEST-EPP-2879
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.

  @BDDTEST-EPP-2880
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the date of appointment.

  @BDDTEST-EPP-2881
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit
    Given user launch the Marketing Site URL		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit.

  @BDDTEST-EPP-2882
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the insurance carrier.

  @BDDTEST-EPP-2883
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered
    Given user launch the Marketing Site URL		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit as blank 
    When the user not entered the purpose of the visit

  @BDDTEST-EPP-2884
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City with the selected location

  @BDDTEST-EPP-2885
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using State with the selected location

  @BDDTEST-EPP-2886
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using Zipcode with the selected location

  @BDDTEST-EPP-2887
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location

  @BDDTEST-EPP-2888
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options

  @BDDTEST-EPP-2889
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date

  @BDDTEST-EPP-2890
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit

  @BDDTEST-EPP-2891
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the selected location.
    And user views an option to search locations using City or State or Zipcode with the selected location
    And user has the option to allow the system to detect their location 
    And user views the filter options
    And user view options to change the appointment date
    And user view options to change the Purpose of the Visit
    And user view options to change the insurance.

  @BDDTEST-EPP-2892
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered
    Given user launch the Marketing Site URL		
    And user clicks on the Schedule your Eye Exam button
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment 
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user views the purpose of the visit as blank 
    When the user not entered the purpose of the visit

  @BDDTEST-EPP-2893
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to view the following filters
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    And user should be able to view the following filters as below
    |Language (List the different languages of provider)|
    |Gender (List the Genders of the provider)|
    |Insurance In/Out of Network|
    |Available Today (Provider)|

  @BDDTEST-EPP-2894
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Language filter
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Language filter
    Then user should see Filtered Language

  @BDDTEST-EPP-2895
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Gender filter
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Gender filter
    Then user should see Filtered Gender

  @BDDTEST-EPP-2896
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Insurance In/Out of Network filter
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Insurance In/Out of Network filter
    Then user should see Filtered Insurance In/Out of Network"

  @BDDTEST-EPP-2897
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Available Today (Provider) filter
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Insurance Available Today (Provider) filter
    Then user should see Filtered Available Today (Provider)

  @BDDTEST-EPP-2898
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should see an option to clear those filters when applied
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Insurance Available Today (Provider) filter
    Then user should see Filtered Available Today (Provider)
    And user should see an option to clear the applied filter

  @BDDTEST-EPP-2899
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2507-Verify User should see the filter was removed when user clicks on Clear option
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user should navigated to the search screen
    And user should fill the location
    And user should select the date of appointment 
    And user should select the purpose of the visit
    And user should fill the insurance name
    When user clicks on the Search button
    Then user should see the results on the Schedule Appointments screen
    And user should see the selected location, date of appointment, the purpose of visit, and insurance carrier
    When user selects Insurance Available Today (Provider) filter
    Then user should see Filtered Available Today (Provider)
    And user should see an option to clear the applied filter
    And user should see the filter was removed when user clicks on Clear option
