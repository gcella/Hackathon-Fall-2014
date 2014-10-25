require.config({
  paths: { 
    router: 'MainRouter', 
    moment: 'libs/moment'
  },
});

// Define the application entry point
define(['router', 'moment'], function (router, moment) {
    router.initialize();
});