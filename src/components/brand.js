var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var medias = require('../lib/medias');
var brands = require('../lib/brands');
var MediasList = require('./lists/medias');

var BrandTab = React.createClass({
    render: function() {
        var brand = brands.get(this.props.params.brand);

        return <Tab title={brand.title} back={true}>
            <div id="tab-brand" className="content">
                <MediasList medias={medias.filterByBrand(brand.id)} brand={brand.id} />
            </div>
        </Tab>;
    }
});

module.exports = BrandTab;