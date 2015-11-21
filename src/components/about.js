var React = require('react');
var Tab = require('./tab');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title='A propos'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <h5>Dans le cadre de lélaboration de mon mémoire de troisième année en audioprothèse, j'ai choisi de développer cette application visant à faciliter la recherche d'accessoires pour aides auditives : conditions dutilisation, documentation, modes demploi, compatibilité. Toutes ces informations sont désormais accessibles facilement, et surtout rapidement.  <br/> <br/> <br/> <br/>Claire Pélissier <br/>Troisième année daudioprothèse <br/>Institut des Sciences et Techniques de la Réadaptation <br/>UNIVERSITE CLAUDE BERNARD LYON 1 </h5>
                	<img src="images/claire.png" className="photo-claire"/>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = AboutTab;