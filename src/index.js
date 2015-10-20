var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var BrandsTab = require('./components/brands');
var AccessoriesTab = require('./components/accessories');
var MediasTab = require('./components/medias');
var AccessoryTab = require('./components/accessory');
var AboutTab = require('./components/about');
var SearchTab = require('./components/search');

ReactDOM.render(
    <router.Router>
        <router.Route path="/" component={BrandsTab} />
        <router.Route path="/accessories/:filter/:brand" component={AccessoriesTab}/>
        <router.Route path="/medias" component={MediasTab}/>
        <router.Route path="/accessory/:id" component={AccessoryTab}/>
        <router.Route path="/about" component={AboutTab}/>
        <router.Route path="/search" component={SearchTab}/>
    </router.Router>,
    document.getElementById('app')
);
