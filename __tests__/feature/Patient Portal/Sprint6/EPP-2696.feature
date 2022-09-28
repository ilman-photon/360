
Feature: Patient Portal : Upcoming Tests & Procedures - View
  User Story: As a user, I should be able to view my upcoming tests & procedures
  
  @BDDTEST-EPP-4773
  @P2
  @Patient_Portal
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the patient is able to view my upcoming Test & Procedure
    Scenario: Verify whether the patient is able to view my upcoming Test & Procedure.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to upcoming Test and Procedure page.
    Then patient should see the Upcoming Test and Procedures.

  @BDDTEST-EPP-4774
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the date of procedure is displaying correctly in the Date column.
    Scenario: Verify whether the date of procedure is displaying correctly in the Date column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Date of procedure is displaying correctly.

  @BDDTEST-EPP-4775
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Time of procedure is displaying correctly in the Time column.
    Scenario : Verify whether the Time of procedure is displaying correctly in the Time column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Time of procedure is displaying correctly.

  @BDDTEST-EPP-4776
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Patient's Name is displaying correctly in the Patient's Name column.
    Scenario : Verify whether the Patient's Name is displaying correctly in the Patient's Name column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Patient's Name is displaying correctly.

  @BDDTEST-EPP-4777
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Doctor's Name is displaying correctly in the Doctor's Name column.
    Scenario : Verify whether the Doctor's Name is displaying correctly in the Doctor's Name column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Doctor's Name is displaying correctly.

  @BDDTEST-EPP-4778
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Location's address is displaying correctly in the Location's address column.
    Scenario : Verify whether the Location's address is displaying correctly in the Location's address column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Location's address is displaying correctly.

  @BDDTEST-EPP-4779
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Location's Phone number is displaying correctly in the Location's address column.
    Scenario : Verify whether the Location's Phone number is displaying correctly in the Location's Phone number column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Location's Phone number is displaying correctly.

  @BDDTEST-EPP-4780
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Direction's button is navigating to the Map screen
    Scenario : Verify whether the Direction's button is navigating to the Maps screen

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    And click the Direction button.
    Then patient should see the map of the location.

  @BDDTEST-EPP-4781
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the Test or Procedure is displaying correctly in the Test/Procedure column
    Scenario: Verify whether the Test or Procedure is displaying correctly in the Test/Procedure column.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then verify whether the Test or Procedure is displaying correctly in the Test

  @BDDTEST-EPP-4782
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696- Verify whether the message You have no upcoming tests and procedures is displaying when there is no Test or Procedure for the patient.
    Scenario: Verify whether the message You have no upcoming tests and procedures is displaying when there is no Test or Procedure for the patient.

    Given Patient Launch  the browser and enter the Patient portal URL
    When  Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And don't schedule any Test or Procedure. 
    And navigate to upcoming Test and Procedure page.
    Then patient should see the message You have no upcoming tests and procedures.

  @BDDTEST-EPP-4838
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedures
  Scenario: EPIC_EPP-13_STORY_EPP-2696 -  Verify whether the patient is able to see the below mentioned details in Upcoming Test & Procedure page.
    Scenario : Verify whether the patient is able to see the below mentioned details in Upcoming Test & Procedure page.
    
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to upcoming Test and Procedure page.
    Then verify whether the below mentioned details are displaying.
    |Date
    |Time
    |Patient's Name
    |Doctor's Name
    |Location's address
    |Location's Phone number
    |Directions
    |Test/Procedure Name
