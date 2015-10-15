var React = require('react');
var Tab = require('./tab');

var accessories = require('../lib/accessories');

var Accessory = React.createClass({
    propTypes: {
        id: React.PropTypes.string
    },

    render: function() {
        var accessory = accessories.get(this.props.params.id);
        if (!accessory) return <Tab></Tab>;

        return <Tab title={accessory.title} backTo="/accessories" backLabel="Back">

        </Tab>;
    }
});

module.exports = Accessory;
