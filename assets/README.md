## Sound Space (name TBD)

### Background

Sound Space is a browser sound visualizer. User interacts by pressing keys on a keyboard.

Upon keydown a sound and an animation will fire.

Example: [patatap](http://www.patatap.com/)

### Functionality & MVP  

User interaction Goals:

- [ ] Interact with the game by pressing any letter keys "a" to "z"

Sound Space's moving parts:

- [ ] Animations upon keydown, implemented via anime.js

Goal of the game:

- [ ] A simple and beautiful way of bring sounds to visual shapes
- [ ] Ultimately goal is to use this browser game as a subtle splash page that user's can play around with if they want (almost like the mini animations Google does on their home page in place of their logo)

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of one screens: the animation canvas. The canvas will display a simple instruction in the beginning and the rest should be user intuitive

Used to be Yarn, changed to Sound Space because I wanted to implement an animation project that also utilized sounds

![homepage]
![yarnview]

[homepage]: ./wireframes/home_page.png
[yarnview]: ./wireframes/yarn_view.png


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic
- `Anime.js` with `HTML5 Canvas` for DOM manipulation and rendering
- `Howler.js` for in animation sound effects
- Webpack to bundle

In addition to the webpack entry file, there will be a main game animation and each type of animation will have a class script.
Examples below:

* `game_animation.js`
    * this script will handle the logic for creating and updating the necessary `Anime.js` elements and rendering them to the DOM.
    * Holds the collection of animation objects
    * adds and deletes animations onto the canvas
* `util.js`
    * Holds all the attribute information for each animation object
    * color, width, height, endingWidth, endingHeight, duration, etc...
* `ripple.js`
    * create a ripple class
* `box.js`
    * create a box class
* `circle.js`
    * create a circle class
* `half_circle.js`
    * extension of circle class, with logic to cut circle in half
* `soundspace.js`
    * Stores the `GameAnimation` instance
    * `canvas` context to draw the game

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Create `webpack.config.js`, `package.json` and `index.html`. Learn the basics of `Anime.js` and rendering canvas elements.  
Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Howler.js` to render a sound on each keydown

**Day 3**: This day is dedicated to looking for sounds and making sure Howler.js is rendering the correct sound:

- Test sound and their compatibility with each other
- Make sure that sound will play even if caps lock is on

**Day 3 - 6**: Create Animations:

- Learn to draw circles
- Rectangles
- Ripples
- Boxes
- Explosions

**Day 7**: Styling styling styling, making it polished and professional.  
Goals for the day:

- Polish the UI/UX to be intuitive
- Flush out the instructions, game tips and production ReadMe

**If there is time**: Figure out how to add this to a single page web application as the splash page
