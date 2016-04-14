(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$q', UserService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function UserService($q) {
        var users = [
            {
                name: 'Electrician',
                icon: 'fa-bolt',
                category: 'electrician'
            },
            {
                name: 'Plumber',
                icon: 'fa-wrench',
                category: 'plumber'
            },
            {
                name: 'AC',
                icon: 'fa-sun-o',
                category: 'ac'
            },
            {
                name: 'Heating',
                icon: 'fa-sun-o',
                category: 'heating'
            },
            {
                name: 'Appliances',
                icon: 'fa-plug',
                category: 'appliances'
            },
            {
                name: 'Electronics',
                icon: 'fa-tv',
                category: 'electronics'
            },
            {
                name: 'Computer',
                icon: 'fa-laptop',
                category: 'computer'
            },
            {
                name: 'Furniture',
                icon: 'fa-bed',
                category: 'furniture'
            },
            {
                name: 'Construction',
                icon: 'fa-home',
                category: 'construction'
            },
            {
                name: 'Window & Door',
                icon: 'fa-camera-retro',
                category: 'window_door'
            },
            {
                name: 'Maid',
                icon: 'fa-child',
                category: 'maid'
            },
            {
                name: 'Cleaner',
                icon: 'fa-trash',
                category: 'cleaner'
            },
            {
                name: 'Mover',
                icon: 'fa-truck',
                category: 'mover'
            },
            {
                name: 'Gardener',
                icon: 'fa-tree',
                category: 'gardener'
            }
        ];

        // Promise-based API
        return {
            loadAllUsers: function () {
                // Simulate async nature of real remote calls
                return $q.when(users);
            }
        };
    }

})();
