import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
  constructor(length: number) {
    super(length, length);
  }
}
