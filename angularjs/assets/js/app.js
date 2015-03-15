(function(exports) {
    angular.module("ngAppAssignment", []).controller("assignmentController", [ "$scope", function($scope) {
        $scope.user = {
            firstname: "Daniel",
            lastname: "Meltesen",
            city: "Ågård",
            website: "www.DanielMeltesen.dk",
            cv: "www.DanielMeltesen.dk"
        };
        $scope.list = {
            "1": {
                title: "Grene Danmark A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2015
            },
            "2": {
                title: "P.Grene A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2014
            },
            "3": {
                title: "P.Grene A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2013
            },
            "4": {
                title: "P.Grene A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2012
            },
            "5": {
                title: "P.Grene A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2011
            },
            "6": {
                title: "P.Grene A/S",
                desc: "Frontend Designer/Udvikler",
                year: 2010
            },
            "7": {
                title: "Fastansat lærervikar",
                desc: "Askov Malt Skole",
                year: 2009
            },
            "8": {
                title: "Værnepligtig",
                desc: "Kamptropperne Holstebro",
                year: 2009
            },
            "9": {
                title: "Praktik",
                desc: "Birch Reklame",
                year: 2008
            },
            "10": {
                title: "MultimedieDesigner",
                desc: "Århus Erhvervsakademi",
                year: 2008
            },
            "11": {
                title: "Proff. Basketballspiller",
                desc: "Bakken Bears",
                year: 2008
            },
            "12": {
                title: "MultimedieDesigner",
                desc: "Århus Erhvervsakademi",
                year: 2007
            },
            "13": {
                title: "Proff. Basketballspiller",
                desc: "Bakken Bears",
                year: 2007
            },
            "14": {
                title: "Studerende / Spiller",
                desc: "University of Regina",
                year: 2007
            },
            "15": {
                title: "Studerende / Spiller",
                desc: "University of Regina",
                year: 2006
            },
            "16": {
                title: "Proff. Basketballspiller",
                desc: "Bakken Bears",
                year: 2005
            },
            "17": {
                title: "Proff. Basketballspiller",
                desc: "Bakken Bears",
                year: 2004
            },
            "18": {
                title: "Proff. Basketballspiller",
                desc: "Bakken Bears",
                year: 2003
            },
            "19": {
                title: "Student",
                desc: "Rosborg Amtsgymnasium",
                year: 2003
            }
        };
        $scope.filteredList = $scope.list;
        function options() {
            $scope.yearsList = _.uniq(_.pluck($scope.list, "year"));
            console.log($scope.yearsList);
        }
        options();
        $scope.updateList = function(year) {
            if (year) {
                $scope.filteredList = _.where($scope.list, {
                    year: year
                });
            } else {
                $scope.filteredList = $scope.list;
            }
        };
    } ]);
})(window);