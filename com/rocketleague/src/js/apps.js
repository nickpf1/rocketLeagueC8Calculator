angular.module('myApp', []).controller('cratesCtrl', function($scope) {
  $scope.totalValue = function() {
    var total = 0;
    for (var i = 0; i < this.crates.length; i++) {
      total += this.crates[i].playerAmount * (1 / this.crates[i].keys);
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
  $scope.crates = [
    {
      name: 'Golden Egg',
      keys: 2,
      playerAmount: 0
    },
    {
      name: 'Golden Pumkin',
      keys: 2,
      playerAmount: 0
    },
    {
      name: 'Elevation',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Zephyr',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Impact',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Champion 4',
      keys: 2,
      playerAmount: 0
    },
    {
      name: 'Player Choice',
      keys: 11,
      playerAmount: 0
    },
    {
      name: 'Triumph',
      keys: 12,
      playerAmount: 0
    },
    {
      name: 'Nitro',
      keys: 10,
      playerAmount: 0
    },
    {
      name: 'Champion 1',
      keys: 4,
      playerAmount: 0
    },
    {
      name: 'Champion 2',
      keys: 4,
      playerAmount: 0
    },
    {
      name: 'Champion 3',
      keys: 4,
      playerAmount: 0
    },
    {
      name: 'Velocity Crate',
      keys: 16,
      playerAmount: 0
    },
    {
      name: 'Accelerator',
      keys: 24,
      playerAmount: 0
    },
    {
      name: 'Turbo',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Secret Santa',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Overdrive',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Spring Fever',
      keys: 30,
      playerAmount: 0
    },
    {
      name: 'Haunted Hallows',
      keys: 20,
      playerAmount: 0
    }
  ];
});
