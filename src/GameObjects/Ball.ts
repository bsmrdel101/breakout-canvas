import { keysPressed, pxCtx } from "../main";
import { Paddle } from "./Paddle";


export class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  mass: number;
  hasLaunched = false;
  vel: Vec2 = { x: 0, y: 0 };
  private paddle: Paddle;

  constructor(x: number, y: number, radius: number, color: string, mass: number, paddle: Paddle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.mass = mass;
    this.paddle = paddle;
  }

  private handleBallLaunch() {
    if (this.hasLaunched) return;
    this.x = this.paddle.x + this.paddle.w / 2;
    this.y = this.paddle.y - this.radius;
    if (keysPressed[' ']) {
      this.hasLaunched = true;
      this.vel = { x: Math.random() * (2 - -2) + -2, y: 1 };
    }
  };

  private applyVelocity() {
    if (!this.hasLaunched) return;
    this.x += this.vel.x * this.mass;
    this.y += this.vel.y * this.mass;
  }

  private handleCollision() {
    // Paddle collision
    if (this.y + this.radius >= this.paddle.y && this.x >= this.paddle.x && this.x <= this.paddle.x + this.paddle.w) {
      this.vel.y = -this.vel.y;
      this.vel.x = (this.x - (this.paddle.x + this.paddle.w / 2)) / 10;
    }

    // Wall collision
    if (this.y - this.radius <= 0) {
      this.vel.y = -this.vel.y;
    } else if (this.x - this.radius <= 0 || this.x + this.radius >= pxCtx.canvas.width) {
      this.vel.x = -this.vel.x;
    } else if (this.y + this.radius >= pxCtx.canvas.height) {
      this.handleDeath();
    }
  };

  private handleDeath() {
    this.hasLaunched = false;
  }

  draw() {
    this.handleBallLaunch();
    this.handleCollision();
    pxCtx.beginPath();
    pxCtx.fillStyle = this.color;
    pxCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    pxCtx.fill();
    this.applyVelocity();
  }
}
