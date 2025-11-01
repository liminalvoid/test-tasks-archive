import { describe, it, expect } from "vitest";
import { Triangle } from "../../src/index";

describe("Triangle", () => {
  it("determines if triangle is valid", () => {
    expect(() => new Triangle(20, 5, 2)).toThrow("Triangle is not valid");
  });

  it("computes area correctly", () => {
    const t = new Triangle(20, 40, 50);
    const s = (20 + 40 + 50) / 2
    expect(t.getArea()).toBeCloseTo(Math.sqrt(s * (s - 20) * (s - 40) * (s - 50)))
  });

  it("computes perimeter correctly", () => {
    const s = new Triangle(20, 40, 50);
    expect(s.getPerimeter()).toBe(20 + 40 + 50);
  });
});
