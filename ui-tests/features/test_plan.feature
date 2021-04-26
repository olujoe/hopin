# Add your test scenarios in the Cucumber Feature file.

# Since, we are using the Cucumber (Gherkin) Full Support extension in VSCode,
# please notice the syntax highlighting and completion, while writing the scenarios.

Feature: Customers App web application is aimed to our sales people so that they can have access to our customer's contact information

# Scenario Outline: Welcome Screen test
#     Given user navigates to the Customer App page
#     When user enters <name> in the name field
#     And user clicks on Submit button
#     Then Welcome to Customer App page with customer <message> appears

# Examples:
#     | name          | message         |
#     | "John Doe"    | default message |
#     | " "           | default message |
#     | "!@£@£$$%^%&" | default message |
#     | "*.*"         | default message |
#     | "42"          | default message |
#     | "Robot101"    | default message |
#     | ""            | alert message   |


# Background:
#     Given user navigates to the Customer App page


Scenario: Welcome Screen test
    Given user navigates to the Customer App page
    When user enters "John Doe" in the name field
    And user clicks on Submit button
    Then Welcome to Customer App page with customer "John Doe" appears


Scenario: Welcome Screen test
    Given user navigates to the Customer App page
    When user enters "Robot101" in the name field
    And user clicks on Submit button
    Then Welcome to Customer App page with customer "Robot101" appears


Scenario: Welcome Screen test
    Given user navigates to the Customer App page
    When user enters " " in the name field
    And user clicks on Submit button
    Then Welcome to Customer App page with customer " " appears


Scenario: Welcome Screen test
    Given user navigates to the Customer App page
    When user enters "" in the name field
    And user clicks on Submit button
    Then Welcome to Customer App page with customer "" appears
