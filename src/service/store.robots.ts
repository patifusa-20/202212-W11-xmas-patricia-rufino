import { RobotsRepo } from "../repository/robots.repo";
import { RobotType } from "../types/robot.type";

const repo = new RobotsRepo();

export const getStorageList = <T>(storeName: string): Array<T> => {
    const result = localStorage.getItem(storeName);
    if (!result) return [];
    return JSON.parse(result);
};

export const setStorageList = <T>(storeName: string, data: Array<T>): void => {
    localStorage.setItem(storeName, JSON.stringify(data));
};

export const getRobots = async (): Promise<Array<RobotType>> => {
    const data = getStorageList<RobotType>("robots");
    if (!data.length) {
        const data = await repo.load();
        setStorageList("robots", data);
        return data;
    }
    return data;
};

export const saveRobots = async (robots: Array<RobotType>) => {
    setStorageList("robots", robots);
};
