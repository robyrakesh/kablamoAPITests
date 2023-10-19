const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.bankofcanada.ca/valet',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
