var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var medias = require('../lib/medias');
var MediasList = require('./lists/medias');

var MediasTab = React.createClass({
    render: function() {
        var brand = this.props.params.brand;

        return <Tab title='Medias'>
            <div id="tab-accessories" className="content">
                <MediasList medias={medias.filterByBrand(brand)} />
            </div>
        </Tab>;
    }
});

module.exports = MediasTab;