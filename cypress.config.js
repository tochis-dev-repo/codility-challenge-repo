// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://petstore.swagger.io/v2',  // Use env variable or fallback to default
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
