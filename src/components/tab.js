var React = require('react');

var FooterNav = require('./footer');
var HeaderNav = require('./header');



var Tab = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    componentDidMount: function() {
        window.scrollTo(0, 0);
    },

    render: function() {
        return <div>
            <HeaderNav {...this.props} />
            <FooterNav />
            {this.props.children}
        </div>;
    }
});

module.exports = Tab
