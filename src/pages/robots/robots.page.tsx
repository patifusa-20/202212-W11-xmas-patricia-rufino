import { Add } from "../../components/robot.add/add";
import { Robots } from "../../components/robots/robots";
import { RobotType } from "../../model/robot.model";

export function RobotsPage({
    robots,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
    handleAdd: (robot: RobotType) => void;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <>
            <h2>Robots</h2>
            <Add handleAdd={handleAdd}></Add>
            <Robots
                robots={robots}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleFavourite={handleFavourite}
            ></Robots>
        </>
    );
}
