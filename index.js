'use strict';

var _flyd = require('flyd');

var _flyd2 = _interopRequireDefault(_flyd);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var throttle = function throttle(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function func() {
      if (running) return;
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  throttle("resize", "flyd_optimizedResize");
})();

var stream = _flyd2.default.stream([document.body.offsetWidth, document.body.offsetHeight]);

// handle event
window.addEventListener("flyd_optimizedResize", function (ev) {
  return stream([document.body.offsetWidth, document.body.offsetHeight]);
});

module.exports = stream;

