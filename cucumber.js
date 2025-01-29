module.exports = {
  default: {
    require: [
      'steps/**/*.steps.js',
      'steps/hooks.js'
    ],
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results",
    },
  }
};
