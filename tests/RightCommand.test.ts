import 'jest'
import Robot from '../src/model/Robot'
import Direction from '../src/model/Direction';
import Position from '../src/model/Position';
import RightCommand from '../src/commands/RightCommand';

describe('RightCommand Tests', () => {

    it("does nothing if the robot has not been placed", () => {
        let robot = new Robot();
        robot.move = jest.fn();

        const moveCommand = new RightCommand(robot);
        moveCommand.execute();

        expect(robot.position).toBeNull();
        expect(robot.move).toHaveBeenCalledTimes(0);
    });

    it("faces the robot North when turning right from the West direction", () => {
        let robot = new Robot();
        robot.direction = Direction.West;
        robot.position = new Position(3,2);

        const moveCommand = new RightCommand(robot);
        moveCommand.execute();

        expect(robot.position.xCoordinate).toBe(3);
        expect(robot.position.yCoordinate).toBe(2);
        expect(robot.direction).toBe(Direction.North);
    });
});