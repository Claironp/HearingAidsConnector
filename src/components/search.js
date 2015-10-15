var React = require('react');

var Tab = require('./tab');
var accessories = require('../lib/accessories');
var AccessoriesList = require('./lists/accessories');

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
                <AccessoriesList accessories={accessories.search(this.state.q)} />
            </div>;
        }

        return <Tab title='Rechercher'>
            <div className="bar bar-standard bar-header-secondary">
                <form>
                    <input type="search" placeholder='Rechercher un produits ou une marques' onKeyUp={this.onInputKeyup} />
                </form>
            </div>
            <div id="tab-search" className="content">
                {content}
            </div>
        </Tab>;
    }
});

module.exports = SearchTab;
