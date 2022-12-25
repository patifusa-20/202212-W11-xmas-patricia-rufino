import React from "react";
import { MenuItems } from "../../types/menu.item";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./App.css";

function App() {
    const items: MenuItems = [
        { path: "/home", label: "Home" },
        { path: "/robots", label: "Robots" },
        { path: "/favourites", label: "Favourites" },
    ];
    return (
        <div className="App">
            <Header items={items}></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;
