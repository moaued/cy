const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.programsbuzz.com/user/login',
    "specPattern": "cypress/e2e/**/*.{feature,features}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
       
        
  
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
 
    
  
});
