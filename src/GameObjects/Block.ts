import { addScore, ball, pxCtx } from "../main";

export class Block {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;

  constructor(x: number, y: number, w: number, h: number, color: string) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  private handleCollision() {
    const distX = Math.abs(ball.x - this.x - this.w / 2);
    const distY = Math.abs(ball.y - this.y - this.h / 2);

    if (distX > (this.w / 2 + ball.radius)) { return; }
    if (distY > (this.h / 2 + ball.radius)) { return; }
  
    const dx = distX - this.w / 2;
    const dy = distY - this.h / 2;
    if (dx * dx + dy * dy <= (ball.radius * ball.radius)) {
      ball.vel.y = -ball.vel.y;
      ball.vel.x = -ball.vel.x;
      this.destroy();
      return;
    }
  
    if (distX <= (this.w / 2)) {
      ball.vel.y = -ball.vel.y;
      this.destroy();
      return;
    } 
    if (distY <= (this.h / 2)) {
      ball.vel.x = -ball.vel.x;
      this.destroy();
    }
  }

  private destroy() {
    pxCtx.clearRect(this.x, this.y, this.w, this.h);
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.color = '';
    addScore();
  }

  draw() {
    pxCtx.fillStyle = this.color;
    pxCtx.fillRect(this.x, this.y, this.w, this.h);
    this.handleCollision();
  }
}
