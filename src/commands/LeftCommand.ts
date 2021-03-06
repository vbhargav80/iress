import ICommand from "./ICommand";
import Robot from "../model/Robot";

export default class LeftCommand implements ICommand {
    
    robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    execute(): void {
        if (this.robot.hasBeenPlaced()) {
            this.robot.turnLeft();
        }
    }
}