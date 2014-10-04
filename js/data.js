(function(){
  var app = angular.module('dashboardApp',['filters']);
  
  app.controller('DashboardController', [ '$scope','$http', function($scope, $defer, $http){
    var dash = this;
    
    // Data
    
    $scope.entries = [
      {
        name: 'MEN Arena',
        multiple: 0.6,
        unit: '£',
        before: true
      },
      {
        name: 'Old Trafford',
        multiple: 0.9,
        unit: 'people',
        before: false
      }
    ];
    
    // Interval Function

    var now = new Date();
    var then = new Date('October 15, 2013 00:00:00');
    $scope.total = 1;
    $scope.secondTotal = (now - then)/1000; 
    setInterval( function() {
      $scope.$apply(function() {
        $scope.total = $scope.total+1;
        $scope.secondTotal = $scope.secondTotal+1;
      });
    },1000);
    
    $scope.tab = 1;
    
    $scope.selectTab = function(setTab){
      $scope.tab = setTab;
    };
    
    $scope.isSelected = function(checkTab){
      return $scope.tab === checkTab;
    };
 
  // End Controller  
  }]);
  
// End App    
})();

// Filters
angular.module('filters', []).
    filter('truncate', function () {
        return function (text) {

          if (text.length <= 6) {
                return text;
            }
            
          else if (text.length >= 7 && text.length < 9 ) {
                var end = "k";
                return parseFloat(text/1000).toFixed(2) + end;
            }
          else if (text.length == 9) {
                var end = "k";
                return parseFloat(text/1000).toFixed(0) + end;
            }
          else if (text.length == 10) {
                var end = "m";
                return parseFloat(text/1000000).toFixed(2) + end;
            }
          else if (text.length == 11) {
                var end = "m";
                return parseFloat(text/1000000).toFixed(1) + end;
            }
          else if (text.length >= 12) {
                var end = "m";
                return parseFloat(text/1000000).toFixed(0) + end;
            }
        
        };
    }).filter('num', function() {
    return function(input) {
      return parseFloat(input).toFixed(2);
    };
});
