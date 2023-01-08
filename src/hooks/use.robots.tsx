import { useCallback, useState } from "react";
import { getRobots } from "../service/store.robots";
import { UseRobots } from "../types/hook.type";
import { RobotType } from "../types/robot.type";
import { RobotsRepo } from "../repository/robots.repo";

export function useRobots(): UseRobots {
    const repo = new RobotsRepo();
    const data = getRobots();
    const initialState: Array<RobotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        setRobots(await data);
    }, []);

    const handleAdd = async function (robot: RobotType) {
        setRobots([...robots, robot]);
        await repo.create(robot);
    };

    const handleUpdate = async function (robot: Partial<RobotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
    };

    const handleDelete = async function (id: RobotType["id"]) {
        setRobots(robots.filter((item) => item.id !== id));
        await repo.delete(id);
    };

    const handleFavourite = async function (robot: Partial<RobotType>) {
        robot.isFavourite = !robot.isFavourite;
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
    };

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleFavourite,
    };
}
