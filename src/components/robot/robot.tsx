import { RobotType } from "../../model/robot.model";

export function Robot({ item }: { item: RobotType }) {
    return (
        <li>
            <img src={item.image} alt={item.robotName}></img>
            <p>{item.robotName}</p>
            <button>Favourite</button>
            <button>Delete</button>
        </li>
    );
}
