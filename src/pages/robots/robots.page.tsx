import { Add } from "../../components/robot.add/add";
import { Robots } from "../../components/robots/robots";
import { RobotType } from "../../types/robot.type";

export function RobotsPage({
    robots,
    handleAdd,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
    handleAdd: (robot: RobotType) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <>
            <h2>Robots</h2>
            <Add handleAdd={handleAdd}></Add>
            <Robots
                robots={robots}
                handleDelete={handleDelete}
                handleFavourite={handleFavourite}
            ></Robots>
        </>
    );
}
