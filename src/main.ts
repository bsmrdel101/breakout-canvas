import { Ball } from "./GameObjects/Ball";
import { Block } from "./GameObjects/Block";
import { Paddle } from "./GameObjects/Paddle";

export let bgCanvas: HTMLCanvasElement;
export let pxCanvas: HTMLCanvasElement;
export let bgCtx: CanvasRenderingContext2D;
export let pxCtx: CanvasRenderingContext2D;


export const initCanvas = () => {
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  start();
  window.requestAnimationFrame(drawFrame);
};

const start = () => {};


const block = new Block(10, 10, 20, 20, 'red');
const ball = new Ball(150, 120, 3, 'blue', 2);
const paddle = new Paddle(130, 138, 35, 3, 'black');

const drawFrame = () => {
  pxCtx.clearRect(0, 0, pxCanvas.width, pxCanvas.height);
  block.draw();
  ball.draw();
  paddle.draw();
  window.requestAnimationFrame(drawFrame);
};
