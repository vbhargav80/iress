import ICommand from "./ICommand";
import Robot from "../model/Robot";

export default class RightCommand implements ICommand {
    
    robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    execute(): void {
        if (this.robot.hasBeenPlaced()) {
            this.robot.turnRight();
        }
    }
}