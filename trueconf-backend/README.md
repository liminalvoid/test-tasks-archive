# basic-shapes

Basic geometrical shapes

## Usage

```typescript
import { Rectangle, Square, Triangle, Circle } from "basic-shapes";

const rect = new Rectangle(50, 20);
const square = new Square(50);
const triangle = new Triangle(30, 40, 50);
const circle = new Circle(40);

console.log("Rectangle area:", rect.getArea());
console.log("Rectangle perimeter:", rect.getPerimeter());

console.log("Square area:", square.getArea());
console.log("Square perimeter:", square.getPerimeter());

console.log("Triangle area:", triangle.getArea());
console.log("Triangle perimeter:", triangle.getPerimeter());

console.log("Circle area:", circle.getArea());
console.log("Circle perimeter:", circle.getPerimeter());
console.log("Circle diameter:", circle.getDiameter());
```

### Create new shape

```typescript
import { Shape } from "basic-shapes";

class Hexagon extends Shape {
  side: number;

  constructor(side: number) {
    super();

    this.side = side;
  }

  getArea(): number {
    return (3 * Math.sqrt(3)) / 2 * Math.pow(this.side, 2);
  }

  getPerimeter(): number {
    return 6 * this.side;
  }
}
```

## Installation

Clone repository and open repo's folder, then:

```bash
pnpm run compile
```

Then in project where needed:

```bash
pnpm add <lib_folder>
```

## Testing

Run tests

```bash
pnpm run test
```

Coverage

```bash
pnpm run coverage
```
