require("../css/application.scss");

// const GameView = require('./game_view.js');
import GameView from './game_view.js';
// import GameView from './test_game_view.js';


document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext('2d');

  new GameView(canvas, ctx);
});
