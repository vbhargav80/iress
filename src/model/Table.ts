import Position from "./Position";

export default class Table {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    isValidPosition(newPosition: Position): boolean {
        return newPosition.xCoordinate >= 0 &&
            newPosition.xCoordinate <= (this.length - 1) &&
            newPosition.yCoordinate >= 0 &&
            newPosition.yCoordinate <= (this.width - 1);
    }
}