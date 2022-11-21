Feature: Patient Portal: Admin – View locked accounts –Sort option

  @BDDTEST-EPP-10218
  @Admin
  @P3
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to view the list of patients sorted by latest locked date by default
    Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to view the list of patients sorted by latest locked date by default

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the option to sort the list by 
    |Patient Name| 
    |Email|
    |Phone|
    |Patient ID|
    |Locked Date & Time|
    When User clicks on sort option
    Then User should be able to see the list sorted 
    When The page is loaded
    And User should be able to view the list of patients sorted by latest locked date by default

  @BDDTEST-EPP-10219
  @Admin
  @P3
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to see the list sorted 
    Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to see the list sorted 

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the option to sort the list by 
    |Patient Name| 
    |Email|
    |Phone|
    |Patient ID|
    |Locked Date & Time|
    When User clicks on sort option
    Then User should be able to see the list sorted

  @BDDTEST-EPP-10220
  @Admin
  @P3
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to view the option to sort the list by Patient Name, Email, Phone, Patient ID and Locked Date & Time
    Scenario: EPIC_EPP-29_STORY_EPP-7518- Verify User should be able to view the option to sort the list by Patient Name, Email, Phone, Patient ID and Locked Date & Time

    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the option to sort the list by 
    |Patient Name| 
    |Email|
    |Phone|
    |Patient ID|
    |Locked Date & Time|
