var list = require('./list');
var data = require('../data/accessories');

module.exports = list(data, {
    searchFields: ['title', 'description']
});

