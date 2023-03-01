module.exports = {

  includeShadowDom: true,
  chromeWebSecurity: false,

  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.spec.ts',


    setupNodeEvents(on, config) {
    }
  },
};
