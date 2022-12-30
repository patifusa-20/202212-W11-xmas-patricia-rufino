import { RobotType } from "../../model/robot.model";
import { Robot } from "../robot/robot";
import "./robots.scss";

export function Robots({
    robots,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <>
            <ul className="robots-list">
                {robots.map((item) => {
                    return (
                        <Robot
                            key={item.id}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            handleFavourite={handleFavourite}
                        ></Robot>
                    );
                })}
            </ul>
        </>
    );
}
