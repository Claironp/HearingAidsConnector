var React = require('react');
var Link = require('react-router').Link;

var HeaderNav = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            title: 'HearingAidsConnector',
            backLabel: 'Back',
            backTo: ''
        };
    },

    render: function() {
        var buttons = [];

        if (this.props.backTo) {
            buttons.push(<Link to={this.props.backTo} className="btn btn-link btn-nav pull-left">
                <span className="icon icon-left-nav"></span>
                {this.props.backLabel}
            </Link>);
        }


        return <header className="bar bar-nav">
        {buttons}
            <h1 className="title">{this.props.title}</h1>
        </header>;
    }
});

module.exports = HeaderNav
