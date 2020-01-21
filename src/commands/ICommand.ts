import Robot from "../model/Robot";

export default interface ICommand {
    robot: Robot;
    execute(): void;
}