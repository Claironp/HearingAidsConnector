var _ = require('lodash');
var list = require('./list');
var data = require('../data/accessories');

var accessories = list(data, {
    searchFields: ['title', 'description']
});

accessories.filterByBrand = function(brand) {
    return accessories.filter({
        brand: brand
    });
};

module.exports = accessories;
