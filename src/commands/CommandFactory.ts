import ICommandFactory from "./ICommandFactory";
import Table from "../model/Table";
import Position from "../model/Position";
import ICommand from "./ICommand";
import PlaceCommand from "./PlaceCommand";
import Robot from "../model/Robot";
import Direction from "../model/Direction";
import ReportCommand from "./ReportCommand";
import MoveCommand from "./MoveCommand";
import LeftCommand from "./LeftCommand";
import RightCommand from "./RightCommand";

export default class CommandFactory implements ICommandFactory {
    readonly placeRegex = /^PLACE\s+\d+,\d+,(NORTH|EAST|SOUTH|WEST)$/;
    readonly reportRegex = /^REPORT$/;
    readonly leftRegex = /^LEFT$/;
    readonly rightRegex = /^RIGHT$/;
    readonly moveRegex = /^MOVE$/;

    create(inputLine: string, robot: Robot, table: Table): ICommand | null {
        let parsedCommand: ICommand | null = null;
        var upperCaseInput = inputLine.toUpperCase();

        if (this.placeRegex.test(upperCaseInput))
        {
            parsedCommand = this.parsePositionCommand(inputLine, robot, table);
        } else if (this.reportRegex.test(upperCaseInput)) {
            parsedCommand = new ReportCommand(robot);
        } else if (this.moveRegex.test(upperCaseInput)) {
            parsedCommand = new MoveCommand(robot, table);
        } else if (this.leftRegex.test(upperCaseInput)) {
            parsedCommand = new LeftCommand(robot);
        } else if (this.rightRegex.test(upperCaseInput)) {
            parsedCommand = new RightCommand(robot);
        }

        return parsedCommand;
    }

    private parsePositionCommand(inputLine: string, robot: Robot, table: Table): PlaceCommand | null {

        const [, x, y, direction] = inputLine.replace(" ", ",").split(",");
        const parsedDirection = this.parseDirection(direction);
        const position = new Position(+x, +y);

        if (parsedDirection !== null) {
            return new PlaceCommand(robot, table, position, parsedDirection)
        }
        
        return null;
    }

    private parseDirection(direction: string): Direction | null {
        const upperCaseInput = direction.toUpperCase();
        let parsedDirection: Direction | null = null;

        if (upperCaseInput === "NORTH") {
            parsedDirection = Direction.North;
        } else if (upperCaseInput === "EAST") {
            parsedDirection = Direction.East;
        } else if (upperCaseInput === "SOUTH") {
            parsedDirection = Direction.South;
        } else if (upperCaseInput === "WEST") {
            parsedDirection = Direction.West;
        }

        return parsedDirection;
    }
}