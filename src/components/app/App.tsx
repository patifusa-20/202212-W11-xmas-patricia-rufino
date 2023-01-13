import React, { useEffect } from "react";
import { saveRobots } from "../../service/store.robots";
import { useRobots } from "../../hooks/use.robots";
import { MenuItems } from "../../types/menu.type";
import { Layout } from "../layout/layout";
import { AppRoutes } from "../routes/app.routes";
import "./App.scss";

function App() {
    const items: MenuItems = [
        { path: "/home", label: "Home" },
        { path: "/robots", label: "Robots" },
        { path: "/favourites", label: "Favourites" },
    ];

    const {
        robots,
        handleLoad,
        handleAdd,
        handleDelete,
        handleFavourite,
        handleUpdate,
    } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    useEffect(() => {
        if (robots.length) {
            saveRobots(robots);
        }
    }, [robots]);

    return (
        <>
            <Layout items={items}>
                <AppRoutes
                    items={items}
                    robots={robots}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                    handleUpdate={handleUpdate}
                ></AppRoutes>
            </Layout>
        </>
    );
}

export default App;
