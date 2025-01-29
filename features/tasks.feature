Feature: Data-Driven Task Verification

  Scenario Outline: <testCaseName>
    Given I have logged in
    When I select the project "<projectName>"
    Then I check the column "<columnName>" for the task "<taskName>"
    And I see the tags "<tags>"

  Examples:
    | testCaseName                                                   | projectName         | taskName                          | columnName   | tags                            |
    | Test Case 1 - Web Application - Implement user authentication  | Web Application     | Implement user authentication     | To Do        | Feature, High Priority          |
    | Test Case 2 - Web Application - Fix navigation bug             | Web Application     | Fix navigation bug                | To Do        | Bug                             |
    | Test Case 3 - Web Application - Design system updates          | Web Application     | Design system updates             | In Progress  | Design                          |
    | Test Case 4 - Mobile Application - Push notification system    | Mobile Application  | Push notification system          | To Do        | Feature                         |
    | Test Case 5 - Mobile Application - Offline mode                | Mobile Application  | Offline mode                      | In Progress  | Feature, High Priority          |
    | Test Case 6 - Mobile Application - App icon design             | Mobile Application  | App icon design                   | Done         | Design                          |
