var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var accessories = require('../lib/accessories');
var AccessoriesList = require('./lists/accessories');


var AccessoriesTab = React.createClass({
    render: function() {
        var filterType = this.props.params.filter;
        var filterValue = this.props.params.value;

        var filter = function(accessory) {
            if (filterType == 'media') return _.contains(accessory.medias, filterValue);
            if (filterType == 'brand') return accessory.brand ==  filterValue;
            return true;
        };

        return <Tab title='Accessoires'>
            <div id="tab-accessories" className="content">
                <AccessoriesList accessories={accessories.filter(filter)} />
            </div>
        </Tab>;
    }
});

module.exports = AccessoriesTab;