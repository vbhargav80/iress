import Direction from "./Direction";
import Position from "./Position";
import Table from "./Table";

export default class Robot {
    position: Position | null;
    direction: Direction | null;

    constructor() {
        this.position = null;
        this.direction = null;
    }

    hasBeenPlaced(): boolean {
        return this.position !== null 
            && this.direction !== null;
    }

    move(): void {
        switch (this.direction) {
            case Direction.North:
              this.position!.yCoordinate++;
              break;
            case Direction.East:
                this.position!.xCoordinate++;
              break;
            case Direction.South:
                this.position!.yCoordinate--;
              break;
            case Direction.West:
                this.position!.xCoordinate--;
              break;
          }
    }

    turnLeft(): void {
        switch (this.direction) {
            case Direction.North:
              this.direction = Direction.West;
              break;
            case Direction.East:
              this.direction = Direction.North;
              break;
            case Direction.South:
              this.direction = Direction.East;
              break;
            case Direction.West:
              this.direction = Direction.South;
              break;
          }
    }

    turnRight(): void {
        switch (this.direction) {
            case Direction.North:
              this.direction = Direction.East;
              break;
            case Direction.East:
              this.direction = Direction.South;
              break;
            case Direction.South:
              this.direction = Direction.West;
              break;
            case Direction.West:
              this.direction = Direction.North;
              break;
          }
    }
}