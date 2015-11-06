var _ = require('lodash');
var React = require('react');
var Link = require('react-router').Link;


var Media = React.createClass({
    render: function() {
        var media = this.props.media;
        var brand = this.props.brand;

        return <li className="table-view-cell media">
            <Link to={'/accessories/'+brand+'/'+media.id} className="navigate-right">
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
        var medias = this.props.medias;
        var brand = this.props.brand;

        return <ul className="table-view">
            {_.map(medias, function(media) {
                return <Media key={media.id} media={media} brand={brand} />
            })}
        </ul>;
    }
});

module.exports = MediasList;