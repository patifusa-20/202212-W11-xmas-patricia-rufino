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
            <div className="robot-features">
                <p>
                    Velocity: <span>{item.velocity}</span>
                </p>
                <p>
                    Resistence: <span>{item.resistence}</span>
                </p>
                <p>
                    Creation date: <span>{item.creation}</span>
                </p>
                <p>
                    Creator: <span>{item.creator}</span>
                </p>
            </div>
            <button>
                <span className="material-symbols-outlined">refresh</span>
                Edit
            </button>
            <button>
                <span className="material-symbols-outlined">heart_plus</span>
            </button>
        </li>
    );
}
