const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('task', {
    generateAllureReport(resultsPath) {
      return allureWriter.generateReport(resultsPath);
    },
  });

  config.env.allureResultsPath = 'allure-results'; // указываем путь к результатам
  return config;
};