import { Route, Routes } from "react-router-dom";
import { FavouritesPage } from "../../pages/favourites/favourites.page";
import { HomePage } from "../../pages/home/home.page";
import { RobotsPage } from "../../pages/robots/robots.page";
import { MenuItems } from "../../types/menu.item";

export function AppRoutes({ items }: { items: MenuItems }) {
    return (
        <Routes>
            <Route
                path={""}
                element={<HomePage items={items}></HomePage>}
            ></Route>
            <Route
                path={items[0].path}
                element={<HomePage items={items}></HomePage>}
            ></Route>
            <Route
                path={items[1].path}
                element={<RobotsPage></RobotsPage>}
            ></Route>
            <Route
                path={items[2].path}
                element={<FavouritesPage></FavouritesPage>}
            ></Route>
        </Routes>
    );
}
