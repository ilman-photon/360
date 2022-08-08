Feature: As a Referring Provider / Internal Provider / Internal Staff, I should be able to view and access the page where I can provide required input and proceed to reset my login password 

  @BDDTEST-EPP-809
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-240-verify whether Internal Provider is able to click on the forgot password link
    Given user launch the 'XXX' URL 
    When  user is in "Login" screen
    Then user should see  the "forgot password" link  
    And user should clicks on the "forgot Password" link
