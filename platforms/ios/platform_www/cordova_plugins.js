cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-admob-plus.AdMob",
    "file": "plugins/cordova-admob-plus/www/admob.js",
    "pluginId": "cordova-admob-plus",
    "clobbers": [
      "admob"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-add-swift-support": "1.7.2",
  "cordova-admob-plus": "0.0.0",
  "onesignal-cordova-plugin": "2.4.6"
};
// BOTTOM OF METADATA
});