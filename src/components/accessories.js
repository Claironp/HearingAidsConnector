var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var accessories = require('../lib/accessories');
var AccessoriesList = require('./lists/accessories');


var AccessoriesTab = React.createClass({
    render: function() {
        return <Tab title='Accessoires'>
            <div id="tab-accessories" className="content">
                <AccessoriesList accessories={accessories.all()} />
            </div>
        </Tab>;
    }
});

module.exports = AccessoriesTab;