import { RobotType } from "../types/robot.type";
export class RobotObj implements RobotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ("000000" + aNumbers[0]).slice(-6);
    }
    static generateDate() {
        const currentDate = new Date();
        const formatDate = currentDate.toLocaleDateString();
        return formatDate;
    }
    id: string;
    isFavourite: boolean;
    creation: string;
    constructor(
        public robotName: string,
        public image: string,
        public speed: string,
        public strength: string,
        public creator: string
    ) {
        this.id = RobotObj.generateId();
        this.isFavourite = false;
        this.creation = RobotObj.generateDate();
    }
}
