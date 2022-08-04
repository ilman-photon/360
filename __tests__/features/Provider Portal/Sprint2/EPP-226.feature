Feature: As an Internal/ Referring Provider, I should be able to view and access the page where I can provide required input and recover my forgotten username 

  @BDDTEST-EPP-659
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226 Verify if the Internal provider forgot the username so the Internal provider try to recover the username
  
Given Internal provider launch the 'XXX' URL 
And Internal provider is in "Login" screen
When Internal provider clicks the forgot "username" link
Then Internal provider should see a seperate screen with a hint message "Your primary practice email id is your username" with a close button
And Internal provider should be navigated to the Sign in page after clicking the close button


@BDDTEST-EPP-660
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226 Verify if the External provider forgot the username so the External provider try to recover the username

Given External provider launch the 'XXX' URL 
And External provider is in "Login" screen
When External provider clicks the forgot "username" link
Then Internal provider should see a seperate screen with a hint message "For external provider: Your primary practice email id is your username" with a close button
And External provider should be navigated to the Sign in page after clicking the close button
  
  @BDDTEST-EPP-1549
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether internal provider can see the error message when the internet service is unavailable
  
Given internal provider launch the 'xxx' url 
And internal provider navigates to "login" page
When Internal provider clicks the "forgot username" link
Then internal provider should be prompted with an error message"Please check your connection"
  
  @BDDTEST-EPP-1550
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether Referring provider can see the error message when the internet service is unavailable
Given Referring provider launch the 'xxx' url 
And Referring provider navigates to "login" page
When Referring provider clicks the "forgot username" link
Then Referring provider should be prompted with an error message"Please check your connection"
  
  @BDDTEST-EPP-1551
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether internal provider can see the error message when the server is down

Given internal provider launch the 'xxx' url 
And internal provider navigates to "login" page
When Internal provider clicks the forgot "username" link
Then internal provider should see "Service unavailable" error message
  
  @BDDTEST-EPP-1552
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether referring provider can see the error message when the server is down

Given referring provider launch the 'xxx' url 
And referring provider navigates to "login" page
When referring provider clicks the forgot "username" link
Then referring provider should see "Service unavailable" error message
  
  
  
  @BDDTEST-EPP-1554
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether internal provider can able to view Dev Tools When F12 is clicked

Given internal provider launch the 'xxx' url 
And internal provider navigates to "login" page
When Internal provider clicks the forgot "username" link
Then Internal provider should see a seperate screen with a hint message "Your primary practice email id is your username" with a close button
When internal provider clicks the "<F12>" button 
Then internal provider must "validate" whether the Dev Tools are Displayed or not
  
  @BDDTEST-EPP-1555
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether referring provider can able to view Dev Tools When F12 is clicked

Given referring provider launch the 'xxx' url 
And referring provider navigates to "login" page
When referring provider clicks the forgot "username" link
Then referring provider should see a seperate screen with a hint message "Your primary practice email id is your username" with a close button
When referring provider clicks the "<F12>" button 
Then referring provider must "validate" whether the Dev Tools are Displayed or not
  
  
  @BDDTEST-EPP-1556
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether the forgot username page loads within 3 sec when internal provider clicks the forgot username link

Given internal provider launch the 'xxx' url 
And internal provider navigates to "login" page
When internal provider clicks the forgot "username" link
And internal provider validates whether the page loads within 3 seconds                                           
Then internal provider should see a seperate screen with a hint message "Your primary practice email id is your username" with a close button
And internal provider should be navigated to the Sign in page after clicking the close button
  
  @BDDTEST-EPP-1557
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-226- Verify whether the forgot username page loads within 3 sec when referring provider clicks the forgot username link

Given referring provider launch the 'xxx' url 
And referring provider navigates to "login" page
When referring provider clicks the forgot "username" link
And referring should validates whether the page loads within 3 seconds                                            
Then referring provider should see a seperate screen with a hint message "Your primary practice email id is your username" with a close button
And referring provider should be navigated to the "Sign in" page after clicking the close button