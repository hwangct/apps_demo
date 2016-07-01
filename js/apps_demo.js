var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
	  when('/demo1', {
		  templateUrl: 'html/demo1.html',
		  controller: 'DemoController',
		  msg: 'This demo is based off of material design, and utilizes the materialize platform. A higher level of effort is required for integration, but provides a lot of UX+UI out of the box.'
			  
	  }).
	  when('/demo2', {
		  templateUrl: 'html/demo2.html',
		  controller: 'DemoController',
		  msg: "This demo uses custom code, but is inspired from other designs. There aren't any dependencies, but everything must be written, including the responsiveness of the layout."
	  }).
	  when('/demo3', {
		  templateUrl: 'html/demo3.html',
		  controller: 'DemoController',
		  msg: "This demo is based off the original design. There aren't any dependencies, but everything must be written, including the responsiveness of the layout. "
	  }).
	  otherwise({
		  redirectTo: '/demo1'
	  });
}]);

sampleApp.controller('DemoController', function($scope, $routeParams) {
	// Business Logic
	$scope.message = $routeParams.msg;
	$scope.gotoLink = function(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	$scope.apps = [ 
      {
		  "Title": "One App",
		  "SubTitle" : "Search Engine",
		  "Img": "logo1.png",
		  "Icon": "search",
		  "Link": "https://google.com",
		  "Desc": "This is a search engine.  We will call it....Google."
	  },
	  {
		  "Title": "Two App",
		  "SubTitle" : "Appstore",
		  "Img": "logo2.png",
		  "Icon": "polymer",
		  "Link": "https://angularjs.org",
		  "Desc": "This app is actually written in Angular used to showcase a list of apps, although our team is currently learning Angular2 and React."
	  },
	  {
		  "Title": "Three App",
		  "SubTitle" : "Photoshop Suite",
		  "Img": "logo3.png",
		  "Icon": "power_settings_new",
		  "Link": "https://adobe.com",
		  "Desc": "These are the old-school tools of design, but still frequently used today. "
	  },
	  {
		  "Title": "Four App",
		  "SubTitle" : "Sharepoint 2016",
		  "Img": "logo4.png",
		  "Icon": "repeat_one",
		  "Link": "https://products.office.com/en-us/sharepoint/sharepoint-2013-overview-collaboration-software-features",
		  "Desc": "Much of what we do revolves around Sharepoint.  Can you believe 2016 is coming out already?"
	  },
	  {
		  "Title": "Lifestyle App",
		  "SubTitle" : "Fitness Magazine",
		  "Img": "logo5.png",
		  "Icon": "sort_by_alpha",
		  "Link": "http://www.fitnessmagazine.com/",
		  "Desc": "If you want to be fit, this is the app for you.  Stop being lazy, and just do it."
	  },
	  {
		  "Title": "News App",
		  "SubTitle" : "World News",
		  "Img": "logo6.png",
		  "Icon": "language",
		  "Link": "https://www.cnn.com/",
		  "Desc": "Check out up to date world news at CNN.  With the world at your fingertips, who needs to leave the house?"
	  },
	  {
		  "Title": "Sports App",
		  "SubTitle" : "ESPN",
		  "Img": "logo7.png",
		  "Icon": "settings_bluetooth",
		  "Link": "http://www.espn.com/",
		  "Desc": "This app is all about sports, and how to present tremendous amounts of repetitive data."
	  },
	  {
		  "Title": "Entertainment App",
		  "SubTitle" : "ET Online",
		  "Img": "logo8.png",
		  "Icon": "perm_device_information",
		  "Link": "http://www.eonline.com/",
		  "Desc": "Read about celebrities, gossip, and a whole lot of other stuff that nobody cares about."
	  },
	  {
		  "Title": "Knowledge",
		  "SubTitle" : "Wikipedia",
		  "Img": "logo9.png",
		  "Icon": "aspect_ratio",
		  "Link": "https://en.wikipedia.org",
		  "Desc": "This is an encylopedia of information, and is updated frequently by the community."
	  }
	];
});
