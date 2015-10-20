var _ = require('lodash');

module.exports = function(list, opts) {
    opts = _.defaults(opts || {}, {
        searchFields: []
    });

    return {
        get: function(id) {
            return _.find(list, {
                id: id
            });
        },

        search: function(q) {
            q = q.toLowerCase();

            return _.filter(list, function(accessory) {
                var text = _.reduce(opts.searchFields, function(text, field) {
                    return text + ' '+_.get(accessory, field, '').toLowerCase();
                }, '');

                return text.indexOf(q) >= 0;
            });
        },

        filter: function(filter) {
            return _.filter(list, filter);
        },

        all: function() {
            return list;
        }
    }
};
