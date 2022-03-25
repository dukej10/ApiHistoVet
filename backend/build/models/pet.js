"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require("mongoose"),
    Schema = _require.Schema,
    model = _require.model;

var petSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  image: {
    type: String,
    required: true
  },
  nameOwner: {
    type: Number,
    required: true
  },
  contactOwner: {
    type: Number,
    required: true
  },
  age: {
    type: String,
    require: true
  },
  breed: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  //fecha de creación y última actualización
  versionKey: false
});

var _default = model("Pet", petSchema);

exports["default"] = _default;