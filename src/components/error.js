var React = require('react');
var Tab = require('./tab');

var ErrorTab = React.createClass({
    render: function() {
        return <Tab title='Erreur'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <p></p>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = ErrorTab;