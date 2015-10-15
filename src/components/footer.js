var React = require('react');
var Link = require('react-router').Link;

var FooterNav = React.createClass({
    render: function() {
        return <nav className="bar bar-tab">
            <Link to='/' className="tab-item" activeClassName="active">Marques</Link>
            <Link to='/accessoires' className="tab-item" activeClassName="active">Accessoires</Link>
            <Link to='/about' className="tab-item" activeClassName="active">A propos</Link>
        </nav>;
    }
});

module.exports = FooterNav
