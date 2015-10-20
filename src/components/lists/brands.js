var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Brand = React.createClass({
    render: function() {
        var brand = this.props.brand;

        return <li className="table-view-cell media">
            <Link to={'/accessories/brand/'+brand.id} className="navigate-right">
                <img className="media-object pull-left" src={brand.image} />
                <div className="media-body">
                    {brand.title}
                    <p>{brand.description}</p>
                </div>
            </Link>
        </li>;
    }
});

var BrandsList = React.createClass({
    render: function() {
        return <ul className="table-view">
            {_.map(this.props.brands, function(brand) {
                return <Brand key={brand.id} brand={brand} />
            })}
        </ul>;
    }
});

module.exports = BrandsList;
