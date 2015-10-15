var React = require('react');
var Tab = require('./tab');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title="A propos">
            <h1></h1>
        </Tab>;
    }
});

module.exports = AboutTab