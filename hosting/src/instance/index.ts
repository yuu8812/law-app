import { P5CanvasInstance } from "@p5-wrapper/react";
import { Element } from "p5";

export class FloatingImage {
  private img: Element;
  private width: number;
  private height: number;
  private left: number;
  private right: number;
  private top: number;
  private bottom: number;
  private x: number;
  private velocity_x: number;
  private deceleration_x: number;
  private y: number;
  private velocity_y: number;
  private acceleration_y: number;
  private deceleration_y: number;
  private rotate: number;
  private opacity: number;

  constructor(p5: P5CanvasInstance, imageUrl: string) {
    this.img = p5.createImg(imageUrl, "aa");
    this.img.style("border-radius", "50%");
    this.img.style("box-shadow", "0 0 100px rgba(0, 0, 0, 0.5)");

    this.width = p5.width;
    this.height = p5.height;

    this.left = -this.width / 2;
    this.right = this.width / 2;
    this.top = -this.height / 2;
    this.bottom = this.height / 2;

    this.x = Math.random() * this.width - this.right;
    this.velocity_x = 1;
    this.deceleration_x = 10;

    this.y = this.top;
    this.velocity_y = 0.01;
    this.acceleration_y = 0.01;
    this.deceleration_y = 10;

    this.rotate = 0;
    this.opacity = 1;
  }

  update(): void {
    this.x = this.x + this.velocity_x * this.deceleration_x;
    this.velocity_y = this.velocity_y + this.acceleration_y;
    this.y = this.y + this.velocity_y * this.deceleration_y;

    if (this.x < this.left || this.x > this.right) {
      this.velocity_x = -this.velocity_x;
    }

    if (this.y < this.top || this.y > this.bottom) {
      this.velocity_y = -this.velocity_y;
    }

    this.img.position(this.x - this.left - 100, this.y - this.top - 100);
    this.img.style("transform", `rotate(${this.rotate}deg)`);
    this.img.style("opacity", `${this.opacity}`);
    this.rotate++;
    this.opacity -= 0.005;
  }
}
