import ICommandFactory from "./commands/ICommandFactory";
import CommandFactory from "./commands/CommandFactory";
import ICommand from "./commands/ICommand";
import Robot from "./model/Robot";
import Table from "./model/Table";
import { createInterface, ReadLineOptions } from 'readline';
import PlaceCommand from "./commands/PlaceCommand";

const rlOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

console.log("Please start by issuing a Place command.")
console.log("To terminate this program, press CTRL+C (for Windows) or Command+C (for Mac) on your keyboard.");
const rl = createInterface(rlOptions);
rl.prompt(true);

const table = new Table(5, 5);
const robot = new Robot();
const commandFactory: ICommandFactory = new CommandFactory();

rl.on('line', (line: string) => {
  const command: ICommand | null = commandFactory.create(line, robot, table);
  
  if (!command) {
    console.log("Invalid command. Please enter a valid command");
  } else if (command instanceof PlaceCommand) {
    command.execute();
  } else if (!robot.hasBeenPlaced()){
    console.log("Please place the robot before issuing other commands.");
  } else {
    command.execute();
  }

  rl.prompt(true);
});

