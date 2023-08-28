const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      // implement node event listeners here
    },
    "baseUrl":"https://wallet-life.vercel.app"
  },
  env: {
    allure: true,
    allureResultsPath: "allure-results",
    allureReuseAfterSpec: true,
    allureAttachRequests: true,
    allureClearSkippedTests: false,
    allureAddVideoOnPass: false,
  },
  chromeWebSecurity: false,
});


