module.exports = {
  default: {
    publishQuiet: true,
    paths: ['features/*.feature'],
    require: [
      'steps/*.steps.js',
      'steps/hooks.js'
    ],
    format: [
      'json:./allure-results/results.json'
    ],
    worldParameters: {},
  }
};
