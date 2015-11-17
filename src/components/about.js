var React = require('react');
var Tab = require('./tab');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title='A propos'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <h5>Dans le cadre de lélaboration de mon mémoire de troisième année en audioprothèse, jai choisi de développer cette application visant à faciliter la recherche daccessoires pour aides auditives : conditions dutilisation, documentation, modes demploi, compatibilité. Toutes ces informations sont désormais accessibles facilement, et surtout rapidement.  <br/> <br/> <br/> <br/>Claire Pélissier <br/>Troisième année daudioprothèse <br/>Institut des Sciences et Techniques de la Réadaptation <br/>UNIVERSITE CLAUDE BERNARD LYON1 </h5>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = AboutTab;