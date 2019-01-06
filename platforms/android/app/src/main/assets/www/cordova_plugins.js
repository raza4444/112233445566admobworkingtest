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
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-customconfigparameters.CustomConfigParameters",
    "file": "plugins/cordova-plugin-customconfigparameters/www/customconfigparameters.js",
    "pluginId": "cordova-plugin-customconfigparameters",
    "clobbers": [
      "CustomConfigParameters"
    ]
  },
  {
    "id": "cordova-plugin-appversion.RareloopAppVersion",
    "file": "plugins/cordova-plugin-appversion/www/app-version.js",
    "pluginId": "cordova-plugin-appversion",
    "clobbers": [
      "AppVersion"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-admob-plus": "0.0.0",
  "onesignal-cordova-plugin": "2.4.6",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-network-information": "2.0.1",
  "cordova-plugin-customconfigparameters": "3.0.0",
  "cordova-plugin-appversion": "1.0.0"
};
// BOTTOM OF METADATA
});