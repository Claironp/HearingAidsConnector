var _ = require('lodash');
var list = require('./list');
var data = require('../data/medias');

var accessories = require('./accessories');

var medias = list(data, {
    searchFields: ['title']
});

medias.filterByBrand = function(brand) {
    var accessoriesForBrands = accessories.filterByBrand(brand);

    // Merge list of medias
    return _.chain(accessoriesForBrands)
        .pluck('medias')
        .flatten()
        .uniq()
        .map(function(media) {
            console.log(media);
            return medias.get(media);
        })
        .value();
};

module.exports = medias;
