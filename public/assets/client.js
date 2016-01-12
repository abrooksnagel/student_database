/**
 * Created by abrooksnagel on 1/12/16.
 */
var app = angular.module('myApp', []);
var sendForm = {};



app.controller("MainController", function($scope, $http) {

});

app.controller("assController", function($scope, $http){
    $scope.submitData = function(data) {
        //sendForm.name = $scope.assignment.name;
        //sendForm.number = $scope.assignment.number;
        //sendForm.score = $scope.assignment.score;
        //sendForm.date = $scope.assignment.date;
        //sendForm.pass = $scope.assignment.pass;
        //console.log(sendForm);

        return $http.post('/addAss', data);
    };

});
console.log(sendForm);