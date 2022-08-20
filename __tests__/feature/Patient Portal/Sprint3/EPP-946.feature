
Feature: Patient Portal : Profile Information/ Demographics - Edit certain fields - (P2)

  @BDDTEST-EPP-2084
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Photo field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Photo" field
    And Photo will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see "Upload Photo" CTA
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    And click on "Upload Photo" CTA
    Then user is able to upload photo
    And User to choose a file from the device being used
    And once chosen, file name to be displayed
    Then user able to see "Change photo" CTA
    And click on ''Change photo'' CTA to give user the ability to change the photo
    And user to be able to change photo after upload also
    And make sure that Photo to be in "JPG" or "PNG" file formats only with File size limit of "4 MB"
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2085
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload Photo field when selecting a file other than "JPG" and "PNG" format regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Photo" field
    And Photo will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see "Upload Photo" CTA
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    And click on "Upload Photo" CTA
    And select file other than "JPG" or "PNG" file formats and click on ok
    Then it will Show error message as "Invalid file type" 
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2086
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload Photo field when selecting a file above "4 MB"regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Photo" field
    And Photo will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see "Upload Photo" CTA
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    And click on "Upload Photo" CTA
    And select a file size of above 4 MB and click on ok
    Then it will show error message
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2087
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Title field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Title" field
    And Title will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user can select any one of the Title from the dropdown
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2088
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit Name field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should not be able to edit "Name" field
    And it should be Pre-populated from Registration page/ ECP visit
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2089
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should  not be able to edit Date of Birth field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should not be able to edit "Date of Birth" field
    And it should be Pre-populated from Registration page/ ECP visit
    And it should be in the format of First name + MI (Middle Initial) + Last name
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2090
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit Age field regarding my profile information/ demographics.
    Given user launch the "XXX" url
    When user provides  "<Email or Phone Number>" and "<password>"
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should not be able to edit "Age" field
    And it should be Populated / Calculated based on Date of Birth
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2091
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Gender field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Gender" field
    And Gender will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user can select any one of the Gender from the dropdown
    And user click on "Save" button
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2092
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Preferred name field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    Then user should be able to edit "Preferred name" field
    And it will Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user can enter any of the text in the text fiel
    And user click on "Save" button
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2093
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit SSN field regarding my profile information/ demographics.
    Given user launch the "XXX" url
    When user provides  "<Email or Phone Number>" and "<password>"
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on ‘Edit’ CTA in “Personal Information” menu
    Then user should not be able to edit "SSN" field
    And it should be Pre-populated if captured during ECP visit
    And it should be in Maskable format(Only last 4 digits to be shown)
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2094
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit State Issue ID field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    Then user should be able to edit "State Issue ID" field
    And State Issue ID will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    Then user able to see "upload front" and "upload back" CTA
    And click on "upload front" CTA
    Then user is able to upload photo
    And User to choose a file from the device being used
    And once chosen, photo to be displayed
    Then user able to see ''Change file'' CTA to give user the ability to change the photo
    And click on "upload back" CTA
    Then user is able to upload photo
    And User to choose a file from the device being used
    And once chosen, photo to be displayed
    Then user able to see ''Change file'' CTA to give user the ability to change the photo
    And click on "Save" button to upload the photos
    And make sure that Photo to be in "JPG" or "PNG" file formats only with File size limit of "4 MB"
    And if u want to discard the changes click on "Cancel" button
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2095
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload State Issue ID field when selecting a file other than "JPG" and "PNG" format regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    Then user should be able to edit "State Issue ID" field
    And State Issue ID will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    And click on "upload front" CTA
    And select file other than "JPG" or "PNG" file formats and click on ok
    Then it will Show error message
    And click on "upload back" CTA
    And select file other than "JPG" or "PNG" file formats and click on ok
    Then it will Show error message as "Invalid file type"
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2096
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload State Issue ID field when selecting a file above "4 MB" regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    Then user should be able to edit "State Issue ID" field
    And State Issue ID will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated it should be editable
    And user should able to see the text “JPG or PNG file formats only. (File size limit is 4 MB)”
    And click on "upload front" CTA
    And select a file size of above 4 MB and click on ok
    Then it will Show error message
    And click on "upload back" CTA
    And select a file size of above 4 MB and click on ok
    Then it will Show error message
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2097
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the user is able to save the Personal information without Internet connection
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    When there is no internet connection available
    Then user should view appropriate error message
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2098
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the page is loading with in 3 seconds after click on save button in Personal information section
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    Then page should load in 3 seconds
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2099
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether any error is displaying when we press F12 after click on Save button in Personal information page.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2100
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the error message is displaying after click on save button in Personal information section when the service is unavailable.
    Given user user launch the "XXX" url
    When the service is unavailable	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Personal Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    Then error message '503 - Server is not ready to handle the request' should get display.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2101
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Phone number field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Phone number>" field
    And it will Pre-populated from Registration page/ ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user enter the Phone number of 10 digits
    
    
    Example:
    |Email or Phone Number|Password|Phone number|
    |xxxxxxxxxx|********|**********|

  @BDDTEST-EPP-2102
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Phone number field if provide wrong inputs regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Phone number>" field
    And it will Pre-populated from Registration page/ ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user enter the Phone number of greater than or less than 10 digits
    Then it will show error message as "Incorrect format"
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
    |Phone number|
    |******|
    |**************|

  @BDDTEST-EPP-2103
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Email id field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Email id>" field
    And it will Pre-populated from Registration page/ ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user enter the Email id
    
    
    Example:
    |Email or Phone Number|Password|Email id|
    |xxxxxxxxxx|********|xxxxxxxx@yahoo.com|

  @BDDTEST-EPP-2104
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Email id field if provide wrong inputs regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Email id>" field
    And it will Pre-populated from Registration page/ ECP visit
    And even though if it is Pre-populated then also it should be editable
    And if user enter the wrong Email id
    Then it will show error message as "Incorrect format"
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
    |Email id|
    |xxxx@yahoo|
    |xxxyahoo.com|
    |xxx@@yahoo.com|
    |xxxx@yahoocom|
    |xxxx@yahoo..com|

  @BDDTEST-EPP-2105
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Address field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on Edit CTA in “Contact Information” section
    Then user should be able to edit "<Address>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user can enter the Address
    When user starts to type address, dropdown should display the complete address options, which user can choose from
    And user should also be able to provide complete address on his own, without choosing from dropdown
    
    
    Example:
    |Email or Phone Number|Password|Address|
    |xxxxxxxxxx|********|14135 Main Street|

  @BDDTEST-EPP-2106
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Address field if provide wrong inputs regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on Edit CTA in “Contact Information” section
    Then user should be able to edit "<Address>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And if user enter the wrong Address
    Then it will show error message as "Incorrect format"
    
    Example:
    |Email or Phone Number|Password|Address|
    |xxxxxxxxxx|********|23|

  @BDDTEST-EPP-2107
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit  City field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<City>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user enter the City name
    And If 'full address' is selected from dropdown, the state field is auto-populated
    
    
    Example:
    |Email or Phone Number|Password|City|
    |xxxxxxxxxx|********|New Jersey|

  @BDDTEST-EPP-2108
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit City field if provide wrong inputs regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<City>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And if user enter the wrong City name
    Then it will show error message as "Incorrect format"
    
    Example:
    |Email or Phone Number|Password|City|
    |xxxxxxxxxx|********|1|

  @BDDTEST-EPP-2109
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit State field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "State" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user can select the State from the Dropdown
    And If 'full address' is selected from dropdown, the state field is auto-populated
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2110
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Zip field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Zip>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user can enter Zip Code has only 5 numbers
    And user click on "Save" button
    
    Example:
    |Email or Phone Number|Password|Zip code|
    |xxxxxxxxxx|********|xxxxx|

  @BDDTEST-EPP-2111
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Zip field if provide wrong inputs regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "<Zip>" field
    And it will be Pre-populated if captured during ECP visit
    And even though if it is Pre-populated then also it should be editable
    And if user enter Zip Code has of "greater than or less than 5 numbers", "Alphabets" or "Special characters"
    Then it will show error message as "Incorrect format"
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
    |Zip code|
    |2345|
    |123456|
    |12afv|
    |4@56$|
    |468.,|

  @BDDTEST-EPP-2112
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Preferred mode(s) of communication field regarding my profile information/ demographics.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    Then user should be able to edit "Preferred mode(s) of communication" field
    And it will be Pre-populated from Registration page/ ECP visit
    And even though if it is Pre-populated then also it should be editable
    And user can select any one from Radio buttons (Phone/ Email/ Both)
    And user click on "Save" button
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2113
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the user is able to save the Contact information without Internet connection
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    When there is no internet connection available
    Then user should view appropriate error message
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2114
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the page is loading with in 3 seconds after click on save button in Contact information section
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    Then page should load in 3 seconds
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2115
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether any error is displaying when we press F12 after click on Save button in Contact information page.
    Given user launch the "XXX" url	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    And press the F12 button from the keyboard.
    Then none of the javascript error should be seen by the user.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2116
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether the error message is displaying after click on save button in Contact information section when the service is unavailable.
    Given user user launch the "XXX" url
    When the service is unavailable	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then Section names to be displayed - “Personal Information”, “Contact Information”
    And user clicks on "Edit" CTA in “Contact Information” section
    And user enter the data in editable fields
    And user click on "Save" button
    Then error message '503 - Server is not ready to handle the request' should get display.
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-2117
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-8_STORY_EPP-946-Verify whether  the page is loading properly or not when refresh the page
    Given user user launch the "XXX" url
    When the service is unavailable	
    When user provides  "<Email or Phone Number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    And user clicks on the "Account" link
    And user clicks on the "My account" link
    And user clicks on “Profile Information” menu
    Then we are able to see some Pre-populated fields
    When user refresh the page
    Then Pre-populated fields data should not be erased
    And if there is any edited data, the edited data should be erased and again Pre-populated data should dispay in the fields
    
    Example:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|
