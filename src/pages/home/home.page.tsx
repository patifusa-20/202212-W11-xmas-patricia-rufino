import { Link } from "react-router-dom";
import { RobotType } from "../../model/robot.model";
import { MenuItems } from "../../types/menu.item";

export function HomePage({
    items,
    robots,
}: {
    items: MenuItems;
    robots: Array<RobotType>;
}) {
    return (
        <>
            <h2>Home</h2>
            <p>{robots.length}</p>
            <p>ROBOTS</p>
            <p>available</p>
            <Link to={items[1].path}>Explorer</Link>
        </>
    );
}
