var React = require('react');
var Tab = require('./tab');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title='A propos'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <h2>Application développée dans le cadre de mon mémoire de troisième année en audioprothèse. Claire Pélissier, Institut des Sciences et Techniques de la Réadaptation, Université Claude Bernard LYON1 </h2>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = AboutTab;