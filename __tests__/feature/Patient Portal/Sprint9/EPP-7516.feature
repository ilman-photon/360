@BDDSTORY-EPP-7516
@Admin
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal: Admin – View locked accounts
  User Story: As an admin, I should be able to view the list of all locked accounts of patients  

  GIVEN
  User has logged into the patient portal 

  And 

  User is logged in as Admin 

  WHEN
  User lands on the view locked accounts screen 

   THEN
  User should be able to view the list of all locked accounts of patients along with below details, 

  | Field               | Details                                         |
  |---------------------|-------------------------------------------------|
  | Patient Name        | First name and last name of patient             |
  |---------------------|-------------------------------------------------|
  | Patient ID          | EMR ID of patient                               |
  |---------------------|-------------------------------------------------|
  | Email ID            | Email ID of patient                             |
  |---------------------|-------------------------------------------------|
  | Phone Number        | Phone number of patient                         |
  |---------------------|-------------------------------------------------|
  | Locked date & time  | Date and time on which the account is locked    |
  |---------------------|-------------------------------------------------|
  | Status              | Current status of the patients account (Locked) |

  And 

  User should be able to view the list sorted by latest date and time first by default 

  And 

  User should be able to view Unlock CTA  

  And 

  User should be able to view Send password reset link CTA  

  And  

  User should be able to view the options for search


  And  

  User should be able to view the options for sort  

  And

  User should be able to view a maximum of 10 line items in one page and pagination should start from 11th item 

  And 

  User should be able to view the message “There are no locked accounts.” when there are no locked accounts available 

  @BDDTEST-EPP-10139
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-29_STORY_EPP-7516- Verify admin should be able to view the list of all locked accounts of patients along with details
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|

  @BDDTEST-EPP-10140
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7516- Verify User should be able to view the list sorted by latest date and time first by default 
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|
    And User should be able to view the list sorted by latest date and time first by default

  @BDDTEST-EPP-10141
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7516- Verify User should be able to view a maximum of 10 line items in one page and pagination should start from 11th item 
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|
    And User should be able to view the list sorted by latest date and time first by default 
    And User should be able to view Unlock CTA  
    And User should be able to view the options for search
    And User should be able to view the options for sort 
    And ser should be able to view a maximum of 10 line items in one page and pagination should start from 11th item

  @BDDTEST-EPP-10142
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7516- Verify User should be able to view the options for search
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|
    And User should be able to view the list sorted by latest date and time first by default 
    And User should be able to view Unlock CTA  
    And User should be able to view the options for search"

  @BDDTEST-EPP-10143
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7516- Verify User should be able to view Unlock CTA  
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|
    And User should be able to view the list sorted by latest date and time first by default 
    And User should be able to view Unlock CTA

  @BDDTEST-EPP-10145
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7516- Verify User should be able to view the message “There are no locked accounts."
    Given User has logged into the patient portal 
    And User launch Patient Portal url		
    And User is logged in as admin
    When User lands on the view locked accounts screen 
    Then User should be able to view the list of all locked accounts of patients along with below details
    |Patient Name as First name and last name of patient|
    |Patient ID as EMR ID of patient|
    |Email ID as Email ID of patient|
    |Locked date & time as Date and time on which the account is locked|
    |Status as Current status of the patients account (Locked)|
    And User should be able to view the list sorted by latest date and time first by default 
    And User should be able to view Unlock CTA  
    And User should be able to view the options for search
    And User should be able to view the options for sort 
    And ser should be able to view a maximum of 10 line items in one page and pagination should start from 11th item 
    When There are no locked accounts available 
    Then User should be able to view the message “There are no locked accounts.”
