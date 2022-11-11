Feature: Patient Portal : Messaging - Save a message as draft
  
  @BDDTEST-EPP-7540
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6144 - Verify User should see the message which is blank created on the lists of drafts
    Scenario: EPIC_EPP-23_STORY_EPP-6144 - Verify User should see the message which is blank created on the lists of drafts

    Given User launch Patient Portal url		
    When User lands on the Dashboard screen
    And User should be able to see Messaging menu
    And User clicks on Messaging menu
    Then User should be navigated to Messaging screen
    And User should be able to see "+ New Message" button
    When User clicks on "+ New Message" button
    Then User should be navigated to "New Message" modal content
    And User blank on Type a name, Subject, and Writing Message fields
    When User clicks on "Move to drafts" button
    Then User should be navigated to Messaging screen
    When User clicks on "Drafts" tab section menu
    Then User should navigated to Drafts screen
    And User should see the lists of drafts
    And User should see the message which is blank created

  @BDDTEST-EPP-7541
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-23_STORY_EPP-6144 - Verify User should see the message which is created on the lists of drafts
    Scenario: EPIC_EPP-23_STORY_EPP-6144 - Verify User should see the message which is created on the lists of drafts

    Given User launch Patient Portal url		
    When User lands on the Dashboard screen
    And User should be able to see Messaging menu
    And User clicks on Messaging menu
    Then User should be navigated to Messaging screen
    And User should be able to see "+ New Message" button
    When User clicks on "+ New Message" button
    Then User should be navigated to "New Message" modal content
    And User fills Type a name, Subject, and Writing Message fields
    When User clicks on "Move to drafts" button
    Then User should be navigated to Messaging screen
    When User clicks on "Drafts" tab section menu
    Then User should navigated to Drafts screen
    And User should see the lists of drafts
    And User should see the message which is created
