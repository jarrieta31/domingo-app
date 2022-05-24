
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    