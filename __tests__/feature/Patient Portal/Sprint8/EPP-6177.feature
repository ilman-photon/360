
Feature: Patient Portal : Form Customization (Documents/ Forms) - Fill up form and submit

  @BDDTEST-EPP-7041
  @Form_Customization
  @Patient_Portal
  @Regression
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field when open e-form Authorization to Disclose Information about my Care
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see field that open to edit
    And user fill on that field below
    |Name (All 3)
    |Relationship(All 3)
    |Phone Number(All 3)
    |Is there any protected health information you would like to exclude from disclosure to the parties listed above? If yes, fill in here: <Open Field>

  @BDDTEST-EPP-7042
  @Form_Customization
  @Patient_Portal
  @Regression
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field when open e-form Consent to Treat Minor
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see field that open to edit
    And user fill on that field below
    |Babysitter/ Guardian Name
    |Parent’s telephone number
    |Person’s to contact in emergency name (All 2)
    |Phone (All 2)
    |Medical Concerns or any learning disabilities
    |Known allergies
    |Health Insurance Plan (name and number)
    |Father 
    |Mother
    |Business Phone (All 2)
    |Home Phone (All 2)
    |Address(All 2)
    |City/ State/ Zip(All 2)

  @BDDTEST-EPP-7043
  @Form_Customization
  @Patient_Portal
  @Regression
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field  when open e-form Consent Form_Update 04.2022
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see field that open to edit
    And user fill on that field below
    |Relationship
    |Person to be Named as Agent
    |Relationship (Under Electronic Communication)
    |Relationship (Under Designation of Agent section)

  @BDDTEST-EPP-7044
  @Form_Customization
  @Patient_Portal
  @Regression
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6177 - Verify User should be able to edit some field  when open e-form Consent Form_Update 04.2022_V3
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see field that open to edit
    And user fill on that field below
    |Relationship
    |Relationship (Under Electronic Communication)
    |Relationship (Under Designation of Agent section)
