import { useEffect } from "react";
import { useRobots } from "../../hooks/use.robots";
import { Add } from "../robot.add/add";
import { Robot } from "../robot/robot";
import "./robots.scss";

export function Robots() {
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

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <ul className="robots-list">
                {robots.map((item) => {
                    return (
                        <Robot
                            key={item.id}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            handleFavourite={handleFavourite}
                        ></Robot>
                    );
                })}
            </ul>
        </>
    );
}
