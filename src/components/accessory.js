var _ = require('lodash');
var React = require('react');
var Tab = require('./tab');
var Link = require('react-router').Link;

var accessories = require('../lib/accessories');
var brands = require('../lib/brands');
var medias = require('../lib/medias');
var MediasList = require('./lists/medias');
var BrowserLink = require('./browserlink');

var Accessory = React.createClass({
    propTypes: {
        id: React.PropTypes.string
    },

    render: function() {
        var accessory = accessories.get(this.props.params.id);
        if (!accessory) return <Tab></Tab>;

        var accmedias = _.map(accessory.medias, function(mediaId) {
            return medias.get(mediaId);
        });

        var brand = brands.get(accessory.brand);

        var notices = [];

        _.each(accessory.notices || [], function(notice) {
            notices.push(<li key={notice} className="table-view-cell media">
                <BrowserLink href={notice} target="_system" className="navigate-right">
                    <div className="media-body">
                        Voir le mode d'emploi
                    </div>
                </BrowserLink>
            </li>);
        });


        return <Tab title="Accessoire" back={true} backLabel="Back">
            <div id="tab-accessory" className="content">
                <div className="accessory-intro">
                    <div className="content-padded">
                        <img src={accessory.image} style={{maxWidth: '60%'}} />
                        <h3>{accessory.title}</h3>
                        <p className="content-padded">{accessory.description}</p>
                        <p className="content-padded" dangerouslySetInnerHTML={{__html: accessory.detail}}></p>
                    </div>
                </div>
                <p className="content-padded">Cet accessoire marche avec les medias:</p>
                <MediasList medias={accmedias} brand={accessory.brand} />

                <ul className="table-view">
                    {notices}

                    <li className="table-view-cell media">
                        <Link to={'brand/'+brand.id}  className="navigate-right">
                            <div className="media-body">
                                Voir tous les accessoires pour {brand.title}
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </Tab>;
    }
});

module.exports = Accessory;
