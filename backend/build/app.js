"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _clients = _interopRequireDefault(require("./routes/clients.routes"));

var _pets = _interopRequireDefault(require("./routes/pets.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// configurar aplicacion express
// import routes
var app = (0, _express["default"])();
app.set("pkg", _package["default"]);
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json()); //Entender los datos en formato JSON
// Cuando se visita la ruta inicial

app.get("/", function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: "DevsWorld",
    version: app.get("pkg").version
  });
}); //Routes

app.use("/clients", _clients["default"]);
app.use("/pets", _pets["default"]);
var _default = app;
exports["default"] = _default;