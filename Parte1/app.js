angular.module('products', ['products.controllers', 'products.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/home.html"
	})
	.when('/products', {
		templateUrl: "views/products.html",
		controller: 'listController as list'
	})
	.when('/product/:id', {
		templateUrl: "views/product.html",
		controller: 'editController as product'
	})
	.when('/new', {
		templateUrl: "views/product.html",
		controller: 'addController as product'
	})
	.otherwise({
		redirectTo: '/'
	});

	var config = {
    apiKey: "AIzaSyB7BRHqy5Dy08GKtGyn4vYpPACHOfZY66g",
    authDomain: "project-4188714469695216961.firebaseapp.com",
    databaseURL: "https://project-4188714469695216961.firebaseio.com",
    storageBucket: "project-4188714469695216961.appspot.com",
  };
  firebase.initializeApp(config);
});

