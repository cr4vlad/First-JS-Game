let backgroundStars = [];
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

export let shipState = { // should be loaded from save file
  angle: 90, // degrees, 0-359, where 0 is right, 90 is up
  posX: 0,
  posY: 0,
  speedX: 0,
  speedY: 0,
  rotationSpeed: 0 // degrees per second, + : left, - : right
};

export let shipSpecifications = { // should be loaded from save file
  name: 'Apollo', // changable when new game started, and maybe in in-game store
  acceleration: 10, // divide by 7200 to get change of coordinates per second for 60 fps,,, * Math.pow(fps, 2)
  rotationAcceleration: 1 // degrees per second, multiply by fps to get change of angle per second
};

export default function updateState(dt, turn, accelerate) { // turn: 0 - don't change rotation, -1 - turn right, 1 - turn left
  // save previous position
  const prevPosX = shipState.posX;
  const prevPosY = shipState.posY;

  // change rotation speed
  if (turn === 1 || turn === -1) {
    shipState.rotationSpeed += turn * shipSpecifications.rotationAcceleration * dt;
  } else if (turn) console.log('Invalid value of turn in GameScene.model.updateState');

  // change angle and make sure it's in 0-360
  shipState.angle += shipState.rotationSpeed * dt;
  if (shipState.angle > 360) {
    shipState.angle %= 360;
  }
  else if (shipState.angle < 0) {
    shipState.angle = shipState.angle % 360 + 360;
  }

  // counting of new position, speed and acceleration for X and Y
  const accelerationX = accelerate * shipSpecifications.acceleration * Math.cos(toRadians(shipState.angle));
  const accelerationY = accelerate * shipSpecifications.acceleration * Math.sin(toRadians(shipState.angle));
  shipState.posX += shipState.speedX * dt + accelerationX * dt * dt / 2;
  shipState.posY += shipState.speedY * dt + accelerationY * dt * dt / 2;
  shipState.speedX += accelerationX * dt;
  shipState.speedY += accelerationY * dt;

  // counting position change
  const dx = shipState.posX - prevPosX;
  const dy = shipState.posY - prevPosY;

  updateBackground(dx, dy);
};

export function generateBackground() {
  for (var i = 0; i < 1000; i++) {
    backgroundStars.push(getStar());
  }

  return backgroundStars;
}

function getStar() { // get new star in bounds of window
  const x = getRandomInt(posX - windowWidth / 2, posX + windowWidth / 2);
  const y = getRandomInt(posY - windowHeight / 2, posY + windowHeight / 2);
  const size = randomWithProbability([1, 1, 1, 1, 1, 2, 2, 3]);

  return {x, y, size};
}

function updateBackground(dx, dy) {
  return backgroundStars;
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// gets mas of numbers - the more number occurencies in mas, the more probability of it
function randomWithProbability(notRandomNumbers) {
  const idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}