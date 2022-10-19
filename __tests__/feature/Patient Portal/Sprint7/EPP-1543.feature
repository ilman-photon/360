
Feature: Patient Portal : Doctor/ Optometrist Bio - View details of Doctor/ Optometrist
  User Story: As a user, I should be able to view the doctor/ optometrist bio on selecting them.

  @BDDTEST-EPP-5546
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists
    Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists

  @BDDTEST-EPP-5547
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User clicks on any of the doctor/ optometrist listed there
    Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User clicks on any of the doctor/ optometrist listed there

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |Doctor’s Image|
    |"Doctor’s Name with degree>" field|
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
    |"<About>" field as "Short Bio of the provider with Name and Image"|
    |"<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"|
    |"<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"|
    |"<Gender>" field as "Gender of the provider"|
    |"<Languages>" field as "Languages the provider speaks"|
    |"<In-network Insurances>" field as "Insurances that are in their network"|
    |"<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have"|
    |"<Education>" field as "Education qualification of the provider"|
    |"<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"|
    |"<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"|

  @BDDTEST-EPP-5548
  @My_Care_Team
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User should be able to view an option to schedule an appointment with that provider
    Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User should be able to view an option to schedule an appointment with that provider

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |Doctor’s Image|
    |"Doctor’s Name with degree>" field|
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
    |"<About>" field as "Short Bio of the provider with Name and Image"|
    |"<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"|
    |"<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"|
    |"<Gender>" field as "Gender of the provider"|
    |"<Languages>" field as "Languages the provider speaks"|
    |"<In-network Insurances>" field as "Insurances that are in their network"|
    |"<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have"|
    |"<Education>" field as "Education qualification of the provider"|
    |"<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"|
    |"<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"|
    And User should be able to view an option to schedule an appointment with that provider

  @BDDTEST-EPP-5551
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on any of the doctor/ optometrist listed there
    Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on any of the doctor/ optometrist listed there

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |Doctor’s Image|
    |"Doctor’s Name with degree>" field|
    When User clicks on any of the doctor/ optometrist listed there
    And the Internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5552
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on any of the doctor/ optometrist listed there
    Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on any of the doctor/ optometrist listed there

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu 
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
    |Doctor’s Image|
    |"Doctor’s Name with degree>" field|
    When User clicks on any of the doctor/ optometrist listed there
    And the service is unavailable
    Then user should see the appropriate error message
