"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClientById = exports.getClients = exports.getClientById = exports.deleteClientById = exports.createClient = void 0;

var _clients = _interopRequireDefault(require("../models/clients"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createClient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, image, document, contact, email, namePet, newClient, clientSave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Llegó", req.body);
            _req$body = req.body, name = _req$body.name, image = _req$body.image, document = _req$body.document, contact = _req$body.contact, email = _req$body.email, namePet = _req$body.namePet;
            newClient = new _clients["default"]({
              name: name,
              image: image,
              document: document,
              contact: contact,
              email: email,
              namePet: namePet
            });
            _context.next = 5;
            return newClient.save();

          case 5:
            clientSave = _context.sent;
            res.status(201).json(clientSave);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createClient = createClient;

var getClients = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var clients;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _clients["default"].find();

          case 2:
            clients = _context2.sent;
            res.json(clients);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getClients(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClients = getClients;

var getClientById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var clientId, clientcut;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            clientId = req.params.clientId;
            _context3.next = 3;
            return _clients["default"].findById(clientId);

          case 3:
            clientcut = _context3.sent;
            res.status(200).json(clientcut);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getClientById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getClientById = getClientById;

var updateClientById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var clientId, updatedClient;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            clientId = req.params.clientId;
            _context4.next = 3;
            return _clients["default"].findByIdAndUpdate(clientId, req.body);

          case 3:
            updatedClient = _context4.sent;
            //devuelve como estaba antes
            res.status(200).json(updatedClient);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateClientById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateClientById = updateClientById;

var deleteClientById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var clientId, deletedClient;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            clientId = req.params.clientId;
            _context5.next = 3;
            return _clients["default"].findByIdAndDelete(clientId);

          case 3:
            deletedClient = _context5.sent;
            res.status(200).json(deletedClient);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteClientById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClientById = deleteClientById;