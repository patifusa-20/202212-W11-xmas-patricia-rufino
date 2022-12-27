import { useCallback, useState } from "react";
import { initializeROBOTS } from "../../mocks/robots";
import { RobotType } from "../../model/robot.model";
import { Add } from "../robot.add/add";
import { Robot } from "../robot/robot";
import "./robots.scss";

export function Robots() {
    const items = initializeROBOTS();
    const initialState: Array<RobotType> = items;

    const [robots, setRobots] = useState(initialState);

    // const handleLoad = useCallback(async () => {
    //     const data = await getRobots();
    //     setRobots(data);
    // }, []);

    const handleAdd = function (robot: RobotType) {
        setRobots([...robots, robot]);
    };

    const handleUpdate = function (robot: Partial<RobotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
    };

    const handleDelete = function (id: RobotType["id"]) {
        setRobots(robots.filter((item) => item.id !== id));
    };
    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <ul className="robots-list">
                {robots.map((item) => {
                    return (
                        <Robot
                            key={item.id}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                        ></Robot>
                    );
                })}
            </ul>
        </>
    );
}
