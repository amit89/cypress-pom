import { defineConfig } from 'cypress';
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';


module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  video: false,
  retries: {
    runMode: 1,
    openMode: 0
  },
  e2e: {
    env: {
      // can use allure env var here or from cmd line by
      // `npx cypress run --env allure=true` or `CYPRESS_allure=true npx cypress run`
      allure: true,
      allureCleanResults: true,
      allureAttachRequests: true
    },
    baseUrl: 'https://example.cypress.io/todo',
    specPattern: ['cypress/e2e/app/*.cy.ts'],
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      return config;
    }
  }
});
