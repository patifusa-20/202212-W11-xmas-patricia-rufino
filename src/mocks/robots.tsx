import { Robot } from "../model/robot.model";

export const ROBOTS = [
    new Robot("Peonic", "https://robohash.org/peonic.png", "2", "5", "Pepe"),
    new Robot("Farolic", "https://robohash.org/farolic.png", "2", "5", "Pepe"),
    new Robot(
        "Madetronic",
        "https://robohash.org/madetronic.png",
        "2",
        "5",
        "Pepe"
    ),
].map((item) => ({ ...item }));

export const initializeROBOTS = () => ROBOTS;
