require("../css/application.scss");

// const GameAnimation = require('./game_view.js');
import GameAnimation from './game_animation.js';
// import GameAnimation from './test_game_view.js';


document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext('2d');

  new GameAnimation(canvas, ctx);
});
