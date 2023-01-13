import { Link } from "react-router-dom";
import { RobotType } from "../../types/robot.type";
import "./robot.scss";

export function Robot({
    item,
    handleDelete,
    handleFavourite,
}: {
    item: RobotType;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleFavouriteClick = () => {
        handleFavourite(item);
    };
    return (
        <li className="robot-item" aria-label="list-item" data-id={item.id}>
            <Link to={item.id}>
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
                <Link to={`edit/${item.robotName}`}>
                    <button>
                        <span className="material-symbols-outlined">
                            edit_square
                        </span>
                    </button>
                </Link>
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
