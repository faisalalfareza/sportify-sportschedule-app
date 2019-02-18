angular
    .module('livein')
    .controller('team', team)
    .controller('teamDetail', teamDetail)

function team($scope, $stateParams, $ionicLoading, $filter) {
    $ionicLoading.show({ template: $filter('translate')('loading') + "...", duration: 2000 });

    $scope.cat = [
        { 'categoryValue': 'freeteam', 'categoryName': 'Free team' },
        { 'categoryValue': 'premiumteam', 'categoryName': 'Premium team' }
    ];

    $scope.teamdata = [
        { 'idteam': 1, 'avatar': '', 'teamname': 'Jaguar Pink', 'interest': 'Futsal', 'team': 8, 'premium': false },
        { 'idteam': 2, 'avatar': '', 'teamname': 'PT. Junagar', 'interest': 'Badminton', 'team': 14, 'premium': true },
        { 'idteam': 3, 'avatar': '', 'teamname': 'Lekers Pagi', 'interest': 'Basketball', 'team': 7, 'premium': true },
        { 'idteam': 4, 'avatar': '', 'teamname': 'Marem Jet', 'interest': 'Futsal, Badminton', 'team': 4, 'premium': false },
        { 'idteam': 5, 'avatar': '', 'teamname': 'Gasak Dev', 'interest': 'Basketball', 'team': 9, 'premium': false },
        { 'idteam': 6, 'avatar': '', 'teamname': 'Fury pury', 'interest': 'Voly', 'team': 19, 'premium': false }
    ];
}

function teamDetail($scope, $rootScope, $stateParams, $ionicLoading, $ionicHistory, $ionicPopup) {
    $scope.teamdata = [
        { 'idteam': 1, 'avatar': '', 'teamname': 'Jaguar Pink', 'interest': 'Futsal', 'team': 8, 'premium': false, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' },
        { 'idteam': 2, 'avatar': '', 'teamname': 'PT. Junagar', 'interest': 'Badminton', 'team': 14, 'premium': true, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' },
        { 'idteam': 3, 'avatar': '', 'teamname': 'Lekers Pagi', 'interest': 'Basketball', 'team': 7, 'premium': true, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' },
        { 'idteam': 4, 'avatar': '', 'teamname': 'Marem Jet', 'interest': 'Futsal, Badminton', 'team': 4, 'premium': false, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' },
        { 'idteam': 5, 'avatar': '', 'teamname': 'Gasak Dev', 'interest': 'Basketball', 'team': 9, 'premium': false, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' },
        { 'idteam': 6, 'avatar': '', 'teamname': 'Fury pury', 'interest': 'Voly', 'team': 19, 'premium': false, 'address': 'Jl. Pondok Blimbing Indah Raya A1/12' }
    ];

    $scope.teamMembers1 = [
        { idmember: 1, name: "Alex ayaya" },
        { idmember: 2, name: "Budi.waru" },
        { idmember: 3, name: "Juhanarini" },
        { idmember: 4, name: 'Brice Maggart' },
        { idmember: 5, name: 'Star Fretwell' },
        { idmember: 6, name: 'Wilber Castro' },
        { idmember: 7, name: 'Wava Cozad' },
        { idmember: 8, name: 'Toby Lass' },
        { idmember: 9, name: 'Yesenia Zurcher' },
        { idmember: 10, name: 'Sachiko Droz' }
    ];

    $scope.teamMembers2 = [
        { idmember: 11, name: 'Titus Howery' },
        { idmember: 12, name: 'Vince Thiesen' },
        { idmember: 13, name: 'Adelaida Kazmi' },
        { idmember: 14, name: 'Leana Leman' },
        { idmember: 15, name: 'Romona Naranjo' },
        { idmember: 16, name: 'Andy Pillot' },
        { idmember: 17, name: 'Arlinda Pende' },
        { idmember: 18, name: 'Hector Pierpont' },
        { idmember: 19, name: 'Bobbi Kraft' },
        { idmember: 20, name: 'Luke Dezzutti' },
        { idmember: 21, name: 'Elvin Sadowski' },
        { idmember: 22, name: 'Valencia Landin' },
        { idmember: 23, name: 'Cleo Bryant' }
    ];

    var index = $scope.teamdata.findIndex(p => p.idteam == $stateParams.idteam);

    $scope.teamDetail = $scope.teamdata[index];

    $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
    });
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    $scope.confirmJoin = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Information',
            template: 'Join success! Wait for team confirm',
            cssClass: 'alertPopup'
        });
    };
}