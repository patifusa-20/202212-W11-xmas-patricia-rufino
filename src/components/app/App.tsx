import React, { useEffect } from "react";
import { saveRobots } from "../../data/store.robots";
import { useRobots } from "../../hooks/use.robots";
import { MenuItems } from "../../types/menu.item";
import { Layout } from "../layout/layout";
import { AppRoutes } from "../routes/app.routes";
import "./App.scss";

function App() {
    const items: MenuItems = [
        { path: "/home", label: "Home" },
        { path: "/robots", label: "Robots" },
        { path: "/favourites", label: "Favourites" },
        { path: "/details", label: "Details" },
    ];

    const {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleFavourite,
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
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></AppRoutes>
            </Layout>
        </>
    );
}

export default App;
