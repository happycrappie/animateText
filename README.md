# Text Animation

Text Animation is a vanilla function to animate every single character of a text sequentially.

Inspired by the text effects introduced in the [Once Upon a Time in Hollywood Mag](https://www.onceuponatimemag.com).

## How to use

### Setup

It's really simple. Add the script tag on your HTML.

```html
<script src="https://cdn.jsdelivr.net/gh/happycrappie/animateText/dist/animate-text.umd.js"></script>
```

Then create a `@keyframe` in CSS—that will be your animation. Eg:

```CSS
@keyframes fadeIn {
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
```

This keyframe will move the character up and slowly make it visible.

### Animate the text

Then select trigger the animation on the element you want to animate.

```javascript
animateText('.el')
```

Replace `.el` with the element you want to animate.

### Customisation
You can customise the animation by declaring a few rules, such as:

- Name: The name of the animation (keyframe).
- Duration: Total time for the animation to start and finish playing. 
- Count: How many times the animation should play
- Fill: What should happen with the animation after it ends.
- Timing: The easing function.
- Delay: How long it takes for the first animation to begin
- Additional Delay: How much time will the next element wait to start animating.

You can customize the animation by passing the attribute values as an object in the second parameter:

```javascript
// Change the Duration
animateText('#id', {duration: 2000});

// Set the name of the keyframe
animateText('#id', {name: 'moveUp'});

// Change multiple attributes
animateText('#id', {
  duration: 1000,
  delay: 200
})
```

#### Name
`{String}`

Define the name of the keyframe. Default: `name: "fadeIn"`

```js
animateText('el', {name: 'animationName'})
```

**If your keyframe isn't name "fadeIn", you should declare the name.**

#### Duration
`{Number}`

Define how long the animation will take, from start to finish, in MILISECONDS. Default `duration: 3000`

```js
animateText('el', {duration: 3000})
```

#### Count
`{Number}`

Define how many times the animation will run. Default `count: 1`

```js
animateText('el', {count: 1})
```

#### Fill
`{String}`

Defines the animation fill mode. Default `fill: "forwards"`

```js
animateText('el', {fill: "forwards"})
```

#### Timing
`{String}`

Defines the animation timing easing. Default `timing: "cubic-bezier(0.215, 0.61, 0.355, 1)"`

```js
animateText('el', {timing: "cubic-bezier(0.215, 0.61, 0.355, 1)"})
```

#### Delay
`{Number}`

Defines the animation delay. Default `delay: 0"`

```js
animateText('el', {delay: 0"})
```

#### Additional Delay
`{Number}`

Defines the amount of delay to stack up on the next characters. Default `additionalDelay: 0"`

```js
animateText('el', {additionalDelay: 0"})
```

### You can also pass it as a JSON

```js
var attributes = {
  name: "animationName",
  delay: 500,
  additionalDelay: 90
}

animateText('el', attributes);
```

## Author

[Eryc da Silva](https://eryc.design)

## License

[MIT](https://github.com/happycrappie/textAnimation/blob/master/LICENSE)

Copyright (c) 2019-present, Eryc da Silva.