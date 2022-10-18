
Feature: Patient Portal : Share My Record/ Prescription - View
User Story: As a user, I should be able to view the option to share my record/ prescription via direct secure messaging

 

  @BDDTEST-EPP-5565
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User navigates to the screen to share their record i.e EMR
    Scenario: EPIC_EPP-20_STORY_EPP-1546 - Verify User should be navigated to the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR

  @BDDTEST-EPP-5566
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to share their record (EMR) alone from here to another practice via Secure Direct Messaging (To be confirm by client)
    Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to share their record (EMR) alone from here to another practice via Secure Direct Messaging (To be confirm by client)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User should be able to share their record (EMR) alone from here to another practise via Secure Direct Messaging (To be confirm by client)
    And User has the option to download the prescriptions which can be shared where-ever required (To be confirm by client)

  @BDDTEST-EPP-5567
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User has the option to download the prescriptions which can be shared where-ever required (To be confirm by client)
    Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User has the option to download the prescriptions which can be shared where-ever required (To be confirm by client)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User should be able to share their record (EMR) alone from here to another practise via Secure Direct Messaging (To be confirm by client)
    And User has the option to download the prescriptions which can be shared where-ever required (To be confirm by client)

  @BDDTEST-EPP-5568
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view the following verbiage with title (ECP need to confirm the verbiage)
    Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view the following verbiage with title (ECP need to confirm the verbiage)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User should be able to view the following verbiage with title (ECP to confirm the below verbiage): 
    |"“Securely Transmit Your Information to a Third Party"|
    |In order to securely transmit your health information to another medical practice we require a secure Direct Messaging Address. Please contact your doctor’s office and request this Direct Messaging Address, then enter that address as well as a subject line below.|
    |Please note that if our system cannot verify that address as secure your information will not be sent.”|

  @BDDTEST-EPP-5569
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view the following fields
    Scenario: EPIC_EPP-20_STORY_EPP-1546 - Verify User should be navigated to the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User should be able to view the following fields
    |"<Clinician’s address>" as mandatory field with Character Limmit: Format : abc@direct.placeofwork.com - check just the standard email requirements along with direct word present after '@'. |
    |"<Message subject>" as mandatory field with Character Limit:Max - 100; Min - 10 - To be confirmed|

  @BDDTEST-EPP-5570
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view an option to share the record
    Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view an option to share the record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User should be able to view the following fields
    |"<Clinician’s address>" as mandatory field with Character Limmit: Format : abc@direct.placeofwork.com - check just the standard email requirements along with direct word present after '@'. |
    |"<Message subject>" as mandatory field with Character Limit:Max - 100; Min - 10 - To be confirmed|
    And User should be able to view an option to share the record

  @BDDTEST-EPP-5571
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario Outline: EPIC_EPP-20_STORY_EPP-1546- Verify User should see the inline error message “This is a required field“ when mandatory fields are not provided
    Scenario: EPIC_EPP-20_STORY_EPP-1546- Verify User should be able to view an option to share the record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record i.e EMR
    And User emptied the "<Clinician’s address>" and "<Message subject>" fields
    And User should see the inline error message “This is a required field“ when mandatory fields are not provided

    Examples:
    |<Clinician’s address | Message subject|
    |                 |                     |
