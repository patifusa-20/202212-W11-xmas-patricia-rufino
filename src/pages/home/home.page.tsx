import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RobotType } from "../../model/robot.model";
import { RobotsRepo } from "../../repository/robots.repo";
import { MenuItems } from "../../types/menu.item";

export function HomePage({ items }: { items: MenuItems }) {
    const repo = new RobotsRepo();
    const initialState: Array<RobotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = async () => {
        const data = await repo.load();
        setRobots(data);
    };

    useEffect(() => {
        handleLoad();
    }, []);
    return (
        <>
            <h2>Home</h2>
            <p>
                There are <span>{robots.length}</span> robots available
            </p>
            <Link to={items[1].path}>Explorer {items[1].label}</Link>
        </>
    );
}
