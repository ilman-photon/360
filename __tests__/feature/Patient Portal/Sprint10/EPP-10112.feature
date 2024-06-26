
Feature: Patient Portal : Schedule Appointment from marketing site - Mandatory to select purpose of visit

  @BDDTEST-EPP-10697
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to click on the 'Schedule your Eye  Exam' CTA from Marketing site
    Given User launches the Marketing site patient portal URL
    And User should be able to click on the 'Schedule your Eye Exam' CTA from Marketing site

  @BDDTEST-EPP-10698
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to view search for location, select the date of appointment as well as purpose of visit and insurance
    Given User launches the Marketing site patient portal URL
    When  User should be able to click on the 'Schedule your Eye Exam' CTA from Marketing site
    Then  User should be able to land on the dashboard screen
    And User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance

  @BDDTEST-EPP-10699
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to select purpose of visit
    Given User launches the Marketing site patient portal URL
    When  User should be able to click on the 'Schedule your Eye Exam' CTA from Marketing site
    Then  User should be able to land on the dashboard screen
    And User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance
    And  User should be able to select purpose of visit

  @BDDTEST-EPP-10700
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-44_STORY_EPP-10112- Verify User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled
    Given User launches the Marketing site patient portal URL
    When  User should be able to click on the 'Schedule your Eye Exam' CTA from Marketing site
    Then  User should be able to land on the dashboard screen
    And User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance
    And  User should be able to select purpose of visit 
    And  User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled

  @BDDTEST-EPP-10701
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-44_STORY_EPP-10112- Verify User should not be able to create/ reschedule an appointment without selecting a ‘Purpose of Visit’
    Given User launches the Marketing site patient portal URL
    When  User should be able to click on the 'Schedule your Eye Exam' CTA from Marketing site
    Then  User should be able to land on the dashboard screen
    And User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance
    And  User should be able to select purpose of visit 
    And  User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled
    When user click on Schedule Appointment
    Then User should not be able to create/ reschedule an appointment without selecting a ‘Purpose of Visit’
