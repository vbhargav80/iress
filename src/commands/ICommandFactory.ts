import Table from "../model/Table";
import ICommand from "./ICommand";
import Robot from "../model/Robot";

export default interface ICommandFactory {
    create(inputLine: string, robot: Robot, table: Table): ICommand | null;
}