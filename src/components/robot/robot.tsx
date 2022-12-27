import { RobotType } from "../../model/robot.model";
import "./robot.scss";

export function Robot({
    item,
    handleDelete,
}: {
    item: RobotType;
    handleDelete: (id: RobotType["id"]) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    return (
        <li>
            <img src={item.image} alt={item.robotName}></img>
            <p>{item.robotName}</p>
            <button>Favourite</button>
            <button onClick={handleClick}>Delete</button>
        </li>
    );
}
