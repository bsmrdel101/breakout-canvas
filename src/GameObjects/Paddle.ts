import { pxCtx } from "../main";

export class Paddle {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  speed: number;
  private keydown = null;

  constructor(x: number, y: number, w: number, h: number, color: string, speed = 2) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = speed;
    document.addEventListener('keydown', (e) => this.keydown = e.key);
    document.addEventListener('keyup', () => this.keydown = null);
  }

  private handleKeydown() {
    if (this.keydown === 'ArrowRight' || this.keydown === 'd') {
      this.x += this.speed;
    } else if (this.keydown === 'ArrowLeft' || this.keydown === 'a') {
      this.x -= this.speed;
    }
  }

  draw() {
    if (this.keydown) this.handleKeydown();
    pxCtx.fillStyle = this.color;
    pxCtx.fillRect(this.x, this.y, this.w, this.h);
  }
}