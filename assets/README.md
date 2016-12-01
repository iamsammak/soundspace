## Yarn (rename to be decided)

### Background

Yarn is a browser peg board where users have the creative freedom to draw shapes and words with yarn-like material.

Featuring a grid-like canvas. Users will pick a color and grab hold of yarn then draw lines from pegs to pegs.

### Functionality & MVP  

User interaction Goals:

- [ ] Interact with the game by clicking start, middle and end points to "tie" the yarn to the board
- [ ] Snap to grid physics will keep the lines straight as the user drags the yarn from vector to vector (peg to peg)
- [ ] Buttons to choose color
- [ ] Buttons to save or erase the grid to start over

Yarn's moving parts:

- [ ] Yarn, strings created using paper.js

Goal of the game:

- [ ] A simple and beautiful way of bring word Art to life
- [ ] Ultimately goal is to use this browser game as a subtle splash page that user's can play around with if they want (almost like the mini animations Google does on their home page in place of their logo)

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of one screens: the drawing canvas. The canvas will have a peg board and buttons: to choose yarn color and an "erase" function to clear the board

![homepage]
![yarnview]

[homepage]: ./wireframes/home_page.png
[yarnview]: ./wireframes/yarn_view.png


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic
- `Paper.js` with `HTML5 Canvas` for DOM manipulation and rendering
- `Sound.js` for in game sound effects
- Webpack to bundle

In addition to the webpack entry file, there will be three scripts involved in this project:

* `game.js`
    * this script will handle the logic for creating and updating the necessary `Paper.js` elements and rendering them to the DOM.
    * Holds the collection of yarns per drawing
    * adds and deletes yarn strings onto the pegboard (canvas)
* `yarn.js`
    * Base class for yarn strings
    * Contains listeners that render the yarn to appear to follow the user's mouse movements
* `physics.js`
    * contains the logic of snap-to-grid that will calculate where the user starts/ends the drawing and the pivot points so that the yarn will always render a straight line from point to point
* `game_view.js`
    * Stores the `Game` instance
    * `canvas` context to draw the game

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Create `webpack.config.js`, `package.json` and `index.html`. Learn the basics of `Paper.js` and rendering canvas elements.  
Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Paper.js` to render a pegboard and the ability to draw "yarn strings"

**Day 2**: This day is dedicated to styling the yarn strings to make them appear yarn-like and to have the string follow user's mouse movements
Goals for the day:

- Test mouse move and mouse click listeners
- Create placeholder buttons to choose color and "add yarn" / "remove yarn"
- Test the snap to grid functionality

**Day 3**: Continue implementing yarn logic and styling
Goals for the day:

- I believe that getting this canvas to render like real-life tactile peg board will take a good amount of time and css tricks
- Keep pushing forward!


**Day 4**: Styling styling styling, making it polished and professional.  
Goals for the day:

- Polish the UI/UX to be intuitive
- Flush out the instructions, game tips and production ReadMe

**Day 5**: Implement a Color Picker via JQuery Library

**Day 6**: Figure out how to add this to a single page web application as the splash page
