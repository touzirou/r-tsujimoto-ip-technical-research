"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Caluculator = /*#__PURE__*/function () {
  function Caluculator(initialvalue) {
    _classCallCheck(this, Caluculator);

    this.value = initialvalue;
    this.increment = this.increment.bind(this);
  }

  _createClass(Caluculator, [{
    key: "increment",
    value: function increment() {
      return this.value + 1;
    }
  }]);

  return Caluculator;
}();

console.log('before:', 0);
console.log('***increment***');
var increment = new Caluculator(0).increment();
console.log('after:', increment);