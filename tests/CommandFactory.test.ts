import 'jest'
import Robot from '../src/model/Robot'
import CommandFactory from '../src/commands/CommandFactory';
import Table from '../src/model/Table';
import PlaceCommand from '../src/commands/PlaceCommand';
import MoveCommand from '../src/commands/MoveCommand';
import LeftCommand from '../src/commands/LeftCommand';
import RightCommand from '../src/commands/RightCommand';
import ReportCommand from '../src/commands/ReportCommand';

describe('CommandFactory Tests', () => {

    it("creates an instance of PlaceCommand when provided correct input string", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("PLACE 0,0,NORTH", robot, table);

        expect(command).toBeInstanceOf(PlaceCommand);
    });

    it("creates an instance of MoveCommand when provided correct input string", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("MOVE", robot, table);

        expect(command).toBeInstanceOf(MoveCommand);
    });

    it("creates an instance of LeftCommand when provided correct input string", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("LEFT", robot, table);

        expect(command).toBeInstanceOf(LeftCommand);
    });

    it("creates an instance of RightCommand when provided correct input string", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("Right", robot, table);

        expect(command).toBeInstanceOf(RightCommand);
    });

    it("creates an instance of ReportCommand when provided correct input string", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("Report", robot, table);

        expect(command).toBeInstanceOf(ReportCommand);
    });

    it("returns null when provided incorrect input string for place command", () => {
        const robot = new Robot();
        const table = new Table(5,5);

        const factory = new CommandFactory();
        const command = factory.create("PLACE Jibberish", robot, table);

        expect(command).toBeNull();
    });

});