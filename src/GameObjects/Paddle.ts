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

  private handleCollision() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.w > 300) {
      this.x = 300 - this.w;
    }
  }

  draw() {
    this.handleKeydown();
    this.handleCollision();
    pxCtx.fillStyle = this.color;
    pxCtx.fillRect(this.x, this.y, this.w, this.h);
  }
}