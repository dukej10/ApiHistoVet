"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePetById = exports.getPets = exports.getPetById = exports.deletePetById = exports.createPet = void 0;

var _pets = _interopRequireDefault(require("../models/pets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPet = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, image, nameOwner, contactOwner, age, breed, type, newPet, PetSave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Llegó", req.body);
            _req$body = req.body, name = _req$body.name, image = _req$body.image, nameOwner = _req$body.nameOwner, contactOwner = _req$body.contactOwner, age = _req$body.age, breed = _req$body.breed, type = _req$body.type;
            newPet = new _pets["default"]({
              name: name,
              image: image,
              nameOwner: nameOwner,
              contactOwner: contactOwner,
              age: age,
              breed: breed,
              type: type
            });
            _context.next = 5;
            return newPet.save();

          case 5:
            PetSave = _context.sent;
            res.status(201).json(PetSave);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createPet(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPet = createPet;

var getPets = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var Pets;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _pets["default"].find();

          case 2:
            Pets = _context2.sent;
            res.json(Pets);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPets(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPets = getPets;

var getPetById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var PetId, Petcut;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            PetId = req.params.PetId;
            _context3.next = 3;
            return _pets["default"].findById(PetId);

          case 3:
            Petcut = _context3.sent;
            res.status(200).json(Petcut);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPetById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPetById = getPetById;

var updatePetById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var PetId, updatedPet;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            PetId = req.params.PetId;
            _context4.next = 3;
            return _pets["default"].findByIdAndUpdate(PetId, req.body);

          case 3:
            updatedPet = _context4.sent;
            //devuelve como estaba antes
            res.status(200).json(updatedPet);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updatePetById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePetById = updatePetById;

var deletePetById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var PetId, deletedPet;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            PetId = req.params.PetId;
            _context5.next = 3;
            return _pets["default"].findByIdAndDelete(PetId);

          case 3:
            deletedPet = _context5.sent;
            res.status(200).json(deletedPet);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deletePetById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePetById = deletePetById;