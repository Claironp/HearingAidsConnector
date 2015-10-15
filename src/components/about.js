var React = require('react');
var Tab = require('./tab');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title='A propos'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <h2>A propos de cette application</h2>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = AboutTab;