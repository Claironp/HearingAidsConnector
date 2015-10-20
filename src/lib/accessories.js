var _ = require('lodash');
var accessoriesList = require('../data/accessories');

module.exports = {
    get: function(id) {
        return _.find(accessoriesList, {
            id: id
        });
    },

    search: function(q) {
        q = q.toLowerCase();

        return _.filter(accessoriesList, function(accessory) {
            var text = [
                accessory.title,
                accessory.description
            ].join(' ').toLowerCase();

            return text.indexOf(q) >= 0;
        });
    },

    filter: function(filter) {
        return _.filter(accessoriesList, filter);
    },

    all: function() {
        return accessoriesList;
    }
};
