Feature: Provider Portal - Referring Provider registration Way 1 - via Invitation link
  
  @BDDTEST-EPP-1029
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Internal ECP staff can send a Registration invitation link to the External provider through email.
    Given ECP Provider Launch  the Browser Enter 'XXX' URL
    When ECP provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then ECP provider Lands on the Main ECP 360+ Dashboard Page.
    And ECP provider wants to send the Registration link 
    And Enter the External provider Email id
    And ECP provider click on send ' button
    Then External Provider should receive the Invitation
    
    
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1030
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the external provider receives an invitation through email triggered by Internal ECP staff to initiate the registration process.
    Given External Provider Launch  the Browser Enter 'Email-XXX' URL Ex: Gmail
    When External provider enter valid "<username>" and "<password>" 
    And click on login "button"
    Then External providers see the "Email" Home page.
    And click on Inbox
    Then External provider sees the Registration invitation email.
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1031
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the registration page is opened when the external provider clicks on the registration link.
    Given External Provider Launch  the Browser Enter Email 'XXX' URL
    When External provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then External provider sees the "Email" Home page.
    And click on Inbox
    Then External provider sees the Registration invitation email
    When the External provider clicks on the Registration link
    Then the Registration page is opened in a new window.
    
    Examples:
    |Username|Password|

  @BDDTEST-EPP-1032
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-191-Verify if the external provider Registration  Page consists of all attributes.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When User provides valid "<username>" and valid "<password>" 
    And click on the login "button"
    Then External providers see the "Email" Home page.
    When the External provider clicks on the Registration link.
    Then External provider Registration page displayed with fields"
     NPI# Textfield First name Text field,Last name Textfield,
      "Birth Day calender selector Gender Drropdown"
    And click on the next Specialization "Button"
    Then external provider sees the following fields"
    Texonomy Code<Search and type-ahead> Classification<Textfield>,Specialisation<Textfield>"
    And click on the Office details 'Button'
    Then External provider sees the following fields"
    Primary Practice<Checkbox>,Practice Name<Textfield>,Address Line1<Textfield>,Address Line2<Textfield>
    "State<Dropdown>,City <Textfield>Zip<Numeric/special character field>,Office<Textfield>,Fax<Textfield>,Cell <Textfield>"
    "E-mail address<Textfield> Add Practise<Link>,Remove<Link>""Register button"

  @BDDTEST-EPP-1033
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the external provider enters NPI on the NPI field then mentioned fields are auto-populated based on NPI #.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the "NPI# text field", check it is a mandatory field 
    And Enter the inputs on the "NPI# Textfield" 
    Then NPI text field accepts inputs.
    
    Examples:
    |NPI# values| 1234567|

  @BDDTEST-EPP-1034
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if First Name #<Free Text field> is enabled and check External provider can be able to enter the inputs in the First name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the First name  text field, check it is a mandatory field 
    When  Enter the uppercase alphabets on the First Name  Textfield 
    Then "First name text field" accepts uppercase alphabets.
    And Enter the lowercase alphabet on the First Name Textfield 
    Then "First name text field" accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then "First name text field" accept 
    
    
    
    Examples:
    |Photon|

  @BDDTEST-EPP-1035
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if a Proper error message is displayed when the external provider first name text field is kept blank.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When External provider Kept blank in the First name text field 
    And click on register "Button"
    Then "This is a required field" is displayed under First name field
    
    Examples:
    |        |

  @BDDTEST-EPP-1036
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the first name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the first name text field.
    Then "  Invalid format " is displayed under the First name field
    And 
    
    Examples:
    |!@#123|

  @BDDTEST-EPP-1037
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Middle Name #<Free Text field> is enabled and check External provider can able to enter the inputs in the Middle Name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When  Enter the uppercase alphabets on the Middle Name  Textfield 
    Then Middle name text field accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Middle Name Textfield 
    Then Middle name text field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then Middle name text field accept. 
    
    
    
    Examples:
    |Ram |

  @BDDTEST-EPP-1038
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the Middle name text field.
    special characters and numbers in the Middle name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the Middle name text field.
    Then " Invalid format  " is displayed under the First name field
    
    
    Examples:
    |First name|

  @BDDTEST-EPP-1039
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if Last Name #<Free Text field> is enabled and check External provider can able to enter the inputs in the Last name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail.
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider clicks on the Last name  text field, check it is a mandatory field 
    When  Enter the uppercase alphabets on the Last Name  Textfield 
    Then Last name text field accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Last Name Textfield 
    Then First name Last field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then Last name text field accept.
    
    
    
    Examples:
    |Last Name|

  @BDDTEST-EPP-1040
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if a Proper error message is displayed when the external provider Last name text field is kept blank.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External provider kept blank in the Last name text field 
    And click on register button
    Then "This is a required field" is displayed under the Last  name field
    
    Examples:
    |    |

  @BDDTEST-EPP-1041
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    Then "  invalid formate " error message is displayed under the Last name field
    
    
    Examples:
    |123@#$|

  @BDDTEST-EPP-1042
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the Birthday field is calendar control, and it is as per MM/DD/YYYY format.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Birthday  field
    Then calendar control by default shows the month, Date, and year (MM/DD/YYYY)as per the system date.
    When The External provider Click on the year drop-down select a year
    Then Year should be selected
    And Click on the Month drop-down select a month
    Then Selected years and month are displayed with a date.
    And Select a Date from the calendar 
    Then The Birth date is selected MM/DD//YYYY
    
    Examples:
    |07/20/2022|

  @BDDTEST-EPP-1043
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the "Invalid format" error message is displayed when the External provider enters dd/mm/yy format.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Birthday field enter (DD/MM/YYYY)as per the system date.
    Then  External provider sees an "Invalid format" error message
    Examples:
    |20/07/2022|

  @BDDTEST-EPP-1044
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the External selects a gender from the Gender dropdown.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Gender dropdown
    Then Dropdown shows values are Male and Femail.
    When The External provider Select a Mail 
    Then Mail is selected.
    When an External provider Selects a Female.
    Then Femail is selected. 
    
    Examples:
    |Male|Female|

  @BDDTEST-EPP-1045
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if a Proper error message is displayed when the External provider selects a Mail and Femail gender at the same time.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Gender dropdown
    Then Dropdown shows values are Male and Femail.
    When The External provider Tries to Select a Male and a Female both
    Then "Invalid format" message is a display
    Examples:
    |Male|Female|

  @BDDTEST-EPP-1046
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the "Taxonomy code" field is enabled for the external provider.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Click on the next Specialization 'button'
    Then External provider can see the specialization page.
    When the user clicks on the "Taxonomy code" field and passes the inputs
    Then "Taxonomy code" field is enabled and inputs are accepted.
    Examples:
    |Taxonomay code|

  @BDDTEST-EPP-1047
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the "Taxonomy code is "Auto-populated based on NPI #.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    Examples:
    |Taxonomay code|

  @BDDTEST-EPP-1048
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the External provider can edit Auto populated"Taxonomy code"
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When the External provider clicks on the Taxonomy code field and edit the code
    Then Taxonomy code is edited
    Examples:
    |Taxonomay code|

  @BDDTEST-EPP-1049
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the "Classification" field is Auto-populated based on Taxonomy Code.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Classification" field is Auto-populated based on Taxonomy Code.
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1050
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the error message displayed when the external provider tries to edit the "Classification" field
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Classification" field is Auto-populated based on Taxonomy Code.
    When the External provider tries to edit the "Classification" field 
    Then external provider sees Error message 
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1051
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the "Specialization" field is Auto-populated based on Taxonomy Code.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Specialization" field is Auto-populated based on Taxonomy Code.
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1052
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the error message displayed when the external provider tries to edit the "Specialization" field
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Specialization" field is Auto-populated based on Taxonomy Code.
    When the External provider tries to edit the "Specialization" field 
    Then external provider sees an Error message 
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1053
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Practise Name<Free Text field> is enabled and check External provider can able to enter the inputs in the Notes name text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider clicks on the Practise Name text field, check it is a mandatory field.
    Then Practice name is a mandatory field
    When External provider Enter the uppercase and Lowercase  alphabets on the Practise Name Textfield 
    Then Practise Name text field accepts uppercase and lowercase alphabets.
    And External provider Enter the Special characters  on the Practise Name Textfield 
    Then Practise Name field accepts special characters.
    And Enter a Combination of special characters, uppercase and lowercase together.
    Then Practise Name text field accepts.
    
    Examples:
    |Practise Name|

  @BDDTEST-EPP-1054
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Address line-1<Type-ahead dropdown - text field> is enabled and the External provider starts to type the address, dropdown should display the complete address options
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox
    Then Primary Practice 'checkbox' is checked. 
    When External provider Enter the uppercase and Lowercase  alphabets on the Address line-1 Textfield 
    Then Practise Name text field accepts uppercase and lowercase Combinations of special characters, uppercase and lowercase together.
    When the external provider starts to type the address, the dropdown should display the complete address options
    Then External provider can choose from the dropdown 
    Examples:
    |ZZZ XXXX AAA 6457|

  @BDDTEST-EPP-1055
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the external provider should also be able to provide a complete address on his own, without choosing from dropdown.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox
    Then Primary Practice 'checkbox' is checked. 
    When the external provider starts to type the address, on his own, without choosing from the dropdown
    Then Address field accepts entered address. 
    Examples:
    |ZZZ DDD FFF %^%4545|

  @BDDTEST-EPP-1056
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Address line-2<Type-ahead dropdown - text field> is enabled and the External provider starts to type the address, dropdown should display the complete address options
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox
    Then Primary Practice 'checkbox' is checked. 
    When External provider Enter the uppercase and Lowercase  alphabets on the Address line-2 Textfield 
    Then Practise Name text field accepts uppercase and lowercase Combinations of special characters, uppercase and lowercase together.
    When the external provider starts to type the address, the dropdown should display the complete address options
    Then External provider can choose from the dropdown. 
    Examples:
    |AAS DFGRD XGDT 34354|

  @BDDTEST-EPP-1057
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the "State" dropdown is enabled for the external provider.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When The External provider Clicks on the State "dropdown" and checks it is a mandatory field.
    Then state values are displayed.
    When The External provider selects a "y" vale from the state dropdown.
    Then "y" Value is selected.
    Examples:
    |Values|

  @BDDTEST-EPP-1058
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the full address is selected from the dropdown, the state field is auto-populated
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider selects an address from the dropdown 
    Then the state field is auto-populated 
    
    Examples:
    |Values|

  @BDDTEST-EPP-1059
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the "City" field is enabled for the external provider.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When External provider Enter the uppercase and Lowercase alphabets Combinations of special characters, uppercase and lowercase together.Address city Textfield 
    Then City text field accepts uppercase and lowercase Combinations of special characters, uppercase and lowercase together.
    
    Examples:
    |City|

  @BDDTEST-EPP-1060
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the If a full address is selected from the dropdown, the city field is auto-populated
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider selects an address from the dropdown 
    Then the city field is auto-populated 
    Examples:
    |City|

  @BDDTEST-EPP-1061
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Zip< Text field> is enabled and check External provider can able to enter the inputs in the Zip field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Numbers on the Zip field 
    Then Zip field accepts Numbers.
    And External provider Enter the Special characters  on the  Zip field
    Then Zip field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then Zip field accepts.
    
    Examples:
    |234567@#|

  @BDDTEST-EPP-1062
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the proper error message is displayed when the external provider enters alphabets in Zip< field>.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Zip field 
    Then External provider sees an "Invalid format" error message.
    Examples:
    |Zip|

  @BDDTEST-EPP-1063
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the Error message - "This is a required field" is displayed under that ZIP field when the external provider kept blank space in the zip field
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the blank space on the Zip field 
    Then External provider sees the Error message - "This is a required field"
    Examples:
    |      |

  @BDDTEST-EPP-1064
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Office< Text field> is enabled and check External provider can able to enter the inputs in the office field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Numbers on the office field 
    Then office field accepts Numbers.
    And External provider Enter the Special characters  on the  office field
    Then office field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then office field accepts.
    
    Examples:
    |234567@#|

  @BDDTEST-EPP-1065
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the proper error message is displayed when the external provider enters alphabets in Office< field>.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Office field 
    Then External provider sees an "Invalid format" error message.
    Examples:
    |AAddggdfr|

  @BDDTEST-EPP-1066
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if Fax < Text field> is enabled and check External provider can able to enter the inputs in the Fax field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider clicks on the Fax field, check it is a mandatory field 
    When the External provider Enter the Numbers on the Fax field 
    Then the Fax field accepts Numbers.
    And External provider Enter the Special characters  on the A Fax field
    Then Fax field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then the Fax field accepts.
    
    Examples:
    |Fax|

  @BDDTEST-EPP-1067
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if Fax < Text field> is Auto-populated and editable
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Fax field is auto-populated.
    When the External provider clicks on the fax field.
    And edit the Fax number.
    Then the Fax is edited.
    Examples:
    |Fax|

  @BDDTEST-EPP-1068
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the proper error message is displayed when the external provider enters alphabets in the Fax < field>.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Fax field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |agfutred|

  @BDDTEST-EPP-1069
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Cell < Text field> is enabled and check External provider can able to enter the inputs in the Cell field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Numbers on the Cell field 
    Then the Cell field accepts Numbers.
    And External provider Enter the Special characters  on the A Cell field
    Then Cell field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then the Cell field accepts.
    
    Examples:
    |1233@#|

  @BDDTEST-EPP-1070
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Cell < Text field> is Auto-populated and editable
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Cell field is auto-populated.
    When the External provider clicks on the fax field.
    And edit the Cell number.
    Then the Cell is edited.
    Examples:
    |XXXXXX|

  @BDDTEST-EPP-1071
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the proper error message is displayed when the external provider enters alphabets in the Cell < field>.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Cell field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |agfutred|

  @BDDTEST-EPP-1072
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Email<Text field> is enabled and check External provider can able to enter the inputs in the Email text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When External provider Enter the uppercase and Lowercase  alphabets on the Email Textfield 
    Then E-mail text field accepts uppercase and lowercase alphabets.
    And External provider Enter the Special characters  on the Email field
    Then Email accepts special characters.
    And Enter a Combination of special characters, uppercase and lowercase together.
    Then Email text field accepts.
    When the External provider enters a Combination of Numbers, special characters, uppercase, and lowercase together.
    Then Email text field accepts.
    
    Examples:
    |Email|

  @BDDTEST-EPP-1073
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Email address< Text field> is Auto-populated and editable
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters NPI#.
    Then the Email address field is auto-populated.
    When the External provider clicks on the Email address field.
    And edit the Email address.
    Then the Email address is edited.
    Examples:
    |XXXXXX.com|

  @BDDTEST-EPP-1074
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the proper error message is displayed when the external provider enters an invalid Email address formate
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the invalid Email address formate on the Email address field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |XX@hh.com agfutred|

  @BDDTEST-EPP-1075
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the external provider can add secondary practice by clicking Add Practice<Link>
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Add Practice<Link>. 
    Then External provider sees "Practice Name<Textfield>,Address Line1<Textfield>,Address Line2<Textfield>,State<Dropdown>,City <Textfield>Zip<Numeric/special character field>,Office<Textfield>,Fax<Textfield>,Cell <Textfield>.E-mail address<Textfield> Add Practise<Link>,Remove<Link>" external provider fill all fields
    
    Examples:
    |Add Practice|

  @BDDTEST-EPP-1076
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the external provider can be able to remove Practise by clicking Remove Practice<Link>
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider clicks on Remove Practice<Link>. 
    Then already filled practice is removed.
    
    Examples:
    |Add Practice|

  @BDDTEST-EPP-1077
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if Register <Button> is enabled for external provider
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider fills all the mandatory fields. 
    And click on the Register button.
    Then External provider receives a set password email.
    
    
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1078
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the proper error message is displayed when the external provider kept all fields blank and clicks on Register <Button>
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider kept blank all the fields. 
    And click on the Register button.
    Then External provider sees error meassage ""This is a required field" is displayed under that field.
    
    
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1080
  @Authentication
  @Provider_Portal
  @sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the external provider enters NPI on the NPI field then mentioned fields are auto-populated based on NPI #. 
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider clicks on the "NPI# text field"
    And Enter the inputs on the "NPI# Textfield" 
    Then all mentioned  fields are auto-populated
    Examples:
    |NPI# values|

  @BDDTEST-EPP-1097
  @Authentication
  @Provider_Portal
  @sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if Designation<Free Text field> is is not a mandatory field
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider clicks on the Designation  text field,
    And Designation field was kept blank 
    And Enter all other fields
    And clicks on the Register button
    Then Designation field accepts blank and it is not a mandatory field.
    
    
    Examples:
    |)|

  @BDDTEST-EPP-1098
  @Authentication
  @Provider_Portal
  @sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if Designation<Free Text field> is enabled and check External provider can able to enter the inputs in the Designation text field.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider clicks on the Designation  text field, check it is a mandatory field 
    When  Enter the uppercase alphabets on the Designation  Textfield 
    Then Designation text field accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Designation Textfield 
    Then Designation text field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then Designation text field accept 
    
    
    
    Examples:
    |MD/OD/DO)|

  @BDDTEST-EPP-1513
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if all fields are erased when the external provider refreshes the browser
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider kept filling all fields. 
    And refresh the browser.
    Then the External provider sees all fields are erased.
    
    
    
    Examples:
    |Refresg the browser|

  @BDDTEST-EPP-1514
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if a 503 Service unavailable message  displays when the external provider tries to register when the server is on maintenance
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And switch off the server
    And Click on the Registration "<link>".
    Then External provider sees the error message "503 Service unavailable "
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1515
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if the registration page is opened within 3 seconds.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration "link".
    Then registration page is opened within 3 or less than 3 seconds.
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1516
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-   Verify if the external provider can register using a mobile phone
    Given External Provider Launch  the mobile Browser Enter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then registration page is opened mobile browser within 3 or less than 3 seconds.
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1517
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if the first name text field accepts 1 to 250 alphabet
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the First name  text field and enters 1 alphabet
    Then First name text field accepts 1 alphabet. 
    When the External provider clicks on the First name  text field and enters 2 alphabet
    Then First name text field accepts 2 alphabets. 
    When the External provider clicks on the First name  text field and enters 250 alphabet
    Then First name text field accepts 250 alphabets. 
    When the External provider clicks on the First name  text field and enters 249 alphabet
    Then First name text field accepts 249 alphabets. 
    Examples:
    |P|
    | ph|

  @BDDTEST-EPP-1518
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if the first name text field should not accept less than 1 and more than 251 alphabets.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the First name  text field and enters 0 alphabet 
    And clicks on the next specialization 
    Then external provider sees an error message this is the required field. 
    When the External provider clicks on the First name  text field tries to enter 251 alphabet
    Then First name text field is not allowed to enter  251 alphabets.
    Examples:
      | |

  @BDDTEST-EPP-1519
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if the last name text field accepts 1 to 250 alphabet
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the First name  text field and enters 1 alphabet
    Then last name text field accepts 1 alphabet. 
    When the External provider clicks on the last name  text field and enters 2 alphabet
    Then last name text field accepts 2 alphabets. 
    When the External provider clicks on the last name  text field and enters 250 alphabet
    Then last name text field accepts 250 alphabets. 
    When the External provider clicks on the last name  text field and enters 249 alphabet
    Then last name text field accepts 249 alphabets. 
    Examples:
    |  |

  @BDDTEST-EPP-1520
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-  Verify if the last name text field should not accept less than 1 and more than 251 alphabets.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail 
    And Click on the Registration "link".
    Then  External provider Lands on the registration page.
    When the External provider clicks on the last  name  text field and enters 0 alphabet 
    And clicks on the next specialization 
    Then external provider sees an error message this is the required field. 
    When the External provider clicks on the last name  text field try to enter 251 alphabet
    Then last name text field is not allowed to enter  251 alphabets.
    Examples:
      ||

  @BDDTEST-EPP-1521
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Cell < Text field> should not accept less than 10 numbers
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Cell field is auto-populated.
    When the External provider clicks on the cell field.
    And enter the 9 numbers.
    Then external provider sees an error message "this is the required field".
    Examples:
    |123456789|

  @BDDTEST-EPP-1522
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if Fax < Text field> should not accept less than 10 numbers
    iven External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Fax field is auto-populated.
    When the External provider clicks on the Fax field.
    And enter the 9 numbers.
    Then external provider sees an error message "this is the required field".
    Examples:
    |XXXXXX|

  @BDDTEST-EPP-1523
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the system can automatically approve external providers registering to the Portal using the link received from Admin.
    Given External Provider Launch  the Browser Enter Email 'XXX' URL
    When External provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then External provider sees the "Email" Home page.
    And click on Inbox
    Then External provider sees the Registration invitation email from Admin
    And  External provider clicks on the Registration link
    Then the Registration page is opened in a new window.
    When external providers enter all the fields
    And clicks on the "Register" "button"
    And System automatically approves the registration
    Then External provider sees the message "Your registration has been completed successfully!"
    
    Examples:
    |Username|Password

  @BDDTEST-EPP-1524
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if after successful registration external provider receives a message "A link has been sent to your registered email to create your login password. Please check.”
    Given External Provider Launch  the Browser Enter Email 'XXX' URL
    When External provider enter valid "<username>" and "<password>" 
    And click on the login "button"
    Then External provider sees the "Email" Home page.
    And click on Inbox
    Then External provider sees the Registration invitation email from Admin
    And  External provider clicks on the Registration link
    Then the Registration page is opened in a new window.
    When external providers enter all the fields
    And clicks on the "Register" button
    And System automatically approves the registration
    Then External provider sees the message “A link has been sent to your registered email to create your login password. Please check
    
    Examples:
    |http//:www.ecpsetpassword.com|

  @BDDTEST-EPP-1525
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify that if the proper error message is displayed when  the external provider enters a less than 10 digit  on the NPI field,
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When the External provider clicks on the "NPI# text field"
    And Enter the 9-digit "NPI# Textfield" 
    Then external provider sees the error message
    Examples:
    |123456789|

  @BDDTEST-EPP-1526
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-   Verify if check your internet connection message displays when the external provider tries to register without an internet connection.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And switch off the internet connection
    And Click on the Registration "link".
    Then External provider sees the error message "check your internet connection"
    
    
    Examples:
    |check your internet connection  |

  @BDDTEST-EPP-1527
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP- 191-Verify if the external provider  is able to view Dev Tools When F12 is clicked
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and valid "<password>" 
    And Open the registration invitation mail
    And switch off the internet connection
    And Click on the Registration "link".
    And clicks on "F12" key  in the keyboard 
    Then external provider must "validate" whether the Dev Tools are Displayed
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1854
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191-Verify if the  Gender dropdown consisting following fields Male, Female, Transgender, Gender Neutral, Non-binary, Agender, Pangender, Genderqueer, Two spirit, Third gender.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Gender dropdown
    Then Dropdown shows values in the list "Male", "Female", "Transgender", "Gender Neutral", "Non-binary", "Agender", "Pangender", "Genderqueer"," Two spirits", and"Third gender".
    
    Examples:
    |Male|
    |Female|
    | Transgender|
    | Gender Neutral|
    | Non-binary|
    | Agender|

  @BDDTEST-EPP-1855
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify if the  Gender dropdown consisting  values are enabled for external provider Male, Female, Transgender, Gender Neutral, Non-binary, Agender, Pangender, Genderqueer, Two spirits, Third gender.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Gender dropdown
    And select a "Mail"
    Then Mail is selected and display in gender dropdown
    And select a "Agender",display
    Then "Agender"," is selected and display in gender dropdown
    And select a "Female"
    Then "Female" is selected and display in gender dropdown
    And select a"Transgender"
    Then "Transgender" is selected and display in gender dropdown
    And select a  "Pangender""
    Then  "Pangender" is selected and display in gender dropdown
    And select a "Gender Neutral"
    Then "Gender Neutral"is selected and display in gender dropdown
    And select a"Non-binary"
    Then "Non-binary" is selected and display in gender dropdown.
    And select a"Gender Neutral"
    Then "Gender Neutral" is selected and display in gender dropdown.
    And select a"Genderqueer"
    Then "Genderqueer" is selected and display in gender dropdown.
    And select a"Two spirits"
    Then "Third gender". is selected and display in gender dropdown.
    And select a"Third gender".
    Then "Two spirits" is selected and display in gender dropdown.
    
    Examples:
    |Male|

  @BDDTEST-EPP-1856
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-191- Verify that if all mandatory fields are consisting astric (*) symbol
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    And Open the registration invitation mail
    And Click on the Registration link.
    Then  External provider Lands on the registration page.
    And check astric * symbol is present in all required fields
    Then the astric symbol is present in all required fields
    Examples:
    |First Name *|
