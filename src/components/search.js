var React = require('react');
var History = require('react-router').History;

var Tab = require('./tab');

var accessories = require('../lib/accessories');
var medias = require('../lib/medias');
var brands = require('../lib/brands');

var AccessoriesList = require('./lists/accessories');
var BrandsList = require('./lists/brands');

var SearchTab = React.createClass({
    mixins: [ History ],

    getInitialState: function() {
        return {
            q: this.props.params.q || ''
        };
    },

    onInputChange: function(e) {
        var q = e.target.value;

        this.history.replaceState(null, '/search/'+encodeURIComponent(q))
        this.setState({
            q: q
        });
    },

    componentDidMount: function() {
        this.refs.input.focus();
    },

    render: function() {
        var content = "";
        var q = this.state.q;

        if (q) {
            content = <div>
                <BrandsList brands={brands.search(q)} />
                <AccessoriesList accessories={accessories.search(q)} />
            </div>;
        }

        return <Tab title='Rechercher'>
            <div className="bar bar-standard bar-header-secondary">
                <form>
                    <input type="search" value={q} ref="input" placeholder='Rechercher un produit ou une marque' onChange={this.onInputChange} />
                </form>
            </div>
            <div id="tab-search" className="content">
                {content}
            </div>
        </Tab>;
    }
});

module.exports = SearchTab;
