import { RobotType } from "../types/robot.type";

export type UseRobots = {
    robots: Array<RobotType>;
    handleLoad: () => void;
    handleAdd: (item: RobotType) => void;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
};
