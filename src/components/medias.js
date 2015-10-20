var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;

var Tab = require('./tab');
var medias = require('../lib/medias');

var Media = React.createClass({
    render: function() {
        var media = this.props.media;

        return <li className="table-view-cell media">
            <Link to={'/accessories/media/'+media.id} className="navigate-right">
                <i className={"media-object pull-left "+media.icon} />
                <div className="media-body">
                    {media.title}
                </div>
            </Link>
        </li>;
    }
});

var MediasList = React.createClass({
    render: function() {
        return <ul className="table-view">
            {_.map(this.props.medias, function(media) {
                return <Media key={media.id} media={media} />
            })}
        </ul>;
    }
});

var MediasTab = React.createClass({
    render: function() {
        return <Tab title='Medias'>
            <div id="tab-accessories" className="content">
                <MediasList medias={medias.all()} />
            </div>
        </Tab>;
    }
});

module.exports = MediasTab;