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

export default function animateText(selector, {
  count = 1,
  delay = 0,
  name = 'fadeIn',
  duration = 3000,
  fill = 'forwards',
  additionalDelay = 75,
  timing = 'cubic-bezier(0.215, 0.61, 0.355, 1)',
} = {}) {
  const elements = [].slice.call(document.querySelectorAll(selector));
  let offset = delay;

  for (const element of elements) {
    const text = element.innerText;

    element.innerText = '';

    for (let x = 0, char = ''; char = text.charAt(x); x++) {
      const text = document.createTextNode(char);
      const span = document.createElement('span');

      span.classList.add('s');

      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      }

      span.appendChild(text);
      element.appendChild(span);

      /**
       * Define span element syles.
       */
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.animationName = name;
      span.style.animationDuration = `${duration}ms`;
      span.style.animationIterationCount = count;
      span.style.animationFillMode = fill,
      span.style.animationTimingFunction = timing;
      span.style.animationDelay = `${offset}ms`;

      offset += additionalDelay;
    }
  }
}