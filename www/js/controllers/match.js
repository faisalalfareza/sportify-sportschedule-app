angular
    .module('livein')
    .controller('match', match)
    .controller('matchDetail', matchDetail)
    // .controller('teamDetail', teamDetail)

function match($scope, $stateParams, $ionicLoading, $filter, $state, $location, $rootScope) {
    // vm = $scope;

    $scope.detail = function(matchId) {
        $state.go("app.matchDetail", { matchId });
        // $location.path('/match/detail');
    }

    // $ionicLoading.show({ template: $filter('transla1te')('loading') + "...", duration: 2000 });

    // $scope.cat = [
    //     { 'categoryValue': 'freeteam', 'categoryName': 'Free team' },
    //     { 'categoryValue': 'premiumteam', 'categoryName': 'Premium team' }
    // ];

    $rootScope.matchData = [
        { 'matchId': 1, 'matchDate': 'August 7, 2017 at 7pm', 'matchLocation': 'Futsal Court Malang', 'matchName': 'Lets Futsal', 'sportCategory': 'Futsal', 'teamHost': 'Team A' },
        { 'matchId': 2, 'matchDate': 'August 7, 2017 at 7pm', 'matchLocation': 'Basket Court Malang', 'matchName': 'Lets Badminton', 'sportCategory': 'Badminton', 'teamHost': 'Team B' },
        { 'matchId': 3, 'matchDate': 'August 7, 2017 at 7pm', 'matchLocation': 'Badminton Court Malang', 'matchName': 'Lets Basketball', 'sportCategory': 'Basketball', 'teamHost': 'Team C' },
        { 'matchId': 4, 'matchDate': 'August 7, 2017 at 7pm', 'matchLocation': 'Volley Court Malang', 'matchName': 'Lets Volleyball', 'sportCategory': 'Volleyball', 'teamHost': 'Team D' },
    ];
}

function matchDetail($scope, $state, $ionicPopup, $stateParams, $rootScope) {

    $rootScope.matchData.forEach(function(val) {
        if (val.matchId == $stateParams.matchId) {
            $scope.matchName = val.matchName;
            $scope.matchDate = val.matchDate;
            $scope.matchLocation = val.matchLocation;
            $scope.teamHost = val.teamHost;
        }
    });

    $scope.lala = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Information',
            template: 'Your team joined this match, see you!',
            cssClass: 'alertPopup'
        });
        alertPopup.then(function(res) {
            console.log('abc');
        });
    };


}