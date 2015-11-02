var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Brand = React.createClass({
    render: function() {
        var brand = this.props.brand;

        return <li className="table-view-cell media">
            <Link to={'/medias/'+brand.id} className="navigate-right">
                <div className="media-body">
                    {brand.title}
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
