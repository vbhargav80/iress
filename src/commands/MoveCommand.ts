import ICommand from "./ICommand";
import Robot from "../model/Robot";
import Table from "../model/Table";
import * as _ from "lodash";

export default class MoveCommand implements ICommand {
    
    robot: Robot;
    table: Table;

    constructor(robot: Robot, table: Table) {
        this.robot = robot;
        this.table = table;
    }

    execute(): void {
        if (this.robot.hasBeenPlaced()) {
            const robotClone = _.cloneDeep(this.robot);
            robotClone.move();

            if (this.table.isValidPosition(robotClone.position!)) {
                this.robot.move();
            } else {
                console.log("Command ignored as it would place the robot outside the table bounds.");
            }
        }
    }
}