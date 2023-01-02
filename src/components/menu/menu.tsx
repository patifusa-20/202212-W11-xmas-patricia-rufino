import { Link } from "react-router-dom";
import { MenuItems } from "../../types/menu.item";
import "./menu.scss";
export function Menu({ items }: { items: MenuItems }) {
    return (
        <nav className="menu">
            <ul>
                {items.map((item) =>
                    document.location.pathname === item.path ? (
                        <li key={item.label} className="active">
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ) : (
                        <li key={item.label}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
