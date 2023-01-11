import { Robots } from "../../components/robots/robots";
import { RobotType } from "../../types/robot.type";

export function FavouritesPage({
    robots,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<RobotType>;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType["id"]) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    return (
        <>
            <h2>My Favourite Robots</h2>
            <Robots
                robots={robots.filter((item) => item.isFavourite)}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleFavourite={handleFavourite}
            ></Robots>
        </>
    );
}
