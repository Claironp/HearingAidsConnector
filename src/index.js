var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');

var BrandsTab = require('./components/brands');
var AccessoriesTab = require('./components/accessories');
var BrandTab = require('./components/brand');
var AccessoryTab = require('./components/accessory');
var AboutTab = require('./components/about');
var SearchTab = require('./components/search');
var ErrorTab = require('./components/error');


function isTextInput(node) {
    return ['INPUT', 'TEXTAREA'].indexOf(node.nodeName) !== -1;
}

document.addEventListener('touchstart', function (e) {
    if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
        document.activeElement.blur();
    }
}, false);

ReactDOM.render(
    <router.Router>
        <router.Route path="/" component={BrandsTab} />
        <router.Route path="/accessories/:brand/:media" component={AccessoriesTab}/>
        <router.Route path="/brand/:brand" component={BrandTab}/>
        <router.Route path="/accessory/:id" component={AccessoryTab}/>
        <router.Route path="/about" component={AboutTab}/>
        <router.Route path="/search(/:q)" component={SearchTab}/>
        <router.Route path="*" component={ErrorTab}/>
    </router.Router>,
    document.getElementById('app')
);


document.addEventListener('deviceready', function() {
    if (typeof cordova.plugins.Keyboard !== 'undefined') {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (typeof cordova.InAppBrowser !== 'undefined') {
        window.open = cordova.InAppBrowser.open;
    }

    if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString("#F7F7F7");
    }
}, false);
