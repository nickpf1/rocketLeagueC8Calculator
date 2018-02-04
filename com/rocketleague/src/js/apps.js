angular.module('myApp', []).controller('cratesCtrl', function($scope) {
  $scope.totalValue = function() {
    var total = 0;
    for (var i = 0; i < this.crates.length; i++) {
      total += this.crates[i].playerAmount * (.1 / this.crates[i].amount4Point1);
    }
    return total;
  };
  $scope.totalPlayerCrates = function() {
    var total = 0;
    for (var i = 0; i < this.crates.length; i++) {
      total += this.crates[i].playerAmount;
    }
    return total;
  };
  $scope.crates = [{
      name: 'Champion 4',
      amount4Point1: 3,
      playerAmount: 0
    },
    {
      name: '	Players Choice',
      amount4Point1: 4,
      playerAmount: 0
    },
    {
      name: '	Nitro',
      amount4Point1: 8,
      playerAmount: 0
    },
    {
      name: '	Champion 1',
      amount4Point1: 10,
      playerAmount: 0
    },
    {
      name: 'Champion 3',
      amount4Point1: 10,
      playerAmount: 0
    },
    {
      name: '	Champion 2',
      amount4Point1: 11,
      playerAmount: 0
    },
    {
      name: 'Velocity Crate',
      amount4Point1: 11,
      playerAmount: 0
    },
    {
      name: 'Accelerator',
      amount4Point1: 13,
      playerAmount: 0
    },
    {
      name: '	Turbo',
      amount4Point1: 14,
      playerAmount: 0
    },
    {
      name: '	Overdrive',
      amount4Point1: 25,
      playerAmount: 0
    }
  ];
});
