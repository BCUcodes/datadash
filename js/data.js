(function(){
  var app = angular.module('dashboardApp',['filters']);
  
  app.controller('DashboardController', [ '$scope','$http', function($scope, $defer, $http){
    var dash = this;
    
    // Data
    
    $scope.entries = [
      {
        name: 'Water',
        multiple: 2546,
        unit: 'litres',
        text: 'of water delivered to Manchester by the Thirlmere aqueduct from a reservoir near Keswick in the Lake District.',
        citation: 'United Utilities',
        before: false
      },
      {
        name: 'football wages',
        multiple: 4421,
        unit: '£',
        text: 'paid to players at Manchester City and United with a combined estimated annual wage bill of £382m',
        before: true
      },
      {
	    name: 'rolls',
        multiple: 0.07,
        unit: 'bread rolls',
        text: 'served at Roy\'s Rolls in Coronation Street',
        before: false
      },
      {
      	name: 'metrolink',
        multiple: 53,
        unit: 'passengers',
        text: 'board the Manchester Metrolink',
        before: false,
        nestedlink: 'of these',
        nestedmultiple: 1.325,
        nestedtext: 'didn\'t get a ticket (based on finding that 1 in 40 passengers are fare dodgers)'
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
