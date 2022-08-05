Feature: As a referring provider, I should be able to know, if the invitation sent by ECP for registering to provider portal is cancelled by the ECP, upon accessing the link. 

  @BDDTEST-EPP-716
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259- Verify if Admin can cancel the registration invitation link of the not-yet registered external provider.
    Given ECP Admin Launch  the Browser Enter 'XXX' URL
    When ECP Admin  enter valid "<username>" and "<password>" 
    And click on login "button"
    Then ECP Admin Lands on the Main ECP 360+ Dashboard Page. 
    When ECP Admin selects a not yet registered "Z" external provider and cancels the registration Invitation link.
    Then Registration invitation link is disabled for the "Z" external provider.
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-717
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259- Verify if the "Sorry! The invitation is not valid. Please contact the ECP customer support for assistance ." message is displayed when the external provider clicks on the Registration invitation link.
    Given ECP Admin Launch  the Browser Enter 'XXX' URL
    When ECP Admin  enter valid "<username>" and "<password>" 
    And click on login "button"
    Then ECP Admin Lands on the Main ECP 360+ Dashboard Page. 
    When ECP Admin selects a not yet registered "Z" external provider and cancels the registration Invitation link.
    Then Registration invitation link is disabled for the "Z" external provider.
    When External provider Login to email by enter valid "<username>" and "<password>" 
    Then External provider sees the "Email" Home page.
    And click on Inbox
    Then External provider sees the Registration invitation email
    When the External provider clicks on the Registration link
    Then "Sorry! The invitation is not valid. Please contact the ECP customer support for assistance ." message is displayed
    Examples:
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-718
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259-  Verify if the registered external provider account is deactivated when the Admin cancels the registration link sent by ECP.
    Given ECP Admin Launch  the Browser Enter 'XXX' URL
    When ECP Admin  enter valid "<username>" and "<password>" 
    And click on login "button"
    Then ECP Admin Lands on the Main ECP 360+ Dashboard Page. 
    When ECP Admin selects a  registered "Z" external provider and cancels the registration Invitation link.
    Then check "Z" external provider account is deactivated.
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1743
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259- Verify if the Internal provider can cancel the registration invitation link of the not-yet registered external provider.
    Given internal provider Launch  the Browser Enter 'XXX' URL
    When internal provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then the internal provider Lands on the Main ECP 360+ Dashboard Page. 
    And login to the provider portal by using SSO.
    When the internal provider selects a not yet registered "Z" external provider and cancels the registration Invitation link.
    Then Internal providers don't have access to cancel the registration link
    Examples:
    |xxxxx.|

  @BDDTEST-EPP-1744
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259- Verify if internal staff can cancel the registration invitation link of the not-yet registered external provider.
    Given internal provider Launch  the Browser Enter 'XXX' URL
    When internal provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then the internal provider Lands on the Main ECP 360+ Dashboard Page. 
    And login to the provider portal by using SSO.
    When the internal provider selects a not yet registered "Z" external provider and cancels the registration Invitation link.
    Then Registration invitation link is disabled for the "Z" external provider.
    Examples:
    |xxxxx.|

  @BDDTEST-EPP-1745
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-259- Verify if Internal provider  can cancel the registration invitation link of the not-yet registered external provider.
    Given Admin Launch  the Browser Enter 'XXX' URL
    When  enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then the Admin Lands on the Main ECP 360+ Dashboard Page. 
    And login to the provider portal by using SSO.
    And switch off the internet.
    When the Admin selects a not yet registered "Z" external provider and cancels the registration Invitation link.
    Then Registration invitation link is not disabled for the "Z" external provider.
    Examples:
    |xxxxx.|
