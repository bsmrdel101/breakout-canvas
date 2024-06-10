import { Ball } from "./GameObjects/Ball";
import { Level } from "./GameObjects/Level";
import { Paddle } from "./GameObjects/Paddle";

export let bgCanvas: HTMLCanvasElement;
export let pxCanvas: HTMLCanvasElement;
export let bgCtx: CanvasRenderingContext2D;
export let pxCtx: CanvasRenderingContext2D;
export const keysPressed: { [key: string]: boolean } = {};


export const initCanvas = () => {
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  start();
  window.requestAnimationFrame(drawFrame);
};

const start = () => {};

document.addEventListener('keydown', (e: Event) => {
  keysPressed[(e as KeyboardEvent).key] = true;
});

document.addEventListener('keyup', (e: Event) => {
  keysPressed[(e as KeyboardEvent).key] = false;
});


const level = new Level(2, 10, 4);
const paddle = new Paddle(130, 138, 35, 3, 'black');
const ball = new Ball(150, 120, 3, 'blue', 2, paddle);

const drawFrame = () => {
  pxCtx.clearRect(0, 0, pxCanvas.width, pxCanvas.height);
  level.draw();
  ball.draw();
  paddle.draw();
  window.requestAnimationFrame(drawFrame);
};
