var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
	  when('/demo1', {
		  templateUrl: 'html/demo1.html',
		  controller: 'Demo1Controller'
	  }).
	  when('/demo2', {
		  templateUrl: 'html/demo2.html',
		  controller: 'Demo2Controller'
	  }).
	  when('/demo3', {
		  templateUrl: 'html/demo3.html',
		  controller: 'Demo3Controller'
	  }).
	  otherwise({
		  redirectTo: '/demo1'
	  });
}]);

sampleApp.controller('Demo1Controller', function($scope, $routeParams) {
	// Business Logic
	$scope.apps = [
	  {
		  "Title": "Dean's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Ben's App",
		  "Link": "https://angularjs.org",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Neva's App",
		  "Link": "https://adobe.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Troy's App",
		  "Link": "https://products.office.com/en-us/sharepoint/sharepoint-2013-overview-collaboration-software-features",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Gary's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Tom's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Toni's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Chris's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  },
	  {
		  "Title": "Todd's App",
		  "Link": "https://google.com",
		  "Desc": "This is a custom app.  It does all kinds of cool stuff."
	  }
	]
	$scope.message = "This demo is based off of material design, and utilizes the materialize platform. A higher level of effort is required for integration, but provides a lot of UX+UI out of the box.";
});
sampleApp.controller('Demo2Controller', function($scope, $routeParams) {
	// Business Logic
	$scope.message = "This demo uses custom code, but is inspired from other designs. There aren't any dependencies, but everything must be written, including the responsiveness of the layout.";
});
sampleApp.controller('Demo3Controller', function($scope, $routeParams) {
	// Business Logic
	$scope.message = "This demo is based off the original design. There aren't any dependencies, but everything must be written, including the responsiveness of the layout.";
});