Feature: As a Referring provider / Internal Provider / Internal Staff, I should be able to log out of the provider portal


  @BDDTEST-EPP-685
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292 - Verify Referring Provider should be able to logout form provider portal
    Scenario: "EPIC_EPP-7_STORY_EPP-292 - Verify Referring Provider should be able to logout form provider portal"

    Given Launch 'XXX' URL
    Then Referring Provider should see Login screen
    And Referring Provider should see "<UserName or Email>" field
    And Referring Provider should see "<password>" field
    When Referring Provider enter userName in "<UserName or Email>" field
    And Referring Provider enter password in "<password>" field
    And Referring Provider should see 'Login' button
    When Referring Provider click on 'Login' button
    Then Referring Provider should see Dashboard
    And Referring Provider should see 'Logout' button
    When Referring Provider click on 'Logout' button
    Then Referring Provider should see Login screen

    Example:
    | UserName or Email | password |
    | xxxxxxxxx | xxxxxxxxx |

  @BDDTEST-EPP-1746
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Provider should be able to logout from Provider portal


  @BDDTEST-EPP-1747
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Staff should be able to logout from patient portal


  @BDDTEST-EPP-1748
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Referring Provider is not able to logout when Internet connection is unavailable


  @BDDTEST-EPP-1749
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Provider is not able to logout when Internet connection is unavailable


  @BDDTEST-EPP-1750
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Staff is not able to logout when Internet connection is unavailable


  @BDDTEST-EPP-1751
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Referring Provider is able to view the Logout screen loaded within 3 sec


  @BDDTEST-EPP-1752
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Provider is able to view the Logout screen loaded within 3 sec


  @BDDTEST-EPP-1753
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Staff is able to view the Logout screen loaded within 3 sec


  @BDDTEST-EPP-1754
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Referring Provider is not able to logout when Service is unavailable


  @BDDTEST-EPP-1755
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Provider is not able to logout when Service is unavailable


  @BDDTEST-EPP-1756
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify Internal Staff is not able to logout when Service is unavailable


  @BDDTEST-EPP-1757
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify whether Referring Provider is able to view Dev Tools without errors when F12 is clicked


  @BDDTEST-EPP-1758
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify whether Internal Provider is able to view Dev Tools without errors when F12 is clicked


  @BDDTEST-EPP-1759
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-292-Verify whether Internal Staff is able to view Dev Tools without errors when F12 is clicked

