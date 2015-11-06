var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var HeaderNav = React.createClass({
    mixins: [ History ],
    propTypes: {
        title: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            title: 'HearingAidsConnector',
            backLabel: 'Retour',
            back: false
        };
    },

    render: function() {
        var buttons = [];

        if (this.props.back) {
            buttons.push(<a key="back" onClick={this.history.goBack} className="btn btn-link btn-nav pull-left">
                <span className="icon icon-left-nav"></span>
                {this.props.backLabel}
            </a>);
        }


        return <header className="bar bar-nav">
        {buttons}
            <h1 className="title">{this.props.title}</h1>
        </header>;
    }
});

module.exports = HeaderNav
