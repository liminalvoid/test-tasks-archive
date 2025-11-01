import { describe, it, expect } from "vitest";
import { Circle } from "../../src/index";

describe("Circle", () => {
  it("computes area correctly", () => {
    const s = new Circle(10);
    expect(s.getArea()).toBeCloseTo(Math.PI * 100);
  });

  it("computes perimeter correctly", () => {
    const s = new Circle(10);
    expect(s.getPerimeter()).toBeCloseTo(2 * Math.PI * 10);
  });

  it("computes diameter correctly", () => {
    const s = new Circle(10);
    expect(s.getDiameter()).toBe(10 * 2);
  })
});
