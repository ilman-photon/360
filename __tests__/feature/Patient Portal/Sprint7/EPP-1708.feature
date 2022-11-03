
Feature: Patient Portal : Doctor/ Optometrist Bio - View
  User Story: As a user, I should be able to view the screen with the doctors/ optometrist that I have consulted i.e my care team

  @BDDTEST-EPP-5533
  @My_Care_Team
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists
    Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists

  @BDDTEST-EPP-5534
  @My_Care_Team
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details
    Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |"Photo of the Doctor" is displayed as the photo of the ECP doctor|
    |"Name" is displayed as the name of the doctor  <First name Last name> format|
    |"Specialty" is displayed as the specialty of the doctor|
    |"Practice name " is displayed as the primary practice name of the doctor|
    |"Address" is displayed as the primary practice address for the doctor|
    |"City" is displayed as the City name in which the primary practice is located|
    |"State " is displayed as the state name in which the primary practice is located|
    |"Zip code " is displayed as the Zip code of the Primary practice of the doctor|
    |"Email" is displayed as the Email of the doctor provided by the primary practice|
    |"Phone"is displayed as the phone number of primary practice of the doctor|
    |"Profile" is displayed as CTA  Option to view the biography of the doctor|
    |"Schedule Appointment" is displayed as CTA option to search and schedule appointment|

  @BDDTEST-EPP-5535
  @My_Care_Team
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to click on view profile CTA and navigate to doctor’s bio screen
    Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to click on view profile CTA and navigate to doctor’s bio screen

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |"Photo of the Doctor" is displayed as the photo of the ECP doctor|
    |"Name" is displayed as the name of the doctor  <First name Last name> format|
    |"Specialty" is displayed as the specialty of the doctor|
    |"Practice name " is displayed as the primary practice name of the doctor|
    |"Address" is displayed as the primary practice address for the doctor|
    |"City" is displayed as the City name in which the primary practice is located|
    |"State " is displayed as the state name in which the primary practice is located|
    |"Zip code " is displayed as the Zip code of the Primary practice of the doctor|
    |"Email" is displayed as the Email of the doctor provided by the primary practice|
    |"Phone"is displayed as the phone number of primary practice of the doctor|
    |"Profile" is displayed as CTA  Option to view the biography of the doctor|
    |"Schedule Appointment" is displayed as CTA option to search and schedule appointment|
    When User should be able to click on view profile CTA 
    Then User should be navigated to doctor’s bio screen

  @BDDTEST-EPP-5536
  @My_Care_Team
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should see the message “There are no doctor/ optometrist details available for you.“ (if there is no my care team for the user)
    Scenario: EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to view the message “There are no doctor/ optometrist details available for you.“ (if there is no my care team for the user)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should see the message “There are no doctor/ optometrist details available for you.“ (if there is no my care team for the user)

  @BDDTEST-EPP-5542
  @My_Care_Team
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User selects the "Doctors/ Optometrists" menu
    Scenario: EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User selects the "Doctors/ Optometrists" menu

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5543
  @My_Care_Team
  @P1
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify  when the service is unavailable - when User selects the "Doctors/ Optometrists" menu
    Scenario: EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify  when the service is unavailable - when User selects the "Doctors/ Optometrists" menu

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    And the service is unavailable
    Then user should see the appropriate error message
