import { MenuItems } from "../../types/menu.item";
import { Menu } from "../menu/menu";

export function Header({ items }: { items: MenuItems }) {
    return (
        <header>
            <h1>ROBOTS</h1>
            <Menu items={items}></Menu>
        </header>
    );
}
