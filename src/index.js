var React = require('react');

var NavBar = require('react-ratchet').NavBar;
var NavButton = require('react-ratchet').NavButton;
var Title = require('react-ratchet').Title;

var Application = React.createClass({
    render: function() {
        return <NavBar>
            <NavButton left>Left</NavButton>
            <NavButton right>Right</NavButton>
            <Title>HearingAidsConnector</Title>
        </NavBar>;
    }
});

React.render(<Application />, document.getElementById('app'));
