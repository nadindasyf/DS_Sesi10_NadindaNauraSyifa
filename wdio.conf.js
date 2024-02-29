require('dotenv/config');
require('@babel/register');

exports.config = {
  // Specify the address of your WebDriver server
  path: '/',
    port: 9515,
  specs: [
    './features/*.feature' // Path to the feature files
  ],
  services: ['chromedriver'],
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com/',

  // Cucumber configuration
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./step-definitions/*.js'], // Path to step definitions
    backtrace: false,
    compiler: ['@babel/register'], // Use @babel/register directly
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  // Hooks configuration
  onPrepare: function () {
    // Code to be run before the tests start
  },

  onComplete: function () {
    // Code to be run after all tests are finished
  },

  // Other configurations as needed
};
