import { Link } from "react-router-dom";
import { RobotType } from "../../types/robot.type";
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
        <li className="robot-item" aria-label="list-item">
            <Link to={`id=${item.id}`}>
                <p>{item.robotName}</p>
                <img src={item.image} alt={item.robotName}></img>
                <div className="robot-features">
                    <p>
                        Speed: <span>{item.speed}</span>
                    </p>
                    <p>
                        Strength: <span>{item.strength}</span>
                    </p>
                    <p>
                        Creation: <span>{item.creation}</span>
                    </p>
                    <p>
                        Creator: <span>{item.creator}</span>
                    </p>
                </div>
            </Link>
            <div className="buttons-group">
                <button className="remove-btn" onClick={handleClick}>
                    <span className="material-symbols-outlined">cancel</span>
                </button>
                <button onClick={handleUpdateClick}>
                    <span className="material-symbols-outlined">
                        edit_square
                    </span>
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
