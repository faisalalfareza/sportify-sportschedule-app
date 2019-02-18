angular
    .module('livein')
    .controller('histories', histories);

function histories($scope, $state, $ionicSlideBoxDelegate,
    $ionicLoading, $filter, $stateParams, $localStorage, HistoryService) {

    ionic.Platform.ready(function() {});

    $scope.inprogress = 'active';

    // general tab & property tab
    var genTab = angular.element(document.querySelector('#generaltab'));
    var proTab = angular.element(document.querySelector('#propertytab'));
    genTab.addClass("active");

    $scope.general = function() {
        $ionicSlideBoxDelegate.previous();
        $scope.inprogress = 'active';
        $scope.completed = '';
    };
    $scope.property = function() {
        $ionicSlideBoxDelegate.next();
        $scope.completed = 'active';
        $scope.inprogress = '';
    };
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
        if ($scope.slideIndex == 1) {
            $scope.inprogress = '';
            $scope.completed = 'active';
        } else {
            $scope.completed = '';
            $scope.inprogress = 'active';
        }
    };

    $ionicLoading.show({ template: $filter('translate')('loading') + "...", duration: 1000 });

    $scope.inprogressList = [{
                "idhistory": "5316",
                "idcategory": "32",
                "idaccount": "1",
                "activities": "Looking for TOKOYAKI",
                "visitdate": "2017-02-14 09:53:48",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4853",
                "idcategory": "21",
                "idaccount": "1",
                "activities": "Looking for Groove fitness",
                "visitdate": "2016-12-21 15:49:14",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4846",
                "idcategory": "26",
                "idaccount": "1",
                "activities": "Looking for EMI GAMES",
                "visitdate": "2016-12-20 11:43:00",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4836",
                "idcategory": "43",
                "idaccount": "1",
                "activities": "Looking for TRIVIUM SQUARE No. 12",
                "visitdate": "2016-12-18 22:17:04",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4835",
                "idcategory": "43",
                "idaccount": "1",
                "activities": "Looking for TRIVIUM SQUARE No. 12",
                "visitdate": "2016-12-18 22:16:47",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4696",
                "idcategory": "40",
                "idaccount": "1",
                "activities": "Looking for GREENWOOD Jl Alam Indah 5  No. 16",
                "visitdate": "2016-12-13 12:53:11",
                "categoryname": "Malang"
            },
            {
                "idhistory": "4695",
                "idcategory": "40",
                "idaccount": "1",
                "activities": "Looking for TAMAN MENTENG Jl Kediri No. 10",
                "visitdate": "2016-12-13 12:48:40",
                "categoryname": "Kediri"
            },
            {
                "idhistory": "4694",
                "idcategory": "40",
                "idaccount": "1",
                "activities": "Looking for DS V Jl Pinang F 23  11 D",
                "visitdate": "2016-12-13 12:48:37",
                "categoryname": "Kediri"
            },
            {
                "idhistory": "4693",
                "idcategory": "43",
                "idaccount": "1",
                "activities": "Looking for ARCADIA MATARAM A NO. 2",
                "visitdate": "2016-12-13 12:48:34",
                "categoryname": "Kediri"
            },
            {
                "idhistory": "4692",
                "idcategory": "43",
                "idaccount": "1",
                "activities": "Looking for ARCADIA MATARAM A NO. 5",
                "visitdate": "2016-12-13 12:48:31",
                "categoryname": "Kediri"
            }

        ]
        //id account







    $scope.completedList = [{
            "idhistory": "4691",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for ARCADIA MATARAM A No 6",
            "visitdate": "2016-12-13 12:47:31",
            "categoryname": "Bangil"
        },
        {
            "idhistory": "4690",
            "idcategory": "40",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM  A NO. 11",
            "visitdate": "2016-12-13 12:47:26",
            "categoryname": "Bangil"
        },
        {
            "idhistory": "4689",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No. 3",
            "visitdate": "2016-12-13 12:47:23",
            "categoryname": "Bangil"
        },
        {
            "idhistory": "4688",
            "idcategory": "40",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No 9",
            "visitdate": "2016-12-13 12:47:21",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4687",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No 16",
            "visitdate": "2016-12-13 12:47:18",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4686",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No 19",
            "visitdate": "2016-12-13 12:47:14",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4685",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No 20 21",
            "visitdate": "2016-12-13 12:47:11",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4684",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for PODIUM MATARAM B No 22",
            "visitdate": "2016-12-13 12:47:09",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4683",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for COSMO CENTER EXT C 20",
            "visitdate": "2016-12-13 12:47:06",
            "categoryname": "Sidoarjo"
        },
        {
            "idhistory": "4682",
            "idcategory": "43",
            "idaccount": "1",
            "activities": "Looking for COSMO CENTER B 28",
            "visitdate": "2016-12-13 12:47:03",
            "categoryname": "Malang"
        }
    ]
}