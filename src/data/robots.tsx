import { RobotObj } from "../model/robot.model";

export const ROBOTS = [
    new RobotObj("Peonic", "https://robohash.org/peonic.png", "2", "5", "Pepe"),
    new RobotObj(
        "Farolic",
        "https://robohash.org/farolic.png",
        "2",
        "5",
        "Pepe"
    ),
    new RobotObj(
        "Madetronic",
        "https://robohash.org/madetronic.png",
        "2",
        "5",
        "Pepe"
    ),
].map((item) => ({ ...item }));

export const initializeROBOTS = () => ROBOTS;
