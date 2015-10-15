var React = require('react');
var Link = require('react-router').Link;

var FooterLink = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        icon: React.PropTypes.string,
        to: React.PropTypes.string
    },

    render: function() {
        return <Link to={this.props.to} className="tab-item" activeClassName="active">
            <span className={'icon icon-'+this.props.icon}></span>
            <span className="tab-label">{this.props.label}</span>
        </Link>;
    }
});

var FooterNav = React.createClass({
    render: function() {
        return <nav className="bar bar-tab">
            <FooterLink to='/' label='Marques' icon='home' />
            <FooterLink to='/accessoires' label='Accessoires' icon='list' />
            <FooterLink to='/search' label='Rechercher' icon='search' />
            <FooterLink to='/about' label='A propos' icon='info' />
        </nav>;
    }
});

module.exports = FooterNav
