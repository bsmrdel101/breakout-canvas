import { keysPressed, pxCtx } from "../main";

export class Paddle {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  speed: number;

  constructor(x: number, y: number, w: number, h: number, color: string, speed = 2) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = speed;
  }

  private handleKeydown() {
    if (keysPressed['ArrowRight'] || keysPressed['d']) {
      this.x += this.speed;
    } else if (keysPressed['ArrowLeft'] || keysPressed['a']) {
      this.x -= this.speed;
    }
  }

  draw() {
    this.handleKeydown();
    pxCtx.fillStyle = this.color;
    pxCtx.fillRect(this.x, this.y, this.w, this.h);
  }
}