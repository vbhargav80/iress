import ICommand from "./ICommand";
import Robot from "../model/Robot";

export default class ReportCommand implements ICommand {
    
    robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    execute(): void {
        if (this.robot.hasBeenPlaced()) {
            const currentPosition = this.robot.position;
            const currentDirection = this.robot.direction;
            console.log(currentPosition!.xCoordinate.toString() + "," + currentPosition!.yCoordinate + "," + currentDirection!.toString());
        }
    }
}