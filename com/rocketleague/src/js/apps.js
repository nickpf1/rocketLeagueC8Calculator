angular.module('myApp', []).controller('cratesCtrl', function($scope) {
  $scope.totalValue = function() {
    var total = 0;
    for (var i = 0; i < this.crates.length; i++) {
      total += this.crates[i].playerAmount * (1 / this.crates[i].oneXamount);
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
      oneXamount: 30,
      playerAmount: 0
    },
    {
      name: 'Players Choice',
      oneXamount: 40,
      playerAmount: 0
    },
    {
      name: 'Nitro',
      oneXamount: 80,
      playerAmount: 0
    },
    {
      name: 'Champion 1',
      oneXamount: 100,
      playerAmount: 0
    },
    {
      name: 'Champion 3',
      oneXamount: 100,
      playerAmount: 0
    },
    {
      name: 'Champion 2',
      oneXamount: 110,
      playerAmount: 0
    },
    {
      name: 'Velocity Crate',
      oneXamount: 110,
      playerAmount: 0
    },
    {
      name: 'Accelerator',
      oneXamount: 130,
      playerAmount: 0
    },
    {
      name: 'Turbo',
      oneXamount: 140,
      playerAmount: 0
    },
    {
      name: 'Overdrive',
      oneXamount: 250,
      playerAmount: 0
    },
    {
      name: 'Secret Santa',
      oneXamount: 150,
      playerAmount: 0
    },
    {
      name: 'Haunted Hallows',
      oneXamount: 350,
      playerAmount: 0
    }
  ];
});
