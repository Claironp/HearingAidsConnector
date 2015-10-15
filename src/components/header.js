var React = require('react');

var HeaderNav = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            title: 'HearingAidsConnector'
        };
    },

    render: function() {
        return <header className="bar bar-nav">
            <h1 className="title">{this.props.title}</h1>
        </header>;
    }
});

module.exports = HeaderNav
