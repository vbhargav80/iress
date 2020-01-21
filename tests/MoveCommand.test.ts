import 'jest'
import Robot from '../src/model/Robot'
import Direction from '../src/model/Direction';
import Position from '../src/model/Position';
import MoveCommand from '../src/commands/MoveCommand';
import Table from '../src/model/Table';

describe('MoveCommand Tests', () => {

    it("does not move the robot if it is about to fall off the table", () => {
        const table = new Table(5,5);
        let robot = new Robot();
        robot.direction = Direction.North;
        robot.position = new Position(2,4);

        const moveCommand = new MoveCommand(robot, table);
        moveCommand.execute();

        expect(robot.position.xCoordinate).toBe(2);
        expect(robot.position.yCoordinate).toBe(4);

        robot.direction = Direction.South;
        robot.position = new Position(1,0);
        moveCommand.execute();

        expect(robot.position.xCoordinate).toBe(1);
        expect(robot.position.yCoordinate).toBe(0);
    });

    it("moves the robot if it stays within the table bounds", () => {
        const table = new Table(5,5);
        let robot = new Robot();
        robot.direction = Direction.North;
        robot.position = new Position(2,1);

        const moveCommand = new MoveCommand(robot, table);
        moveCommand.execute();

        expect(robot.position.xCoordinate).toBe(2);
        expect(robot.position.yCoordinate).toBe(2);
    });

    it("does nothing if the robot has not been placed", () => {
        const table = new Table(5,5);
        let robot = new Robot();

        const moveCommand = new MoveCommand(robot, table);
        moveCommand.execute();

        expect(robot.position).toBeNull();
    });
});