"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Arrancar la aplicación
_app["default"].listen(4000);

console.log("Server listen on port", 4000);