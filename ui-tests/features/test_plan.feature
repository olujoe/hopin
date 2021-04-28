# Add your test scenarios in the Cucumber Feature file.

# Since, we are using the Cucumber (Gherkin) Full Support extension in VSCode,
# please notice the syntax highlighting and completion, while writing the scenarios.

Feature: Customers App web application is aimed to our sales people so that they can have access to our customer's contact information

# Scenario Outline: Welcome Screen test
#     Given user navigates to the Customer App page
#     When user enters <name> in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer <name> appears

# Examples:
#     | name                                                                        | 
#     | "John Doe"                                                                  | 
#     | "John_iwdbfiberfijberibfijebrvijbv Doe_iebwficberfiberiubvuiebfvubefuivbfe" |
#     | " "                                                                         | 
#     | "!@£@£$$%^%&"                                                               | 
#     | "*.*"                                                                       | 
#     | "42"                                                                        | 
#     | "Robot101"                                                                  | 
#     | ""                                                                          | 


Scenario: Welcome Screen test user name text only John Doe
    Given user navigates to the Customer App page
    When user enters "John Doe" in the name field
    When user clicks on Submit button
    And Welcome to Customer App page with customer "John Doe" appears
    Then I display any errors in the tables


Scenario: Select a company test 
    Given user navigates to the Customer App page
    When user enters "John Doe" in the name field
    And user clicks on Submit button
    When Welcome to Customer App page with customer "John Doe" appears
    Then I can view Customer Details from the list
    And I can return to the list page

# Scenario: Welcome Screen test user name text with numbers Robot101
#     Given user navigates to the Customer App page
#     When user enters "Robot101" in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer "Robot101" appears


# Scenario: Welcome Screen test user name numbers only 10101010
#     Given user navigates to the Customer App page
#     When user enters "10101010" in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer "10101010" appears


# Scenario: Welcome Screen test user name very long text only John Doe
#     Given user navigates to the Customer App page
#     When user enters "John_iwdbfiberfijberibfijebrvijbv Doe_iebwficberfiberiubvuiebfvubefuivbfe" in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer "John Doe" appears


# Scenario: Welcome Screen test no text just a single space
#     Given user navigates to the Customer App page
#     When user enters " " in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer " " appears


# Scenario: Welcome Screen test no text just a long space
#     Given user navigates to the Customer App page
#     When user enters "                                 " in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer "                                 " appears


# Scenario: Welcome Screen test other characters
#     Given user navigates to the Customer App page
#     When user enters "!@£$%^&*()_-+|" in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer "!@£$%^&*()_-+|" appears


# Scenario: Welcome Screen test no name input just clicking submit
#     Given user navigates to the Customer App page
#     And user clicks on Submit button
#     Then A pop up window appears with "Please provide your name" message
