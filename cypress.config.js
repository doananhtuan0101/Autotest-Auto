const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./cypress/e2e/**.*",
    baseUrl: 'https://dev.d5061kxtvgna4.amplifyapp.com/vi/abcd1234',
    
  },

  // defaultCommandTimeout: 2000

});
