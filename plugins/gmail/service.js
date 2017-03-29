(function () {
	'use strict';

	var google = require('googleapis');

	function GmailService($window, $http) {
		var service = {};

		service.getNumberMail = function () {
			service.result = [];
			var gmail = new google(config.gmail.key);
			for (var account in config.gmail.accounts){
				var name = account.name;
				var temp = {};
				s = gmail.messages('label:inbox', {max: 1000});
				s.on('data', function (d) {
  					console.log(d.snippet);
					temp[name] = d.snippet.length;
					service.result.push(temp);
				})
			}
		}

		return service;
	}

	angular.module('SmartMirror')
    .factory('GmailService', GmailService);
} ());
