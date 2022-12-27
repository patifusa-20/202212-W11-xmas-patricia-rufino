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
        <li className="robot-item">
            <button onClick={handleClick}>
                <span className="material-symbols-outlined">cancel</span>
            </button>
            <img src={item.image} alt={item.robotName}></img>
            <p>{item.robotName}</p>
            <button>
                <span className="material-symbols-outlined">refresh</span>
                Edit
            </button>
            <button>
                <span className="material-symbols-outlined">heart_plus</span>
                Favourite
            </button>
        </li>
    );
}
