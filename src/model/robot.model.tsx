export type RobotType = {
    id: string;
    robotName: string;
    image: string;
    isFavourite: boolean;
    velocity: string;
    strength: string;
    creation: string;
    creator: string;
};

export class Robot implements RobotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ("000000" + aNumbers[0]).slice(-6);
    }
    static generateDate() {
        const currentDate = new Date();
        return currentDate.toLocaleString();
    }
    id: string;
    isFavourite: boolean;
    creation: string;
    constructor(
        public robotName: string,
        public image: string,
        public velocity: string,
        public strength: string,
        public creator: string
    ) {
        this.id = Robot.generateId();
        this.isFavourite = false;
        this.creation = Robot.generateDate();
    }
}
