export type RobotType = {
    id: string;
    robotName: string;
    image: string;
    isFavourite: boolean;
};

export type RobotDetailsType = {
    robotName: string;
    image: string;
    height: string;
    material: string;
};

export class Robot implements RobotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ("000000" + aNumbers[0]).slice(-6);
    }
    id: string;
    isFavourite: boolean;
    constructor(public robotName: string, public image: string) {
        this.id = Robot.generateId();
        this.isFavourite = false;
    }
}
