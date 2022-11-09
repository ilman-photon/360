Feature: Patient Portal : Integration with Experian - Unverified user has access to limited features in the portal
  User Story: As an unverified user, I should be able to access only certain features in the portal.

  @BDDTEST-EPP-6857
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should see all other menus and options being disabled for an unverified user 
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should see all other menus and options being disabled for an unverified user 

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should see all other menus and options being disabled for an unverified user

  @BDDTEST-EPP-6858
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ fill the Intake forms 
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ fill the Intake forms 

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    And User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    When User lands on the screen to view the list of forms that can be filled out online
    Then User views the list of 9 forms displayed

  @BDDTEST-EPP-6859
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ edit their profile information - Contact Information
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ edit their profile information - Contact Information

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    And User should be able to see Profile icon at the top left corner
    When User selects on Account CTA
    Then User is in “Profile Information” section of “My account” page
    When User clicks on ‘Edit’ CTA
    Then User should be able to edit certain fields
    And Section names to be displayed - “Personal Information”, “Contact Information”
    And User should be able to view the following details for Contact Information
    |"Phone number" as editable|
    |"Email id" as editable|
    |"Address" as editable|
    |"City" as editable|
    |"State" as editable|
    |"Zip" as editable|
    |"Preferred mode(s) of communication" as editable|

  @BDDTEST-EPP-6860
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ edit their profile information - Personal Information
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view/ edit their profile information - Personal Information

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    And User should be able to see Profile icon at the top left corner
    When User selects on Account CTA
    Then User is in “Profile Information” section of “My account” page
    When User clicks on ‘Edit’ CTA
    Then User should be able to edit certain fields
    And Section names to be displayed - “Personal Information”, “Contact Information”
    And User should be able to view the following details for Personal Information
    |"Photo" as editable|
    |"Title" as editable|
    |"Name" as read-only|
    |"Date of Birth" as read-only|
    |"Age" as read-only|
    |"Gender" as editable|
    |"Preferred name" as editable|
    |"SSN" as editable|

  @BDDTEST-EPP-6861
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view their upcoming appointments - if there are no upcoming appointments along with an option to schedule now
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view their upcoming appointments - if there are no upcoming appointments along with an option to schedule now

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view Appointment widget in the dashboard
    And User should be able to view the upcoming appointment
    And User should be able to view the following details for the upcoming appointment
    |"<Date>" as field|
    |"<Time>" as field|
    |"<Patient’s Name>" as field|
    |"<Doctor’s Name>" as field|
    |"<Location’s address>" as field|
    |"<Location’s Phone number>" as field|
    |"Directions" as a CTA|
    |"<Purpose of Visit>" as field|
    When There are no upcoming appointments
    Then User should be able to see an option to schedule now
    And User should be able to see the following message “You have no upcoming appointments

  @BDDTEST-EPP-6862
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view their upcoming appointments
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view their upcoming appointments

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view Appointment widget in the dashboard
    And User should be able to view the upcoming appointment
    And User should be able to view the following details for the upcoming appointment
    |"<Date>" as field|
    |"<Time>" as field|
    |"<Patient’s Name>" as field|
    |"<Doctor’s Name>" as field|
    |"<Location’s address>" as field|
    |"<Location’s Phone number>" as field|
    |"Directions" as a CTA|
    |"<Purpose of Visit>" as field|
    And User should be able to see an option to reschedule the appointment
    And User should be able to see an option to cancel the appointment

  @BDDTEST-EPP-6863
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to schedule appointments
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to schedule appointments

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view Appointment widget in the dashboard
    When User clicks on “Schedule Appointment” CTA from patient portal
    Then User navigates to a screen to search for location, select the date of appointment as well as purpose of visit and insurance
    When User lands on to the screen to search for location, select the date of appointment as well as purpose of visit and insurance
    Then User should be able to view an option to search locations using City or State or Zipcode
    And User should be able to take user’s current location if enabled and list results
    And User should have the option to allow the system to detect their location (like Locate me)
    And User should be able to select the date of appointment (default today’s date)
    And User should be able to view the 'Purpose for Visit' field  (List comes from API)
    And User should be able to view the option to add their ‘Insurance Carrier’ (List comes from API)
    And User should be able to view an option to Search which when clicked will display the results
    And User should be able to view the map
    And User should be able to view the following details for the schedule appointment
    |"<Location>" as field (mandatory field)|
    |"<Date of Appointment>" as select action (mandatory field)|
    |"<Purpose of Visit>" as select action (optional field)|
    |"<Insurance Carrier>" as select action (optional field)|

  @BDDTEST-EPP-6864
  @Experian_Integration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view Appointment widget in the dashboard
    Scenario: EPIC_EPP-6500_STORY_EPP-7254 - Verify User should be able to view Appointment widget in the dashboard

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view Appointment widget in the dashboard
    And User should be able to view the upcoming appointment
    And User should be able to view the following details for the upcoming appointment
    |"<Date>" as field|
    |"<Time>" as field|
    |"<Patient’s Name>" as field|
    |"<Doctor’s Name>" as field|
    |"<Location’s address>" as field|
    |"<Location’s Phone number>" as field|
    |"Directions" as a CTA|
    |"<Purpose of Visit>" as field|
