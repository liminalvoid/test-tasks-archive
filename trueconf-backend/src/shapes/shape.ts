/**
 * Base class for all shapes
 */
export abstract class Shape {
  /** @virtual */
  abstract getArea(): number;
  /** @virtual */
  abstract getPerimeter(): number;
}
