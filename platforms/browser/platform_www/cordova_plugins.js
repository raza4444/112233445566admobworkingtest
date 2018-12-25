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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-admob-plus": "0.0.0",
    "cordova-plugin-add-swift-support": "1.7.2",
    "cordova-plugin-whitelist": "1.3.3",
    "onesignal-cordova-plugin": "2.4.6"
}
// BOTTOM OF METADATA
});