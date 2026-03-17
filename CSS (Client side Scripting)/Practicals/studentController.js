var app = angular.module("myApp", []);

app.controller("studentCtrl", function($scope){

    $scope.students = [
        {name:"Khushi", roll:3, marks:78},
        {name:"Vishal", roll:1, marks:85},
        {name:"Atharva", roll:5, marks:90},
        {name:"Anannya", roll:2, marks:70},
        {name:"Vinanti", roll:4, marks:88}
    ];

});