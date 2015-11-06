var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var accessories = require('../lib/accessories');
var AccessoriesList = require('./lists/accessories');


var AccessoriesTab = React.createClass({
    render: function() {
        var media = this.props.params.media;
        var brand = this.props.params.brand;

        var filter = function(accessory) {
            return (
                accessory.brand == brand
                && _.contains(accessory.medias, media)
            );
        };

        return <Tab title='Accessoires'>
            <div id="tab-accessories" className="content">
                <AccessoriesList accessories={accessories.filter(filter)} />
            </div>
        </Tab>;
    }
});

module.exports = AccessoriesTab;