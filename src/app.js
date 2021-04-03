import {SNAKE_SPEED} from "./snake.js"
let lastRenderTime = 0;


//let's set a game loop to constantly update our game render,
//i.e. snake's position, food, everything I mean
//with this function overall,
//I tell the computer to render the frame with currentTime,
//which means incessantly
function main(currentTime) {
  window.requestAnimationFrame(main);
  // converts miliseconds to seconds
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log(currentTime);
  lastRenderTime = currentTime;

  update();
  draw();
}
//and this one calls the above function,
//to initiate all
window.requestAnimationFrame(main);

function update(){

}

function draw(){

}