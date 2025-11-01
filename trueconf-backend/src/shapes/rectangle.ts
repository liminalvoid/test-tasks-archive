import { Shape } from "./shape";

export class Rectangle extends Shape {
  height: number;
  width: number

  /**
   * Constructor of `Rectangle` class
   * 
   * @param height - The height of the rectangle
   * @param width - The width of the rectangle
   */
  constructor(height: number, width: number) {
    super();

    this.height = height;
    this.width = width;
  }

  /**
   * Calculates area of the rectangle
   * 
   * @returns The area of the rectangle
   */
  getArea(): number {
    return this.height * this.width;
  }

  /**
   * Calculates perimeter of the rectangle
   * 
   * @returns The perimeter of the rectangle
   */
  getPerimeter(): number {
    return this.height * 2 + this.width * 2
  }
}
