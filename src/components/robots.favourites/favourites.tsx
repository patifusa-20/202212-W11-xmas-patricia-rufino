import { useState, useEffect } from "react";
import { RobotType } from "../../model/robot.model";
import { RobotsRepo } from "../../repository/robots.repo";
import { Robot } from "../robot/robot";

export function RobotsFav() {
    const repo = new RobotsRepo();
    const initialState: Array<RobotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = async () => {
        const data = await repo.load();
        setRobots(data);
    };

    useEffect(() => {
        handleLoad();
    }, []);

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

    return (
        <>
            <ul className="robots-list">
                {robots.map((item) => {
                    if (item.isFavourite) {
                        return (
                            <Robot
                                key={item.id}
                                item={item}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                                handleFavourite={handleFavourite}
                            ></Robot>
                        );
                    }
                })}
            </ul>
        </>
    );
}
