require("../css/application.scss");

// import Howl from 'howler';
// require('howler');

const Explosions = require('./dots.js');
// import Explosions from './dots.js';
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext('2d');

const explosion = new Explosions(canvas, ctx);
