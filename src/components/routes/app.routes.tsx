import { Route, Routes } from "react-router-dom";
import { RobotType } from "../../model/robot.model";
import { FavouritesPage } from "../../pages/favourites/favourites.page";
import { HomePage } from "../../pages/home/home.page";
import { RobotsPage } from "../../pages/robots/robots.page";
import { MenuItems } from "../../types/menu.item";

export function AppRoutes({
    items,
    robots,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    items: MenuItems;
    robots: Array<RobotType>;
    handleAdd: (robot: RobotType) => void;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <Routes>
            <Route
                path={""}
                element={<HomePage items={items} robots={robots}></HomePage>}
            ></Route>
            <Route
                path={items[0].path}
                element={<HomePage items={items} robots={robots}></HomePage>}
            ></Route>
            <Route
                path={items[1].path}
                element={
                    <RobotsPage
                        robots={robots}
                        handleAdd={handleAdd}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></RobotsPage>
                }
            ></Route>
            <Route
                path={items[2].path}
                element={
                    <FavouritesPage
                        robots={robots}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></FavouritesPage>
                }
            ></Route>
        </Routes>
    );
}
