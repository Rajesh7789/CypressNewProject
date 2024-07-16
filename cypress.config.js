const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber())
    //  implement node event listeners here
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      specPattern: 'cypress/Integration/day_1/*.js'
      // specPattern: 'cypress/UAT/Features/*.feature',
      // specPattern: 'cypress/Assessment/evaluation4/*.js'



  },
});