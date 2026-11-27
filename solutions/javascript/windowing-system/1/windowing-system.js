// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    newSize.width = newSize.width >= 1 ? newSize.width : 1;
    newSize.height = newSize.height >= 1 ? newSize.height : 1;

    newSize.width = Math.min(newSize.width, this.screenSize.width - this.position.x);
    newSize.height = Math.min(newSize.height, this.screenSize.height - this.position.y);

    this.size.resize(newSize.width, newSize.height);
  }

  move(newPosition) {
    newPosition.x = newPosition.x >= 0 ? newPosition.x : 0;
    newPosition.y = newPosition.y >= 0 ? newPosition.y : 0;

    newPosition.x = Math.min(newPosition.x, this.screenSize.width - this.size.width);
    newPosition.y = Math.min(newPosition.y, this.screenSize.height - this.size.height);

    this.position.move(newPosition.x, newPosition.y);
  }
}

export const changeWindow = (programWindow) => {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
};