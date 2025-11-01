import { describe, it, expect } from "vitest";
import { Square } from "../../src/index";

describe("Square", () => {
  it("computes area correctly", () => {
    const s = new Square(20);
    expect(s.getArea()).toBe(20 * 20);
  });

  it("computes perimeter correctly", () => {
    const s = new Square(20);
    expect(s.getPerimeter()).toBe(20 * 4);
  });
});
