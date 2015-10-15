var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var MarquesTab = require('./components/marques');
var AccessoiresTab = require('./components/accessoires');
var AboutTab = require('./components/about');
var SearchTab = require('./components/search');

ReactDOM.render(
    <router.Router>
        <router.Route path="/" component={MarquesTab} />
        <router.Route path="/accessoires" component={AccessoiresTab}/>
        <router.Route path="/about" component={AboutTab}/>
        <router.Route path="/search" component={SearchTab}/>
    </router.Router>,
    document.getElementById('app')
);
