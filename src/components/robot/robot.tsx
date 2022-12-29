import { RobotType } from "../../model/robot.model";
import "./robot.scss";

export function Robot({
    item,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    item: RobotType;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleUpdateClick = () => {
        handleUpdate(item);
    };
    const handleFavouriteClick = () => {
        handleFavourite(item);
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
                    Strength: <span>{item.strength}</span>
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
                    <span className="material-symbols-outlined">
                        edit_square
                    </span>
                </button>

                <button>
                    <span className="material-symbols-outlined">smart_toy</span>
                </button>

                <button onClick={handleFavouriteClick}>
                    {item.isFavourite ? (
                        <span className="material-symbols-outlined">
                            heart_minus
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">
                            heart_plus
                        </span>
                    )}
                </button>
            </div>
        </li>
    );
}
