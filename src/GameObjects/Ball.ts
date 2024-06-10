import { pxCtx } from "../main";


export class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  mass: number;
  hasGravity = false;
  private vel: Vec2 = { x: 0, y: 1 };

  constructor(x: number, y: number, radius: number, color: string, mass: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.mass = mass;
  }

  private applyVelocity() {
    if (!this.hasGravity) return;
    this.x += this.vel.x * this.mass;
    this.y += this.vel.y * this.mass;
  }

  draw() {
    pxCtx.beginPath();
    pxCtx.fillStyle = this.color;
    pxCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    pxCtx.fill();
    this.applyVelocity();
  }
}
