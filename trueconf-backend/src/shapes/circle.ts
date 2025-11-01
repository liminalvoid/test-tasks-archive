import { Shape } from "./shape";

export class Circle extends Shape {
  radius: number;

  /**
   * Constructor of `Circle` class
   * 
   * @param radius - The radius of circle
   */
  constructor(radius: number) {
    super();

    this.radius = radius;
  }

  /**
   * Calculates the area of the circle
   * 
   * @returns The area of the circle
   */
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  /**
   * Calculates the circumference (perimeter)
   * of the circle
   * 
   * @returns The circumference of the circle
   */
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Calculates the diameter of the circle
   * 
   * @returns The diameter of the circle
   */
  getDiameter(): number{
    return 2 * this.radius;
  }
}
