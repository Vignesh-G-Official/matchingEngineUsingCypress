const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  //for html reports
  e2e: {
    baseUrl: 'https://www.matchingengine.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure:true;
      require('cypress-mochawesome-reporter/plugin')(on);   //for html reports
    },
  },
});
