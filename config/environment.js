/* jshint node: true */

module.exports = function(environment) {
  var ENV = {

    modulePrefix: 'ember-sb-agency',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyAyQE2ENLThjZ85rpxB5IacdbuZT_Xrarg",
      authDomain: "venturekpq-webapp-ember.firebaseapp.com",
      databaseURL: "https://venturekpq-webapp-ember.firebaseio.com",
      projectId: "venturekpq-webapp-ember",
      storageBucket: "venturekpq-webapp-ember.appspot.com",
      messagingSenderId: "474131581392"
    },

    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
        EXTEND_PROTOTYPES: {
            // Prevent Ember Data from overriding Date.parse.
            Date: false
        }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
