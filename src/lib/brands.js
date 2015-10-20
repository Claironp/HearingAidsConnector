var list = require('./list');
var data = require('../data/brands');

module.exports = list(data, {
    searchFields: ['title', 'description']
});

