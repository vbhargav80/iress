import 'jest'
import Robot from '../src/model/Robot'
import Table from '../src/model/Table'
import Direction from '../src/model/Direction';
import Position from '../src/model/Position';
import PlaceCommand from '../src/commands/PlaceCommand';

describe('PlaceCommand Tests', () => {

    it("does not place the robot in an invalid position on the table", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const placeCommand = new PlaceCommand(robot, table, new Position(4,5), Direction.North);
        placeCommand.execute();

        expect(robot.position).toBeNull();
    });

    it("places the robot in a valid position on the table", () => {
        const robot = new Robot();
        const table = new Table(5,5);
        robot.direction = Direction.West;

        const placeCommand = new PlaceCommand(robot, table, new Position(4,3), Direction.North);
        placeCommand.execute();

        expect(robot.position!.xCoordinate).toBe(4);
        expect(robot.position!.yCoordinate).toBe(3);
        expect(robot.direction).toBe(Direction.North);
    });
});