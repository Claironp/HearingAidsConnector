var _ = require('lodash');
var mediasList = require('../data/medias');

module.exports = {
    get: function(id) {
        return _.find(mediasList, {
            id: id
        });
    },

    all: function() {
        return mediasList;
    }
};
