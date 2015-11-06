var React = require('react');

var Tab = require('./tab');

var accessories = require('../lib/accessories');
var medias = require('../lib/medias');
var brands = require('../lib/brands');

var AccessoriesList = require('./lists/accessories');
var BrandsList = require('./lists/brands');

var SearchTab = React.createClass({
    getInitialState: function() {
        return {
            q: ''
        };
    },

    onInputKeyup: function(e) {
        this.setState({
            q: e.target.value
        });
    },

    render: function() {
        var content = "";

        if (this.state.q) {
            content = <div>
                <BrandsList brands={brands.search(this.state.q)} />
                <AccessoriesList accessories={accessories.search(this.state.q)} />
            </div>;
        }

        return <Tab title='Rechercher'>
            <div className="bar bar-standard bar-header-secondary">
                <form>
                    <input type="search" placeholder='Rechercher un produit ou une marque' onKeyUp={this.onInputKeyup} />
                </form>
            </div>
            <div id="tab-search" className="content">
                {content}
            </div>
        </Tab>;
    }
});

module.exports = SearchTab;
