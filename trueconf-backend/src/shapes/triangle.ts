import { Shape } from "./shape";

export class Triangle extends Shape {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    super();

    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Triangle is not valid");
    }
  }

  getArea(): number {
    let s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}
