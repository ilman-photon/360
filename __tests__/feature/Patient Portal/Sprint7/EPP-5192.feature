
Feature: Patient Portal : View Test/ Lab Results - View lab results
  User Story: As a user, I should be able to view my lab results.


  @BDDTEST-EPP-6575
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to view the following details for lab results
    Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to view the following details for lab results

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|

  @BDDTEST-EPP-6576
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first
    Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|
    And User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first

  @BDDTEST-EPP-6577
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to view a message - “Your lab results are available. Please reach out to your provider.”
    Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to view a message - “Your lab results are available. Please reach out to your provider.”

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|
    And User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first
    And User should be able to view a message - “Your lab results are available. Please reach out to your provider.”

  @BDDTEST-EPP-6578
  @P1
  @Patient_Portal
  @Regression
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to see the following message “There are no lab results for you now.”
    Scenario: EPIC_EPP-14_STORY_EPP-5192 - Verify User should be able to see the following message “There are no lab results for you now.”

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|
    When User don't have lab result on the list
    Then User should be able to see the following message “There are no lab results for you now.”

  @BDDTEST-EPP-6579
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192-Verify User should see the page loads within 3 seconds
    Scenario: EPIC_EPP-14_STORY_EPP-5192-Verify User should see the page loads within 3 seconds

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|
    And User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first
    And User should be able to view a message - “Your lab results are available. Please reach out to your provider.”
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-6580
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192-Verify User should not see the any errors script when user clicks F12 on the console
    Scenario: EPIC_EPP-14_STORY_EPP-5192-Verify User should not see the any errors script when user clicks F12 on the console

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And User should be able to view the following details for lab results
    |"<Lab Test Name>" field|
    |"<Lab Test Date>" field|
    |"<Lab Test Status>" field|
    |"<Ordered By (i.e. provider name who has ordered the test for the patient)>" field|
    And User should be able to see list of lab tests based on how recent they were taken i.e. latest/ recently taken lab test results to be listed first
    And User should be able to view a message - “Your lab results are available. Please reach out to your provider.”
    And User should see the page loads within "3 seconds"
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6581
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192-Negative Test Cases-Verify user should see the error message when the internet service is unavailable
    Scenario: EPIC_EPP-14_STORY_EPP-5192-Negative Test Cases-Verify user should see the error message when the internet service is unavailable

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results out to your provider.”
    And the Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6582
  @P1
  @Patient_Portal
  @Sprint7
  @Test_and_Procedures
  Scenario: EPIC_EPP-14_STORY_EPP-5192-Negative Test Cases-Verify  when the service is unavailable
    Scenario: EPIC_EPP-14_STORY_EPP-5192-Negative Test Cases-Verify  when the service is unavailable

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    When User selects the "Lab Test" menu 
    Then User navigates to the screen to view their test/ lab results
    And the service is unavailable
    Then user should see the appropriate error message
