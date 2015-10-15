var React = require('react');

var FooterNav = require('./footer');
var HeaderNav = require('./header');

var Tab = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return <div>
            <HeaderNav {...this.props} />
            <div className="content">
                {this.props.children}
              </div>
            <FooterNav />
        </div>;
    }
});

module.exports = Tab
