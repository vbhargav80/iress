import 'jest'
import Robot from '../src/model/Robot'
import Direction from '../src/model/Direction';
import Position from '../src/model/Position';
import LeftCommand from '../src/commands/LeftCommand';

describe('LeftCommand Tests', () => {

    it("does nothing if the robot has not been placed", () => {
        let robot = new Robot();

        const moveCommand = new LeftCommand(robot);
        moveCommand.execute();

        expect(robot.position).toBeNull();
    });

    it("faces the robot North when turning left from an East direction", () => {
        let robot = new Robot();
        robot.direction = Direction.East;
        robot.position = new Position(2,1);

        const moveCommand = new LeftCommand(robot);
        moveCommand.execute();

        expect(robot.position.xCoordinate).toBe(2);
        expect(robot.position.yCoordinate).toBe(1);
        expect(robot.direction).toBe(Direction.North);
    });
});