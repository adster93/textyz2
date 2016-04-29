(function() {
    // var homePageController = function() {
    //         var vid = document.getElementById("bgvid"),
    //             pauseButton = document.getElementById("vidpause");

    //         function vidFade() {
    //             vid.classList.add("stopfade");
    //         }
    //         vid.addEventListener('ended', function() {
    //             // only functional if "loop" is removed 
    //             vid.pause();
    //             // to capture IE10
    //             vidFade();
    //         });
    //         pauseButton.addEventListener("click", function() {
    //             vid.classList.toggle("stopfade");
    //             if (vid.paused) {
    //                 vid.play();
    //                 pauseButton.innerHTML = "Pause";
    //             } else {
    //                 vid.pause();
    //                 pauseButton.innerHTML = "Paused";
    //             }
    //         })
    //     }
        //     var CustomersController = function($scope, $log, customersFactory, appSettings) {
        //         $scope.sortBy = 'name'
        //         $scope.rev = false
        //         $scope.hello = 'hello'
        //         $scope.customers = []
        //         $scope.appSettings = appSettings;
        //         function init() {
        //             customersFactory.getCustomers().success(function(customers) {
        //                 $scope.customers = customers
        //             }).error(function(data, status, headers, config) {
        //                 //handle error
        //             })
        //         }
        //         init()
        //         $scope.doSort = function(propName) {
        //             $scope.sortBy = propName
        //             $scope.rev = !$scope.rev
        //         }
        //         $scope.deleteCustomer = function(propName){
        //             customersFactory.deleteCustomer(customerId)
        //             .success(function(status){
        //                 if(status){
        //                     for(var i =0; i<$scope.customers.length; i++){
        //                         if($scope.customers[i].id === customerId){
        //                             $scope.customers.splic(i,1);
        //                             break;
        //                         }
        //                     }
        //                 }
        //                 else {
        //                     $window.alert('Unable to delete customer')
        //                 }
        //             })
        //             .error(function(data, status, headers, config){
        //                 //show error
        //             })
        //         }
        //     }
    // angular.module('Textyz').controller('homePageController', homePageController)
}());