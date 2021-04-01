(function () {
    'use strict';
     
    var app = angular.module('maguro', []);

    app.controller('storeController', function ($scope) {
        $scope.sushiorder = [
            {
                name: 'Maguro',
                price: 200,
                description: 'Fat Tuna',
                canPurchase: true,
                dateto: new Date('2014-04-15'),
                quantity: 0,
                image: 'https://golfapipol.github.io/angularjs-th/image/sushi/maguro.jpg'
            },
            {
                name: 'Tamago',
                price: 120,
                description: 'Rice With Egg',
                canPurchase: true,
                dateto: new Date('2014-04-15'),
                quantity: 0,
                image: 'https://golfapipol.github.io/angularjs-th/image/sushi/tamago.jpg'
            },
            {
                name: 'Ebi',
                price: 150,
                description:'Rice With shrimp',
                canPurchase: true,
                dateto: new Date('2014-04-15'),
                quantity: 0,
                image: 'https://golfapipol.github.io/angularjs-th/image/sushi/ebi.jpg'
            },
            {
                name: 'Tako',
                price: 180,
                description:'Rice With Octopus',
                canPurchase: true,
                dateto: new Date('2014-04-15'),
                quantity: 0,
                image: 'https://golfapipol.github.io/angularjs-th/image/sushi/tako.jpg'

            }];
            $scope.purchase = function (item) {
                if (item.quantity > 0) {
                    return true;
                } else {
                    return false;
                }
            };
            $scope.clickAdd = function (item) {
                item.quantity += 1;
            };
            $scope.clickRemove = function (item) {
                if (item.quantity > 0) {
                    item.quantity -= 1;
                    return true;
                } else {
                    return false;   
                }
            };              
    });
     
})();