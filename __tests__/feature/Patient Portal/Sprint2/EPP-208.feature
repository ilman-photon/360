
Feature: Patient Portal : Patient/ Admin login using invalid credentials
  
  @BDDTEST-EPP-837
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user provides Invalid Email or Phone Number and Valid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides invalid  "<Email or Phone Number>" and valid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-838
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user  provides Valid Email or Phone Number and Invalid Password
    Given user  launch the 'XXX' url	
    And user  navigates to the Patient Portal application
    When user lands onto “Patient Login” screen	
    And user provides valid  "<Email or Phone Number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-839
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Email or Phone Number and Invalid Password
    Given user/admin user launch the 'XXX' url	
    And user/ admin user navigates to the Patient Portal application
    When user/ admin user lands onto “Patient Login” screen	
    And user provides Invalid  "<Email or Phone Number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-840
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user provides Valid Email or Phone Number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides Invalid  "<Email or Phone Number>" and valid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-841
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Valid User name and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides Registered valid  "<Email or Phone Number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-842
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user  provides Invalid Email or Phone Number and Invalid Password

    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides Registered Invalid  "<Email or Phone Number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |XXXXXXXX | YYYYYYY |

  @BDDTEST-EPP-1659
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Phone number and valid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides invalid  "<Phone number>" and valid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhonenumberXXXXXXXX |ValidYYYYYYY |

  @BDDTEST-EPP-1660
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when User provides valid Phone number and Invalid Password
    Given user  launch the 'XXX' url	
    And user  navigates to the Patient Portal application
    When user lands onto “Patient Login” screen	
    And user provides valid  "<Phone number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |ValidPhoneNumberXXXXXXXX | InvalidPasswordYYYYYYY |

  @BDDTEST-EPP-1661
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when User provides Invalid Phone number and Invalid Password
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen	
    And user provides Invalid  "<Phone number>" and Invalid "<password>" 
    And user clicks on "Login" Button
    Then user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | InvalidYYYYYYY |

  @BDDTEST-EPP-1662
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Invalid Phone number  and valid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin provides Invalid  "<Phone number>" and valid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | ValidYYYYYYY |

  @BDDTEST-EPP-1663
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Valid Phone number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen	
    And admin provides Registered valid  "<Phone number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |ValidPhone numberXXXXXXXX | InvalidPasswordYYYYYYY |

  @BDDTEST-EPP-1664
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Invalid Phone number and Invalid Password
    Given admin user launch the 'XXX' url	
    And admin user navigates to the Patient Portal application
    When admin user lands onto “Patient Login” screen		
    And admin user provides Invalid  "<Phone number>" and Invalid "<password>" 
    And admin user clicks on "Login" Button
    Then admin user should see the error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |InvalidPhoneNumberXXXXXXXX | InvalidYYYYYYY |

  @BDDTEST-EPP-1665
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with Space.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" with space "xxx yyyy@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message "Invalid Username or Password"
    
    |Email or Phone Number|Password|
    |xxx yyyy@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1666
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without @ symbol.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" without @ symbol "xxxyyyygmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxyyyygmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1667
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with two @ symbol.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with two @ symbol like "xxx@yyyy@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxx@yy@yygmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1668
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without text before @ symbol
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email without text before @ symbol like "@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    |Email or Phone Number|Password|
    |@yygmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1669
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without Domain name
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email without Domain name like "xxxxxxxxxxx@.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx@.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1670
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without .com
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email without .com like "xxxxxxxxx@gmail"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx@gmail|yyyyyyyyyyy|

  @BDDTEST-EPP-1671
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without dot.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email without dot after domain name like "xxxxxxxxx@gmailcom"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxxx@gmailcom|yyyyyyyyyyy|

  @BDDTEST-EPP-1672
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots at Email starting.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with consecutive dots at Email starting like "..xxxxxxxxx@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |..xxxxxxxxx@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1673
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots at middle for the Email ID.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with consecutive dots at middle for the Email ID like "xxxxx..xxxx@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxx..xxxxx@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1674
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots before @ symbol.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with consecutive dots before @ symbol like "xxxxxxxxx..@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx..@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1675
  @Authentication
  @Patient_Portal
  @Sprint2 
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots in domain portion
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with consecutive dots in domain portion like "xxxxxxxxx@gmail..com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail..com|yyyyyyyyyyy|

  @BDDTEST-EPP-1676
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with Special Characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with Special Characters like "xxxx%^&%%&^xxxxx@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxx%&%&^xxxxx@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1677
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email starts with dot
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email starts with dot like ".xxxxxxxxx@gmail.com"
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |.xxxxxxxxx@gmail.com|yyyyyyyyyyy|

  @BDDTEST-EPP-1678
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email ends with dot
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email ends with dot like "xxxxxxxxx@gmail.com."
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com.|yyyyyyyyyyy|

  @BDDTEST-EPP-1679
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with garbage values
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides "<Email or Phone number>" Email with garbage values like "$^^&%&GG*&^*(*kslajkjla&()("
    And user provides valid "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |$^^&%&GG*&^*(*kslajkjla&()(|yyyyyyyyyyy|

  @BDDTEST-EPP-1680
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is not accepting 7 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 7 characters in "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyy|

  @BDDTEST-EPP-1681
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is not accepting 21 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 21 characters in "<Password>"
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyyyyyyyyyyyyyyyy|

  @BDDTEST-EPP-1682
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 8 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 8 characters in "<Password>"
    And click "Login" button
    Then user should navigate to Dashboard
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyyy|

  @BDDTEST-EPP-1683
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 20 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 20 characters in "<Password>"
    And click "Login" button
    Then user should navigate to Dashboard.
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyyyyyyyyyyyyyyyyyyyyyyyy|

  @BDDTEST-EPP-1684
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 9 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 9 characters in "<Password>"
    And click "Login" button
    Then user should navigate to Dashboard
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyyyy|

  @BDDTEST-EPP-1685
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 19 characters
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user provides 19 characters in "<Password>"
    And click "Login" button
    Then user should navigate to Dashboard.
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyyyyyyyyyyyyyyyy|

  @BDDTEST-EPP-1686
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Upper case letter
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And enter the Password without 1 Upper case letter with other mandatory Password constraints.
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|yyyyy@123|

  @BDDTEST-EPP-1687
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Lower case letter
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And enter the Password without 1 Lower case letter with other mandatory Password constraints.
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|YYYYYY@1234|

  @BDDTEST-EPP-1688
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Number
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And enter the Password without 1 Number with other mandatory Password constraints.
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|Yyyyyyyyyyy@|

  @BDDTEST-EPP-1689
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Special character
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And enter the Password without 1 Special character with other mandatory Password constraints.
    And click "Login" button
    Then user should see the Appropriate error message “Invalid Username or Password”
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|Yyyyyyyyyyy1234|

  @BDDTEST-EPP-1690
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is accepting with Upper case, Lower case, Number and Special character.
    Given  user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone number>"
    And user enter the Password with Upper case, Lower case, Numbers and Special characters
    And click "Login" button
    Then user should navigate to Dashboard.
    
    |Email or Phone Number|Password|
    |xxxxxxxxx@gmail.com|Yyyyyyyy@1234|

  @BDDTEST-EPP-1691
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the user is able to see the Patient Login page without Internet connection
    Given user launch the 'XXX' url	
    When user navigates to the Patient Portal application
    And turn off the Data
    Then user should view appropriate error message

  @BDDTEST-EPP-1692
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the page is loading with in 3 seconds
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then page should load in 3 seconds

  @BDDTEST-EPP-1693
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.
    Given user user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.

  @BDDTEST-EPP-1694
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-4_STORY_EPP-208-Verify whether the error message is displaying when the service is unavailable.
    Given user user launch the 'XXX' url
    When the service is unavailable	
    And user navigates to the Patient Portal application
    And user lands on “Patient Login” screen
    Then error message '503 - Server is not ready to handle the request' should get display.
