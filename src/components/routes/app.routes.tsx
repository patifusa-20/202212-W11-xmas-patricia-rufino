import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "../../pages/details/details.page";
import { EditPage } from "../../pages/edit/edit.page";
import { FavouritesPage } from "../../pages/favourites/favourites.page";
import { HomePage } from "../../pages/home/home.page";
import { RobotsPage } from "../../pages/robots/robots.page";
import { MenuItems } from "../../types/menu.type";
import { RobotType } from "../../types/robot.type";

export function AppRoutes({
    items,
    robots,
    handleAdd,
    handleDelete,
    handleFavourite,
    handleUpdate,
}: {
    items: MenuItems;
    robots: Array<RobotType>;
    handleAdd: (robot: RobotType) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
    handleUpdate: (robot: Partial<RobotType>) => void;
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
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></FavouritesPage>
                }
            ></Route>
            <Route
                path=":page/:robotId"
                element={<DetailsPage robots={robots}></DetailsPage>}
            ></Route>
            <Route
                path=":page/edit/:robotName"
                element={
                    <EditPage
                        robots={robots}
                        handleUpdate={handleUpdate}
                    ></EditPage>
                }
            ></Route>
        </Routes>
    );
}
