var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Accessory = React.createClass({
    render: function() {
        var accessory = this.props.accessory;

        return <li className="table-view-cell media">
            <Link to={'/accessory/'+accessory.id} className="navigate-right">
                <img className="media-object pull-left" src={'images/'+accessory.id+'.jpg'} />
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
        return <ul className="table-view">
            {_.map(this.props.accessories, function(accessory) {
                return <Accessory key={accessory.id} accessory={accessory} />
            })}
        </ul>;
    }
});

module.exports = AccessoriesList;
