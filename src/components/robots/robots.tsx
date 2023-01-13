import { RobotType } from "../../types/robot.type";
import { Robot } from "../robot/robot";
import "./robots.scss";

export function Robots({
    robots,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
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
                            handleDelete={handleDelete}
                            handleFavourite={handleFavourite}
                        ></Robot>
                    );
                })}
            </ul>
        </>
    );
}
