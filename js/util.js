const objOptions = {
  // big
  x: {
    color: ['#ed6e2f', '#baecf0'],
    radius: [175, 200],
    endRadius: 200,
    duration: [500, 1000],
    numCircles: 1,
  },
  n: {
    color: ['#f4de70', '#f6c7df'],
    radius: [175, 200],
    endRadius: 200,
    duration: [500, 1000],
    numCircles: 1,
  },
  b: {
    color: ['#fbfbf4', '#baecf0'],
    radius: [175, 200],
    endRadius: 200,
    duration: [500, 1000],
    numCircles: 1,
  },
  // medium large
  a: {
    color: ['#baecf0'],
    radius: [50, 100],
    duration: [500, 1000],
    endRadius: 100,
    numCircles: 10,
  },
  d: {
    color: ['#ed6e2f'],
    radius: [50, 100],
    duration: [500, 1000],
    endRadius: 100,
    numCircles: 10,
  },
  f: {
    color: ['#f4de70'],
    radius: [50, 100],
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
    radius: [10, 15],
    duration: [500, 1000],
    endRadius: 0,
    numCircles: 30,
  },
  l: {
    color: ['#f4de70'],
    radius: [10, 15],
    duration: [500, 1000],
    endRadius: 0,
    numCircles: 30,
  },
  // shrinking circles
  w: {
    color: ['#ed6e2f', '#20b2aa'],
    radius: [125, 150],
    duration: [8000, 10000],
    endRadius: 0,
    numCircles: 5,
  },
  e: {
    color: ['#f6c7df'],
    radius: [100, 120],
    duration: [6000, 8000],
    endRadius: 0,
    numCircles: 5,
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
  // Box
  i: {
    color: ['#ca271c'],
    width: 600,
    height: 100,
    endWidth: 100,
    delay: 100,
    duration: [400, 500],
    numBoxes: 3,
  },
  // Line boxes
  y: {
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
  // triRectangle
  u: {
    rotate: 180,
    borderRadius: '8px',
    duration: 800,
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
  v: {
    color: ['#222121'],
    radius: 0,
    duration: 11000,
    numRipples: 5,
  },
};

export default objOptions;
