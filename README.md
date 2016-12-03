# Sound Space
####Live Site
[Click to Play](https://iamsammak.github.io/soundspace/)

![header]
[header]: ./assets/images/header.png
![gameplay4]
[gameplay4]: ./assets/images/gameplay4.gif


### Background

Press a key. Any alphabet key. I dare you. Triple dog dare you.

What. ya. gonna. do?

### Game Play

User Interaction:

- [ ] Interacts with the canvas by pressing an alphabet key
- [ ] Key press triggers sound and animation
- [ ] If user gets too excited while button mashing and hits the caps lock; no problem it still works, caps or no caps

Goal of the game:

- [ ] Get lost in the simplicity

Sample Sounds using Howler.js:

```html
<script>
  const sounds = {
    q: new Howl({ src: ['assets/sounds/beatboxsnare.wav'] }),
    y: new Howl({ src: ['assets/sounds/bottle_pop_3.wav'] }),
    m: new Howl({ src: ['assets/sounds/water_drop_high.mp3'] }),
    v: new Howl({ src: ['assets/sounds/yes.wav'] })
  }

  document.addEventListener('keydown', function (e) {
    const key = (e.key).toLowerCase();
    if (Object.keys(sounds).indexOf(key) > -1) {
      sounds[key].play();
    }
  }, false);
</script>
```

Sample Half Circle animation using Anime.js:

```js
const animateHalfCircles = function(options) {
  setCanvasSize();
  let x = canvas.width * (1/2), y = canvas.height * (1/2);
  const topHalf = new HalfCircle(x, y, true, options);
  const bottomHalf = new HalfCircle(x, y, false, options);
  const topHalfAnimation = anime({
    targets: topHalf,
    x: x + 250,
    color: '#fff',
    duration: options.duration,
    easing: 'easeOutExpo',
    complete:removeAnimation,
  });
  const bottomHalfAnimation = anime({
    targets: bottomHalf,
    x: x - 250,
    duration: options.duration,
    easing: 'easeOutExpo',
    complete:removeAnimation,
  });
  animations.push(topHalfAnimation);
  animations.push(bottomHalfAnimation);
};
```

### Game views

####Home Screen
Silence before the awesomeness.
![homepage]

####Play view
![gameplay]
![gameplay2]
![gameplay3]

[homepage]: ./assets/images/homepage.png
[gameplay]: ./assets/images/gameplay1.gif
[gameplay2]: ./assets/images/gameplay2.gif
[gameplay3]: ./assets/images/gameplay3.gif

### Future Implementations

Different Libraries :

- [ ] Create an app around this game, that uses a database so users can save a string of letters and intervals then replay their creation
- [ ] More animations
- [ ] Utilize the bezier curve to draw custom animations
- [ ] Implement a library change on Spacebar keydown
- [ ] Library change means the color scheme of the animations and the sounds will all change. Almost like pseudo level change
- [ ] Will test how DRY my code is (in the words of HIMYM "challenge accepted!")

### Inspiration
- [ ] [patatap](http://www.patatap.com/)
