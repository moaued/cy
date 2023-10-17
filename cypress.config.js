const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.programsbuzz.com/user/logine',
    "specPattern": "cypress/e2e/**/*.{feature,features}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
      require('cypress-mochawesome-reporter/plugin')(on);
        
  
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
 
    
  
});
