function Gmail($scope, $interval, GmailService) {

	var getNumberMail = function(){
		$scope.gmail = GmailService.getNumberMail()
	}

	getNumberMail();
	$interval(getNumberMail, config.gmail.refreshInterval * 60000 || 1800000)
}

angular.module('SmartMirror')
    .controller('Gmail', Gmail);
