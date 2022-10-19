
Feature: Patient Portal : Message/ Alerts - Redirect to corresponding screen on clicking an alert
  User Story: As a user, I should be able to navigate to the corresponding screen on clicking an alert.

   @BDDTEST-EPP-6835
  @Message_Center
  @P3
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have an <purpose of visit/ test/ procedure> appointment in 3 days" (3 Days before)
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage " You have an <purpose of visit/ test/ procedure> appointment tomorrow." (1 Day before)
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <test/ lab name> test results are available now"
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your prescription refill is available now"
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have received a new message from <Provider name>"
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your visit summary for your appointment on <appointment date> is available now."
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "There is a new outstanding invoice"
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have your <Glasses/ Contact Lens> prescription available now."
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have your <Glasses/ Contact Lens> prescription available now."

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new glass or lens prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now.
    And Redirection to that particular prescription

  @BDDTEST-EPP-6843
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <medication name> prescription is now available. Frequency ?"
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
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <Contact Lens/ Glasses> are available for pickup."
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

  @BDDTEST-EPP-6845
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 3 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 3 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered
    And  there is an upcoming appointment for 3 days before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"
    And Redirection to that particular appointment
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6846
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 1 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 1 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered 
    And there is an upcoming appointment for 1 day before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."
    And Redirection to that particular appointment
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6847
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular test/ lab result
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular test/ lab result

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And test/ lab result is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"
    And Redirection to that particular test/ lab result
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6848
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular refill prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular refill prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a prescription refill is available for download
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your prescription refill is available now"
    And Redirection to that particular prescription refill
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6849
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular message
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular message

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new message is received
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have received a new message from <Provider name>"
    And Redirection to that particular message
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6850
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular visit summary prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular visit summary prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a visit summary is available 
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."
    And Redirection to that particular prescription
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6851
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular invoice
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular invoice

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new outstanding invoice is generated
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "There is a new outstanding invoice"
    And Redirection to that particular invoice
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6852
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular glass or lens prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular glass or lens prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new glass or lens prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now.
    And Redirection to that particular prescription
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6853
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular medication prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular medication prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new medication prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"
    And Redirection to that particular prescription
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6854
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to practise address like Clarkson eyecare
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to practise address like Clarkson eyecare

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a contact lens or glasses is available for pick up
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."
    And Where to redirect ? - Redirect to practise address like Clarkson eyecare
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-6855
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 3 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 3 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered
    And  there is an upcoming appointment for 3 days before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6856
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 1 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 1 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered 
    And there is an upcoming appointment for 1 day before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6857
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular test/ lab result
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular test/ lab result

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And test/ lab result is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6858
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular refill prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular refill prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a prescription refill is available for download
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your prescription refill is available now"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6859
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular message
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular message

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new message is received
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have received a new message from <Provider name>"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6860
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular visit summary prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular visit summary prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a visit summary is available 
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6861
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular invoice
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular invoice

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new outstanding invoice is generated
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "There is a new outstanding invoice"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6862
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular glass or lens prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular glass or lens prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new glass or lens prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6863
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular medication prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular medication prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new medication prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6864
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to practise address like Clarkson eyecare
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to practise address like Clarkson eyecare

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a contact lens or glasses is available for pick up
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6865
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 3 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 3 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered
    And  there is an upcoming appointment for 3 days before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6866
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 1 days before
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 1 days before

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And User should get Alerts to be triggered 
    And there is an upcoming appointment for 1 day before
    Then User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6867
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular test/ lab result
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular test/ lab result

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And test/ lab result is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6868
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular refill prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular refill prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a prescription refill is available for download
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your prescription refill is available now"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6869
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular message
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular message

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new message is received
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have received a new message from <Provider name>"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6870
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular visit summary prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular visit summary prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a visit summary is available 
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6871
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular invoice
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular invoice

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new outstanding invoice is generated
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "There is a new outstanding invoice"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6872
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular glass or lens prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular glass or lens prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new glass or lens prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now.
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6873
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular medication prescription
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular medication prescription

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a new medication prescription is available
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6874
  @Message_Center
  @P3
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to practise address like Clarkson eyecare
    Scenario: EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to practise address like Clarkson eyecare

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see the alerts option on the global header (like notifications)
    When User clicks on any of the alert as listed
    And a contact lens or glasses is available for pick up
    And User should get Alerts to be triggered 
    Then User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."
    And the service is unavailable
    Then user should see the appropriate error message
