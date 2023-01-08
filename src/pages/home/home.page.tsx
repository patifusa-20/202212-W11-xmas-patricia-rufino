import { Link } from "react-router-dom";
import { RobotType } from "../../model/robot.model";
import { MenuItems } from "../../types/menu.type";
import "./home.page.scss";

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
            <section className="wrapper-home">
                <h3>{robots.length}</h3>
                <h3>ROBOTS</h3>
                <p>available</p>
                {robots.length ? (
                    <img src={robots[0].image} alt={robots[0].robotName} />
                ) : (
                    ""
                )}
                <Link to={items[1].path}>
                    Explorer{" "}
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </Link>
            </section>
        </>
    );
}
