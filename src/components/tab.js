var React = require('react');

var FooterNav = require('./footer');
var HeaderNav = require('./header');

var Tab = React.createClass({
    render: function() {
        return <div>
            <HeaderNav />
            <div className="content">
                {this.props.children}
              </div>
            <FooterNav />
        </div>;
    }
});

module.exports = Tab
