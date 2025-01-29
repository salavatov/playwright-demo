Feature: Data-Driven Task Verification

  Scenario Outline: <testCaseName>
    Given I have logged in
    When I select the project "<projectName>"
    Then I check the column "<columnName>" for the task "<taskName>"
    And I see the tags "<tags>"

  Examples:
    