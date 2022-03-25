"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var clientSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  image: {
    type: String,
    required: true
  },
  document: {
    type: Number,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  namePet: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  //fecha de creación y última actualización
  versionKey: false
});

var _default = model("Client", clientSchema);

exports["default"] = _default;