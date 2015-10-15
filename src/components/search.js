var React = require('react');
var Tab = require('./tab');

var SearchTab = React.createClass({
    render: function() {
        return <Tab title='Rechercher'>
            <form>
                <input type="search" placeholder='Rechercher un produits ou une marques' />
            </form>
        </Tab>;
    }
});

module.exports = SearchTab