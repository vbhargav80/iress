import 'jest'
import Robot from '../src/model/Robot'
import Direction from '../src/model/Direction';
import Position from '../src/model/Position';

describe('Robot Tests', () => {
  it("is not placed if position has not been set", () => {
    var robot = new Robot();
    robot.direction = Direction.North;
    expect(robot.hasBeenPlaced()).toBeFalsy();
  });

  it("is not placed if direction has not been set", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    expect(robot.hasBeenPlaced()).toBeFalsy();
  });

  it("is placed if direction and position has been set", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.North;
    expect(robot.hasBeenPlaced()).toBeTruthy();
  });

  it("is faces North when turning right from a West facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.West;
    robot.turnRight();
    expect(robot.direction).toBe(Direction.North);
  });

  it("is faces North when turning left from a East facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.East;
    robot.turnLeft();
    expect(robot.direction).toBe(Direction.North);
  });

  it("is faces East when turning right from a North facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.North;
    robot.turnRight();
    expect(robot.direction).toBe(Direction.East);
  });

  it("is faces East when turning left from a South facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.South;
    robot.turnLeft();
    expect(robot.direction).toBe(Direction.East);
  });

  it("is faces South when turning right from a East facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.East;
    robot.turnRight();
    expect(robot.direction).toBe(Direction.South);
  });

  it("is faces South when turning left from a West facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.West;
    robot.turnLeft();
    expect(robot.direction).toBe(Direction.South);
  });

  it("is faces West when turning right from a South facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.South;
    robot.turnRight();
    expect(robot.direction).toBe(Direction.West);
  });

  it("is faces West when turning left from a North facing direction", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.North;
    robot.turnLeft();
    expect(robot.direction).toBe(Direction.West);
  });

  it("is moves 1 step forward along x axis when facing east", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.East;
    robot.move();
    expect(robot.position.xCoordinate).toBe(2);
  });

  it("is moves 1 step forward along y axis when facing north", () => {
    var robot = new Robot();
    robot.position = new Position(1,1);
    robot.direction = Direction.North;
    robot.move();
    expect(robot.position.yCoordinate).toBe(2);
  });

  it("is moves 1 step back along x axis when facing west", () => {
    var robot = new Robot();
    robot.position = new Position(4,2);
    robot.direction = Direction.West;
    robot.move();
    expect(robot.position.xCoordinate).toBe(3);
  });

  it("is moves 1 step forward along y axis when facing south", () => {
    var robot = new Robot();
    robot.position = new Position(4,4);
    robot.direction = Direction.South;
    robot.move();
    expect(robot.position.yCoordinate).toBe(3);
  });

})
