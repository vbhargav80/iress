import ICommand from "./ICommand";
import Robot from "../model/Robot";
import Position from "../model/Position";
import Direction from "../model/Direction";
import Table from "../model/Table";

export default class PlaceCommand implements ICommand {
    
    robot: Robot;
    table: Table;
    position: Position;
    direction: Direction;

    constructor(robot: Robot, table: Table, position: Position, direction: Direction) {
        this.robot = robot;
        this.table = table;
        this.position = position;
        this.direction = direction;
    }

    execute(): void {
        if (this.table.isValidPosition(this.position)) {
            this.robot.position = this.position;
            this.robot.direction = this.direction;
        } else {
            console.log("Cannot place the robot in an invalid position. Please issue a valid place command")
        }
    }
}