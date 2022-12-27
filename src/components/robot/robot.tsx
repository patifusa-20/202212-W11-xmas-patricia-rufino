import { RobotType } from "../../model/robot.model";
import "./robot.scss";

export function Robot({
    item,
    handleUpdate,
    handleDelete,
}: {
    item: RobotType;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleUpdateClick = () => {
        handleUpdate(item);
    };
    return (
        <li className="robot-item">
            <button className="remove-btn" onClick={handleClick}>
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
            <div className="buttons-group">
                <button onClick={handleUpdateClick}>
                    <span className="material-symbols-outlined">refresh</span>
                    Edit
                </button>
                <button>
                    <span className="material-symbols-outlined">
                        heart_plus
                    </span>
                </button>
            </div>
        </li>
    );
}
