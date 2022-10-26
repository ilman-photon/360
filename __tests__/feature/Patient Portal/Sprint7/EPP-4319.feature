@BDDSTORY-EPP-4319
@EPP_Patient_Sprint_7
@Message_Center
@P3
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal : Message/ Alerts - Redirect to corresponding screen on clicking an alert
  User Story: As a user, I should be able to navigate to the corresponding screen on clicking an alert.

  Acceptance Criteria:

  GIVEN

  User is logged into the portal

  And

  User is able to view the alerts option on the global header (like notifications) 

  And

  User clicks on the alerts option

  WHEN

  User clicks on any of the alert as listed in  

  THEN

  User should get redirected to the corresponding screen as listed below

  | Sno | Scenario when alert needs to be triggered                                                                                    | Alert Verbiage                                                                                 | Redirection                                                               |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 1   | Alerts to be triggered when there is an upcoming appointment (includes test and procedures) 3 days/ 1 day before appointment | 3 Days before verbiage: You have an <purpose of visit/ test/ procedure> appointment in 3 days. | Redirection to that particular appointment                                |
  |     |                                                                                                                              | 1 Day before verbiage: You have an <purpose of visit/ test/ procedure> appointment tomorrow.   |                                                                           |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 2   | When test/ lab result is available                                                                                           | Your <test/ lab name> test results are available now                                           | Redirection to that particular test/ lab result                           |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 3   | When a prescription refill is available for download                                                                         | Your prescription refill is available now                                                      | Redirection to that particular prescription                               |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 4   | When a new message is received                                                                                               | You have received a new message from <Provider name>                                           | Redirection to that particular message                                    |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 5   | When a visit summary is available                                                                                            | Your visit summary for your appointment on <appointment date> is available now.                | Redirection to that particular past appointment                           |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 6   | When a new outstanding invoice is generated                                                                                  | There is a new outstanding invoice                                                             | Redirection to that particular invoice                                    |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 7   | When a new glass or lens prescription is available                                                                           | You have your <Glasses/ Contact Lens> prescription available now.                              | Redirection to that particular prescription                               |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 8   | When a new medication prescription is available                                                                              | Your <medication name> prescription is now available. Frequency ?                              | Redirection to that particular prescription                               |
  |-----|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
  | 9   | When a contact lens or glasses is available for pick up                                                                      | Your <Contact Lens/ Glasses> are available for pickup.                                         | Where to redirect ? - Redirect to practise address like Clarkson eyecare  |

  And

  System receives the required details (such as appointment id; any such unique identifier per scenario) from E360+ system along with the notification so that user can be redirected to that particular appointment/ prescription etc.. at the frontend

  @BDDTEST-EPP-6835
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have an <purpose of visit/ test/ procedure> appointment in 3 days" (3 Days before)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered
    And  there is an upcoming appointment for 3 days before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"
    And Redirection to that particular appointment

  @BDDTEST-EPP-6836
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage " You have an <purpose of visit/ test/ procedure> appointment tomorrow." (1 Day before)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered 
    And there is an upcoming appointment for 1 day before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."
    And Redirection to that particular appointment

  @BDDTEST-EPP-6837
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <test/ lab name> test results are available now"

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And test/ lab result is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"
    And Redirection to that particular test/ lab result

  @BDDTEST-EPP-6838
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your prescription refill is available now"

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a prescription refill is available for download
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your prescription refill is available now"
    And Redirection to that particular prescription

  @BDDTEST-EPP-6839
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have received a new message from <Provider name>"

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new message is received
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have received a new message from <Provider name>"
    And Redirection to that particular message

  @BDDTEST-EPP-6840
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your visit summary for your appointment on <appointment date> is available now."

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a visit summary is available 
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."
    And Redirection to that particular past appointment

  @BDDTEST-EPP-6841
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "There is a new outstanding invoice"

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new outstanding invoice is generated
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "There is a new outstanding invoice"
    And Redirection to that particular invoice

  @BDDTEST-EPP-6842
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have your <Glasses/ Contact Lens> prescription available now."

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new glass or lens prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."
    And Redirection to that particular prescription

  @BDDTEST-EPP-6843
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <medication name> prescription is now available. Frequency ?"

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new medication prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"
    And Redirection to that particular prescription

  @BDDTEST-EPP-6844
  @Automation
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <Contact Lens/ Glasses> are available for pickup."

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a contact lens or glasses is available for pick up
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."
    And Where to redirect ? - Redirect to practise address like Clarkson eyecare

  @BDDTEST-EPP-6856
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User get Alerts to be triggered

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered 
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6865
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User get Alerts to be triggered

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered
    And the service is unavailable
    Then user should see the appropriate error message
