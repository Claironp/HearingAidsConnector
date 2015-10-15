var _ = require('lodash');
var accessoriesList = require('../data/accessories');

module.exports = {
    get: function(id) {
        return _.find(accessoriesList, {
            id: id
        });
    },

    all: function() {
        return accessoriesList;
    }
};
