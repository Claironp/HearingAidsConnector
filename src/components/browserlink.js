var React = require('react');

var BrowserLink = React.createClass({
    onClick: function(e) {
        e.preventDefault();

        var ref = window.open(this.props.href, '_system');
    },


    render: function() {
        return <a {...this.props} href="#" onClick={this.onClick}>{this.props.children}</a>;
    }
});

module.exports = BrowserLink;