var React = require('react');
var Tab = require('./tab');

var brands = require('../lib/brands');
var BrandsList = require('./lists/brands');

var BrandsTab = React.createClass({
    render: function() {
        return <Tab>
            <div id="tab-brands" className="content">
                <BrandsList brands={brands.all()} />
            </div>
        </Tab>;
    }
});

module.exports = BrandsTab
