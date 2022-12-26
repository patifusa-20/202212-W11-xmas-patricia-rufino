import { Robot } from "../model/robot.model";

export const ROBOTS = [
    new Robot("Peonic", "https://robohash.org/peonic.png"),
    new Robot("Farolic", "https://robohash.org/farolic.png"),
    new Robot("Madetronic", "https://robohash.org/madetronic.png"),
].map((item) => ({ ...item }));

export const initializeROBOTS = () => ROBOTS;
