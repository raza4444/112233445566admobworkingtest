cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-admob-plus/www/admob.js",
        "id": "cordova-admob-plus.AdMob",
        "pluginId": "cordova-admob-plus",
        "clobbers": [
            "admob"
        ]
    },
    {
        "file": "plugins/cordova-admob-plus/src/browser/AdMobProxy.js",
        "id": "cordova-admob-plus.AdMobProxy",
        "pluginId": "cordova-admob-plus",
        "runs": true
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-admob-plus": "0.0.0",
    "cordova-plugin-add-swift-support": "1.7.2",
    "cordova-plugin-whitelist": "1.3.3",
    "onesignal-cordova-plugin": "2.4.6",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2"
}
// BOTTOM OF METADATA
});