// this would help DRY up my code
// testing to get canvas into this file
// const canvas = document.getElementById("my-canvas");
// import Utils from './utils.js';

export const objOptions = {
  // line
  b: {
    color: ['#f4de70'],
    width: 40,
    height: 40,
    endWidth: 0,
    delay: 100,
    duration: 500,
    numBoxes: 22,
  },
  // big
  x: {
    color: ['#ed6e2f', '#baecf0', '#fbfbf4'],
    radius: [175, 200],
    endRadius: 200,
    duration: [500, 1000],
    numCircles: 1,
  },
  n: {
    color: ['#00FFC1', '#f6c7df', '#fbfbf4'],
    radius: [175, 200],
    endRadius: 200,
    duration: [500, 1000],
    numCircles: 1,
  },
  // medium large
  a: {
    color: ['#baecf0', '#ed6e2f', '#f4de70'],
    radius: [50, 50],
    duration: [500, 1000],
    endRadius: 100,
    numCircles: 10,
  },
  // small
  h: {
    color: ['#fbfbf4', '#222121'],
    radius: [15, 25],
    duration: [1000, 2000],
    endRadius: 0,
    numCircles: 25,
  },
  k: {
    color: ['#f6c7df', '#baecf0'],
    radius: [15, 20],
    duration: [700, 1200],
    endRadius: 0,
    numCircles: 30,
  },
  l: {
    color: ['#f4de70'],
    radius: [10, 15],
    duration: [700, 1200],
    endRadius: 0,
    numCircles: 30,
  },
  // shrinking circles
  w: {
    color: ['#B2FF4C', '#EA86FF'],
    radius: [125, 150],
    duration: [5000, 7000],
    endRadius: 0,
    numCircles: 8,
  },
  e: {
    color: ['#FF9268', '#4CFFE1'],
    radius: [100, 120],
    duration: [4000, 6000],
    endRadius: 0,
    numCircles: 8,
  },
  // hundred circles
  d: {
    color: ['#CCA12D', '#99968F', '#FFA952', '#92FFFC', '#2DCC9B', '#A4BDFF', '#FFF4E3'],
    radius: [5, 20],
    width: 15,
    duration: 1000,
    endRadius: 30,
    numCircles: 10,
  },
  // half circle
  j: {
    color: ['#267F64'],
    radius: 250,
    duration: 1000,
  },
  // disappearing big circle
  g: {
    x: [430, -430, 430, -430],
    y: [430, -430, -430, 430],
    color: ['#E54D00', '#636770'],
    radius: [300, 300],
    duration: 700,
  },
  // words
  y: {
    font: ['0px Montserrat'],
    text: ['Yes!', 'YES!'],
    color: ['#CCA12D', '#99968F', '#FFA952', '#92FFFC', '#2DCC9B', '#A4BDFF', '#FFF4E3'],
    endFont: ['60px Montserrat', '60px Poiret One', '60px Gloria Hallelujah', '60px Orbitron', '60px Tillana', '60px Indie Flower', '60px Bungee', '60px Amatic SC'],
    duration: 1000,
    numWords: 9
  },
  // Box
  i: {
    color: ['#CC5757'],
    width: 600,
    height: 100,
    endWidth: 100,
    delay: 100,
    duration: [400, 500],
    numBoxes: 3,
  },
  // seven lines
  u: {
    color: ['#ffffff'],
    // width: Utils.canvassx() * (6/8),
    width: 1260,
    height: 60,
    endWidth: 0,
    delay: 100,
    duration: 500,
    numBoxes: 7,
  },
  // Line boxes
  v: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
    width: 20,
    height: 20,
    endWidth: 50,
    endHeight: 50,
    duration: [400, 500],
    numBoxes: 10,
  },
  r: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
    width: 20,
    height: 20,
    endWidth: 50,
    endHeight: 50,
    duration: [400, 500],
    numBoxes: 10,
  },
  z: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
    width: 20,
    height: 20,
    endWidth: 50,
    endHeight: 50,
    duration: [400, 500],
    numBoxes: 10,
  },
  c: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
    width: 20,
    height: 20,
    endWidth: 50,
    endHeight: 50,
    duration: [400, 500],
    numBoxes: 10,
  },
  // hundred boxes
  s: {
    color: ['#f6c7df', '#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E', '#baecf0'],
    width: 0,
    height: 0,
    duration: 1000,
    endWidth: 25,
    endHeight: 25,
    numBoxes: 10,
  },
  // BigBox
  // anime.random(50, 100); // Will set a random value from 50 to 100
  t: {
    color: ['#82FFB7', '#D79BFF' ],
    startX: [(1/4), (3/4)],
    startY: [-200, 200],
    width: 400,
    height: 400,
    endWidth: 0,
    endHeight: 0,
    duration: 500,
    numBoxes: 1,
  },
  // screen swipe
  q: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2', '#9BFFF0', '#FFE482', '#FF8D7E'],
    duration: 50,
  },
  o: {
    color: ['#9BFFF0', '#FFE482', '#FF8D7E'],
    delay: 300,
    duration: 600,
  },
  p: {
    color: ['#82D9FF', '#FF9BAB', '#4993B2'],
    delay: 300,
    duration: 600,
  },
  // ripple
  m: {
    color: ['#ffffff'],
    radius: 300,
    endRadius: 0,
    duration: 600,
    numRipples: 3,
  },
  f: {
    color: ['#fbfbf4', '#222121', '#f6c7df', '#baecf0', '#f4de70'],
    radius: 0,
    duration: 11000,
    numRipples: 5,
  },
};
