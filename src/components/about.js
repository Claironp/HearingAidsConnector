var React = require('react');
var Tab = require('./tab');
var BrowserLink = require('./browserlink');

var AboutTab = React.createClass({
    render: function() {
        return <Tab title='A propos'>
            <div id="tab-about" className="content">
                <div className="content-padded">
                    <p>Dans le cadre de l'élaboration de mon mémoire de troisième année en audioprothèse, j'ai choisi de développer cette application visant à faciliter la recherche d'accessoires pour aides auditives : conditions dutilisation, documentation, modes d'emploi, compatibilité.</p>
                    <p>Toutes ces informations sont désormais accessibles facilement, et surtout rapidement</p>
                    <br/><br/><br/>
                    <h4>Me contacter:</h4>
                    <p>Claire Pélissier<br/>
                    <BrowserLink href="mailto:pelissier.claire@gmail.com" target="_blank">pelissier.claire@gmail.com</BrowserLink></p>
                    <p>
                        Troisième année d'audioprothèse<br/>
                        Institut des Sciences et Techniques de la Réadaptation<br/>
                        UNIVERSITE CLAUDE BERNARD LYON 1
                    </p>
                </div>
            </div>
        </Tab>;
    }
});

module.exports = AboutTab;