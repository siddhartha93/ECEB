angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('eCEB', {
    url: '/page1',
    templateUrl: 'templates/eCEB.html',
    controller: 'eCEBCtrl'
  })

  .state('eCEBLogin', {
    url: '/',
    templateUrl: 'templates/eCEBLogin.html',
    controller: 'eCEBLoginCtrl'
  })

  .state('eCEBIndividualLogin', {
    url: '/page4',
    templateUrl: 'templates/eCEBIndividualLogin.html',
    controller: 'eCEBIndividualLoginCtrl'
  })

  .state('eCEBFacilityLogin', {
    url: '/page7',
    templateUrl: 'templates/eCEBFacilityLogin.html',
    controller: 'eCEBFacilityLoginCtrl'
  })

  .state('eCEBSignup', {
    url: '/page8',
    templateUrl: 'templates/eCEBSignup.html',
    controller: 'eCEBSignupCtrl'
  })

  .state('eCEBListOfBabies', {
    url: '/page9',
    templateUrl: 'templates/eCEBListOfBabies.html',
    controller: 'eCEBListOfBabiesCtrl'
  })

  .state('eCEBAddBabyDetails', {
    url: '/page10',
    templateUrl: 'templates/eCEBAddBabyDetails.html',
    controller: 'eCEBAddBabyDetailsCtrl'
  })

  .state('eCEBBaby1', {
    url: '/page11',
    templateUrl: 'templates/eCEBBaby1.html',
    controller: 'eCEBBaby1Ctrl'
  })

  .state('eCEBBaby12', {
    url: '/page12',
    templateUrl: 'templates/eCEBBaby12.html',
    controller: 'eCEBBaby12Ctrl'
  })

  .state('page', {
    url: '/page13',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});