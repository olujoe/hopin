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

Scenario: Welcome Screen test
    Given user navigates to the Customer App page
    When user enters "John Doe" in the name field
    And user clicks on submit button
    Then Welcome to Customer App page with customer "John Doe" appears
