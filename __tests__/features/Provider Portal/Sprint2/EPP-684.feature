Feature: Provider Portal - Referring Provider registration Way 2 - via Marketing website (Provider Portal link)
  
  @BDDTEST-EPP-1785
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if an external provider is registered to the provider portal by visiting the market website.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then Using this Not a member? Create an Account "Link" external provider register to the provider portal
    
    
    
    Examples:
      |www.ecp.com|

  @BDDTEST-EPP-1786
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-684- Verify if the Register account page is open when the external provider clicks " Not a member? Create an Account "Link" in Login page
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.

  @BDDTEST-EPP-1787
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the external provider Registration  Page consists of all attributes.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.Personal information NPI#<Textfield>,First name<Textfield>,Last name<Textfield>,Birth Day< calender selector> ,Gender<Drropdown>.
    And click on the next Specialization 'Button':
    Then external provider sees the following fields.Texonomy Code<Search and type-ahead> Classification<Textfield>,Specialisation<Textfield>
    And click on the Office details 'Button'
    Then External provider sees the following fieldsPrimary Practice<Checkbox>,Practice Name<Textfield>,Address Line1<Textfield>,Address Line2<Textfield>,State<Dropdown>,City <Textfield>Zip<Numeric/special character field>,Office<Textfield>,Fax<Textfield>,Cell <Textfield>,E-mail address<Textfield> Add Practise<Link>,Remove<Link>
    
    Examples:

  @BDDTEST-EPP-1788
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the NPI# field is enabled for the external provider.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the NPI# text field, check it is a mandatory field 
    And "NPI# field is a mandatory field and Enter the inputs on the NPI# Textfield" 
    Then NPI text field accepts inputs.
    
    Examples:
    |123456780|

  @BDDTEST-EPP-1789
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the external provider enters 9-digit NPI on the NPI field then mentioned fields are auto-populated based on NPI #.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the NPI# text field
    And Enter the 9-digit NPI# Textfield 
    Then all mentioned  fields are auto-populated
    Examples:
    |123456789|

  @BDDTEST-EPP-1790
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-684- Verify if Degsination<Free Text field> is  a mandatory field
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the Designation  text field,
    And Designation field was kept blank 
    And Enter all other fields
    And clicks on the "Next spelisition button"
    Then External provider sees an error message "This is a required field" is displayed under des field "degsination field.

  @BDDTEST-EPP-1791
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Designation<Free Text field> is enabled and check External provider can able to enter the inputs in the Designation text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the Designation  "text field", check it is a mandatory field 
    When  Enter the uppercase alphabets on the Designation  "Textfield" 
    Then "Designation text field accepts" uppercase alphabets.
    And Enter the lowercase alphabet on the Designation "Textfield"
    Then "Designation text field accepts" lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then "Designation text field" accept 
    
    
    
    Examples:
    |MD/OD/DO)|

  @BDDTEST-EPP-1792
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if First Name #<Free Text field> is enabled and check External provider can able to enter the inputs in the First name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the "First name  text field", check it is a mandatory field 
    When  Enter the uppercase alphabets on the First Name  Textfield 
    Then "First name text field accept" uppercase alphabets.
    And Enter the lowercase alphabet on the First Name Textfield 
    Then "First name text field accepts" lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then "First name text field" accept 
    
    
    Examples:
    |Photon|

  @BDDTEST-EPP-1793
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if a Proper error message is displayed when the external provider first name text field is kept blank.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When the External provider Kept blank in the First name text field 
    And click on the next Specialization'Button'
    Then "This is a required field" is displayed under the First name field
    
    Examples:
    |        |

  @BDDTEST-EPP-1794
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the first name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    And Clicks on the "First name text field"
    When the External provider enters Special characters, Numbers, and combinations of special characters and numbers in the first name text field.
    Then "  Invalid format " is displayed under the First name field
    And 
    
    Examples:
    |!@#123|

  @BDDTEST-EPP-1795
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Middle Name #<Free Text field> is enabled and check External provider can able to enter the inputs in the Middle Name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When  Enter the uppercase alphabets on the Middle Name  Textfield 
    Then Middle name text field accepts uppercase alphabets.
    And Enter the lowercase alphabet on the Middle Name Textfield 
    Then Middle name text field accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then Middle name text field accept 
    
    
    
    Examples:
    |Ram |

  @BDDTEST-EPP-1796
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the Middle name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the Middle name text field.
    Then " Invalid format  " is displayed under the First name field
    And 
    
    Examples:
    |Photon#$12|

  @BDDTEST-EPP-1797
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if Last Name #<Free Text field> is enabled and check External provider can able to enter the inputs in the Last name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When the External provider clicks on the "Last name  text field", check it is a mandatory field.
    When  Enter the uppercase alphabets on the Last Name  Textfield 
    Then "Last name text field accepts" uppercase alphabets.
    And Enter the lowercase alphabet on the Last Name Textfield 
    Then "First name Last field" accepts lowercase alphabets.
    And Enter a Combination of uppercase and lowercase together.
    Then "Last name text field" accept.
    
    
    Examples:
    |Photon|

  @BDDTEST-EPP-1798
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if a Proper error message is displayed when the external provider Last name text field is kept blank.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When External provider kept blank in the Last name text field 
    And click on register button
    Then "This is a required field" is displayed under the Last  name field
    
    Examples:
    |   |

  @BDDTEST-EPP-1799
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if a Proper error message is displayed when the external provider Enter Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    special characters and numbers in the Last name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When External provider  Special characters, Numbers, and combinations of special characters and numbers in the Last name text field.
    Then "  invalid formate " error message is displayed under the Last name field
    
    
    Examples:
    |123@#$|

  @BDDTEST-EPP-1800
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the Birthday field is calendar control, and it is as per MM/DD/YYYY format.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    Then  External provider Lands on the registration page.
    When The External provider clicks on the Birthday  field.
    And enter the date in "MM/DD//YYYY" formate
    Then The Birth date is selected "MM/DD//YYYY"
    
    Examples:
    |07/20/2022|

  @BDDTEST-EPP-1801
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the "Invalid format" error message is displayed when the External provider enters dd/mm/yy format.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When The External provider clicks on the Birthday field enter (DD/MM/YYYY)as per the system date.
    Then  External provider sees an "Invalid format" error message
    Examples:
    |20/07/2022|

  @BDDTEST-EPP-1802
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the  Gender dropdown consisting following fields Male, Female, Transgender, Gender Neutral, Non-binary, Agender, Pangender, Genderqueer, Two spirit, Third gender.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When The External provider clicks on the Gender dropdown
    Then Dropdown shows values in the list "Male", "Female", "Transgender", "Gender Neutral", "Non-binary", "Agender", "Pangender", "Genderqueer"," Two spirits", and"Third gender".
    
    Examples:
    |Male|
    |Female|
    | Transgender|
    | Gender Neutral|
    | Non-binary|
    | Agender|

  @BDDTEST-EPP-1803
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the  Gender dropdown consisting  values are enabled for external provider Male, Female, Transgender, Gender Neutral, Non-binary, Agender, Pangender, Genderqueer, Two spirits, Third gender.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
    When The External provider clicks on the Gender dropdown
    And select a "Mail"
    Then Mail is selected and display in gender dropdown
    And select a "Agender",
    Then "Agender" is selected and display in gender dropdown
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

  @BDDTEST-EPP-1804
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if a Proper error message is displayed when the External provider selects a multiple genger.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"" 
    Then External provider sees the Register account page is opened in a new window
    When The External provider clicks on the Gender dropdown.
    And The External provider Tries to Select a Male and a Female both
    Then "Invalid format" message is a display
    Examples:
    |Male|Female|

  @BDDTEST-EPP-1805
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the "Taxonomy code" field is enabled for the external provider.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"" 
    Then External provider sees the Register account page is opened in a new window
    When The External provider Click on the next Specialization 'button'
    Then External provider can see the specialization page.
    And specialization page is opened 
    When the External provider clicks on the "Taxonomy code" field and passes the inputs
    Then "Taxonomy code" field is enabled and inputs are accepted.
    Examples:
    |Taxonomay code|

  @BDDTEST-EPP-1806
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the "Taxonomy code is "Auto-populated based on NPI #.
    Given External Provider Launch  the BrowserEnter Email  'XXX' URL
    When External provider  login to email by entering valid"<username>" and invalid "<password>" 
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    Examples:
    |123455667|

  @BDDTEST-EPP-1807
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the External provider can edit Auto populated"Taxonomy code"
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When the External provider clicks on the Taxonomy code field and edit the code
    Then Taxonomy code is edited
    Examples:
    |274234576532|

  @BDDTEST-EPP-1808
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the "Classification" field is Auto-populated based on Taxonomy Code.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When the External provider clicks on the Taxonomy code field and edit the code
    Then Taxonomy code is edited
    Examples:
    |274234576532|

  @BDDTEST-EPP-1809
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the error message displayed when the external provider tries to edit the "Classification" field
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Classification" field is Auto-populated based on Taxonomy Code.
    When the External provider tries to edit the "Classification" field 
    Then external provider sees Error message"" 
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1810
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the "Specialization" field is Auto-populated based on Taxonomy Code.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Specialization" field is Auto-populated based on Taxonomy Code.
    Examples:
    |Neuro apthomology|

  @BDDTEST-EPP-1811
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the error message displayed when the external provider tries to edit the "Specialization" field
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When The External provider Enter NPI in the NPI field
    Then  "Taxonomy code" is Auto-populated based on NPI #.
    When "Taxonomy code" is filled in the "Taxonomy code" field
    Then the "Specialization" field is Auto-populated based on Taxonomy Code.
    When the External provider tries to edit the "Specialization" field 
    Then external provider sees an Error message 
    Examples:
    |XXXXXXX|

  @BDDTEST-EPP-1812
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Practise Name<Free Text field> is enabled and check External provider can able to enter the inputs in the Notes name text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details "'Button'"
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox
    Then Primary Practice '"checkbox'" is checked. 
    When the External provider clicks on the Practise Name text field, check it is a mandatory field.
    Then Practice name is a mandatory field
    When External provider Enter the uppercase and Lowercase  alphabets on the Practise Name Textfield 
    Then "Practise Name text field" accepts uppercase and lowercase alphabets.
    And External provider Enter the Special characters  on the Practise Name Textfield 
    Then "Practise Name field" accepts special characters.
    And Enter a Combination of special characters, uppercase and lowercase together.
    Then "Practise Name text field" accepts.
    
    Examples:
    |Practise Name|

  @BDDTEST-EPP-1813
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Address line-1<Type-ahead dropdown - text field> is enabled and the External provider starts to type the address, dropdown should display the complete address options
    hould display the complete address options
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox.
    Then Primary Practice 'checkbox' is checked. 
    When External provider Enter the uppercase and Lowercase  alphabets on the Address line-1 Textfield 
    Then Practise Name text field accepts uppercase and lowercase Combinations of special characters, uppercase and lowercase together.
    When the external provider starts to type the address, the dropdown should display the complete address options
    Then External provider can choose from the dropdown 
    Examples:
    |XXXXX|
    |YYY-3456|
    |zzzz|

  @BDDTEST-EPP-1814
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the external provider should also be able to provide a complete address on his own, without choosing from dropdown.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider checked the Primary Practice checkbox
    Then Primary Practice 'checkbox' is checked. 
    When the external provider starts to type the address, on his own, without choosing from the dropdown
    Then Address field accepts entered address. 
    Examples:
    |XXXXX|

  @BDDTEST-EPP-1815
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Address line-2<Type-ahead dropdown - text field> is enabled and the External provider starts to type the address, dropdown should display the complete address options
    should display the complete address options
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
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
    |YYYYY|

  @BDDTEST-EPP-1816
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the "State" dropdown is enabled for the external provider.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When The External provider Clicks on the State "dropdown" and checks it is a mandatory field.
    Then state values are displayed.
    When The External provider selects a "y" vale from the state dropdown.
    Then "y" Value is selected.
    Examples:
    |Values|

  @BDDTEST-EPP-1817
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the full address is selected from the dropdown, the state field is auto-populated
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window.
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider selects an address from the dropdown 
    Then the state field is auto-populated 
    
    Examples:
    |Values|

  @BDDTEST-EPP-1818
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the "City" field is enabled for the external provider.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When External provider Enter the uppercase and Lowercase alphabets Combinations of special characters, uppercase and lowercase together.Address city Textfield 
    Then City text field accepts uppercase and lowercase Combinations of special characters, uppercase and lowercase together.
    
    Examples:
    |City|

  @BDDTEST-EPP-1819
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the If a full address is selected from the dropdown, the city field is auto-populated
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider selects an address from the dropdown 
    Then the city field is auto-populated 
    Examples:
    |City|

  @BDDTEST-EPP-1820
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Zip< Text field> is enabled and check External provider can able to enter the inputs in the Zip field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
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
    |23456|

  @BDDTEST-EPP-1821
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the proper error message is displayed when the external provider enters alphabets in Zip< field>.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Zip field 
    Then External provider sees an "Invalid format" error message.
    Examples:
    |Abgdgt

  @BDDTEST-EPP-1822
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the Error message - "This is a required field" is displayed under that ZIP field when the external provider kept blank space in the zip field
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the blank space on the Zip field 
    Then External provider sees the Error message - "This is a required field"
    Examples:
    |      |

  @BDDTEST-EPP-1823
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Office< Text field> is enabled and check External provider can able to enter the inputs in the office field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Numbers on the office field 
    Then office field accepts Numbers.
    And External provider Enter the Special characters  on the  office field
    Then office field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then "office field" accepts.
    
    Examples:
    |234567@#|

  @BDDTEST-EPP-1824
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the proper error message is displayed when the external provider enters alphabets in Office< field>.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Office field 
    Then External provider sees an "Invalid format" error message.
    Examples:
    |sdjgsdug|

  @BDDTEST-EPP-1825
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if Fax < Text field> is enabled and check External provider can able to enter the inputs in the Fax field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider clicks on the Fax field, check it is a mandatory field 
    When the External provider Enter the 10 Numbers on the Fax field 
    Then the Fax field accepts Numbers.
    And External provider Enter the Special characters  on the A Fax field
    Then Fax field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then the Fax field accepts.
    
    Examples:
    |1234567890|

  @BDDTEST-EPP-1826
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if Fax < Text field> is Auto-populated and editable
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Fax field is auto-populated.
    When the External provider clicks on the fax field.
    And edit the Fax number.
    Then the Fax is edited.
    Examples:
    |1234567890|

  @BDDTEST-EPP-1827
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if the proper error message is displayed when the external provider enters alphabets in the Fax < field>.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabets on the Fax field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |agfutred|

  @BDDTEST-EPP-1828
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Cell < Text field> is enabled and check External provider can able to enter the inputs in the Cell field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the 10 Numbers on the Cell field 
    Then the Cell field accepts Numbers.
    And External provider Enter the Special characters  on the  Cell field
    Then Cell field accepts special characters.
    And Enter a Combination of special characters and numbers
    Then the Cell field accepts.
    
    Examples:
    |1234567890|

  @BDDTEST-EPP-1829
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Cell < Text field> is Auto-populated and editable
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window.
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

  @BDDTEST-EPP-1830
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the proper error message is displayed when the external provider enters alphabets in the Cell < field>.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the Alphabet on the Cell field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |agfutred|

  @BDDTEST-EPP-1831
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Email<Text field> is enabled and check External provider can able to enter the inputs in the Email text field.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
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
    |amith.b@photon.com|

  @BDDTEST-EPP-1832
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Email address< Text field> is Auto-populated and editable
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
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

  @BDDTEST-EPP-1833
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the proper error message is displayed when the external provider enters an invalid Email address formate
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Enter the invalid Email address formate on the Email address field 
    Then the External provider sees an error message"Invalid format"
    Examples:
    |XX@hh.com agfutred|

  @BDDTEST-EPP-1834
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the external provider can add maximum 5 practices by clicking Add Practice<Link> 
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Add Practice<Link>. 
    Then External provider sees ,Practice Name<Textfield>,Address Line1<Textfield>,Address Line2<Textfield>,State<Dropdown>,City <Textfield>Zip<Numeric/special character field>,Office<Textfield>,Fax<Textfield>,Cell <Textfield>,E-mail address<Textfield> Add Practise<Link>,Remove<Link> external provider fill all fields.like external provider add up to 5 practice
    
    Examples:
    |Add Practice|

  @BDDTEST-EPP-1835
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the Add Practice<Link> is disabled after adding 5 successful practices.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider Add 5 successful practices Practice<Link>. 
    Then  Add Practice<Link> is disabled 
    
    Examples:
    |Add Practice|

  @BDDTEST-EPP-1836
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the external provider can be able to remove Practise by clicking Remove Practice<Link>
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the External provider clicks on Remove Practice<Link>. 
    Then already filled practice is removed.
    
    Examples:
    |Add Practice|

  @BDDTEST-EPP-1837
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-Verify if Register <Button> is enabled for external provider
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When the External provider fills all the mandatory fields. 
    And click on the Register button.
    Then External provider receives a set password email.
    
    
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1838
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if the proper error message is displayed when the external provider kept all fields blank and clicks on Register <Button>
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When the External provider kept blank all the fields. 
    And click on the Register button.
    Then External provider sees error meassage ""This is a required field" is displayed under that field.
    
    
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1839
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if all fields are erased when the external provider refreshes the browser
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When the External provider fill all fields. 
    And refresh the browser.
    Then the External provider sees all fields are erased.
    
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1840
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if a 503 Service unavailable message  displays when the external provider tries to register when the server is on maintenance
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    And switch off the server
    And Click on the Registration "<link>".
    Then External provider sees the error message "503 Service unavailable "
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1841
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if the registration page is opened within 3 seconds.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then registration page is opened within 3 or less than 3 seconds.
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1842
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-   Verify if the external provider can register using a mobile phone
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    Then registration page is opened within 3 or less than 3 seconds.
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1843
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if the first name text field accepts 1 to 250 alphabet
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When the External provider clicks on the First name  text field and enters 1 alphabet
    Then First name text field accepts 1 alphabet. 
    When the External provider clicks on the First name  text field and enters 2 alphabet
    Then First name text field accepts 2 alphabets. 
    When the External provider clicks on the First name  text field and enters 250 alphabet
    Then First name text field accepts 250 alphabets. 
    When the External provider clicks on the First name  text field and enters 249 alphabet
    Then First name text field accepts 249 alphabets. 
    Examples:
    |  |

  @BDDTEST-EPP-1844
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-684-  Verify if the first name text field should not accept less than 1 and more than 251 alphabets.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When the External provider clicks on the First name  text field and enters 0 alphabet 
    And clicks on the next specialization 
    Then external provider sees an error message this is the required field. 
    When the External provider clicks on the First name  text field tries to enter 251 alphabet
    Then First name text field is not allowed to enter  251 alphabets.

  @BDDTEST-EPP-1845
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-  Verify if the last name text field accepts 1 to 250 alphabet
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
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

  @BDDTEST-EPP-1846
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-684-  Verify if the last name text field should not accept less than 1 and more than 251 alphabets.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When the External provider clicks on the last  name  text field and enters 0 alphabet 
    And clicks on the next specialization 
    Then external provider sees an error message this is the required field. 
    When the External provider clicks on the last name  text field try to enter 251 alphabet
    Then last name text field is not allowed to enter  251 alphabets.

  @BDDTEST-EPP-1847
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify if Cell < Text field> should not accept less than 10 numbers
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When External prover enter Personal Information and Specialization 
    And clicks on the next Office Details 'Button'
    Then External provider sees the Office details page
    When the external provider enters Primary practice.
    Then the Cell field is auto-populated.
    When the External provider clicks on the cell field.
    And enter the 9 numbers.
    Then external provider sees an error message "this is the required field".
    Examples:
    |XXXXXX|

  @BDDTEST-EPP-1848
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-684- Verify if Fax < Text field> should not accept less than 10 numbers


  @BDDTEST-EPP-1849
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify that if the proper error message is displayed when  the external provider enters a less than 9 digit  on the NPI field,
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    When the External provider clicks on the NPI# text field
    And Enter the 9-digit NPI# Textfield 
    Then external provider sees the error message
    Examples:
    |123456789|

  @BDDTEST-EPP-1850
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684-   Verify if check your internet connection message displays when the external provider tries to register without an internet connection.
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    And switch off the internet connection
    And Click on the Registration link.
    Then External provider sees the error message "check your internet connection"
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1851
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP- 684-Verify if the external provider  is able to view Dev Tools When F12 is clicked
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    And clicks on "F12" key  in the keyboard 
    Then external provider must "validate" whether the Dev Tools are Displayed
    
    
    Examples:
    |  |

  @BDDTEST-EPP-1852
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-684- Verify that if all mandatory fields are consisting astric (*) symbol
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link" 
    Then External provider sees the Register account page is opened in a new window
    And check astric * symbol is present in all required fields
    Then the astric symbol is present in all required fields
    Examples:
    |First Name *|

  @BDDTEST-EPP-1853
  @@Regression
  @Authentication
  @Provider_Portal
  @sprint2
  Scenario Outline: Verify if after successful registration external provider receives a message “Your registration details have been submitted successfully and sent for approval to ECP You will receive an email once your registration request is processed.” 
    Given Open the Browser Enter 'XXX' URL
    When Navigate to the provider portal login page
    And clicks on 'Not a member? Create an Account "Link"
    Then External provider sees the Register account page is opened in a new window
    When external providers enter all the fields
    And clicks on the "Register" button
    Then External provider sees the message“Your registration details have been submitted successfully and sent for approval to ECP. You will receive an email once your registration request is processed.” 
    Examples:
