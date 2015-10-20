var list = require('./list');
var data = require('../data/medias');

module.exports = list(data, {
    searchFields: ['title']
});

