const fs = require('fs');
const path = require('path');

const testDataPath = path.join(__dirname, './data/testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

const exampleRows = testData
  .map(({ testCaseName, projectName, taskName, columnName, tags }) =>
    `    | ${testCaseName} | ${projectName} | ${taskName} | ${columnName} | ${tags.join(', ')} |`
  )
  .join('\n');

const featureFilePath = path.join(__dirname, './features/taskVerification.feature');
const featureTemplate = `Feature: Data-Driven Task Verification

  Scenario Outline: <testCaseName>
    Given I have logged in
    When I select the project "<projectName>"
    Then I check the column "<columnName>" for the task "<taskName>"
    And I see the tags "<tags>"

  Examples:
    | testCaseName  | projectName  | taskName  | columnName  | tags  |
${exampleRows}
`;

fs.writeFileSync(featureFilePath, featureTemplate);
