(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.animateText = factory());
}(this, function () { 'use strict';

  /**
   * Text Animation
   * 
   * @param {string} selector - The element containing the text.
   *
   * @param {object} a - The animation properties.
   * @property {string} name - The animation name. Requires a CSS Keyframe declared. Default: "fadeIn"
   * @property {number} duration - The animation duration, declared in MILISECONDS. Default: 3000
   * @property {number} count - The times this animation will run. Default: 1
   * @property {string} fill - The animation fill mode. Default: "forwards"
   * @property {string} timing - The animation timing. Default OUT-QUAD: "cubic-bezier(0.215, 0.61, 0.355, 1)"
   * @property {number} delay - The delay for the first element animated. Default: 0
   * @property {number} additionalDelay - The amount of delay to stack up on the other. Default: 75
   */
  function animateText(selector) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$count = _ref.count,
        count = _ref$count === void 0 ? 1 : _ref$count,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'fadeIn' : _ref$name,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 3000 : _ref$duration,
        _ref$fill = _ref.fill,
        fill = _ref$fill === void 0 ? 'forwards' : _ref$fill,
        _ref$additionalDelay = _ref.additionalDelay,
        additionalDelay = _ref$additionalDelay === void 0 ? 75 : _ref$additionalDelay,
        _ref$timing = _ref.timing,
        timing = _ref$timing === void 0 ? 'cubic-bezier(0.215, 0.61, 0.355, 1)' : _ref$timing;

    var elements = [].slice.call(document.querySelectorAll(selector));
    var offset = delay;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;
        var text = element.innerText;
        element.innerText = '';

        for (var x = 0, _char = ''; _char = text.charAt(x); x++) {
          var _text = document.createTextNode(_char);

          var span = document.createElement('span');
          span.classList.add('s');

          if (_char === ' ') {
            span.innerHTML = '&nbsp;';
          }

          span.appendChild(_text);
          element.appendChild(span);
          /**
           * Define span element syles.
           */

          span.style.opacity = '0';
          span.style.display = 'inline-block';
          span.style.animationName = name;
          span.style.animationDuration = "".concat(duration, "ms");
          span.style.animationIterationCount = count;
          span.style.animationFillMode = fill, span.style.animationTimingFunction = timing;
          span.style.animationDelay = "".concat(offset, "ms");
          offset += additionalDelay;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return animateText;

}));
