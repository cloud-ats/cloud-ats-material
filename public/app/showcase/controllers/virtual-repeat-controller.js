define(['showcase/module'], function (module) {

	'use strict';
	module.registerController('DeferredVirtualRepeatCtrl', ['$timeout', function ($timeout) {
		
		var DynamicItems = function () {
			this.loadedPages = {};

			this.numItems = 0;
			this.PAGE_SIZE = 50;
			this.fetchNumItems_();
		}

		DynamicItems.prototype.getItemAtIndex = function (index) {
			var pageNumber = Math.floor(index /this.PAGE_SIZE);
			var page = this.loadedPages[pageNumber];

			if (page) {
				return page[index % this.PAGE_SIZE];
			} else if (page !== null) {
				this.fetchPage_(pageNumber);
			}

		}

		DynamicItems.prototype.getLength = function () {
			return this.numItems;
		}

		DynamicItems.prototype.fetchPage_ = function (pageNumber) {
			this.loadedPages[pageNumber] = null;
			$timeout(angular.noop, 300).then(angular.bind(this, function () {
				this.loadedPages[pageNumber] = [];
				var pageOffset = pageNumber * this.PAGE_SIZE;

				for (var i = pageOffset; i < pageOffset + this.PAGE_SIZE; i ++) {
					this.loadedPages[pageNumber].push(i);
				}
			}));
		}

		DynamicItems.prototype.fetchNumItems_ = function () {
			$timeout(angular.noop, 300).then(angular.bind(this, function () {
				this.numItems = 50000;
			}));
		}

		this.dynamicItems = new DynamicItems();

	}])
	.registerController('HorizontalCtrl', [function () {
		this.items = [];

		for (var i = 0; i < 1000; i ++) {
			this.items.push(i);
		}

	}])
	.registerController('InfiniteScrollCtrl', ['$timeout', function ($timeout) {
		this.infiniteItems = {
			numLoaded_: 0,
			toLoad_: 0,
			getItemAtIndex: function (index) {
				if (index > this.numLoaded_) {
					this.fetMoreItems_(index);
					return null;
				}
				return index;
			},
			getLength: function () {
				return this.numLoaded_ + 5;
			},
			fetMoreItems_: function (index) {
				if (this.toLoad_ < index) {
					this.toLoad_ += 20;
					$timeout(angular.noop, 300).then(angular.bind(this, function () {
						this.numLoaded_ = this.toLoad_;
					}));
				}
			}
		}
	}])
	.registerController('ScrollToCtrl', ['$scope', function ($scope) {

		this.selectedYear = 0;
		this.years = [];
		this.items = [];
		var currentYear = new Date().getFullYear();
		var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'];
    for (var y = currentYear; y >= (currentYear - 20); y --) {
    	this.years.push(y);
    	this.items.push({year : y, text : y, header: true});

    	for (var m = 11; m >=0; m --) {
    		this.items.push({year : y, month: m, text: monthNames[m]});
    	}
    }

    $scope.$watch('ctrl.selectedYear', angular.bind(this, function (yearIndex){
    	var scrollYear = Math.floor(this.topIndex/ 13);
    	if (scrollYear !== yearIndex) {
    		this.topIndex = yearIndex * 13;
    	}
    }));

    $scope.$watch('ctrl.topIndex', angular.bind(this, function (topIndex) {
    	var scrollYear = Math.floor(topIndex /13);
    	this.selectedYear = scrollYear;
    }));
	}]);
})