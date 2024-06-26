const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 50000,
  execTimeout: 1200000,
  taskTimeout: 1200000,
  retries:{ "runMode": 0, "openMode": 0},
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true,
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    
    "specPattern": "cypress/e2e/**/*.{feature,features}",
    "chromeWebSecurity": false,
    "chromeArgs": [
      "--ignore-certificate-errors",
      "--allow-insecure-localhost",
      "--allow-running-insecure-content",
      "--ignore-urlfetcher-cert-requests",
      "--ignore-certificate-errors-spki-list"

    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          return fs.unlinkSync(results.video);
        }
      });
      require('cypress-mochawesome-reporter/plugin')(on);
        
  
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  "env":{

    "URL": "https://gorest.co.in/public/v2/users/",
    "URL2": "https://gorest.co.in/public/v2/posts/",
    "URL3": "https://pokeapi.co/api/v2/pokemon/",
    "URL4": "https://gorest.co.in/public/v2/graphql",
    "Bearer_Rest": "e2360bb230c2fc83af7451f8346d9fcdb699879e3a8f14462a2187f9d670675e",
    "Bearer_Graph": "3df84f0ba9a2028aa6efe7519e3d73466cb301501858acabaad74119082f3b02",
  
  }
  
})
