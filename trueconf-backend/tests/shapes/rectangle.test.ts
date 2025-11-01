import { describe, it, expect } from "vitest";
import { Rectangle } from "../../src/index";

describe("Rectangle", () => {
  it("computes area correctly", () => {
    const s = new Rectangle(10, 20);
    expect(s.getArea()).toBe(200);
  });

  it("computes perimeter correctly", () => {
    const s = new Rectangle(10, 20);
    expect(s.getPerimeter()).toBe(60);
  });
});
