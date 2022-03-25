"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Conexion a la base de datos
_mongoose["default"].connect("mongodb://localhost/HistoVet", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Db is connected");
})["catch"](function (erro) {
  return console.log(error);
});