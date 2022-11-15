
Feature: Patient Portal : Doctor/ Optometrist Bio - Schedule Appointment
  User Story: As a user, I should be able to schedule an appointment with the provider from doctor/ optometrist bio screen

  @BDDTEST-EPP-5553
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |

  @BDDTEST-EPP-5554
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on any of the doctor/ optometrist listed to view their bio

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |

  @BDDTEST-EPP-5555
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on the option to schedule appointment from the doctor/ optometrist bio screen

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen

  @BDDTEST-EPP-5556
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location

  @BDDTEST-EPP-5557
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view today’s date as the date searched

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched

  @BDDTEST-EPP-5558
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of providers

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    Then User should be able to view the list of providers on the results in schedule appointment screen

  @BDDTEST-EPP-5559
  @My_Care_Team
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    Then User should be able to view the list of providers on the results in schedule appointment screen
    And User should be able to go through the process of scheduling the appointment from patient portal with that provider

  @BDDTEST-EPP-5560
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider - within 3 seconds

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    Then User should be able to view the list of providers on the results in schedule appointment screen
    And User should be able to go through the process of scheduling the appointment from patient portal with that provider
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-5561
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1543 - Verify User should not see the any errors script when user clicks F12 on the console - when user got redirected to schedule appointment  at top

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    Then User should be able to view the list of providers on the results in schedule appointment screen
    And User should be able to go through the process of scheduling the appointment from patient portal with that provider
    And User should see the page loads within 3 seconds
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-5562
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user got redirected to schedule appointment  at top

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5563
  @My_Care_Team
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when user got redirected to schedule appointment  at top

    Given User launch Patient Portal url
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Doctors/ Optometrists"  menu
    When User selects the "Doctors/ Optometrists" menu
    Then User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists
    And User should be see the list of doctors/ optometrist they have consulted with the following details
      | Doctor’s Image                     |
      | "Doctor’s Name with degree>" field |
    When User clicks on any of the doctor/ optometrist listed there
    Then User should be able to view the following fields below:
      | "<About>" field as "Short Bio of the provider with Name and Image"                                                                                                                                  |
      | "<Specialties >" field as "Specialities of the provider (Eg. OPT,OPH)"                                                                                                                              |
      | "<Sub-specialities>" field as "Sub-specialities of the provider (Cataract, Glaucoma etc..)"                                                                                                         |
      | "<Gender>" field as "Gender of the provider"                                                                                                                                                        |
      | "<Languages>" field as "Languages the provider speaks"                                                                                                                                              |
      | "<In-network Insurances>" field as "Insurances that are in their network"                                                                                                                           |
      | "<Location>" field as "Address of the location with ‘Get directions’ CTA which would redirect the user to maps - Doctor might have two locations (Primary & Secondary) - Secondary is nice to have" |
      | "<Education>" field as "Education qualification of the provider"                                                                                                                                    |
      | "<Memberships and Affiliations>" field as "Memberships and Affiliations of the provider"                                                                                                            |
      | "<Ratings (reviewinc is the source)>" field as "Ratings for that Provider"                                                                                                                          |
    When User clicks on the option to schedule appointment from the doctor/ optometrist bio screen
    Then User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location
    And User should be able to view today’s date as the date searched
    When The provider from whose bio user got redirected to schedule appointment  at top
    And the service is unavailable
    Then user should see the appropriate error messager
