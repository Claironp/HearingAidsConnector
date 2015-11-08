var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Accessory = React.createClass({
    render: function() {
        var accessory = this.props.accessory;

        return <li className="table-view-cell media">
            <Link to={'/accessory/'+accessory.id} className="navigate-right">
                <div className="media-object pull-left"><img src={accessory.image} /></div>
                <div className="media-body">
                    {accessory.title}
                    <p>{accessory.description}</p>
                </div>
            </Link>
        </li>;
    }
});

var AccessoriesList = React.createClass({
    render: function() {
        return <ul className="table-view accessories-table-view">
            {_.map(this.props.accessories, function(accessory) {
                return <Accessory key={accessory.id} accessory={accessory} />
            })}
        </ul>;
    }
});

module.exports = AccessoriesList;
