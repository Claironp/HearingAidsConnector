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

        return <Tab title="Accessoire" backTo="/accessories" backLabel="Back">
            <div id="tab-accessory" className="content">
                <div className="accessory-intro">
                    <div className="content-padded">
                        <img src={accessory.image} />
                        <h3>{accessory.title}</h3>
                    </div>
                </div>
                <div className="accessory-block">
                    <p className="content-padded">{accessory.description}</p>
                </div>
            </div>
            <div className="bar bar-standard bar-footer-secondary">
                <button className="btn btn-block">Acheter</button>
            </div>
        </Tab>;
    }
});

module.exports = Accessory;
